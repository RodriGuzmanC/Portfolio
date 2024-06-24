import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://rodriguzmanc.github.io/Portfolio',
  base: '/Portfolio/',
  output: 'static'
});