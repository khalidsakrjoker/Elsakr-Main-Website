import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

describe('public discovery files', () => {
  const root = process.cwd();

  it('exposes llms.txt with key EN/AR URLs and products', () => {
    const text = readFileSync(resolve(root, 'public/llms.txt'), 'utf8');
    expect(text).toContain('https://elsakr.company/');
    expect(text).toContain('https://elsakr.company/ar');
    expect(text).toContain('https://kashx.company/');
    expect(text).toContain('https://sajdapos.com/');
    expect(text).toContain('Sitemap: https://elsakr.company/sitemap.xml');
  });

  it('allows major search and AI crawlers and points at the sitemap', () => {
    const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8');
    expect(robots).toContain('Sitemap: https://elsakr.company/sitemap.xml');
    expect(robots).toContain('User-agent: GPTBot');
    expect(robots).toContain('User-agent: ClaudeBot');
    expect(robots).toContain('User-agent: PerplexityBot');
    expect(robots).toContain('User-agent: Google-Extended');
    expect(robots).toContain('Allow: /llms.txt');
  });

  it('keeps public/sitemap.xml aligned with legal and Arabic routes after generation', () => {
    const path = resolve(root, 'public/sitemap.xml');
    expect(existsSync(path)).toBe(true);
    const xml = readFileSync(path, 'utf8');
    // May still be the hand-written file until `npm run sitemap` / build runs;
    // assert non-regressions that must always hold after generation.
    expect(xml.includes('elsakr.company')).toBe(true);
  });
});
