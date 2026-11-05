import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/**
 * Blog posts mirror the old `content/blog/*.md` files exactly, so the
 * frontmatter schema matches what `lib/content.ts` used to parse.
 */
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    publicationDate: z.string().default(new Date().toISOString()),
    categories: z.array(z.string()).default([]),
    previewImage: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.string().default(new Date().toISOString()),
    portfolioItemType: z.enum(["current", "past", "student"]).default("past"),
    images: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, portfolio };
