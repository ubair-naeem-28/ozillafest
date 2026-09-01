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
  root: clientDir,
  base,
  plugins: [react()],
  build: {
    outDir: distDir,
    emptyOutDir: true
  }
})

// Single Page App (SPA) redirect handler for GitHub Pages
const spa404Html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ozilla Festival</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License - https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
`

const fallbackPath = path.join(distDir, '404.html')
const nojekyllPath = path.join(distDir, '.nojekyll')

fs.writeFileSync(fallbackPath, spa404Html)
fs.writeFileSync(nojekyllPath, '')

// Sync build output to docs/ folder so both GitHub Pages modes (Actions and /docs branch) work
try {
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true })
  }
  fs.mkdirSync(docsDir, { recursive: true })
  fs.cpSync(distDir, docsDir, { recursive: true, force: true })
  console.log('Successfully built and synced dist to docs/ with SPA 404 handler and .nojekyll')
} catch (err) {
  console.warn('Could not sync to docs/:', err.message)
}
