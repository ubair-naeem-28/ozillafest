import axios from 'axios'
import { tokenStorage } from '../utils/tokenStorage.util'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
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
      const returnTo = `${window.location.pathname}${window.location.search}`
      const search = new URLSearchParams({ returnTo }).toString()
      window.location.href = `/login?${search}`
    }
    return Promise.reject(error)
  }
)

export default apiClient
