#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(process.cwd(), "public");
const maxBytes = 900 * 1024;
const warnBytes = 450 * 1024;
const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(filePath);
      }
      return [filePath];
    })
  );
  return files.flat();
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

const files = await walk(rootDir);
const imageFiles = files.filter((file) =>
  allowedExtensions.has(path.extname(file).toLowerCase())
);

const withSizes = await Promise.all(
  imageFiles.map(async (filePath) => {
    const stat = await fs.stat(filePath);
    return {
      filePath,
      bytes: stat.size,
      relPath: path.relative(process.cwd(), filePath),
    };
  })
);

withSizes.sort((a, b) => b.bytes - a.bytes);

const failures = withSizes.filter((entry) => entry.bytes > maxBytes);
const warnings = withSizes.filter(
  (entry) => entry.bytes > warnBytes && entry.bytes <= maxBytes
);

console.log(`Checked ${withSizes.length} image assets in public/.`);
console.log(`Budget: warn > ${formatKB(warnBytes)}, fail > ${formatKB(maxBytes)}.`);

if (warnings.length > 0) {
  console.log("\nWarning-level assets:");
  warnings.forEach((entry) => {
    console.log(`  - ${entry.relPath} (${formatKB(entry.bytes)})`);
  });
}

if (failures.length > 0) {
  console.error("\nBudget failures:");
  failures.forEach((entry) => {
    console.error(`  - ${entry.relPath} (${formatKB(entry.bytes)})`);
  });
  process.exit(1);
}

console.log("\nImage budget check passed.");
