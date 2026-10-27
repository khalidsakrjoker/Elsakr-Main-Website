import { describe, it, expect } from 'vitest';
import {
  toolsSchema,
  toolsCatalogSchema,
  buildToolEntry,
} from '../../content/shared/toolsSchema';

const sample = {
  id: 'sample-tool',
  title: 'Sample Tool',
  description: 'A sample free tool.',
  logo: '/assets/tools/logos/sample-tool.svg',
  links: {
    github: 'https://github.com/khalidsakrjoker/sample',
  },
};

describe('toolsSchema', () => {
  it('accepts a minimal valid tool entry', () => {
    expect(toolsSchema.parse(sample).id).toBe('sample-tool');
  });

  it('rejects entries missing required fields', () => {
    expect(() => toolsSchema.parse({ ...sample, id: '' })).toThrow();
    expect(() => toolsSchema.parse({ ...sample, logo: undefined })).toThrow();
  });

  it('parses a catalog array', () => {
    expect(toolsCatalogSchema.parse([sample])).toHaveLength(1);
  });

  it('buildToolEntry merges invariant metadata with localized copy', () => {
    const invariant = {
      id: 'tool-x',
      category: 'productivity',
      version: '1.2.0',
      links: { github: 'https://github.com/khalidsakrjoker/tool-x' },
      tags: ['TypeScript'],
    };
    const localizedEn = {
      title: 'Tool X',
      description: 'English description',
    };
    const localizedAr = {
      title: 'أداة س',
      description: 'وصف عربي',
    };

    const enEntry = buildToolEntry(invariant, localizedEn);
    const arEntry = buildToolEntry(invariant, localizedAr);

    expect(toolsSchema.parse(enEntry)).toEqual(
      expect.objectContaining({
        id: 'tool-x',
        title: 'Tool X',
        logo: '/assets/tools/logos/tool-x.svg',
        version: '1.2.0',
      })
    );
    expect(toolsSchema.parse(arEntry)).toEqual(
      expect.objectContaining({
        id: 'tool-x',
        title: 'أداة س',
        logo: '/assets/tools/logos/tool-x.svg',
        version: '1.2.0',
      })
    );
    expect(enEntry.id).toBe(arEntry.id);
    expect(enEntry.logo).toBe(arEntry.logo);
    expect(enEntry.links).toEqual(arEntry.links);
  });
});

