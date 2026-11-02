import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Każdy proces magazynowy = jeden plik .md w src/content/procesy/
const procesy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/procesy' }),
  schema: z.object({
    title: z.string(),            // tytuł strony = pytanie kupującego lub nazwa procesu
    question: z.string(),         // pytanie, na które odpowiada strona (do H1 i FAQ)
    answer: z.string(),           // odpowiedź w 1–2 zdaniach (pierwszy akapit, cytowalny przez AI)
    description: z.string(),      // meta description, do 160 znaków
    updated: z.coerce.date(),
    author: z.string().default('Zespół Sente'),
    order: z.number().default(99),
    before: z.string().optional(),   // sytuacja „przed” WMS
    after: z.string().optional(),    // sytuacja „po”
    metrics: z.array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

// Porównanie Teneum WMS z innym systemem = jeden plik .md w src/content/porownania/
const porownania = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/porownania' }),
  schema: z.object({
    title: z.string(),
    competitor: z.string(),          // nazwa konkurencyjnego systemu
    competitorVendor: z.string().optional(),
    description: z.string(),
    updated: z.coerce.date(),
    author: z.string().default('Zespół Sente'),
    verdict: z.string(),             // 2–3 zdania: kiedy Teneum, kiedy konkurent
    criteria: z.array(z.object({
      name: z.string(),
      teneum: z.string(),
      competitor: z.string(),
      edge: z.enum(['teneum', 'competitor', 'tie']).default('tie'),
    })),
    betterFor: z.object({ teneum: z.array(z.string()), competitor: z.array(z.string()) }),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { procesy, porownania };
