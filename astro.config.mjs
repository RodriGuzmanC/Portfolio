import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://rodriguzmanc.github.io/Portfolio',
  base: '/Portfolio/',
  output: 'static',
  integrations: [react()],
});