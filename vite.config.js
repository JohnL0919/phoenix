import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS config is being used
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
