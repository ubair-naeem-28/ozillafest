import dns from 'dns'
import mongoose from 'mongoose'
import { env } from './env.js'
import '../models/User.js'
import '../models/Ticket.js'

try {
  dns.setServers(['8.8.8.8', '1.1.1.1'])
} catch (_err) {
  // Ignore in environments where setting DNS servers is restricted
}

const REQUIRED_COLLECTIONS = [
  'users',
  'tickets',
  'events',
  'hotels',
  'otps',
  'googleusers',
  'websitecontents',
  'contacts',
  'sponsorships'
]

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getDatabaseName() {
  return mongoose.connection.name || 'unknown'
}

async function verifyCollections() {
  const db = mongoose.connection.db
  if (!db) {
    throw new Error('MongoDB connection is missing database handle.')
  }

  await mongoose.connection.syncIndexes()

  const existingCollections = await db.listCollections().toArray()
  const existingNames = new Set(existingCollections.map((collection) => collection.name))

  for (const collectionName of REQUIRED_COLLECTIONS) {
    if (!existingNames.has(collectionName)) {
      await db.createCollection(collectionName)
    }
  }

  return REQUIRED_COLLECTIONS
}

export async function connectDb() {
  const maxAttempts = env.allowNoDbFallback ? 1 : 5
  const timeoutMs = env.allowNoDbFallback ? 1500 : 6000
  let lastError

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await mongoose.connect(env.mongoUri, {
        serverSelectionTimeoutMS: timeoutMs,
        connectTimeoutMS: timeoutMs,
        socketTimeoutMS: 45000,
        autoIndex: true
      })

      const collections = await verifyCollections()
      return {
        databaseName: getDatabaseName(),
        collections
      }
    } catch (error) {
      lastError = error
      if (attempt < maxAttempts) {
        await wait(1000 * attempt)
      }
    }
  }

  throw lastError
}
