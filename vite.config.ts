import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
import env from './env.js';

const { port, name } = env;

export default defineConfig({
  base: `//localhost:${port}`,
  server: {
    port,
    cors: true,
    origin: `//localhost:${port}`,
  },
  preview: {
    port,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    qiankun(name, {
      useDevMode: true,
    }),
  ],
});
