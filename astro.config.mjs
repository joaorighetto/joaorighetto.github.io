// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import rehypeSecoes from './src/lib/rehype-secoes.mjs';

export default defineConfig({
  site: 'https://joaorighetto.github.io',
  trailingSlash: 'always',
  integrations: [mdx()],
  // Corpo dos projetos: cada "## " vira um bloco numerado do ProjectDetail.
  markdown: { processor: unified({ rehypePlugins: [rehypeSecoes] }) },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
