import apiClient from './apiClient'
import { API_ENDPOINTS } from '../constants/apiEndpoints.constants'
import { tokenStorage } from '../utils/tokenStorage.util'

const LOCAL_USERS_KEY = 'ozilla_local_users'
let forceLocalMode = false

function normalizeEmail(value) {
  return String(value || '').toLowerCase().trim()
}

function normalizePhone(value) {
  return String(value || '').trim()
}

function readLocalUsers() {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch (_error) {
    return []
  }
}

function writeLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users))
}

function createLocalToken(user) {
  const payload = {
    sub: user.id,
    email: user.email,
    mode: 'local-fallback'
  }
  return `local.${btoa(JSON.stringify(payload))}`
}

function parseLocalToken(token) {
  const raw = String(token || '')
  const base64 = raw.startsWith('local.') ? raw.slice(6) : raw
  try {
    return JSON.parse(atob(base64))
  } catch (_error) {
    return null
  }
}

function toPublicUser(localUser) {
  return {
    id: localUser.id,
    firstName: localUser.firstName,
    lastName: localUser.lastName,
    name: localUser.name || `${localUser.firstName || ''} ${localUser.lastName || ''}`.trim(),
    email: localUser.email,
    phone: localUser.phone,
    role: localUser.role || 'user'
  }
}

