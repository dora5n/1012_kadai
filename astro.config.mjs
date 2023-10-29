import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), relativeLinks()],
});
