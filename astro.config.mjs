import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://beeffruit.com',
  output: 'hybrid', // Allow dynamic routes
  adapter: vercel({
    analytics: true,
  })
});

