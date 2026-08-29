import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const port = Number(process.env.PORT || 8080)
const rootDir = process.cwd()

const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'ozillafest'
const base = process.env.VITE_BASE || `/${repoName}/`

const server = await createServer({
  configFile: false,
  root: rootDir,
  base,
  plugins: [react()],
  server: {
    host: true,
    port,
    strictPort: true
  }
})

await server.listen()
server.printUrls()

const shutdown = async () => {
  await server.close()
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
