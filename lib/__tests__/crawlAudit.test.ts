import { describe, it, expect } from 'vitest';
import {
  ROUTE_MANIFEST,
  TOOL_IDS,
  getAlternatePaths,
  listAllPrerenderPaths,
} from '../seo/routeManifest';
import { generateSitemapXml } from '../seo/sitemap';
import { buildRelatedContentGraph } from '../seo/relatedContent';
import { content as enContent } from '../../content/en/index';

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

  it('includes every tool id from catalog under kind=tool in ROUTE_MANIFEST', () => {
    const catalogToolIds = [
      ...enContent.freeToolsWeb,
      ...enContent.freeToolsDesktop,
    ].map((tool) => tool.id);

    const toolRoutes = ROUTE_MANIFEST.filter((route) => route.kind === 'tool');
    const manifestToolIds = toolRoutes.map((route) => route.id);

    expect(TOOL_IDS).toEqual(catalogToolIds);
    expect(manifestToolIds).toEqual(catalogToolIds);
    expect(toolRoutes.length).toBe(catalogToolIds.length);

    for (const tool of [...enContent.freeToolsWeb, ...enContent.freeToolsDesktop]) {
      const match = toolRoutes.find((route) => route.id === tool.id);
      expect(match).toBeDefined();
      expect(match?.path).toBe(`/tools/${tool.id}`);
      expect(match?.priority).toBeGreaterThanOrEqual(0.7);
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
