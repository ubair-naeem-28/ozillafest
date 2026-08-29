import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base URL for production builds targeting GitHub Pages repo (/ozillafest/)
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'ozillafest'
const base = process.env.VITE_BASE || (process.env.NODE_ENV === 'development' ? '/' : `/${repoName}/`)

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
  }
})
