import { describe, it, expect } from 'vitest';
import { toMetaDescription } from '../text';

describe('toMetaDescription', () => {
  it('returns short copy unchanged with whitespace collapsed', () => {
    expect(toMetaDescription('  Hello   world.  ')).toBe('Hello world.');
  });

  it('cuts at a sentence boundary when one is available', () => {
    const text = `${'A'.repeat(100)}. ${'B'.repeat(100)}.`;
    expect(toMetaDescription(text, 160)).toBe(`${'A'.repeat(100)}.`);
  });

  it('cuts at a word boundary with an ellipsis otherwise', () => {
    const text = 'word '.repeat(60);
    const result = toMetaDescription(text, 50);
    expect(result.endsWith('…')).toBe(true);
    expect(result.length).toBeLessThanOrEqual(51);
    expect(result).not.toMatch(/\s…$/);
  });

  it('hard-cuts a single very long token', () => {
    const result = toMetaDescription('x'.repeat(300), 40);
    expect(result).toBe(`${'x'.repeat(40)}…`);
  });
});
