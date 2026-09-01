import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'
import { tokenStorage } from '../utils/tokenStorage.util'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = tokenStorage.getToken()
      if (token) {
        const userData = await authService.getCurrentUser()
        setUser(userData)
      }
    } catch (error) {
      tokenStorage.removeToken()
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    const response = await authService.login(credentials)
    tokenStorage.setToken(response.token)
    setUser(response.user)
    return response
  }

  const register = async (userData) => {
    const response = await authService.register(userData)
    tokenStorage.setToken(response.token)
    setUser(response.user)
    return response
  }

  const logout = () => {
    authService.logout().catch(() => {})
    tokenStorage.removeToken()
    setUser(null)
  }

  const isAdminUser =
    user?.role === 'admin' ||
    ['ubair1100@gmail.com', 'admin@ozillafestival.com', 'muhammadubair@gmail.com', 'admin@prism.com'].includes(
      String(user?.email || '').toLowerCase().trim()
    )

  const value = {
    user,
    isAdmin: isAdminUser,
    loading,
    login,
    register,
    logout,
    checkAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
