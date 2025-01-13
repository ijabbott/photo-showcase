/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    globals: true,
  },
  server: {
    proxy: {
      '/photoApi': {
        target: 'https://showcase.leantechniques.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/photoApi/, ''),
      }
    }
  }
})
