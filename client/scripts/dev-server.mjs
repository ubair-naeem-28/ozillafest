import { build, preview } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const port = Number(process.env.PORT || 8080)
const rootDir = process.cwd()

const viteConfig = {
  configFile: false,
  root: rootDir,
  plugins: [react()],
  build: {
    outDir: path.resolve(rootDir, 'dist'),
    emptyOutDir: true
  },
  preview: {
    host: true,
    port,
    strictPort: true
  }
}

await build(viteConfig)
const server = await preview(viteConfig)
server.printUrls()

const shutdown = async () => {
  await server.close()
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
