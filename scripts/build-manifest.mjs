// Scans the repository for images and writes images.json for the gallery.
// Usage: node scripts/build-manifest.mjs   (no dependencies)
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);
const SKIP_DIRS = new Set([".git", ".github", "node_modules", "scripts", "_site"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name) && !entry.name.startsWith(".")) walk(full, out);
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      out.push({
        path: relative(ROOT, full).split("\\").join("/"),
        name: basename(entry.name),
        size: statSync(full).size,
      });
    }
  }
  return out;
}

const images = walk(ROOT).sort((a, b) =>
  a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" })
);

writeFileSync(join(ROOT, "images.json"), JSON.stringify({ count: images.length, images }));
console.log(`images.json: ${images.length} images`);
