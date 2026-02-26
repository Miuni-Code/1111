import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/extension.tsx'),
        formats: ['es'],
        fileName: () => 'index.js',
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          assetFileNames: 'index.[ext]',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});