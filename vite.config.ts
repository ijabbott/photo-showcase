/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => {

  const env = loadEnv(mode, process.cwd(), '')
  const API_URL = `${env.VITE_API_PATH}`

  return {
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest-setup.ts'],
      globals: true,
    },
    server: {
      proxy: {
        '/photoApi': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/photoApi/, ''),
        }
      }
    }
  }
})
