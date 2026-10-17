/**
 * Write public/sitemap.xml (and dist/sitemap.xml when dist exists) from the typed route manifest.
 *
 *   node scripts/generate-sitemap.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, withViteServer } from './lib/viteNode.mjs';

async function main() {
  const lastmod = process.env.SITEMAP_LASTMOD;
  const xml = await withViteServer(async (server) => {
    const mod = await server.ssrLoadModule('/lib/seo/sitemap.ts');
    return mod.generateSitemapXml(lastmod || mod.SITE_LASTMOD || undefined);
  });

  const publicPath = path.join(ROOT, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, xml);
  console.log(`Wrote ${publicPath}`);

  const distPath = path.join(ROOT, 'dist', 'sitemap.xml');
  if (fs.existsSync(path.join(ROOT, 'dist'))) {
    fs.writeFileSync(distPath, xml);
    console.log(`Wrote ${distPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
