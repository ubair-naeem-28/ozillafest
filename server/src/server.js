import { connectDb } from './config/db.js'
import { env, validateEnv } from './config/env.js'
import { app } from './app.js'

function printDivider() {
  console.log('------------------------------------------------------------')
}

function logStartupSuccess({ databaseName, collections }) {
  printDivider()
  console.log('MongoDB Connected Successfully')
  console.log(`Database: ${databaseName}`)
  console.log(`Verified collections: ${collections.join(', ')}`)
  console.log(`Express Server Started: http://localhost:${env.port}`)
  console.log('Ready to accept requests.')
  printDivider()
}

function logNoDbStartup() {
  printDivider()
  console.log('Demo mode enabled. MongoDB is not required for this local run.')
  console.log(`Server running on http://localhost:${env.port} (no-db mode)`)
  printDivider()
}

function logStartupFailure(error) {
  printDivider()
  console.error('Server startup failed')
  console.error(`Reason: ${error?.message || error}`)
  printDivider()
}

async function start() {
  try {
    const { errors, warnings } = validateEnv()

    if (warnings.length && !env.allowNoDbFallback) {
      printDivider()
      console.log('Configuration warnings:')
      warnings.forEach((warning) => console.log(`- ${warning}`))
      printDivider()
    }

    if (errors.length) {
      throw new Error(`Invalid environment configuration: ${errors.join(' ')}`)
    }

    let dbStatus = null
    try {
      dbStatus = await connectDb()
      app.locals.databaseName = dbStatus.databaseName
      app.locals.noDbMode = false
    } catch (error) {
      if (!env.allowNoDbFallback) {
        throw error
      }
      app.locals.databaseName = null
      app.locals.noDbMode = true
      logNoDbStartup()
    }

    const server = app.listen(env.port, () => {
      if (dbStatus) {
        logStartupSuccess(dbStatus)
      }
    })

    server.on('error', (error) => {
      console.error(`Server failed to listen on port ${env.port}: ${error.message}`)
      process.exit(1)
    })
  } catch (error) {
    logStartupFailure(error)
    process.exit(1)
  }
}

start()
