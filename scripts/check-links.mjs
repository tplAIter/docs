import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../dist/', import.meta.url));
const htmlFiles = [];

async function collect(directory) {
  for (const entry of await readdir(directory)) {
    const path = join(directory, entry);
    if ((await stat(path)).isDirectory()) await collect(path);
    else if (path.endsWith('.html')) htmlFiles.push(path);
  }
}

function localTarget(link) {
  if (!link || link.startsWith('#') || /^(?:https?:|mailto:|tel:)/.test(link)) return null;
  const [path] = link.split('#');
  if (!path) return null;
  if (path.endsWith('/')) return `${path}index.html`;
  return extname(path) ? path : `${path}/index.html`;
}

await collect(output);
const broken = [];
for (const file of htmlFiles) {
  const source = await readFile(file, 'utf8');
  const links = source.matchAll(/(?:href|src)=["']([^"']+)["']/g);
  for (const match of links) {
    const target = localTarget(match[1]);
    if (!target) continue;
    try {
      await stat(join(output, target.replace(/^\//, '')));
    } catch {
      broken.push(`${relative(output, file)} -> ${match[1]}`);
    }
  }
}

if (broken.length) {
  console.error(`Broken local links:\n${broken.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages for local links.`);
