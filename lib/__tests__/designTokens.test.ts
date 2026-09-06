import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('design tokens', () => {
  const css = readFileSync(resolve(__dirname, '../../index.css'), 'utf8');

  it('defines light and dark CSS variable maps', () => {
    expect(css).toContain(':root');
    expect(css).toContain('.dark');
    expect(css).toContain('--color-accent');
    expect(css).toContain('--color-bg');
    expect(css).toContain('--color-ink');
  });

  it('does not include animated gold shimmer utility', () => {
    expect(css).not.toContain('text-gold-24k');
    expect(css).not.toContain('goldShimmer');
  });

  it('includes theme crossfade and reduced-motion safeguards', () => {
    expect(css).toContain('theme-crossfade');
    expect(css).toContain('prefers-reduced-motion');
    expect(css).toContain('hover-lift');
  });
});
