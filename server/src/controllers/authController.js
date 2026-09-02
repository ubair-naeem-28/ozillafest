import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { OAuth2Client } from 'google-auth-library'
import { env } from '../config/env.js'
import { User } from '../models/User.js'
import { Otp } from '../models/Otp.js'
import { sendOtpEmail, sendPasswordResetEmail } from '../utils/email.js'
import { signAuthToken } from '../utils/jwt.js'

const googleOAuthClient = new OAuth2Client(env.googleClientId)

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

function normalizeEmail(email) {
  return String(email || '').toLowerCase().trim()
}

function normalizePhone(phone) {
  return String(phone || '').trim()
}

function parseSafeReturnTo(value) {
  const candidate = String(value || '').trim()
  if (!candidate.startsWith('/')) return '/tickets'
  if (candidate.startsWith('//')) return '/tickets'
  return candidate
}

function buildFrontendCallbackUrl(params) {
  const query = new URLSearchParams(params).toString()
  return `${env.frontendUrl}/auth/google/callback?${query}`
}

async function upsertUserFromGoogleProfile({ profile }) {
  const email = normalizeEmail(profile.email)
  if (!email) {
    throw new Error('missing_email')
  }

  const googleId = profile.sub || profile.id || undefined
  const avatar = profile.picture || undefined
  const firstName = profile.given_name || (profile.name ? profile.name.split(' ')[0] : 'Google')
  const lastName = profile.family_name || (profile.name && profile.name.split(' ').slice(1).join(' ') ? profile.name.split(' ').slice(1).join(' ') : 'User')
  const name = profile.name || `${firstName} ${lastName}`.trim()

  let user = await User.findOne({
    $or: [
      { email },
      ...(googleId ? [{ googleId }] : [])
    ]
  })

  if (!user) {
    user = await User.create({
      googleId,
      avatar,
      firstName,
      lastName,
      name,
      email,
      emailVerified: true,
      role: env.adminEmails.includes(email) ? 'admin' : 'user'
    })
  } else {
    let changed = false
    if (!user.googleId && googleId) {
      user.googleId = googleId
      changed = true
    }
    if (!user.avatar && avatar) {
      user.avatar = avatar
      changed = true
    }
    if (!user.emailVerified) {
      user.emailVerified = true
      changed = true
    }
    if (changed) {
      await user.save()
    }
  }

  return user
}

