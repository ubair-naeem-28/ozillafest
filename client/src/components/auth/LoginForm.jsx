import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import { tokenStorage } from '../../utils/tokenStorage.util'
import { startGooglePopupLogin } from '../../utils/googleAuth.util'
import { getSafeReturnTo } from '../../utils/navigation.util'

const GOOGLE_LOGO_DATA_URL =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>'

function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, checkAuth } = useAuth()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
  const returnToFromQuery = new URLSearchParams(location.search).get('returnTo')
  const safeReturnTo = getSafeReturnTo(returnToFromQuery, '/dashboard')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleChange = (e) => {
    setSuccess('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      await login({
        email: String(formData.email || '').trim().toLowerCase(),
        password: String(formData.password || '')
      })
      setSuccess('Login successful. Preparing your festival workspace...')
      await new Promise((resolve) => setTimeout(resolve, 450))
      navigate(safeReturnTo)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError('')
    setSuccess('')

    if (!googleClientId) {
      setError('Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env')
      return
    }

    setGoogleLoading(true)
    try {
      await startGooglePopupLogin({
        clientId: googleClientId,
        onCode: async (code) => {
          const response = await authService.googleCodeLogin(code, 'postmessage')
          tokenStorage.setToken(response.token)
          await checkAuth()
          setSuccess('Google sign-in successful. Preparing your festival workspace...')
          await new Promise((resolve) => setTimeout(resolve, 450))
          navigate(safeReturnTo)
        }
      })
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Google sign-in failed'
      if (!message.toLowerCase().includes('cancel')) {
        setError(message)
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form login-form-premium">
      {error && (
        <div className="auth-alert auth-alert-error">
          {error}
        </div>
      )}

      {success && (
        <div className="auth-alert auth-alert-success login-success-alert">
          {success}
        </div>
      )}

      <div className="auth-social-wrap">
        <button
          type="button"
          className="auth-btn auth-btn-outline auth-btn-google"
          onClick={handleGoogleLogin}
          disabled={googleLoading || loading}
        >
          <img
            src={GOOGLE_LOGO_DATA_URL}
            alt="Google logo"
            className="auth-google-logo"
          />
          <span>{googleLoading ? 'Opening Google...' : 'Sign in with Google'}</span>
        </button>
      </div>

      <div className="auth-divider">
        <span>Or sign in with email or phone</span>
      </div>

      <div className="auth-field login-field-shell">
        <label className="auth-label" htmlFor="login-email">Email or Mobile Number</label>
        <input
          id="login-email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
          placeholder="you@example.com or 03001234567"
          autoComplete="username"
          required
        />
      </div>

      <div className="auth-field login-field-shell">
        <label className="auth-label" htmlFor="login-password">Password</label>
        <div className="auth-input-wrap">
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input auth-input-with-icon"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className="auth-input-icon-btn"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '\u{1F648}' : '\u{1F441}'}
          </button>
        </div>
      </div>

      <div className="login-form-row">
        <label className="login-remember">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <span>Remember me</span>
        </label>
        <button type="button" className="auth-link login-forgot-link">Forgot Password?</button>
      </div>

      <button
        type="submit"
        disabled={loading || googleLoading}
        className="auth-btn auth-btn-primary"
      >
        {loading ? (
          <span className="login-loading-wrap">
            <span className="login-loading-dot" />
            Signing In...
          </span>
        ) : (
          <span>Sign In</span>
        )}
      </button>

      <div className="login-register-line">
        <span>Don't have an account?</span>
        <Link to={`/register?${new URLSearchParams({ returnTo: safeReturnTo }).toString()}`}>
          Create New Account
        </Link>
      </div>

      <div className="login-trust-grid" aria-label="Login trust indicators">
        <span>Secure Login</span>
        <span>Fast Authentication</span>
        <span>Protected Account</span>
        <span>Google Verified</span>
      </div>
    </form>
  )
}

export default LoginForm
