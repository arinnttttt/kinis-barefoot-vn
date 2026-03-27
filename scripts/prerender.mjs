/**
 * Post-build pre-rendering script.
 * Uses Playwright to render each route to static HTML for WPConvert compatibility.
 * Usage: node scripts/prerender.mjs
 */

import { chromium } from "@playwright/test";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

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

// Simple static file server for the dist folder
function serve(port) {
  return new Promise((resolve) => {
    const mimeTypes = {
      ".html": "text/html",
      ".js": "application/javascript",
      ".css": "text/css",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".svg": "image/svg+xml",
      ".json": "application/json",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
    };

    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      try {
        const data = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        // SPA fallback — serve index.html for all routes
        const indexHtml = readFileSync(join(DIST, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(indexHtml);
      }
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  console.log("🔨 Building static HTML for", routes.length, "routes...\n");

  const PORT = 4173;
  const server = await serve(PORT);
  const browser = await chromium.launch({ args: ["--no-sandbox"] });

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`  Rendering: ${route}`);

    await page.goto(url, { waitUntil: "networkidle" });
    // Wait a bit for animations/lazy content
    await page.waitForTimeout(1500);

    const html = await page.content();

    // Determine output path
    const outPath =
      route === "/"
        ? join(DIST, "index.html")
        : join(DIST, route.slice(1), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`  ✅ Saved: ${outPath.replace(DIST, "dist")}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("\n🎉 Pre-rendering complete! All routes saved as static HTML.");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
