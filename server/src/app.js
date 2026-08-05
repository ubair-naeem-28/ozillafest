import cors from 'cors'
import express from 'express'
import path from 'path'
import { env } from './config/env.js'
import authRoutes from './routes/authRoutes.js'
import mockAuthRoutes from './routes/mockAuthRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js'
import mockTicketRoutes from './routes/mockTicketRoutes.js'
import contentRoutes from './routes/contentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import mockAdminRoutes from './routes/mockAdminRoutes.js'

export const app = express()

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true)
        return
      }

      if (env.corsOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')))

app.get('/', (_req, res) => {
  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ozilla Festival API</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.5; }
          code { background: #f4f4f5; padding: 2px 6px; border-radius: 4px; }
          a { color: #5b21b6; }
        </style>
      </head>
      <body>
        <h1>Ozilla Festival API is running</h1>
        <p>This port is for backend APIs.</p>
        <p>Open frontend at <a href="http://localhost:8080">http://localhost:8080</a>.</p>
        <p>Health check: <a href="/api/health">/api/health</a></p>
      </body>
    </html>
  `)
})

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    mode: _req.app.locals.noDbMode ? 'no-db' : 'database',
    database: _req.app.locals.databaseName || null
  })
})

app.use('/api/auth', (req, res, next) => {
  const router = req.app.locals.noDbMode ? mockAuthRoutes : authRoutes
  router(req, res, next)
})

app.use('/api/tickets', (req, res, next) => {
  const router = req.app.locals.noDbMode ? mockTicketRoutes : ticketRoutes
  router(req, res, next)
})

app.use('/api/content', contentRoutes)

app.use('/api/admin', (req, res, next) => {
  const router = req.app.locals.noDbMode ? mockAdminRoutes : adminRoutes
  router(req, res, next)
})

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' })
})
