// @vitest-environment node
import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ThemeProvider, useTheme } from '../ThemeContext';

function Probe() {
  const { theme, language, direction } = useTheme();
  return <p>{`${theme}|${language}|${direction}`}</p>;
}

describe('ThemeProvider without a browser (SSR)', () => {
  it('has no window or document in this environment', () => {
    expect(typeof window).toBe('undefined');
    expect(typeof document).toBe('undefined');
  });

  it('renders English / LTR / dark defaults without touching browser globals', () => {
    const html = renderToString(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );
    expect(html).toContain('dark|en|ltr');
  });

  it('renders Arabic / RTL when initialLanguage is ar', () => {
    const html = renderToString(
      <ThemeProvider initialLanguage="ar">
        <Probe />
      </ThemeProvider>
    );
    expect(html).toContain('dark|ar|rtl');
  });

  it('respects initialTheme during server rendering', () => {
    const html = renderToString(
      <ThemeProvider initialLanguage="en" initialTheme="light">
        <Probe />
      </ThemeProvider>
    );
    expect(html).toContain('light|en|ltr');
  });
});
