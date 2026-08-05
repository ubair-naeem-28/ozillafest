import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    const returnTo = `${location.pathname}${location.search}`
    const search = new URLSearchParams({ returnTo }).toString()
    return <Navigate to={`/login?${search}`} replace />
  }

  return children || <Outlet />
}

export default ProtectedRoute
