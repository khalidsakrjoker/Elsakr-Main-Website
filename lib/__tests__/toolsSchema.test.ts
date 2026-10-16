import { describe, it, expect } from 'vitest';
import { toolsSchema, toolsCatalogSchema } from '../../content/shared/toolsSchema';

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
});
