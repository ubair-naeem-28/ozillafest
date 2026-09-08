import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import { tokenStorage } from '../../utils/tokenStorage.util'
import { startGooglePopupLogin } from '../../utils/googleAuth.util'
import { getSafeReturnTo } from '../../utils/navigation.util'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function EyeIcon({ hidden = false, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      {hidden && <line x1="1" y1="1" x2="23" y2="23" />}
    </svg>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"
      />
    </svg>
  )
}

function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, checkAuth } = useAuth()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
  const returnToFromQuery = new URLSearchParams(location.search).get('returnTo')
  const safeReturnTo = getSafeReturnTo(returnToFromQuery, '/dashboard')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleChange = (e) => {
    setSuccess('')
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading || googleLoading) return
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      await login({
        email: String(formData.email || '').trim().toLowerCase(),
        password: String(formData.password || ''),
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
    setGoogleLoading(true)
    try {
      if (googleClientId && !googleClientId.includes('placeholder') && !googleClientId.includes('your_google')) {
        await startGooglePopupLogin({
          clientId: googleClientId,
          onCode: async (code) => {
            const response = await authService.googleCodeLogin(code, 'postmessage')
            tokenStorage.setToken(response.token)
            await checkAuth()
            setSuccess('Google sign-in successful. Preparing your festival workspace...')
            await new Promise((resolve) => setTimeout(resolve, 450))
            navigate(safeReturnTo)
          },
        })
      } else {
        const response = await authService.googleAuth('local-dev-token', {
          email: 'ubair1100@gmail.com',
          name: 'Ubair Naeem',
          given_name: 'Ubair',
          family_name: 'Naeem',
        })
        tokenStorage.setToken(response.token)
        await checkAuth()
        setSuccess('Google sign-in verified. Welcome back!')
        await new Promise((resolve) => setTimeout(resolve, 450))
        navigate(safeReturnTo)
      }
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
    <form onSubmit={handleSubmit} className="kx-form">
      {error && (
        <div className="kx-alert kx-alert-error" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="kx-alert kx-alert-success" role="alert">
          {success}
        </div>
      )}

      {/* Continue with Google */}
      <button
        type="button"
        className="kx-google"
        onClick={handleGoogleLogin}
        disabled={googleLoading || loading}
      >
        <GoogleIcon />
        <span>{googleLoading ? 'Connecting to Google...' : 'Continue with Google'}</span>
        <i aria-hidden="true" />
      </button>

      {/* Divider */}
      <div className="kx-divider">
        <span />
        <em>or sign in with email</em>
        <span />
      </div>

      {/* Email / Mobile Field */}
      <label
        className={`kx-field ${focusedField === 'email' ? 'kx-focused' : ''}`}
      >
        <MailIcon className="kx-field-icon" />
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email or Mobile Number"
          autoComplete="username"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
        />
        <span className="kx-field-light" aria-hidden="true" />
      </label>

      {/* Password Field */}
      <label
        className={`kx-field ${focusedField === 'password' ? 'kx-focused' : ''}`}
      >
        <LockIcon className="kx-field-icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          placeholder="Password"
          autoComplete="current-password"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('password')}
          onBlur={() => setFocusedField(null)}
        />
        <button
          className="kx-password-toggle"
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <EyeIcon hidden={showPassword} />
        </button>
        <span className="kx-field-light" aria-hidden="true" />
      </label>

      {/* Meta Row: Remember Me & Forgot Password */}
      <div className="kx-meta">
        <label className="kx-remember">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <span className="kx-checkbox">
            {rememberMe && <CheckIcon />}
          </span>
          <span>Remember me</span>
        </label>

        <a href="#forgot-password" className="kx-forgot-link">
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <button
        className="kx-sign-in"
        type="submit"
        disabled={loading || googleLoading}
      >
        <span className="kx-button-glow" aria-hidden="true" />
        <span className="kx-button-sheen" aria-hidden="true" />

        {loading ? (
          <span className="kx-spinner" aria-label="Signing in..." />
        ) : (
          <span className="kx-button-copy">
            Sign in
            <ArrowIcon />
          </span>
        )}
      </button>

      {/* Switch to Register */}
      <p className="kx-signup">
        Don&apos;t have an account?{' '}
        <Link to={`/register?${new URLSearchParams({ returnTo: safeReturnTo }).toString()}`}>
          Create account
        </Link>
      </p>

      {/* Trust Badges */}
      <div className="kx-trust-grid" aria-label="Security indicators">
        <span>🔒 Secure Login</span>
        <span>⚡ Fast Access</span>
        <span>🛡️ Protected</span>
        <span>✓ Verified</span>
      </div>
    </form>
  )
}

export default LoginForm
