import { describe, it, expect } from 'vitest';
import { buildToolsSoftwareApplicationList } from '../toolsJsonLd';
import type { Tool } from '../types';

const sampleTools: Tool[] = [
  {
    id: 'seo-toolkit',
    title: 'Elsakr SEO Toolkit',
    description: 'SEO helpers in the browser.',
    category: 'web',
    logo: '/assets/tools/logos/seo-toolkit.svg',
    links: { live: 'https://example.com' },
  },
  {
    id: 'sqlite-browser',
    title: 'Elsakr SQLite Browser',
    description: 'Browse SQLite databases.',
    category: 'desktop',
    logo: '/assets/tools/logos/sqlite-browser.svg',
    links: { exe: 'https://example.com/app.exe' },
  },
];

describe('buildToolsSoftwareApplicationList', () => {
  it('emits ItemList of SoftwareApplication entries for tools', () => {
    const schema = buildToolsSoftwareApplicationList(sampleTools);

    expect(schema['@type']).toBe('ItemList');
    expect(schema.numberOfItems).toBe(2);
    expect(schema.itemListElement).toHaveLength(2);

    const first = schema.itemListElement[0].item;
    expect(first['@type']).toBe('SoftwareApplication');
    expect(first.name).toBe('Elsakr SEO Toolkit');
    expect(first.url).toBe('https://elsakr.company/tools/seo-toolkit');
    expect(first.applicationCategory).toBe('BrowserApplication');
    expect(first.offers.price).toBe('0');

    const second = schema.itemListElement[1].item;
    expect(second.applicationCategory).toBe('DesktopApplication');
    expect(second.operatingSystem).toBe('Windows');
  });
});
