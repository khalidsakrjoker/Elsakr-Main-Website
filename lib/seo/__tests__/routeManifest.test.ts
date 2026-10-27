import { describe, it, expect } from 'vitest';
import { content as en } from '../../../content/en/index';
import { content as ar } from '../../../content/ar/index';
import {
  ROUTE_MANIFEST,
  SITE_ORIGIN,
  findRoute,
  getAbsoluteUrl,
  getAlternatePaths,
  getArabicPath,
  getEnglishPath,
  listAllPrerenderPaths,
} from '../routeManifest';

function pathsOf(kind: string): string[] {
  return ROUTE_MANIFEST.filter((route) => route.kind === kind).map((route) => route.path);
}

describe('routeManifest', () => {
  it('exposes the production origin', () => {
    expect(SITE_ORIGIN).toBe('https://elsakr.company');
  });

  it('has unique English paths that never include the /ar prefix', () => {
    const paths = ROUTE_MANIFEST.map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const path of paths) {
      expect(path.startsWith('/')).toBe(true);
      expect(path === '/ar' || path.startsWith('/ar/')).toBe(false);
    }
  });

  it('includes all static pages and legal routes at their real paths', () => {
    const paths = ROUTE_MANIFEST.map((route) => route.path);
    for (const path of ['/', '/about', '/services', '/tools', '/contact', '/legal']) {
      expect(paths).toContain(path);
    }
    expect(pathsOf('legal')).toEqual(['/legal', '/legal/privacy', '/legal/terms']);
    expect(paths).not.toContain('/privacy');
    expect(paths).not.toContain('/terms');
  });

  it('derives service routes from content (design, not ui-ux)', () => {
    expect(pathsOf('service').sort()).toEqual(
      ['web', 'mobile', 'ai', 'security', 'cloud', 'design'].map((id) => `/services/${id}`).sort()
    );
    expect(pathsOf('service')).not.toContain('/services/ui-ux');
    expect(ROUTE_MANIFEST.find((route) => route.path === '/services/design')?.id).toBe('design');
  });

  it('covers every tool id from the content catalog', () => {
    const toolIds = [...en.freeToolsDesktop, ...en.freeToolsWeb].map((tool) => tool.id).sort();
    expect(
      pathsOf('tool')
        .map((path) => path.replace('/tools/', ''))
        .sort()
    ).toEqual(toolIds);
  });

  it('verifies every English tool id has a matching Arabic tool id and vice versa', () => {
    const enToolIds = [...en.freeToolsDesktop, ...en.freeToolsWeb].map((tool) => tool.id).sort();
    const arToolIds = [...ar.freeToolsDesktop, ...ar.freeToolsWeb].map((tool) => tool.id).sort();
    expect(enToolIds).toEqual(arToolIds);
  });


  it('includes placeholders for editorial and trust pages', () => {
    const paths = ROUTE_MANIFEST.map((route) => route.path);
    for (const path of [
      '/case-studies',
      '/case-studies/kashx',
      '/case-studies/sajda',
      '/industries',
      '/industries/retail-pos',
      '/industries/fintech',
      '/industries/enterprise',
      '/insights',
      '/insights/choosing-software-company-egypt',
      '/insights/cloud-pos-offline-continuity',
      '/insights/fintech-platform-architecture',
      '/faq',
      '/author/khalid-elsakr',
    ]) {
      expect(paths).toContain(path);
    }
    expect(pathsOf('faq')).toEqual(['/faq']);
    expect(pathsOf('author')).toEqual(['/author/khalid-elsakr']);
  });

  it('uses valid priority and changefreq values', () => {
    const allowed = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
    for (const route of ROUTE_MANIFEST) {
      expect(route.priority).toBeGreaterThanOrEqual(0);
      expect(route.priority).toBeLessThanOrEqual(1);
      expect(allowed).toContain(route.changefreq);
    }
  });
});

describe('route helpers', () => {
  const home = ROUTE_MANIFEST.find((route) => route.path === '/')!;
  const about = ROUTE_MANIFEST.find((route) => route.path === '/about')!;

  it('maps routes to English and Arabic paths', () => {
    expect(getEnglishPath(about)).toBe('/about');
    expect(getArabicPath(about)).toBe('/ar/about');
    expect(getEnglishPath(home)).toBe('/');
    expect(getArabicPath(home)).toBe('/ar');
  });

  it('returns alternates for EN and AR input', () => {
    expect(getAlternatePaths('/about')).toEqual({ en: '/about', ar: '/ar/about' });
    expect(getAlternatePaths('/ar/about')).toEqual({ en: '/about', ar: '/ar/about' });
    expect(getAlternatePaths('/ar')).toEqual({ en: '/', ar: '/ar' });
    expect(getAlternatePaths('/')).toEqual({ en: '/', ar: '/ar' });
  });

  it('lists every English and Arabic path for prerendering', () => {
    const all = listAllPrerenderPaths();
    expect(all).toHaveLength(ROUTE_MANIFEST.length * 2);
    expect(all).toContain('/');
    expect(all).toContain('/ar');
    expect(all).toContain('/about');
    expect(all).toContain('/ar/about');
    expect(all).toContain('/ar/legal/privacy');
    expect(new Set(all).size).toBe(all.length);
  });

  it('builds absolute URLs and finds routes by either locale', () => {
    expect(getAbsoluteUrl('/')).toBe('https://elsakr.company/');
    expect(getAbsoluteUrl('/ar')).toBe('https://elsakr.company/ar');
    expect(getAbsoluteUrl('/ar/about')).toBe('https://elsakr.company/ar/about');
    expect(findRoute('/ar/services/web')?.kind).toBe('service');
    expect(findRoute('/nope')).toBeUndefined();
  });

  it('findRoute resolves EN, AR, and editorial slugs to the same English entry', () => {
    expect(findRoute('/case-studies/kashx')?.id).toBe('kashx');
    expect(findRoute('/ar/case-studies/kashx')?.kind).toBe('case-study');
    expect(findRoute('/ar/insights/fintech-platform-architecture')?.kind).toBe('insight');
    expect(findRoute('/author/khalid-elsakr')?.kind).toBe('author');
    expect(findRoute('/ar/faq')?.kind).toBe('faq');
  });

  it('lists prerender paths as EN then AR per manifest order with no duplicates', () => {
    const all = listAllPrerenderPaths();
    expect(all[0]).toBe('/');
    expect(all[1]).toBe('/ar');
    // Each English path is immediately followed by its Arabic mirror.
    for (let i = 0; i < ROUTE_MANIFEST.length; i++) {
      const en = getEnglishPath(ROUTE_MANIFEST[i]);
      const ar = getArabicPath(ROUTE_MANIFEST[i]);
      expect(all[i * 2]).toBe(en);
      expect(all[i * 2 + 1]).toBe(ar);
      expect(getAlternatePaths(en)).toEqual({ en, ar });
      expect(getAlternatePaths(ar)).toEqual({ en, ar });
    }
  });

  it('ranks web tool routes above desktop tool routes', () => {
    const webIds = new Set(en.freeToolsWeb.map((tool) => tool.id));
    const toolRoutes = ROUTE_MANIFEST.filter((route) => route.kind === 'tool');
    for (const route of toolRoutes) {
      expect(route.id).toBeTruthy();
      if (webIds.has(route.id!)) {
        expect(route.priority).toBe(0.8);
      } else {
        expect(route.priority).toBe(0.7);
      }
    }
    expect(toolRoutes.some((route) => webIds.has(route.id!))).toBe(true);
    expect(toolRoutes.some((route) => !webIds.has(route.id!))).toBe(true);
  });
});

