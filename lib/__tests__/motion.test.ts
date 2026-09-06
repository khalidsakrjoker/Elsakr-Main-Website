import { describe, it, expect, afterEach, vi } from 'vitest';
import { prefersReducedMotion, getPageEnterProps } from '../motion';

describe('motion helpers', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('returns reduced motion enter props when prefers-reduced-motion is set', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('prefers-reduced-motion'),
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }));

    expect(prefersReducedMotion()).toBe(true);
    const props = getPageEnterProps();
    expect(props.transition).toEqual({ duration: 0 });
    expect(props.initial).toEqual({ opacity: 1, y: 0 });
  });

  it('returns animated enter props by default', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }));

    expect(prefersReducedMotion()).toBe(false);
    const props = getPageEnterProps();
    expect(props.initial).toEqual({ opacity: 0, y: 12 });
    expect(props.animate).toEqual({ opacity: 1, y: 0 });
  });
});
