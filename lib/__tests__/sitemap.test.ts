import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('public/sitemap.xml', () => {
  const xml = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8');

  it('uses the September 2026 lastmod refresh date', () => {
    expect(xml).toContain('<lastmod>2026-09-08</lastmod>');
    expect(xml).not.toContain('<lastmod>2024-12-19</lastmod>');
  });

  it('includes previously missing tool detail URLs', () => {
    expect(xml).toContain('https://elsakr.company/tools/whatsapp-free-gui');
    expect(xml).toContain('https://elsakr.company/tools/qr-code-generator-web');
    expect(xml).toContain('https://elsakr.company/tools/sqlite-browser');
    expect(xml).toContain('https://elsakr.company/tools/image-compressor');
    expect(xml).not.toContain('/tools/image-compressor-desktop');
  });
});
