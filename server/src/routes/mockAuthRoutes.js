import { Router } from 'express'
import { signAuthToken, verifyAuthToken } from '../utils/jwt.js'

const router = Router()

const users = new Map()
const otps = new Map()

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase()
}

function normalizePhone(value) {
  return String(value || '').trim()
}

function toPublicUser(user) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role || 'user'
  }
}

function createUser(payload = {}) {
  const firstName = String(payload.firstName || 'Local').trim() || 'Local'
  const lastName = String(payload.lastName || 'User').trim() || 'User'
  const email = normalizeEmail(payload.email || 'local@ozillafestival.com')
  const phone = normalizePhone(payload.phone || '+923000000000')
  return {
    id: `mock-user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone,
    password: String(payload.password || ''),
    role: 'user'
  }
}

function getBearerToken(req) {
  const header = req.headers.authorization || ''
  return header.startsWith('Bearer ') ? header.slice(7) : ''
}

function getCurrentUser(req) {
  const token = getBearerToken(req)
  if (!token) return null
  try {
    const payload = verifyAuthToken(token)
    return users.get(payload.userId) || null
  } catch (_error) {
    return null
  }
}

router.post('/register', (req, res) => {
  const email = normalizeEmail(req.body?.email)
  const phone = normalizePhone(req.body?.phone)

  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  const existing = [...users.values()].find((user) => user.email === email || (phone && user.phone === phone))
  if (existing) {
    return res.status(409).json({ message: 'Account already exists with this email or phone number' })
  }

  const user = createUser(req.body)
  users.set(user.id, user)
  res.status(201).json({ token: signAuthToken(user.id), user: toPublicUser(user), mode: 'no-db' })
})

router.post('/login', (req, res) => {
  const email = normalizeEmail(req.body?.email)
  const password = String(req.body?.password || '')
  let user = [...users.values()].find((item) => item.email === email && item.password === password)

  if (!user && email) {
    user = createUser({ email, password, firstName: 'Local', lastName: 'User' })
    users.set(user.id, user)
  }

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  res.json({ token: signAuthToken(user.id), user: toPublicUser(user), mode: 'no-db' })
})

router.post('/logout', (_req, res) => {
  res.json({ message: 'Logged out successfully', mode: 'no-db' })
})

router.post('/resend-otp', (req, res) => {
  const email = normalizeEmail(req.body?.email)
  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  const existing = [...users.values()].find((user) => user.email === email)
  if (existing) {
    return res.status(409).json({ message: 'Account already exists with this email' })
  }

  otps.set(email, { otp: '123456', expiresAt: Date.now() + 10 * 60 * 1000 })
  res.json({
    message: 'Development OTP generated successfully.',
    otpForDevelopment: '123456',
    mode: 'no-db'
  })
})

router.post('/verify-otp', (req, res) => {
  const email = normalizeEmail(req.body?.email)
  const otp = String(req.body?.otp || '').trim()
  const record = otps.get(email)
  if (!record || record.expiresAt < Date.now() || record.otp !== otp) {
    return res.status(400).json({ message: 'OTP verification failed' })
  }

  otps.delete(email)
  res.json({ message: 'Email verified successfully', mode: 'no-db' })
})

router.get('/me', (req, res) => {
  const user = getCurrentUser(req)
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  res.json(toPublicUser(user))
})

router.put('/profile', (req, res) => {
  const user = getCurrentUser(req)
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  user.firstName = typeof req.body?.firstName === 'string' ? req.body.firstName.trim() : user.firstName
  user.lastName = typeof req.body?.lastName === 'string' ? req.body.lastName.trim() : user.lastName
  user.phone = typeof req.body?.phone === 'string' ? req.body.phone.trim() : user.phone
  user.name = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name
  users.set(user.id, user)

  res.json({ message: 'Profile updated successfully', user: toPublicUser(user), mode: 'no-db' })
})

router.post('/forgot-password', (_req, res) => {
  res.json({ message: 'Password reset instructions are available in demo mode.', mode: 'no-db' })
})

router.post('/reset-password', (_req, res) => {
  res.json({ message: 'Password reset completed in demo mode.', mode: 'no-db' })
})

router.get('/google/start', (_req, res) => {
  res.status(503).json({ message: 'Google OAuth requires database and Google credentials.', mode: 'no-db' })
})

router.get('/google/callback', (_req, res) => {
  res.redirect('/api/health')
})

router.post('/google/code-login', (_req, res) => {
  const user = createUser({ firstName: 'Google', lastName: 'User', email: `google-${Date.now()}@ozillafestival.com` })
  users.set(user.id, user)
  res.json({ token: signAuthToken(user.id), user: toPublicUser(user), mode: 'no-db' })
})

router.post('/google/token-login', (_req, res) => {
  const user = createUser({ firstName: 'Google', lastName: 'User', email: `google-${Date.now()}@ozillafestival.com` })
  users.set(user.id, user)
  res.json({ token: signAuthToken(user.id), user: toPublicUser(user), mode: 'no-db' })
})

export default router
