import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('static SEO shell (index.html)', () => {
  const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');

  it('includes bilingual Arabic company title for crawlers', () => {
    expect(html).toContain('شركة الصقر للبرمجيات | Elsakr Software Engineering Studio');
    expect(html).toMatch(/<title>[^<]*شركة الصقر للبرمجيات[^<]*<\/title>/);
  });

  it('embeds target Arabic and English keywords in raw HTML', () => {
    expect(html).toContain('شركة الصقر للبرمجيات');
    expect(html).toContain('الصقر برمجيات');
    expect(html).toContain('الصقر برمجة');
    expect(html).toContain('software house egypt');
    expect(html).toContain('elsakr software studio');
  });

  it('sets bilingual Open Graph title and description', () => {
    expect(html).toContain('property="og:title"');
    expect(html).toContain('شركة الصقر للبرمجيات | Elsakr Software Engineering Studio');
    expect(html).toContain('property="og:description"');
    expect(html).toContain('og:locale" content="ar_EG"');
  });
});
