import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Specifies the output directory for your build
    rollupOptions: {
      input: 'index.html', // Entry point for your app
    },
  },
});
