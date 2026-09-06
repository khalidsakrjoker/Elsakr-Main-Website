import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { FalconField } from '../FalconField';
import { ThemeProvider } from '../../../lib/ThemeContext';

describe('FalconField', () => {
  const originalGetContext = HTMLCanvasElement.prototype.getContext;

  beforeEach(() => {
    cleanup();
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      setTransform: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 1,
    }) as unknown as typeof HTMLCanvasElement.prototype.getContext;
    window.requestAnimationFrame = vi.fn().mockReturnValue(1) as unknown as typeof requestAnimationFrame;
    window.cancelAnimationFrame = vi.fn() as unknown as typeof cancelAnimationFrame;
  });

  afterEach(() => {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
  });

  it('mounts the atmospheric canvas for the hero field', () => {
    render(
      <ThemeProvider>
        <FalconField />
      </ThemeProvider>
    );

    const canvas = document.querySelector('[data-testid="falcon-field"]');
    expect(canvas).toBeTruthy();
    expect(canvas?.tagName.toLowerCase()).toBe('canvas');
  });
});
