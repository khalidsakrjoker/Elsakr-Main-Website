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
