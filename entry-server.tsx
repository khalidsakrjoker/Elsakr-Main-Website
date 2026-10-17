import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import { AppShell } from './App';
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
  const locale = getLocaleFromPathname(url);

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell pages={eagerPages} initialLanguage={locale} />
      </StaticRouter>
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
    locale,
  };
}
