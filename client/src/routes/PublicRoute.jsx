import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { getSafeReturnTo } from '../utils/navigation.util'

function PublicRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (user) {
    const params = new URLSearchParams(location.search)
    const requested = params.get('returnTo')
    const redirectTo = getSafeReturnTo(requested, '/dashboard')
    return <Navigate to={redirectTo} replace />
  }

  return children || <Outlet />
}

export default PublicRoute
