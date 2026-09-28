import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { HeroShowcase } from '../HeroShowcase';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, ...rest } = props;
      void initial; void animate; void transition;
      return <div {...rest}>{children}</div>;
    },
  },
}));

describe('HeroShowcase', () => {
  beforeEach(() => {
    cleanup();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });
  });

  it('exposes reduced-motion state for accessible motion polish', () => {
    render(<HeroShowcase language="en" brandName="Elsakr" />);
    const root = screen.getByTestId('hero-showcase');
    expect(root).toHaveAttribute('data-reduced-motion', 'true');
    expect(root).toHaveAttribute('aria-label', 'Brand visual showcase');
  });
});
