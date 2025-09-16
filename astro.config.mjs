import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://beeffruit.com',
  output: 'server', // Server-side rendering for dynamic routes
  adapter: vercel({
    analytics: true,
  })
});

