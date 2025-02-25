import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: 'dist', // Asegúrate de que sea "dist"
  base: '/',
});
pnpm run build
