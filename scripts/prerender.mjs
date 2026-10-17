/**
 * Static prerender: after `vite build`, render every indexable route (English and
 * Arabic) to HTML and write it to dist/<path>/index.html.
 *
 *   node scripts/prerender.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, withViteServer } from './lib/viteNode.mjs';
import { PRERENDER_MARKER, injectIntoTemplate, outputFileFor } from './lib/injectTemplate.mjs';

const DIST = path.join(ROOT, 'dist');
const CACHE_DIR = path.join(ROOT, 'node_modules', '.cache', 'elsakr-prerender');
const CACHE_TEMPLATE = path.join(CACHE_DIR, 'template.html');

function readTemplate() {
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('dist/index.html not found. Run `vite build` before prerendering.');
  }

  const current = fs.readFileSync(indexPath, 'utf8');
  if (!current.includes(PRERENDER_MARKER)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(CACHE_TEMPLATE, current);
    return current;
  }

  // dist/index.html was already prerendered by an earlier run: reuse the pristine shell.
  if (!fs.existsSync(CACHE_TEMPLATE)) {
    throw new Error('dist/index.html is already prerendered. Re-run `vite build` first.');
  }
  return fs.readFileSync(CACHE_TEMPLATE, 'utf8');
}

async function main() {
  const template = readTemplate();

  const written = await withViteServer(async (server) => {
    const { render } = await server.ssrLoadModule('/entry-server.tsx');
    const { listAllPrerenderPaths } = await server.ssrLoadModule('/lib/seo/routeManifest.ts');
    const results = [];

    for (const urlPath of listAllPrerenderPaths()) {
      const file = outputFileFor(DIST, urlPath);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, injectIntoTemplate(template, render(urlPath)));
      results.push(path.relative(DIST, file));
    }

    // Pristine SPA shell for unknown URLs (nginx / Apache fallback).
    fs.writeFileSync(path.join(DIST, '200.html'), template);

    // Refresh sitemap + insights RSS into dist (and keep public/ in sync).
    const { generateSitemapXml, SITE_LASTMOD } = await server.ssrLoadModule('/lib/seo/sitemap.ts');
    const { generateInsightsRssXml } = await server.ssrLoadModule('/lib/seo/insightsRss.ts');
    const lastmod = process.env.SITEMAP_LASTMOD || SITE_LASTMOD;
    const sitemapXml = generateSitemapXml(lastmod);
    const rssXml = generateInsightsRssXml();
    for (const [file, body] of [
      ['sitemap.xml', sitemapXml],
      ['insights.xml', rssXml],
    ]) {
      fs.writeFileSync(path.join(DIST, file), body);
      fs.writeFileSync(path.join(ROOT, 'public', file), body);
    }

    return results;
  });

  console.log(`Prerendered ${written.length} routes to dist/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
