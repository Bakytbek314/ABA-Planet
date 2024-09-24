import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    //   "@app": path.resolve(__dirname, "./src/app"),
    //   "@entities": path.resolve(__dirname, "./src/entities"),
    //   "@features": path.resolve(__dirname, "./src/features"),
    //   "@pages": path.resolve(__dirname, "./src/pages"),
    //   "@shared": path.resolve(__dirname, "./src/shared"),
    //   "@widgets": path.resolve(__dirname, "./src/widgets"),
    //   "@TextType": path.resolve(__dirname, "./src/shared/ui/textType")
    // },
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') },
      { find: '@app', replacement: path.resolve(__dirname, '/src/app/') },
      { find: '@entities', replacement: path.resolve(__dirname, '/src/entities') },
      { find: '@features', replacement: path.resolve(__dirname, '/src/features') },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@shared', replacement: path.resolve(__dirname, '/src/shared/') },
      { find: '@widgets', replacement: path.resolve(__dirname, '/src/widgets/') },
      { find: '@TextType', replacement: path.resolve(__dirname, '/src/ui/textType/') },
    ],
  }
});