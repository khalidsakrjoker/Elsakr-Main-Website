import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../ThemeContext';
import { useContent } from '../useContent';

function ContentProbe() {
  const { content, language } = useContent();
  const { toggleLanguage } = useTheme();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <span data-testid="brand-name">{content.brand.name}</span>
      <span data-testid="brand-tagline">{content.brand.tagline}</span>
      <button type="button" onClick={toggleLanguage}>
        Toggle language
      </button>
    </div>
  );
}

describe('useContent', () => {
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

  it('returns English content by default', () => {
    render(
      <ThemeProvider>
        <ContentProbe />
      </ThemeProvider>
    );

    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('brand-name')).toHaveTextContent('Elsakr');
    expect(screen.getByTestId('brand-tagline')).toHaveTextContent('Code That Scales.');
  });

  it('switches to Arabic content when language is toggled', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ContentProbe />
      </ThemeProvider>
    );

    await user.click(screen.getByRole('button', { name: /toggle language/i }));

    expect(screen.getByTestId('language')).toHaveTextContent('ar');
    expect(screen.getByTestId('brand-name')).toHaveTextContent('الصقر');
    expect(screen.getByTestId('brand-tagline')).toHaveTextContent('كود بيشيل بيزنس');
  });
});
