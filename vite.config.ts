import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project01/',
  resolve: {
    alias: {
      // src: path.resolve(__dirname, '/src'),
      app: path.resolve(__dirname, '/src/app'),
      back: path.resolve(__dirname, '/src/back'),
      features: path.resolve(__dirname, '/src/features'),
      pages: path.resolve(__dirname, '/src/pages'),
      shared: path.resolve(__dirname, '/src/shared'),
      widgets: path.resolve(__dirname, '/src/widgets'),
    },
  },
});