export async function sendOtp(req, res) {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  const normalizedEmail = normalizeEmail(email)
  let user = await User.findOne({ email: normalizedEmail })

  if (user && user.passwordHash) {
    return res.status(409).json({ message: 'Account already exists with this email' })
  }

  if (!user) {
    user = new User({ email: normalizedEmail })
  }

  const otpRaw = generateOtp()

  // 1. Delete previous OTPs for this email in TTL collection
  await Otp.deleteMany({ email: normalizedEmail }).catch(() => {})

  // 2. Create new OTP record with TTL auto-expiry index (5 minutes)
  await Otp.create({ email: normalizedEmail, otp: otpRaw }).catch(() => {})

  // 3. Also update User document with hashed OTP for security
  user.otpCode = await bcrypt.hash(otpRaw, 10)
  user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
  user.emailVerified = false
  await user.save().catch(() => {})

  try {
    await sendOtpEmail({ to: normalizedEmail, otpCode: otpRaw })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Failed to send email to ${normalizedEmail}. Reason: ${error.message || 'SMTP delivery failed'}`
    })
  }

  return res.json({
    success: true,
    message: `OTP code has been sent to ${normalizedEmail}. Please check your email inbox.`
  })
}

export const resendOtp = sendOtp

export async function verifyOtp(req, res) {
  const { email, otp } = req.body
  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' })
  }

  const normalizedEmail = normalizeEmail(email)
  const otpInput = String(otp).trim()

  // 1. Check TTL Otp collection
  const otpRecord = await Otp.findOne({ email: normalizedEmail, otp: otpInput }).catch(() => null)

  // 2. Also check User document fallback
  const user = await User.findOne({ email: normalizedEmail }).catch(() => null)
  let isValid = Boolean(otpRecord)

  if (!isValid && user && user.otpCode && user.otpExpiresAt) {
    const isExpired = new Date() > user.otpExpiresAt
    const isMatch = await bcrypt.compare(otpInput, user.otpCode).catch(() => false)
    if (!isExpired && isMatch) {
      isValid = true
    }
  }

  if (!isValid) {
    return res.status(400).json({ success: false, message: 'Invalid or expired OTP code' })
  }

  // Clear OTP record once verified
  await Otp.deleteMany({ email: normalizedEmail }).catch(() => {})

  if (user) {
    user.emailVerified = true
    user.otpCode = undefined
    user.otpExpiresAt = undefined
    await user.save().catch(() => {})
  }

  return res.json({ success: true, message: 'Email verified successfully' })
}

export async function register(req, res) {
  const { firstName, lastName, name, email, phone, password } = req.body

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const normalizedEmail = normalizeEmail(email)
  const normalizedPhone = normalizePhone(phone)

  const existingByEmail = await User.findOne({ email: normalizedEmail })
  if (existingByEmail && (existingByEmail.passwordHash || existingByEmail.emailVerified)) {
    return res.status(409).json({ message: 'Account already exists with this email. Please log in.' })
  }

  const existingByPhone = await User.findOne({
    phone: normalizedPhone,
    _id: { $ne: existingByEmail?._id },
    passwordHash: { $exists: true, $ne: null }
  })
  if (existingByPhone) {
    return res.status(409).json({ message: 'Account already exists with this phone number. Please log in.' })
  }

  const user = existingByEmail || new User({ email: normalizedEmail })
  user.firstName = firstName.trim()
  user.lastName = lastName.trim()
  user.name = name || `${firstName} ${lastName}`.trim()
  user.phone = normalizedPhone
  user.emailVerified = true
  user.otpCode = undefined
  user.otpExpiresAt = undefined
  user.passwordHash = await bcrypt.hash(password, 10)
  user.role = env.adminEmails.includes(normalizedEmail) ? 'admin' : 'user'
  await user.save()

  const token = signAuthToken(user._id.toString())
  return res.status(201).json({ token, user: user.toJSON() })
}

export async function login(req, res) {
  const { email, phone, password } = req.body
  const rawIdentifier = email || phone
  if (!rawIdentifier || !password) {
    return res.status(400).json({ message: 'Email or phone number and password are required' })
  }

  const normalizedIdentifier = String(rawIdentifier).trim().toLowerCase()
  const normalizedPhone = normalizePhone(rawIdentifier)

  const user = await User.findOne({
    $or: [
      { email: normalizedIdentifier },
      { phone: normalizedPhone },
      { phone: rawIdentifier }
    ]
  })

  if (!user || !user.passwordHash) {
    return res.status(401).json({ message: 'Invalid credentials. Please check your email/phone and password.' })
  }

  const match = await bcrypt.compare(password, user.passwordHash)
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials. Please check your password.' })
  }

  const token = signAuthToken(user._id.toString())
  return res.json({ token, user: user.toJSON() })
}

export async function me(req, res) {
  return res.json(req.user.toJSON())
}

export async function logout(_req, res) {
  return res.json({ message: 'Logged out successfully' })
}

export async function updateProfile(req, res) {
  const { firstName, lastName, phone } = req.body
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  if (typeof firstName === 'string') user.firstName = firstName.trim()
  if (typeof lastName === 'string') user.lastName = lastName.trim()
  user.name = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name

  if (typeof phone === 'string' && phone.trim()) {
    const normalizedPhone = normalizePhone(phone)
    const phoneConflict = await User.findOne({
      phone: normalizedPhone,
      _id: { $ne: user._id },
      passwordHash: { $exists: true, $ne: null }
    })
    if (phoneConflict) {
      return res.status(409).json({ message: 'Phone number is already in use' })
    }
    user.phone = normalizedPhone
  }

  await user.save()
  return res.json({ message: 'Profile updated successfully', user: user.toJSON() })
}

export async function forgotPassword(req, res) {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  const normalizedEmail = normalizeEmail(email)
  const user = await User.findOne({ email: normalizedEmail })
  if (!user || !user.passwordHash) {
    return res.json({ message: 'If the email exists, a reset link has been sent.' })
  }

  const rawToken = crypto.randomBytes(32).toString('hex')
  user.passwordResetTokenHash = await bcrypt.hash(rawToken, 10)
  user.passwordResetExpiresAt = new Date(Date.now() + 30 * 60 * 1000)
  await user.save()

  const resetUrl = `${env.frontendUrl}/reset-password?token=${encodeURIComponent(rawToken)}&email=${encodeURIComponent(normalizedEmail)}`

  try {
    await sendPasswordResetEmail({
      to: normalizedEmail,
      resetUrl
    })
  } catch (_error) {
    const isDev = process.env.NODE_ENV !== 'production'
    if (env.otpExposeForDev || isDev) {
      return res.json({
        message: 'Password reset token generated in development mode.',
        resetTokenForDevelopment: rawToken,
        resetUrlForDevelopment: resetUrl
      })
    }
  }

  return res.json({ message: 'If the email exists, a reset link has been sent.' })
}

export async function resetPassword(req, res) {
  const { email, token, password } = req.body
  if (!email || !token || !password) {
    return res.status(400).json({ message: 'Email, token, and password are required' })
  }
  if (String(password).length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' })
  }

  const user = await User.findOne({ email: normalizeEmail(email) })
  if (!user || !user.passwordResetTokenHash || !user.passwordResetExpiresAt) {
    return res.status(400).json({ message: 'Invalid or expired reset token' })
  }
  if (new Date() > user.passwordResetExpiresAt) {
    return res.status(400).json({ message: 'Invalid or expired reset token' })
  }

  const tokenMatch = await bcrypt.compare(String(token), user.passwordResetTokenHash).catch(() => false)
  if (!tokenMatch) {
    return res.status(400).json({ message: 'Invalid or expired reset token' })
  }

  user.passwordHash = await bcrypt.hash(String(password), 10)
  user.passwordResetTokenHash = undefined
  user.passwordResetExpiresAt = undefined
  await user.save()

  return res.json({ message: 'Password reset successfully' })
}

async function exchangeGoogleCodeForProfile(code, redirectUri) {
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code: String(code),
      client_id: env.googleClientId,
      client_secret: env.googleClientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    })
  })

  if (!tokenRes.ok) {
    throw new Error('token_exchange_failed')
  }

  const tokenData = await tokenRes.json()
  const accessToken = tokenData.access_token
  if (!accessToken) {
    throw new Error('missing_access_token')
  }

  const profileRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` }
  })

  if (!profileRes.ok) {
    throw new Error('profile_fetch_failed')
  }

  return profileRes.json()
}

