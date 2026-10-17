import { describe, it, expect } from 'vitest';
import { ROUTE_MANIFEST, getAlternatePaths, listAllPrerenderPaths } from '../seo/routeManifest';
import { generateSitemapXml } from '../seo/sitemap';
import { buildRelatedContentGraph } from '../seo/relatedContent';

describe('crawl audit foundations', () => {
  it('keeps sitemap parity with the prerender path list', () => {
    const xml = generateSitemapXml();
    const paths = listAllPrerenderPaths();
    expect(paths.length).toBe(ROUTE_MANIFEST.length * 2);
    for (const path of paths) {
      const abs =
        path === '/' ? 'https://elsakr.company/' : `https://elsakr.company${path}`;
      expect(xml).toContain(`<loc>${abs}</loc>`);
    }
  });

  it('has unique English/Arabic canonical pairs (no shared URL for both langs)', () => {
    for (const route of ROUTE_MANIFEST) {
      const { en, ar } = getAlternatePaths(route.path);
      expect(en).not.toBe(ar);
    }
  });

  it('builds a non-empty related-content graph for hub pages', () => {
    const graph = buildRelatedContentGraph();
    expect(Object.keys(graph).length).toBeGreaterThan(5);
  });
});
