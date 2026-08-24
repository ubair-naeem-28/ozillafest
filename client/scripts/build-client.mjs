import { build } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : null
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || Boolean(process.env.GITHUB_REPOSITORY)
const base = process.env.VITE_BASE || (isGitHubPages ? (repoName ? `/${repoName}/` : '/ozillafest/') : '/')

await build({
  configFile: false,
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
    outDir: 'dist',
    emptyOutDir: true
  }
})
