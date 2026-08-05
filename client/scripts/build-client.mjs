import { build } from 'vite'
import react from '@vitejs/plugin-react'

await build({
  configFile: false,
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
