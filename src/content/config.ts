import { defineCollection, z } from "astro:content";

const practices = defineCollection({
  schema: z.object({
    title: z.string(),
    practiceSlug: z.string(),
    order: z.number().int().positive(),
    summary: z.string(),
    status: z.enum(["available", "planned"]),
    estimatedTime: z.string(),
    learningFocus: z.array(z.string()).min(1),
    materialsStatus: z.string(),
    sourcesStatus: z.string(),
  }),
});

export const collections = {
  practices,
};
