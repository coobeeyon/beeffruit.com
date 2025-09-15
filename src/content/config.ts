import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160).optional(),
    pubDate: z.date(),
    hero: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { articles };

