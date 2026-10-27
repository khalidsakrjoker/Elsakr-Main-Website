import { z } from 'zod';

export const toolLinksSchema = z
  .object({
    exe: z.string().url().optional(),
    source: z.string().url().optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  })
  .strict();

/** Zod schema for a free-tools catalog entry (EN/AR parallel catalogs). */
export const toolsSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    longDescription: z.string().optional(),
    features: z.array(z.string()).optional(),
    useCases: z.array(z.string()).optional(),
    howToUse: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    category: z.string().optional(),
    version: z.string().optional(),
    releaseDate: z.string().optional(),
    image: z.string().optional(),
    logo: z.string().min(1),
    links: toolLinksSchema,
    tags: z.array(z.string()).optional(),
  })
  .strict();

export const toolsCatalogSchema = z.array(toolsSchema);

export type ToolsSchemaEntry = z.infer<typeof toolsSchema>;
export type ToolLinks = z.infer<typeof toolLinksSchema>;

export interface InvariantToolProps {
  id: string;
  category?: string;
  version?: string;
  releaseDate?: string;
  image?: string;
  logo?: string;
  links: ToolLinks;
  tags?: string[];
}

export interface LocalizedToolProps {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  howToUse?: string[];
  benefits?: string[];
  keywords?: string[];
}

/**
 * Factory that merges locale-invariant metadata (id, category, version, links, tags, logo)
 * with language-specific copy, preventing key drift and duplication between EN/AR catalogs.
 */
export function buildToolEntry(
  invariant: InvariantToolProps,
  localized: LocalizedToolProps
): ToolsSchemaEntry {
  return {
    id: invariant.id,
    title: localized.title,
    description: localized.description,
    longDescription: localized.longDescription,
    features: localized.features,
    useCases: localized.useCases,
    howToUse: localized.howToUse,
    benefits: localized.benefits,
    keywords: localized.keywords,
    category: invariant.category,
    version: invariant.version,
    releaseDate: invariant.releaseDate,
    image: invariant.image,
    logo: invariant.logo ?? `/assets/tools/logos/${invariant.id}.svg`,
    links: invariant.links,
    tags: invariant.tags,
  };
}

