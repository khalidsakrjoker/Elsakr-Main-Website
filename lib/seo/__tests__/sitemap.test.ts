import { describe, it, expect } from 'vitest';
import { generateSitemapXml, sitemapUrlCount, escapeXml } from '../sitemap';
import { ROUTE_MANIFEST, SITE_LASTMOD } from '../routeManifest';

describe('generateSitemapXml', () => {
  const xml = generateSitemapXml(SITE_LASTMOD);

  it('lists every English and Arabic route with matching alternates', () => {
    expect(sitemapUrlCount()).toBe(ROUTE_MANIFEST.length * 2);
    expect(xml).toContain(`<lastmod>${SITE_LASTMOD}</lastmod>`);
    expect(xml).toContain('https://elsakr.company/');
    expect(xml).toContain('https://elsakr.company/ar');
    expect(xml).toContain('hreflang="en"');
    expect(xml).toContain('hreflang="ar"');
    expect(xml).toContain('hreflang="x-default"');
  });

  it('uses legal paths under /legal and includes editorial hubs', () => {
    expect(xml).toContain('https://elsakr.company/legal/privacy');
    expect(xml).toContain('https://elsakr.company/legal/terms');
    expect(xml).toContain('https://elsakr.company/ar/legal/privacy');
    expect(xml).not.toContain('https://elsakr.company/privacy</loc>');
    expect(xml).not.toContain('https://elsakr.company/terms</loc>');
    expect(xml).toContain('/case-studies/kashx');
    expect(xml).toContain('/industries/fintech');
    expect(xml).toContain('/insights/choosing-software-company-egypt');
    expect(xml).toContain('/faq');
    expect(xml).toContain('/author/khalid-elsakr');
  });

  it('escapes special XML characters in titles, queries, and paths', () => {
    expect(escapeXml('foo&bar')).toBe('foo&amp;bar');
    expect(escapeXml('<script>alert("x")</script>')).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;'
    );
    expect(escapeXml("it's a test & 'demo'")).toBe('it&apos;s a test &amp; &apos;demo&apos;');
  });

  it('generates safe XML with exact url count equal to manifest * 2', () => {
    const urlMatches = xml.match(/<url>/g);
    expect(urlMatches).toBeTruthy();
    expect(urlMatches?.length).toBe(ROUTE_MANIFEST.length * 2);
    expect(sitemapUrlCount()).toBe(ROUTE_MANIFEST.length * 2);

    expect(xml).not.toMatch(/href="[^"]*&(?!(amp|lt|gt|quot|apos);)[^"]*"/);
    expect(xml).not.toMatch(/<loc>[^<]*&(?!(amp|lt|gt|quot|apos);)[^<]*<\/loc>/);
  });
});

