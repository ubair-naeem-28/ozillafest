import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { tokenStorage } from '../../utils/tokenStorage.util'
import { getSafeReturnTo } from '../../utils/navigation.util'

function GoogleAuthCallbackPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { checkAuth } = useAuth()
  const [message, setMessage] = useState('Signing you in with Google...')

  useEffect(() => {
    const finalizeGoogleSignIn = async () => {
      const token = searchParams.get('token')
      const error = searchParams.get('error')
      const returnTo = searchParams.get('returnTo')
      const safeReturnTo = getSafeReturnTo(returnTo, '/dashboard')

      if (error) {
        if (error === 'google_not_configured') {
          setMessage('Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.')
        } else {
          setMessage('Google sign-in failed. Please try again.')
        }
        const loginParams = new URLSearchParams({ returnTo: safeReturnTo }).toString()
        setTimeout(() => navigate(`/login?${loginParams}`, { replace: true }), 1200)
        return
      }

      if (!token) {
        setMessage('Google sign-in token not found. Please try again.')
        const loginParams = new URLSearchParams({ returnTo: safeReturnTo }).toString()
        setTimeout(() => navigate(`/login?${loginParams}`, { replace: true }), 1200)
        return
      }

      tokenStorage.setToken(token)
      await checkAuth()
      navigate(safeReturnTo, { replace: true })
    }

    finalizeGoogleSignIn()
  }, [checkAuth, navigate, searchParams])

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Google Sign-In</h1>
        <p className="auth-subtitle">{message}</p>
      </div>
    </div>
  )
}

export default GoogleAuthCallbackPage
