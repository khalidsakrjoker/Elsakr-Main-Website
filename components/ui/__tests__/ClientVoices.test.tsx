import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClientVoices } from '../ClientVoices';
import { ThemeProvider } from '../../../lib/ThemeContext';

describe('ClientVoices', () => {
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
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'en-US',
    });
  });

  it('renders a curated sample of client conversations', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <ClientVoices />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByTestId('client-voices')).toBeInTheDocument();
    expect(screen.getByText(/From client conversations/i)).toBeInTheDocument();
    expect(screen.getByText(/Sara/i)).toBeInTheDocument();
    expect(screen.getByTestId('client-voices')).toHaveAttribute('data-voice-count', '3');
  });
});

describe('testimonials content parity', () => {
  it('keeps equal EN/AR testimonial counts for ClientVoices', async () => {
    const { content: en } = await import('../../../content/en/index');
    const { content: ar } = await import('../../../content/ar/index');
    expect(en.testimonials.length).toBe(ar.testimonials.length);
    expect(en.testimonials.length).toBeGreaterThanOrEqual(3);
  });
});

