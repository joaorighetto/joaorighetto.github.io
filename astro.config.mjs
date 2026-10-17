// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import rehypeSecoes from './src/lib/rehype-secoes.mjs';

export default defineConfig({
  site: 'https://joaorighetto.github.io',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: { rehypePlugins: [rehypeSecoes] },
  vite: { plugins: [tailwindcss()] },
});
