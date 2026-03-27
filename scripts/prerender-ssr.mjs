/**
 * True SSR pre-rendering: launches a browser, visits each route,
 * captures the fully-rendered HTML, and saves it as a static file.
 * This ensures WPConvert sees real content on every page.
 *
 * Usage: node scripts/prerender-ssr.mjs
 * Requires: npm run build first (dist/ must exist)
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// All routes to pre-render (hash-based)
const routes = [
  "/",
  "/cau-chuyen",
  "/san-pham/lucy",
  "/san-pham/nomad",
  "/khoa-hoc",
  "/doi-tuong/gym-fitness",
  "/doi-tuong/chay-bo",
  "/doi-tuong/ban-chan-bet",
  "/faq",
];

// Simple static file server for dist/
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          png: "image/png",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          svg: "image/svg+xml",
          woff2: "font/woff2",
          woff: "font/woff",
          ttf: "font/ttf",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        // Fallback to index.html for SPA
        try {
          const indexContent = readFileSync(join(DIST, "index.html"));
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(indexContent);
        } catch {
          res.writeHead(404);
          res.end("Not found");
        }
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const PORT = 4173;
  const server = await startServer(PORT);
  console.log(`📡 Static server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  console.log(`🌐 Pre-rendering ${routes.length} routes...\n`);

  for (const route of routes) {
    const hashUrl = `http://localhost:${PORT}/#${route}`;
    const page = await browser.newPage();

    await page.goto(hashUrl, { waitUntil: "networkidle0", timeout: 30000 });
    // Wait a bit for animations/lazy content
    await page.waitForTimeout(1500);

    // Get the fully rendered HTML
    const html = await page.content();

    // Determine output path
    const routePath = route === "/" ? "" : route.slice(1);
    const outDir = routePath ? join(DIST, routePath) : DIST;
    const outFile = join(outDir, "index.html");

    mkdirSync(outDir, { recursive: true });
    writeFileSync(outFile, html, "utf-8");

    console.log(`  ✅ ${route} → dist/${routePath ? routePath + "/" : ""}index.html`);
    await page.close();
  }

  await browser.close();
  server.close();

  console.log("\n🎉 Pre-rendering complete! All pages now contain real HTML content.");
  console.log("   Zip the dist/ folder and upload to WPConvert.ai.");
}

prerender().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
