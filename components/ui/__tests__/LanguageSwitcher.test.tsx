import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeProvider } from '../../../lib/ThemeContext';

function renderSwitcher() {
  return render(
    <ThemeProvider>
      <LanguageSwitcher />
    </ThemeProvider>
  );
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
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

  it('announces the next language and toggles EN ↔ AR', async () => {
    const user = userEvent.setup();
    renderSwitcher();

    const button = screen.getByRole('button', { name: 'Switch to Arabic' });
    expect(button).toHaveAttribute('lang', 'ar');
    expect(button).toHaveTextContent('AR');

    await user.click(button);

    const switched = screen.getByRole('button', { name: 'Switch to English' });
    expect(switched).toHaveAttribute('lang', 'en');
    expect(switched).toHaveTextContent('EN');
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');
    expect(document.documentElement).toHaveAttribute('lang', 'ar');
    expect(localStorage.getItem('language')).toBe('ar');
  });
});
