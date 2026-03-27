/**
 * Build a complete WordPress theme from the Vite build + Puppeteer pre-render.
 * 
 * Steps:
 * 1. vite build (already done before this script)
 * 2. Pre-render each route with Puppeteer
 * 3. Extract <head> styles/links and <body> content
 * 4. Generate WordPress PHP templates
 * 5. Package as installable theme ZIP
 * 
 * Usage: node scripts/build-wp-theme.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, readdirSync } from "fs";
import { join, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const THEME_DIR = join(ROOT, "wp-theme", "kinis");

// Route config: path → WP page template name + title
const routes = [
  { path: "/", template: "front-page", title: "Trang chủ" },
  { path: "/cau-chuyen", template: "page-cau-chuyen", title: "Câu chuyện" },
  { path: "/san-pham/lucy", template: "page-san-pham-lucy", title: "Kinis Lucy" },
  { path: "/san-pham/nomad", template: "page-san-pham-nomad", title: "Kinis Nomad" },
  { path: "/khoa-hoc", template: "page-khoa-hoc", title: "Khoa học" },
  { path: "/doi-tuong/gym-fitness", template: "page-doi-tuong-gym", title: "Gym & Fitness" },
  { path: "/doi-tuong/chay-bo", template: "page-doi-tuong-chay-bo", title: "Chạy bộ" },
  { path: "/doi-tuong/ban-chan-bet", template: "page-doi-tuong-ban-chan-bet", title: "Bàn chân bẹt" },
  { path: "/faq", template: "page-faq", title: "FAQ" },
];

// Simple static server
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split("?")[0];
      let filePath = join(DIST, url === "/" ? "index.html" : url);
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html", js: "application/javascript", css: "text/css",
          png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg",
          svg: "image/svg+xml", woff2: "font/woff2", woff: "font/woff", ttf: "font/ttf",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        try {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(readFileSync(join(DIST, "index.html")));
        } catch { res.writeHead(404); res.end("Not found"); }
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function build() {
  const PORT = 4174;
  const server = await startServer(PORT);
  console.log(`📡 Server on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Clean and create theme dir
  mkdirSync(join(THEME_DIR, "assets", "css"), { recursive: true });
  mkdirSync(join(THEME_DIR, "assets", "images"), { recursive: true });
  mkdirSync(join(THEME_DIR, "assets", "js"), { recursive: true });

  // Copy all assets from dist/assets/
  const assetsDir = join(DIST, "assets");
  if (existsSync(assetsDir)) {
    for (const file of readdirSync(assetsDir)) {
      const ext = extname(file).toLowerCase();
      if ([".css"].includes(ext)) {
        cpSync(join(assetsDir, file), join(THEME_DIR, "assets", "css", file));
      } else if ([".js"].includes(ext)) {
        cpSync(join(assetsDir, file), join(THEME_DIR, "assets", "js", file));
      } else {
        cpSync(join(assetsDir, file), join(THEME_DIR, "assets", "images", file));
      }
    }
  }

  // Copy favicon
  if (existsSync(join(DIST, "favicon.ico"))) {
    cpSync(join(DIST, "favicon.ico"), join(THEME_DIR, "favicon.ico"));
  }

  console.log(`\n🎨 Pre-rendering ${routes.length} routes into WP templates...\n`);

  // Collect rendered pages
  const pages = [];

  for (const route of routes) {
    const hashUrl = `http://localhost:${PORT}/#${route.path}`;
    const page = await browser.newPage();
    await page.goto(hashUrl, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    // Extract the full rendered HTML
    const html = await page.content();

    // Parse out <head> content and <body> content
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

    let headContent = headMatch ? headMatch[1] : "";
    let bodyContent = bodyMatch ? bodyMatch[1] : "";

    // Fix asset paths: /assets/ → <?php echo get_template_directory_uri(); ?>/assets/
    const wpAssetUrl = "<?php echo get_template_directory_uri(); ?>";

    // Replace asset references
    bodyContent = bodyContent
      .replace(/\/assets\//g, `${wpAssetUrl}/assets/images/`)
      .replace(/src="\/favicon\.ico"/g, `src="${wpAssetUrl}/favicon.ico"`);

    // Extract CSS links from head
    const cssLinks = [];
    const cssLinkRegex = /<link[^>]*href="(\/assets\/[^"]*\.css)"[^>]*>/gi;
    let cssMatch;
    while ((cssMatch = cssLinkRegex.exec(headContent)) !== null) {
      const cssFile = basename(cssMatch[1]);
      cssLinks.push(cssFile);
    }

    // Extract inline styles from head
    const inlineStyles = [];
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let styleMatch;
    while ((styleMatch = styleRegex.exec(headContent)) !== null) {
      inlineStyles.push(styleMatch[1]);
    }

    pages.push({
      ...route,
      bodyContent,
      cssLinks,
      inlineStyles,
    });

    console.log(`  ✅ ${route.path} → ${route.template}.php`);
    await page.close();
  }

  await browser.close();
  server.close();

  // ---- Generate WordPress theme files ----

  // 1. style.css (WP theme metadata)
  writeFileSync(join(THEME_DIR, "style.css"), `/*
Theme Name: Kinis Barefoot
Theme URI: https://kinis.com
Author: Kinis Team
Author URI: https://kinis.com
Description: Hệ sinh thái chăm sóc sức khỏe vận động - Giày barefoot Kinis
Version: 1.0.0
License: Proprietary
Text Domain: kinis
*/
`);

  // 2. functions.php
  const cssFiles = pages[0]?.cssLinks || [];
  writeFileSync(join(THEME_DIR, "functions.php"), `<?php
