import axios from 'axios'
import { tokenStorage } from '../utils/tokenStorage.util'

export function getBaseApiUrl() {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL
  }
  if (typeof window !== 'undefined') {
    const host = window.location.hostname || ''
    if (host.includes('github.io') || host.includes('render') || host.includes('vercel') || host.includes('netlify')) {
      return 'https://ozillafest.onrender.com/api'
    }
    if (host && host !== 'localhost' && host !== '127.0.0.1') {
      return 'https://ozillafest.onrender.com/api'
    }
  }
  return 'https://ozillafest.onrender.com/api'
}

export const API_BASE_URL = getBaseApiUrl()
export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '')

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    config.baseURL = getBaseApiUrl()
    const token = tokenStorage.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.removeToken()
    }
    return Promise.reject(error)
  }
)

export default apiClient
