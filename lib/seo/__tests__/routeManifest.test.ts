import { describe, it, expect } from 'vitest';
import { content as en } from '../../../content/en/index';
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
});
