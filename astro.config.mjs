import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tplaiter.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'tplAIter',
      description: 'Reviewable template building blocks for AI-assisted development.',
      favicon: '/wave.png',
      logo: {
        src: './src/assets/wave.png',
        alt: 'tplAIter wave',
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tplAIter' }],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', slug: 'index' },
            { label: 'Getting started', slug: 'getting-started' },
          ],
        },
        {
          label: 'Learn',
          items: [
            { label: 'Template engine', slug: 'template-engine' },
            { label: 'Architecture', slug: 'architecture' },
            { label: 'Template packages', slug: 'templates' },
            { label: 'Graphs & context', slug: 'graphs' },
            { label: 'Template validation', slug: 'template-validation' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI & MCP', slug: 'cli' },
            { label: 'Development status', slug: 'status' },
          ],
        },
      ],
    }),
  ],
});
