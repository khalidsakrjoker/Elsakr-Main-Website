import { describe, it, expect } from 'vitest';
import { generateSitemapXml } from '../seo/sitemap';
import { SITE_LASTMOD } from '../seo/routeManifest';

describe('sitemap generation (route manifest)', () => {
  const xml = generateSitemapXml(SITE_LASTMOD);

  it('uses the current SITE_LASTMOD and bilingual alternates', () => {
    expect(xml).toContain(`<lastmod>${SITE_LASTMOD}</lastmod>`);
    expect(xml).not.toContain('<lastmod>2024-12-19</lastmod>');
    expect(xml).toContain('hreflang="en"');
    expect(xml).toContain('hreflang="ar"');
  });

  it('includes tool detail URLs and correct legal paths', () => {
    expect(xml).toContain('https://elsakr.company/tools/whatsapp-free-gui');
    expect(xml).toContain('https://elsakr.company/tools/qr-code-generator-web');
    expect(xml).toContain('https://elsakr.company/tools/sqlite-browser');
    expect(xml).toContain('https://elsakr.company/tools/image-compressor');
    expect(xml).not.toContain('/tools/image-compressor-desktop');
    expect(xml).toContain('https://elsakr.company/legal/privacy');
    expect(xml).toContain('https://elsakr.company/legal/terms');
  });
});