/**
 * Kinis Theme Functions
 */

// Enqueue styles and scripts
function kinis_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('kinis-fonts', 'https://fonts.googleapis.com/css2?family=Phudu:wght@300;400;500;600;700;800;900&family=Manrope:wght@200..800&display=swap', array(), null);
    
    // Main CSS (from Vite build)
${cssFiles.map((f, i) => `    wp_enqueue_style('kinis-main${i > 0 ? '-' + i : ''}', get_template_directory_uri() . '/assets/css/${f}', array(), '1.0.0');`).join("\n")}
    
    // Theme stylesheet
    wp_enqueue_style('kinis-theme', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'kinis_enqueue_assets');

// Theme support
function kinis_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'kinis'),
        'footer'  => __('Footer Menu', 'kinis'),
    ));
}
add_action('after_setup_theme', 'kinis_theme_setup');

// Auto-create pages on theme activation
function kinis_create_pages() {
    $pages = array(
        array('title' => 'Câu chuyện', 'slug' => 'cau-chuyen', 'template' => 'page-cau-chuyen.php'),
        array('title' => 'Kinis Lucy', 'slug' => 'san-pham-lucy', 'template' => 'page-san-pham-lucy.php'),
        array('title' => 'Kinis Nomad', 'slug' => 'san-pham-nomad', 'template' => 'page-san-pham-nomad.php'),
        array('title' => 'Khoa học', 'slug' => 'khoa-hoc', 'template' => 'page-khoa-hoc.php'),
        array('title' => 'Gym & Fitness', 'slug' => 'doi-tuong-gym', 'template' => 'page-doi-tuong-gym.php'),
        array('title' => 'Chạy bộ', 'slug' => 'doi-tuong-chay-bo', 'template' => 'page-doi-tuong-chay-bo.php'),
        array('title' => 'Bàn chân bẹt', 'slug' => 'doi-tuong-ban-chan-bet', 'template' => 'page-doi-tuong-ban-chan-bet.php'),
        array('title' => 'FAQ', 'slug' => 'faq', 'template' => 'page-faq.php'),
    );
    
    foreach ($pages as $p) {
        $existing = get_page_by_path($p['slug']);
        if (!$existing) {
            $page_id = wp_insert_post(array(
                'post_title'   => $p['title'],
                'post_name'    => $p['slug'],
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'post_content' => '',
            ));
            if ($page_id && !is_wp_error($page_id)) {
                update_post_meta($page_id, '_wp_page_template', $p['template']);
            }
        }
    }
}
add_action('after_switch_theme', 'kinis_create_pages');

// Disable admin bar on frontend
add_filter('show_admin_bar', '__return_false');
`);

  // 3. header.php (minimal - pages include their own full markup)
  writeFileSync(join(THEME_DIR, "header.php"), `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
`);

  // 4. footer.php
  writeFileSync(join(THEME_DIR, "footer.php"), `<?php wp_footer(); ?>
