import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
};
