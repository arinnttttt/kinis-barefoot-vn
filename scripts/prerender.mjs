/**
 * Post-build script: creates separate HTML files for each route.
 * Since this is an SPA, each route gets a copy of index.html.
 * WPConvert.ai will then see each page as a separate HTML file in the zip.
 * 
 * Usage: node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

const routes = [
  "/cau-chuyen",
  "/san-pham/lucy",
  "/san-pham/nomad",
  "/khoa-hoc",
  "/doi-tuong/gym-fitness",
  "/doi-tuong/chay-bo",
  "/doi-tuong/ban-chan-bet",
  "/faq",
];

const indexHtml = readFileSync(join(DIST, "index.html"), "utf-8");

console.log("📄 Creating HTML files for", routes.length, "sub-routes...\n");

for (const route of routes) {
  const outDir = join(DIST, route.slice(1));
  const outPath = join(outDir, "index.html");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, indexHtml, "utf-8");
  console.log(`  ✅ ${route} → dist${route}/index.html`);
}

console.log("\n🎉 Done! All routes now have their own index.html.");
console.log("   Zip the dist/ folder and upload to WPConvert.ai.");