function buildLocalUser(input = {}) {
  const firstName = String(input.firstName || 'Local').trim() || 'Local'
  const lastName = String(input.lastName || 'User').trim() || 'User'
  const email = normalizeEmail(input.email || 'local@ozillafestival.com')
  const phone = normalizePhone(input.phone || '+923000000000')
  return {
    id: input.id || `local-user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone,
    password: String(input.password || ''),
    role: 'user'
  }
}

function isBackendUnreachable(error) {
  return !error?.response && (
    error?.code === 'ERR_NETWORK' ||
    error?.message?.includes('Network Error') ||
    error?.message?.includes('ECONNREFUSED')
  )
}

function markLocalMode(error) {
  if (isBackendUnreachable(error)) {
    forceLocalMode = true
    return true
  }
  return false
}

function createLocalAuthResponse(localUser) {
  const user = toPublicUser(localUser)
  return {
    token: createLocalToken(user),
    user,
    mode: 'local-fallback'
  }
}

export const authService = {
  async login(credentials) {
    if (forceLocalMode) {
      const email = normalizeEmail(credentials?.email)
      const password = String(credentials?.password || '')
      const user = readLocalUsers().find((item) => item.email === email && item.password === password)
      if (!user) {
        const localError = new Error('Invalid credentials')
        localError.response = { status: 401, data: { message: 'Invalid credentials' } }
        throw localError
      }
      return createLocalAuthResponse(user)
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const email = normalizeEmail(credentials?.email)
        const password = String(credentials?.password || '')
        const user = readLocalUsers().find((item) => item.email === email && item.password === password)
        if (!user) {
          const localError = new Error('Invalid credentials')
          localError.response = { status: 401, data: { message: 'Invalid credentials' } }
          throw localError
        }
        return createLocalAuthResponse(user)
      }
      throw error
    }
  },

  async register(userData) {
    if (forceLocalMode) {
      const email = normalizeEmail(userData?.email)
      const phone = normalizePhone(userData?.phone)
      const users = readLocalUsers()

      const emailExists = users.some((item) => item.email === email)
      if (emailExists) {
        const localError = new Error('Account already exists with this email')
        localError.response = { status: 409, data: { message: 'Account already exists with this email' } }
        throw localError
      }

      const phoneExists = users.some((item) => item.phone === phone)
      if (phoneExists) {
        const localError = new Error('Account already exists with this phone number')
        localError.response = { status: 409, data: { message: 'Account already exists with this phone number' } }
        throw localError
      }

      const localUser = buildLocalUser(userData)
      writeLocalUsers([localUser, ...users])
      return createLocalAuthResponse(localUser)
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, userData)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const email = normalizeEmail(userData?.email)
        const phone = normalizePhone(userData?.phone)
        const users = readLocalUsers()

        const emailExists = users.some((item) => item.email === email)
        if (emailExists) {
          const localError = new Error('Account already exists with this email')
          localError.response = { status: 409, data: { message: 'Account already exists with this email' } }
          throw localError
        }

        const phoneExists = users.some((item) => item.phone === phone)
        if (phoneExists) {
          const localError = new Error('Account already exists with this phone number')
          localError.response = { status: 409, data: { message: 'Account already exists with this phone number' } }
          throw localError
        }

        const localUser = buildLocalUser(userData)
        writeLocalUsers([localUser, ...users])
        return createLocalAuthResponse(localUser)
      }
      throw error
    }
  },

  async resendOtp(email) {
    if (forceLocalMode) {
      return { message: 'Development OTP generated successfully.', otpForDevelopment: '123456', mode: 'local-fallback' }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.RESEND_OTP, { email })
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        return { message: 'Development OTP generated successfully.', otpForDevelopment: '123456', mode: 'local-fallback' }
      }
      throw error
    }
  },

  async verifyOtp(payload) {
    if (forceLocalMode) {
      if (String(payload?.otp || '').trim() !== '123456') {
        const localError = new Error('OTP verification failed')
        localError.response = { status: 400, data: { message: 'OTP verification failed' } }
        throw localError
      }
      return { message: 'Email verified successfully', mode: 'local-fallback' }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.VERIFY_OTP, payload)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        if (String(payload?.otp || '').trim() !== '123456') {
          const localError = new Error('OTP verification failed')
          localError.response = { status: 400, data: { message: 'OTP verification failed' } }
          throw localError
        }
        return { message: 'Email verified successfully', mode: 'local-fallback' }
      }
      throw error
    }
  },

  async getCurrentUser() {
    const token = tokenStorage.getToken()
    const localPayload = parseLocalToken(token)
    if (localPayload?.mode === 'local-fallback' || String(token || '').startsWith('local.')) {
      const users = readLocalUsers()
      const user = users.find((item) => item.id === localPayload?.sub) || users.find((item) => item.email === localPayload?.email)
      if (!user) {
        const localError = new Error('Unauthorized')
        localError.response = { status: 401, data: { message: 'Unauthorized' } }
        throw localError
      }
      forceLocalMode = true
      return toPublicUser(user)
    }

    if (forceLocalMode) {
      const localError = new Error('Unauthorized')
      localError.response = { status: 401, data: { message: 'Unauthorized' } }
      throw localError
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.AUTH.ME)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const payload = parseLocalToken(token)
        if (!payload?.sub && !payload?.email) {
          const localError = new Error('Unauthorized')
          localError.response = { status: 401, data: { message: 'Unauthorized' } }
          throw localError
        }
        const users = readLocalUsers()
        const user = users.find((item) => item.id === payload.sub) || users.find((item) => item.email === payload.email)
        if (!user) {
          const localError = new Error('Unauthorized')
          localError.response = { status: 401, data: { message: 'Unauthorized' } }
          throw localError
        }
        return toPublicUser(user)
      }
      throw error
    }
  },

  async logout() {
    if (forceLocalMode) {
      return { message: 'Logged out successfully' }
    }
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        return { message: 'Logged out successfully' }
      }
      throw error
    }
  },

  async forgotPassword(email) {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email })
    return response.data
  },

  async resetPassword(payload) {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, payload)
    return response.data
  },

  async googleCodeLogin(code, redirectUri = 'postmessage') {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.GOOGLE_CODE_LOGIN, { code, redirectUri })
    return response.data
  },

  async googleTokenLogin(credential) {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.GOOGLE_TOKEN_LOGIN, { credential })
    return response.data
  },

  async updateProfile(payload) {
    if (forceLocalMode) {
      const token = tokenStorage.getToken()
      const parsed = parseLocalToken(token)
      const users = readLocalUsers()
      const index = users.findIndex((item) => item.id === parsed?.sub || item.email === parsed?.email)
      if (index === -1) {
        const localError = new Error('Unauthorized')
        localError.response = { status: 401, data: { message: 'Unauthorized' } }
        throw localError
      }

      const existing = users[index]
      const updated = {
        ...existing,
        firstName: typeof payload?.firstName === 'string' ? payload.firstName.trim() : existing.firstName,
        lastName: typeof payload?.lastName === 'string' ? payload.lastName.trim() : existing.lastName,
        phone: typeof payload?.phone === 'string' ? payload.phone.trim() : existing.phone
      }
      updated.name = `${updated.firstName || ''} ${updated.lastName || ''}`.trim() || existing.name
      users[index] = updated
      writeLocalUsers(users)
      return { message: 'Profile updated successfully', user: toPublicUser(updated) }
    }

    try {
      const response = await apiClient.put(API_ENDPOINTS.AUTH.PROFILE, payload)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const token = tokenStorage.getToken()
        const parsed = parseLocalToken(token)
        const users = readLocalUsers()
        const index = users.findIndex((item) => item.id === parsed?.sub || item.email === parsed?.email)
        if (index === -1) {
          const localError = new Error('Unauthorized')
          localError.response = { status: 401, data: { message: 'Unauthorized' } }
          throw localError
        }

        const existing = users[index]
        const updated = {
          ...existing,
          firstName: typeof payload?.firstName === 'string' ? payload.firstName.trim() : existing.firstName,
          lastName: typeof payload?.lastName === 'string' ? payload.lastName.trim() : existing.lastName,
          phone: typeof payload?.phone === 'string' ? payload.phone.trim() : existing.phone
        }
        updated.name = `${updated.firstName || ''} ${updated.lastName || ''}`.trim() || existing.name
        users[index] = updated
        writeLocalUsers(users)
        return { message: 'Profile updated successfully', user: toPublicUser(updated) }
      }
      throw error
    }
  }
}
