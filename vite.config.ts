import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import viteStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@entities', replacement: path.resolve(__dirname, 'src/entities') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
      { find: '@TextType', replacement: path.resolve(__dirname, 'src/shared/ui/textType') },
    ],
  }
});