import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : null
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || Boolean(process.env.GITHUB_REPOSITORY)
// Use root '/' for development, and proper repo path for production (GitHub Pages)
const base = process.env.VITE_BASE || (process.env.NODE_ENV === 'development' ? '/' : (repoName ? `/${repoName}/` : '/ozillafest/'))

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
