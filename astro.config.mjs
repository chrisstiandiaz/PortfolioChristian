import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chrisstiandiaz.github.io/PortfolioChristian/',
  output: 'static',
  outDir: 'dist',
  base: '/PortfolioChristian/', // Corregido para GitHub Pages
});
