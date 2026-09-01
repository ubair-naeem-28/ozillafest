import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base URL for builds targeting GitHub Pages repo (/ozillafest/)
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'ozillafest'
const base = process.env.VITE_BASE || `/${repoName}/`

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,
    port: 8080,
    strictPort: true
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-utils': ['axios', 'qrcode.react']
        }
      }
    }
  }
})

