import { describe, it, expect } from 'vitest';
import { combineTools, extractTags, filterTools, type Tool } from '../toolsFilter';

const mockDesktopTools: Tool[] = [
  {
    id: 'sqlite-browser',
    title: 'Elsakr SQLite Browser',
    description: 'A professional desktop tool to explore SQLite databases.',
    logo: '/assets/tools/logos/sqlite-browser.svg',
    tags: ['Python', 'SQLite', 'Database'],
    links: { github: 'https://github.com/example/sqlite' },
  },
  {
    id: 'csv-splitter',
    title: 'Elsakr CSV Splitter',
    description: 'Split large CSVs into smaller files.',
    logo: '/assets/tools/logos/csv-splitter.svg',
    tags: ['Python', 'CSV'],
    links: { github: 'https://github.com/example/csv' },
  },
];

const mockWebTools: Tool[] = [
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: 'Create custom QR codes in your browser.',
    logo: '/assets/tools/logos/qr-code-generator.svg',
    tags: ['JavaScript', 'Web'],
    links: { live: 'https://example.com/qr' },
  },
];

describe('toolsFilter', () => {
  const allTools = combineTools(mockDesktopTools, mockWebTools);

  it('combines desktop and web tools with category markers', () => {
    expect(allTools).toHaveLength(3);
    expect(allTools[0].category).toBe('desktop');
    expect(allTools[2].category).toBe('web');
  });

  it('filters tools by category', () => {
    const desktopOnly = filterTools(allTools, {
      category: 'desktop',
      searchQuery: '',
      selectedTag: null,
    });
    expect(desktopOnly).toHaveLength(2);
    expect(desktopOnly.every((t) => t.category === 'desktop')).toBe(true);
  });

  it('filters tools by search query on title and description', () => {
    const results = filterTools(allTools, {
      category: 'all',
      searchQuery: 'qr code',
      selectedTag: null,
    });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('qr-code-generator');
  });

  it('filters tools by selected tag', () => {
    const results = filterTools(allTools, {
      category: 'all',
      searchQuery: '',
      selectedTag: 'Python',
    });
    expect(results).toHaveLength(2);
    expect(results.every((t) => t.tags?.includes('Python'))).toBe(true);
  });

  it('extracts unique sorted tags from all tools', () => {
    const tags = extractTags(allTools);
    expect(tags).toEqual(['CSV', 'Database', 'JavaScript', 'Python', 'SQLite', 'Web']);
  });
});
