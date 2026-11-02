import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Zmień na docelową domenę po jej zakupie — sitemap i canonical korzystają z tej wartości.
export const SITE_URL = 'https://teneum-wms.pl';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
