import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../ThemeContext';

function ThemeProbe() {
  const { theme, language, direction, toggleTheme, toggleLanguage } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="language">{language}</span>
      <span data-testid="direction">{direction}</span>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <button type="button" onClick={toggleLanguage}>
        Toggle language
      </button>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.className = '';
    document.documentElement.removeAttribute('dir');
    document.documentElement.removeAttribute('lang');
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

  it('defaults to dark theme and English language when nothing is stored', () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('direction')).toHaveTextContent('ltr');
  });

  it('toggles theme between dark and light', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>
    );

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(localStorage.getItem('theme')).toBe('light');

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('toggles language between en and ar and updates direction', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>
    );

    await user.click(screen.getByRole('button', { name: /toggle language/i }));
    expect(screen.getByTestId('language')).toHaveTextContent('ar');
    expect(screen.getByTestId('direction')).toHaveTextContent('rtl');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    expect(localStorage.getItem('language')).toBe('ar');
  });
});
