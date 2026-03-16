import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  markdown: {
    shikiConfig: {
      // github-dark-high-contrast ensures all tokens (incl. comments) meet WCAG AA
      theme: 'github-dark-high-contrast',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
