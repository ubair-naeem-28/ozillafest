import { build } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDir = path.resolve(__dirname, '..')
const rootDir = path.resolve(clientDir, '..')
const distDir = path.resolve(clientDir, 'dist')
const docsDir = path.resolve(rootDir, 'docs')

const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'ozillafest'
const base = process.env.VITE_BASE || `/${repoName}/`

console.log(`Building client with base path: ${base}`)

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

// Ensure 404.html and .nojekyll exist in dist for GitHub Pages SPA routing & asset handling
const indexPath = path.join(distDir, 'index.html')
const fallbackPath = path.join(distDir, '404.html')
const nojekyllPath = path.join(distDir, '.nojekyll')

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath)
}
fs.writeFileSync(nojekyllPath, '')

// Sync build output to docs/ folder so both GitHub Pages modes (Actions and /docs branch) work
try {
  fs.mkdirSync(docsDir, { recursive: true })
  fs.cpSync(distDir, docsDir, { recursive: true, force: true })
  console.log('Successfully synced dist to docs/ with 404.html and .nojekyll')
} catch (err) {
  console.warn('Could not sync to docs/:', err.message)
}
