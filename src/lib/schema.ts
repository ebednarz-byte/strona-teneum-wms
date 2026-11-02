// Pomocnicze obiekty JSON-LD — AI i Google czytają je jako potwierdzenie treści strony.

export function faqSchema(items: { q: string; a: string }[]) {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; url: string; updated: Date; author: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    dateModified: opts.updated.toISOString(),
    author: { '@type': 'Person', name: opts.author, worksFor: { '@type': 'Organization', name: 'Sente S.A.' } },
    publisher: { '@type': 'Organization', name: 'Sente S.A.', url: 'https://sente.pl' },
    inLanguage: 'pl-PL',
  };
}
