import {
  ROUTE_MANIFEST,
  SITE_LASTMOD,
  SITE_ORIGIN,
  getAbsoluteUrl,
  getArabicPath,
  getEnglishPath,
  type SeoRoute,
} from './routeManifest';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(locPath: string, route: SeoRoute, lastmod: string): string {
  const loc = getAbsoluteUrl(locPath);
  const en = getAbsoluteUrl(getEnglishPath(route));
  const ar = getAbsoluteUrl(getArabicPath(route));
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${escapeXml(ar)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(en)}"/>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
}

/** Full sitemap.xml for every English and Arabic indexable route. */
export function generateSitemapXml(lastmod = SITE_LASTMOD): string {
  const body = ROUTE_MANIFEST.flatMap((route) => {
    const enPath = getEnglishPath(route);
    const arPath = getArabicPath(route);
    return [urlEntry(enPath, route, lastmod), urlEntry(arPath, route, lastmod)];
  }).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

export function sitemapUrlCount(): number {
  return ROUTE_MANIFEST.length * 2;
}

export { SITE_ORIGIN };