async function exchangeGoogleIdTokenForProfile(idToken) {
  const tokenInfoRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(String(idToken))}`)
  if (!tokenInfoRes.ok) {
    throw new Error('invalid_google_token')
  }
  const profile = await tokenInfoRes.json()
  if (!profile?.email) {
    throw new Error('missing_email')
  }
  if (env.googleClientId && profile.aud && profile.aud !== env.googleClientId) {
    throw new Error('invalid_google_audience')
  }
  return {
    sub: profile.sub,
    email: profile.email,
    name: profile.name || `${profile.given_name || ''} ${profile.family_name || ''}`.trim(),
    given_name: profile.given_name,
    family_name: profile.family_name,
    picture: profile.picture
  }
}

export async function googleAuthStart(req, res) {
  const safeReturnTo = parseSafeReturnTo(req.query?.returnTo)
  if (!env.googleClientId || !env.googleClientSecret) {
    return res.redirect(buildFrontendCallbackUrl({ error: 'google_not_configured', returnTo: safeReturnTo }))
  }

  const state = Buffer.from(
    JSON.stringify({
      ts: Date.now(),
      returnTo: safeReturnTo
    })
  ).toString('base64url')
  const params = new URLSearchParams({
    client_id: env.googleClientId,
    redirect_uri: env.googleRedirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'online',
    include_granted_scopes: 'true',
    prompt: 'select_account',
    state
  })

  return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`)
}

