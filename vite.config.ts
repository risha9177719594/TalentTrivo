import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { talentTrivoApiPlugin } from './server/viteApiPlugin';

export default defineConfig({
  plugins: [react(), talentTrivoApiPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
