import { describe, it, expect } from 'vitest';
import { injectIntoTemplate, PRERENDER_MARKER, outputFileFor } from '../../scripts/lib/injectTemplate.mjs';

describe('injectIntoTemplate', () => {
  const shell = `<!doctype html>
<html lang="en">
  <head>
    <title>Shell</title>
    <meta name="description" content="shell" />
    <meta property="og:title" content="shell" />
  </head>
  <body><div id="root"></div></body>
</html>`;

  it('injects head tags, html attributes, and body HTML', () => {
    const out = injectIntoTemplate(shell, {
      html: '<h1>About</h1>',
      head: '<title>About | Elsakr</title>\n    <link rel="canonical" href="https://elsakr.company/about" />',
      htmlAttributes: 'lang="en" dir="ltr"',
    });
    expect(out).toContain('About | Elsakr');
    expect(out).toContain('rel="canonical"');
    expect(out).toContain('<h1>About</h1>');
    expect(out).toContain(PRERENDER_MARKER);
    expect(out).toContain('lang="en"');
    expect(out).not.toContain('content="shell"');
  });

  it('maps URL paths to dist index files', () => {
    expect(outputFileFor('/tmp/dist', '/')).toMatch(/index\.html$/);
    expect(outputFileFor('/tmp/dist', '/ar')).toMatch(/ar[/\\]index\.html$/);
    expect(outputFileFor('/tmp/dist', '/tools/x')).toMatch(/tools[/\\]x[/\\]index\.html$/);
  });
});