</body>
</html>
`);

  // 5. Generate each page template
  for (const page of pages) {
    // Remove the React root wrapper scripts and extra divs, keep visual content
    let content = page.bodyContent;

    // Remove script tags (React JS bundles)
    content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

    // Remove the lovable-badge if present
    content = content.replace(/<lovable-badge[^>]*>[\s\S]*?<\/lovable-badge>/gi, "");
    content = content.replace(/<div[^>]*id="lovable-badge"[^>]*>[\s\S]*?<\/div>/gi, "");

    // Fix all internal links: /#/path → WordPress permalinks
    content = content.replace(/href="\/#\/san-pham\/lucy"/g, 'href="<?php echo home_url(\'/san-pham-lucy/\'); ?>"');
    content = content.replace(/href="\/#\/san-pham\/nomad"/g, 'href="<?php echo home_url(\'/san-pham-nomad/\'); ?>"');
    content = content.replace(/href="\/#\/khoa-hoc"/g, 'href="<?php echo home_url(\'/khoa-hoc/\'); ?>"');
    content = content.replace(/href="\/#\/cau-chuyen"/g, 'href="<?php echo home_url(\'/cau-chuyen/\'); ?>"');
    content = content.replace(/href="\/#\/doi-tuong\/gym-fitness"/g, 'href="<?php echo home_url(\'/doi-tuong-gym/\'); ?>"');
    content = content.replace(/href="\/#\/doi-tuong\/chay-bo"/g, 'href="<?php echo home_url(\'/doi-tuong-chay-bo/\'); ?>"');
    content = content.replace(/href="\/#\/doi-tuong\/ban-chan-bet"/g, 'href="<?php echo home_url(\'/doi-tuong-ban-chan-bet/\'); ?>"');
    content = content.replace(/href="\/#\/faq"/g, 'href="<?php echo home_url(\'/faq/\'); ?>"');
    content = content.replace(/href="\/#\/"/g, 'href="<?php echo home_url(\'/\'); ?>"');
    
    // Also fix product links without hash (from Index page CTA)
    content = content.replace(/href="\/san-pham\/lucy"/g, 'href="<?php echo home_url(\'/san-pham-lucy/\'); ?>"');
    content = content.replace(/href="\/san-pham\/nomad"/g, 'href="<?php echo home_url(\'/san-pham-nomad/\'); ?>"');

    // Add inline styles if present
    let inlineStyleBlock = "";
    if (page.inlineStyles.length > 0) {
      inlineStyleBlock = `<style>\n${page.inlineStyles.join("\n")}\n</style>`;
    }

    const templateComment = page.template === "front-page"
      ? ""
      : `<?php
/*
Template Name: ${page.title}
*/
?>
`;

    const phpContent = `${templateComment}<?php get_header(); ?>
${inlineStyleBlock}
${content}
<?php get_footer(); ?>
`;

    writeFileSync(join(THEME_DIR, `${page.template}.php`), phpContent);
  }

  // 6. index.php (required by WP)
  writeFileSync(join(THEME_DIR, "index.php"), `<?php get_header(); ?>
<div style="display:flex;align-items:center;justify-content:center;min-height:60vh;font-family:'Manrope',sans-serif;">
  <div style="text-align:center;">
    <h1 style="font-family:'Phudu',sans-serif;font-size:2rem;margin-bottom:1rem;">Kinis</h1>
    <p>Hệ sinh thái chăm sóc sức khỏe vận động</p>
    <a href="<?php echo home_url('/'); ?>" style="color:#f97316;margin-top:1rem;display:inline-block;">← Về trang chủ</a>
  </div>
</div>
<?php get_footer(); ?>
`);

  // 7. 404.php
  writeFileSync(join(THEME_DIR, "404.php"), `<?php get_header(); ?>
<div style="display:flex;align-items:center;justify-content:center;min-height:80vh;font-family:'Manrope',sans-serif;">
  <div style="text-align:center;">
    <h1 style="font-family:'Phudu',sans-serif;font-size:4rem;font-weight:bold;margin-bottom:1rem;">404</h1>
    <p style="font-size:1.25rem;color:#666;margin-bottom:1rem;">Trang không tồn tại</p>
    <a href="<?php echo home_url('/'); ?>" style="color:#f97316;text-decoration:underline;">Về trang chủ</a>
  </div>
</div>
<?php get_footer(); ?>
`);

  // 8. page.php (fallback)
  writeFileSync(join(THEME_DIR, "page.php"), `<?php get_header(); ?>
<div style="max-width:800px;margin:0 auto;padding:80px 20px;font-family:'Manrope',sans-serif;">
  <h1 style="font-family:'Phudu',sans-serif;font-size:2rem;margin-bottom:1rem;"><?php the_title(); ?></h1>
  <?php while (have_posts()) : the_post(); ?>
    <?php the_content(); ?>
  <?php endwhile; ?>
</div>
<?php get_footer(); ?>
`);

  console.log("\n✅ WordPress theme generated in wp-theme/kinis/");
  console.log("📁 Theme structure:");
  console.log("   kinis/");
  console.log("   ├── style.css");
  console.log("   ├── functions.php");
  console.log("   ├── header.php");
  console.log("   ├── footer.php");
  console.log("   ├── front-page.php");
  console.log("   ├── page-*.php (8 page templates)");
  console.log("   ├── index.php");
  console.log("   ├── 404.php");
  console.log("   └── assets/ (css, images, js)");
}

build().catch((err) => {
  console.error("❌ Build failed:", err);
  process.exit(1);
});
