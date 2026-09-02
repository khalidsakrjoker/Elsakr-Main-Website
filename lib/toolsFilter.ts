import type { Tool } from './types';

export type { Tool } from './types';

export type ToolCategory = 'desktop' | 'web';

export interface ToolWithCategory extends Tool {
  category: ToolCategory;
}

export type CategoryFilter = 'all' | ToolCategory;

export interface ToolFilterOptions {
  category: CategoryFilter;
  searchQuery: string;
  selectedTag: string | null;
}

export function combineTools(desktop: Tool[], web: Tool[]): ToolWithCategory[] {
  const desktopWithCategory = desktop.map((tool) => ({ ...tool, category: 'desktop' as const }));
  const webWithCategory = web.map((tool) => ({ ...tool, category: 'web' as const }));
  return [...desktopWithCategory, ...webWithCategory];
}

export function extractTags(tools: ToolWithCategory[]): string[] {
  const tags = new Set<string>();
  tools.forEach((tool) => {
    tool.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function filterTools(tools: ToolWithCategory[], options: ToolFilterOptions): ToolWithCategory[] {
  const { category, searchQuery, selectedTag } = options;

  return tools.filter((tool) => {
    if (category !== 'all' && tool.category !== category) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchTitle = tool.title.toLowerCase().includes(query);
      const matchDesc = tool.description.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc) return false;
    }

    if (selectedTag && !tool.tags?.includes(selectedTag)) return false;

    return true;
  });
}
