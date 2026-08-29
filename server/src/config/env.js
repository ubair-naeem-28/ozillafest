import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const serverEnvPath = path.resolve(__dirname, '../../.env')

dotenv.config({ path: serverEnvPath })
dotenv.config()

function toBool(value, fallback = false) {
  if (typeof value !== 'string') return fallback
  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase())
}

export const env = {
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/prism_event_and_tour',
  jwtSecret: process.env.JWT_SECRET || 'change-me',
  corsOrigins: (process.env.CORS_ORIGIN || 'http://localhost:8080,http://127.0.0.1:8080,http://localhost:5173,http://127.0.0.1:5173,https://ubair-naeem-28.github.io')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean),
  ibanAccount: process.env.IBAN_ACCOUNT || 'PK00-OZIL-1234567890',
  adminEmails: (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
  allowNoDbFallback: toBool(process.env.ALLOW_NO_DB_FALLBACK, true),
  otpExposeForDev: toBool(process.env.OTP_EXPOSE_FOR_DEV, true),
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: Number(process.env.SMTP_PORT || 587),
  smtpSecure: toBool(process.env.SMTP_SECURE, false),
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpFrom: process.env.SMTP_FROM || '',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:8080',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  googleRedirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/auth/google/callback'
}

export function validateEnv() {
  const errors = []
  const warnings = []

  if (!Number.isInteger(env.port) || env.port <= 0) {
    errors.push('PORT must be a valid positive number.')
  }

  if (!env.mongoUri) {
    errors.push('MONGODB_URI or MONGO_URI is required.')
  }

  if (!env.jwtSecret || ['change-me', 'replace_with_secure_secret', 'replace-with-secure-secret'].includes(env.jwtSecret)) {
    errors.push('JWT_SECRET must be set to a secure non-default value.')
  }

  if (!env.corsOrigins.length) {
    errors.push('CORS_ORIGIN must include at least one frontend origin.')
  }

  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    warnings.push('SMTP settings are incomplete. OTP emails may fail until SMTP_HOST, SMTP_USER, and SMTP_PASS are configured.')
  }

  if (env.smtpUser.includes('your_email') || env.smtpPass.includes('your_email_app_password')) {
    warnings.push('SMTP settings still contain placeholder values. Replace SMTP_USER and SMTP_PASS with real email credentials to send OTP emails.')
  }

  if (!env.googleClientId || !env.googleClientSecret) {
    warnings.push('Google OAuth settings are incomplete. Google sign-in requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.')
  }

  return { errors, warnings }
}
