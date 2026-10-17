import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import App from './App';
import { eagerPages } from './components/eagerPages';
import { getLocaleFromPathname } from './lib/seo/localePath';
import type { Locale } from './lib/seo/localePath';

export interface RenderResult {
  /** HTML for the `#root` container. */
  html: string;
  /** Serialized head tags (title, meta, link, script) produced by react-helmet-async. */
  head: string;
  /** Serialized attributes for the `<html>` element, e.g. ` lang="ar" dir="rtl"`. */
  htmlAttributes: string;
  /** Locale resolved from the URL. */
  locale: Locale;
}

interface HelmetContext {
  helmet?: HelmetServerState;
}

/** Render one URL (`/about`, `/ar/services/web`, ...) to static HTML plus head tags. */
export function render(url: string): RenderResult {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App url={url} pages={eagerPages} />
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.priority.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  return {
    html,
    head,
    htmlAttributes: helmet ? helmet.htmlAttributes.toString() : '',
    locale: getLocaleFromPathname(url),
  };
}
