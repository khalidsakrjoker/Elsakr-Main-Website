import path from 'node:path';

export const PRERENDER_MARKER = 'data-prerendered';

/** Tags that React Helmet re-emits per page and must not be duplicated from the static shell. */
const STATIC_HEAD_TAGS = [
  /<title>[\s\S]*?<\/title>\s*/gi,
  /<meta\s+(?:name|property)="(?:description|keywords|viewport|theme-color|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi,
  /<!--\s*(?:Open Graph \/ Facebook|Twitter)\s*-->\s*/gi,
];

/**
 * Merge one rendered route into the built `index.html` shell: drop the shell's generic
 * SEO tags, add the route's head tags + `<html>` attributes, and fill `#root`.
 */
export function injectIntoTemplate(template, { html, head, htmlAttributes }) {
  let output = template;
  for (const pattern of STATIC_HEAD_TAGS) {
    output = output.replace(pattern, '');
  }

  const attributes = [htmlAttributes, PRERENDER_MARKER].filter(Boolean).join(' ');
  output = output.replace(/<html([^>]*)>/i, (_match, existing) => `<html${existing} ${attributes}>`);
  output = output.replace(/<\/head>/i, () => `    ${head}\n  </head>`);
  output = output.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  return output;
}

/** `/` -> dist/index.html, `/ar` -> dist/ar/index.html, `/tools/x` -> dist/tools/x/index.html */
export function outputFileFor(distDir, urlPath) {
  const relative = urlPath === '/' ? '' : urlPath.replace(/^\//, '');
  return path.join(distDir, relative, 'index.html');
}
