import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/extension.tsx'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['@google/genai'],
      output: { assetFileNames: 'index.[ext]' },
    },
  },
});
