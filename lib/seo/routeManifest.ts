import { content as enContent } from '../../content/en/index';
import { stripLocalePrefix, withLocale } from './localePath';

export const SITE_ORIGIN = 'https://elsakr.company';

/**
 * Date used for `<lastmod>` in the generated sitemap. Bump this when indexable
 * content meaningfully changes (override at build time with SITEMAP_LASTMOD).
 */
export const SITE_LASTMOD = '2026-10-17';

export type RouteKind =
  | 'static'
  | 'service'
  | 'tool'
  | 'legal'
  | 'case-study'
  | 'industry'
  | 'insight'
  | 'faq'
  | 'author';

export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SeoRoute {
  /** English path without the `/ar` prefix. */
  path: string;
  changefreq: ChangeFreq;
  priority: number;
  kind: RouteKind;
  /** Route parameter (service id, tool id, case-study slug, ...). */
  id?: string;
}

const staticRoutes: SeoRoute[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0, kind: 'static' },
  { path: '/about', changefreq: 'monthly', priority: 0.8, kind: 'static' },
  { path: '/services', changefreq: 'monthly', priority: 0.9, kind: 'static' },
  { path: '/tools', changefreq: 'weekly', priority: 0.9, kind: 'static' },
  { path: '/contact', changefreq: 'monthly', priority: 0.8, kind: 'static' },
];

const legalRoutes: SeoRoute[] = [
  { path: '/legal', changefreq: 'yearly', priority: 0.3, kind: 'legal' },
  { path: '/legal/privacy', changefreq: 'yearly', priority: 0.3, kind: 'legal' },
  { path: '/legal/terms', changefreq: 'yearly', priority: 0.3, kind: 'legal' },
];

const serviceRoutes: SeoRoute[] = enContent.services.items.map((service) => ({
  path: `/services/${service.id}`,
  changefreq: 'monthly',
  priority: 0.8,
  kind: 'service',
  id: service.id,
}));

const toolRoutes: SeoRoute[] = [...enContent.freeToolsWeb, ...enContent.freeToolsDesktop].map(
  (tool, index) => ({
    path: `/tools/${tool.id}`,
    changefreq: 'monthly',
    // Web tools (listed first) rank slightly above desktop downloads.
    priority: index < enContent.freeToolsWeb.length ? 0.8 : 0.7,
    kind: 'tool',
    id: tool.id,
  })
);

/** Slugs for the editorial/trust pages; the page components live under /pages. */
export const CASE_STUDY_IDS = ['kashx', 'sajda'] as const;
export const INDUSTRY_IDS = ['retail-pos', 'fintech', 'enterprise'] as const;
export const INSIGHT_IDS = [
  'choosing-software-company-egypt',
  'cloud-pos-offline-continuity',
  'fintech-platform-architecture',
] as const;
export const AUTHOR_IDS = ['khalid-elsakr'] as const;

const caseStudyRoutes: SeoRoute[] = [
  { path: '/case-studies', changefreq: 'monthly', priority: 0.8, kind: 'static' },
  ...CASE_STUDY_IDS.map<SeoRoute>((id) => ({
    path: `/case-studies/${id}`,
    changefreq: 'monthly',
    priority: 0.8,
    kind: 'case-study',
    id,
  })),
];

const industryRoutes: SeoRoute[] = [
  { path: '/industries', changefreq: 'monthly', priority: 0.8, kind: 'static' },
  ...INDUSTRY_IDS.map<SeoRoute>((id) => ({
    path: `/industries/${id}`,
    changefreq: 'monthly',
    priority: 0.7,
    kind: 'industry',
    id,
  })),
];

const insightRoutes: SeoRoute[] = [
  { path: '/insights', changefreq: 'weekly', priority: 0.8, kind: 'static' },
  ...INSIGHT_IDS.map<SeoRoute>((id) => ({
    path: `/insights/${id}`,
    changefreq: 'monthly',
    priority: 0.7,
    kind: 'insight',
    id,
  })),
];

const trustRoutes: SeoRoute[] = [
  { path: '/faq', changefreq: 'monthly', priority: 0.7, kind: 'faq' },
  ...AUTHOR_IDS.map<SeoRoute>((id) => ({
    path: `/author/${id}`,
    changefreq: 'monthly',
    priority: 0.6,
    kind: 'author',
    id,
  })),
];

export const ROUTE_MANIFEST: readonly SeoRoute[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...toolRoutes,
  ...caseStudyRoutes,
  ...industryRoutes,
  ...insightRoutes,
  ...trustRoutes,
  ...legalRoutes,
];

export function getEnglishPath(route: SeoRoute): string {
  return route.path;
}

export function getArabicPath(route: SeoRoute): string {
  return withLocale(route.path, 'ar');
}

/** English + Arabic variants of any pathname (EN or AR input). */
export function getAlternatePaths(pathname: string): { en: string; ar: string } {
  const en = stripLocalePrefix(pathname);
  return { en, ar: withLocale(en, 'ar') };
}

/** Every URL that should be prerendered / listed in the sitemap: EN first, then AR mirrors. */
export function listAllPrerenderPaths(): string[] {
  return ROUTE_MANIFEST.flatMap((route) => [getEnglishPath(route), getArabicPath(route)]);
}

export function getAbsoluteUrl(pathname: string): string {
  return pathname === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pathname}`;
}

export function findRoute(pathname: string): SeoRoute | undefined {
  const en = stripLocalePrefix(pathname);
  return ROUTE_MANIFEST.find((route) => route.path === en);
}
