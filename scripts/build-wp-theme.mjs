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

// ACF field → default text mapping per template
function getAcfReplacements(template) {
  const maps = {
    "front-page": [
      ["bàn chân Việt", "hero_title"],
      ["Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân", "hero_subtitle"],
      ["Tìm hiểu giày Kinis", "hero_cta1"],
      ["Thông tin khoa học", "hero_cta2"],
      ["Sản phẩm giày Kinis", "section_product_title"],
      ["Đánh thức", "section_awaken_1"],
      ["sức mạnh bản năng", "section_awaken_2"],
      ["của bàn chân", "section_awaken_3"],
    ],
    "page-cau-chuyen": [
      ["Câu chuyện của chúng tôi", "hero_title"],
      ["Từ ý tưởng đến sản phẩm — hành trình nâng niu bàn chân Việt", "hero_subtitle"],
      ["Ý tưởng ra đời", "timeline_1_title"],
      ["Xuất phát từ nỗi đau chân khi luyện tập, nhóm sáng lập quyết định tạo ra giải pháp lót giày khoa học.", "timeline_1_desc"],
      ["Nghiên cứu &amp; Phát triển", "timeline_2_title"],
      ["Hợp tác với các chuyên gia sinh cơ học để thiết kế cấu trúc lót giày tối ưu.", "timeline_2_desc"],
      ["Ra mắt Kinis Lucy", "timeline_3_title"],
      ["Sản phẩm đầu tiên được giới thiệu, nhận phản hồi tích cực từ cộng đồng thể thao.", "timeline_3_desc"],
    ],
    "page-san-pham-lucy": [],
    "page-san-pham-nomad": [],
    "page-khoa-hoc": [],
    "page-doi-tuong-gym": [],
    "page-doi-tuong-chay-bo": [],
    "page-doi-tuong-ban-chan-bet": [],
    "page-faq": [],
  };
  return maps[template] || [];
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
  mkdirSync(join(THEME_DIR, "inc"), { recursive: true });
  
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
    
    // Header scroll behavior (vanilla JS - replaces React scroll handler)
    wp_enqueue_script('kinis-header-scroll', get_template_directory_uri() . '/assets/js/header-scroll.js', array(), '1.0.0', true);
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

// ACF Notice
function kinis_acf_notice() {
    if (!function_exists('acf_add_local_field_group') && current_user_can('manage_options')) {
        echo '<div class="notice notice-warning"><p><strong>Kinis Theme:</strong> Cài plugin <a href="' . admin_url('plugin-install.php?s=Advanced+Custom+Fields&tab=search') . '">Advanced Custom Fields</a> (miễn phí) để chỉnh sửa nội dung trang trực tiếp từ WordPress admin.</p></div>';
    }
}
add_action('admin_notices', 'kinis_acf_notice');

// Load ACF field definitions
require_once get_template_directory() . '/inc/acf-fields.php';

// Helper: get ACF field with fallback
function kinis_field($field_name, $default = '', $post_id = false) {
    if (!function_exists('get_field')) return $default;
    $value = get_field($field_name, $post_id);
    return ($value !== null && $value !== '' && $value !== false) ? $value : $default;
}

// Helper: replace text in content with ACF value
function kinis_replace_content($content, $replacements) {
    foreach ($replacements as $default => $field_name) {
        $new_value = kinis_field($field_name, $default);
        if ($new_value !== $default) {
            $content = str_replace($default, esc_html($new_value), $content);
        }
    }
    return $content;
}
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

    // ACF replacement maps per page
    const acfReplacements = getAcfReplacements(page.template);
    
    let acfPhpBlock = "";
    if (acfReplacements.length > 0) {
      // Instead of heredoc (which breaks PHP tags), output HTML directly
      // and use PHP output buffering + str_replace for ACF fields
      const pairs = acfReplacements.map(([defaultText, fieldName]) => 
        `        '${defaultText.replace(/'/g, "\\'")}' => '${fieldName}',`
      ).join("\n");
      acfPhpBlock = `<?php ob_start(); ?>
${content}
<?php
$kinis_content = ob_get_clean();
$kinis_replacements = array(
${pairs}
);
echo kinis_replace_content($kinis_content, $kinis_replacements);
?>`;
    }

    let phpContent;
    
    if (page.template === "page-faq") {
      // FAQ page: dynamic ACF template with static fallback
      phpContent = `${templateComment}<?php get_header(); ?>
${inlineStyleBlock}
<?php
// Check if ACF is active and has FAQ categories data
$faq_categories = function_exists('get_field') ? get_field('faq_categories') : null;
$hero_title = function_exists('get_field') ? get_field('hero_title') : '';
$hero_subtitle = function_exists('get_field') ? get_field('hero_subtitle') : '';
if (!$hero_title) $hero_title = 'Câu hỏi thường gặp';
if (!$hero_subtitle) $hero_subtitle = 'Những thắc mắc phổ biến về giày barefoot và sản phẩm Kinis.';

if ($faq_categories && is_array($faq_categories) && count($faq_categories) > 0) :
  // Helper to create slug from Vietnamese text
  function kinis_to_slug($text) {
    $text = mb_strtolower($text, 'UTF-8');
    $text = preg_replace('/[^a-z0-9\\s-]/u', '', $text);
    $text = preg_replace('/[\\s-]+/', '-', $text);
    return trim($text, '-');
  }
?>
<!-- Dynamic FAQ from ACF -->
${(() => {
  // Extract the header/hero section and nav from the static content
  // We'll create a generic hero that uses ACF fields
  return '';
})()}
<div id="root"><div class="min-h-screen flex flex-col">
<!-- Header will be from static content -->
${(() => {
  // Extract just the header from the static content  
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
  return headerMatch ? headerMatch[0] : '';
})()}

<!-- Hero section -->
<section class="relative overflow-hidden" style="background-color: hsl(0, 0%, 7%);">
  <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32">
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight" style="color: white;">
      <?php echo esc_html($hero_title); ?>
    </h1>
    <p class="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed" style="color: rgba(255,255,255,0.7);">
      <?php echo esc_html($hero_subtitle); ?>
    </p>
  </div>
</section>

<!-- Category nav (mobile) -->
<div class="faq-mobile-nav sticky top-16 z-20 border-b" style="background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-color: hsl(0,0%,90%);">
  <div class="mx-auto max-w-6xl overflow-x-auto">
    <div class="flex min-w-max gap-2 px-3 py-3 sm:px-4">
      <?php foreach ($faq_categories as $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
        <a href="#<?php echo esc_attr($slug); ?>" class="shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors" style="border-color: hsl(0,0%,85%); color: hsl(0,0%,45%); background: white;">
          <?php echo esc_html($cat['category_name']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<!-- FAQ Content -->
<section style="background-color: hsl(0,0%,96%);" class="px-3 py-10 sm:px-6 sm:py-12 md:py-16">
  <div class="mx-auto max-w-6xl lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
    
    <!-- Desktop Sidebar -->
    <aside class="faq-desktop-sidebar">
      <div class="sticky top-28 rounded-2xl p-4" style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <p class="px-3 pb-3 text-xs font-semibold uppercase tracking-widest" style="color: hsl(0,0%,45%);">Danh mục FAQ</p>
        <div class="space-y-1">
          <?php foreach ($faq_categories as $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
            <a href="#<?php echo esc_attr($slug); ?>" class="block rounded-xl px-3 py-3 text-sm leading-6 transition-colors" style="color: hsl(0,0%,45%);">
              <?php echo esc_html($cat['category_name']); ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </aside>

    <!-- FAQ Items -->
    <div class="space-y-10 sm:space-y-12">
      <?php foreach ($faq_categories as $cat_index => $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
        <section id="<?php echo esc_attr($slug); ?>" class="scroll-mt-28">
          <div class="border-b pb-3 sm:pb-4" style="border-color: hsl(0,0%,85%);">
            <h2 class="text-balance break-words font-display text-xl font-semibold uppercase leading-tight sm:text-2xl" style="color: hsl(0,0%,10%);">
              <?php echo esc_html($cat['category_name']); ?>
            </h2>
          </div>
          <div class="mt-4 space-y-3 sm:mt-5">
            <?php if (!empty($cat['questions'])) : foreach ($cat['questions'] as $q_index => $faq) : $faq_id = $slug . '-faq-' . $q_index; ?>
              <div class="faq-item overflow-hidden rounded-2xl" style="background: white;">
                <input id="<?php echo esc_attr($faq_id); ?>" type="checkbox" class="faq-toggle-input" />
                <label for="<?php echo esc_attr($faq_id); ?>" class="faq-question">
                  <span class="faq-summary-text"><?php echo esc_html($faq['question']); ?></span>
                  <span class="faq-toggle-glyph" aria-hidden="true"></span>
                </label>
                <div class="faq-answer">
                  <?php echo wp_kses_post($faq['answer']); ?>
                </div>
              </div>
            <?php endforeach; endif; ?>
          </div>
        </section>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Footer from static -->
${(() => {
  const footerMatch = content.match(/<div[^>]*data-component="footer"[\s\S]*$/i);
  if (footerMatch) return footerMatch[0];
  // Try matching the footer section
  const footerSection = content.match(/<section[^>]*class="[^"]*py-12[^"]*"[^>]*style="[^"]*background-color:\s*hsl\(0,\s*0%,\s*7%\)[\s\S]*$/i);
  return footerSection ? footerSection[0] : '';
})()}
</div></div>

<?php else : ?>
<!-- Fallback: static pre-rendered FAQ -->
${content}
<?php endif; ?>
<?php get_footer(); ?>
`;
    } else if (acfReplacements.length > 0) {
      const pairs = acfReplacements.map(([defaultText, fieldName]) => 
        `        '${defaultText.replace(/'/g, "\\'")}' => '${fieldName}',`
      ).join("\n");
      const acfPhpBlock = `
<?php
$kinis_content = <<<'KINIS_HTML'
${content}
KINIS_HTML;

$kinis_replacements = array(
${pairs}
);
echo kinis_replace_content($kinis_content, $kinis_replacements);
?>`;
      phpContent = `${templateComment}<?php get_header(); ?>
${inlineStyleBlock}
${acfPhpBlock}
<?php get_footer(); ?>
`;
    } else {
      phpContent = `${templateComment}<?php get_header(); ?>
${inlineStyleBlock}
${content}
<?php get_footer(); ?>
`;
    }

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