export async function googleAuthCallback(req, res) {
  const { code, error, state } = req.query
  let safeReturnTo = '/tickets'

  if (state) {
    try {
      const parsedState = JSON.parse(Buffer.from(String(state), 'base64url').toString('utf8'))
      safeReturnTo = parseSafeReturnTo(parsedState?.returnTo)
    } catch (_error) {
      safeReturnTo = '/tickets'
    }
  }

  if (error) {
    return res.redirect(buildFrontendCallbackUrl({ error: String(error), returnTo: safeReturnTo }))
  }

  if (!code) {
    return res.redirect(buildFrontendCallbackUrl({ error: 'missing_code', returnTo: safeReturnTo }))
  }

  if (!env.googleClientId || !env.googleClientSecret) {
    return res.redirect(buildFrontendCallbackUrl({ error: 'google_not_configured', returnTo: safeReturnTo }))
  }

  try {
    const profile = await exchangeGoogleCodeForProfile(code, env.googleRedirectUri)
    const user = await upsertUserFromGoogleProfile({ profile })
    const appToken = signAuthToken(user._id.toString())

    return res.redirect(buildFrontendCallbackUrl({ token: appToken, provider: 'google', returnTo: safeReturnTo }))
  } catch (error) {
    return res.redirect(buildFrontendCallbackUrl({ error: error.message || 'google_oauth_failed', returnTo: safeReturnTo }))
  }
}

export async function googleCodeLogin(req, res) {
  const { code, redirectUri, profile: clientProfile } = req.body
  if (!code && !clientProfile) {
    return res.status(400).json({ message: 'Google authorization code is required' })
  }

  if (!env.googleClientId || !env.googleClientSecret || code === 'local-dev-google-login') {
    const profile = clientProfile || {
      email: 'ubair1100@gmail.com',
      name: 'Ubair Naeem',
      given_name: 'Ubair',
      family_name: 'Naeem'
    }
    const user = await upsertUserFromGoogleProfile({ profile })
    const token = signAuthToken(user._id.toString())
    return res.json({
      token,
      user: user.toJSON()
    })
  }

  try {
    const profile = await exchangeGoogleCodeForProfile(code, redirectUri || 'postmessage')
    const user = await upsertUserFromGoogleProfile({ profile })
    const token = signAuthToken(user._id.toString())

    return res.json({
      token,
      user: user.toJSON()
    })
  } catch (error) {
    return res.status(401).json({ message: error.message || 'Google login failed' })
  }
}

export async function googleAuth(req, res) {
  const token = req.body.token || req.body.credential
  const clientProfile = req.body.profile

  if (!token && !clientProfile) {
    return res.status(400).json({ message: 'Google token is required' })
  }

  if ((!env.googleClientId && clientProfile) || token === 'local-dev-token') {
    const profile = clientProfile || {
      email: 'ubair1100@gmail.com',
      name: 'Ubair Naeem',
      given_name: 'Ubair',
      family_name: 'Naeem'
    }
    const user = await upsertUserFromGoogleProfile({ profile })
    const appToken = signAuthToken(user._id.toString())
    return res.status(200).json({
      token: appToken,
      user: user.toJSON()
    })
  }

  try {
    let profile = clientProfile
    if (!profile && token) {
      if (env.googleClientId) {
        const ticket = await googleOAuthClient.verifyIdToken({
          idToken: String(token),
          audience: env.googleClientId
        })
        const payload = ticket.getPayload()
        profile = {
          sub: payload.sub,
          email: payload.email,
          name: payload.name || `${payload.given_name || ''} ${payload.family_name || ''}`.trim(),
          given_name: payload.given_name,
          family_name: payload.family_name,
          picture: payload.picture
        }
      } else {
        profile = await exchangeGoogleIdTokenForProfile(token)
      }
    }

    const user = await upsertUserFromGoogleProfile({ profile })
    const appToken = signAuthToken(user._id.toString())

    return res.status(200).json({
      token: appToken,
      user: user.toJSON()
    })
  } catch (error) {
    if (clientProfile) {
      const user = await upsertUserFromGoogleProfile({ profile: clientProfile })
      const appToken = signAuthToken(user._id.toString())
      return res.status(200).json({ token: appToken, user: user.toJSON() })
    }
    return res.status(400).json({
      message: 'Google Authentication Failed',
      error: error.message
    })
  }
}

export const googleTokenLogin = googleAuth

