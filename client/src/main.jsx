import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import ErrorBoundary from './components/common/ErrorBoundary'
import './assets/styles/global.css'
import './assets/styles/variables.css'
import './assets/styles/responsive.css'
import './assets/styles/auth-theme.css'
import './assets/styles/ui-utilities.css'

// Global handler to gracefully recover from mobile Safari module script import failures
if (typeof window !== 'undefined') {
  const handleScriptError = (event) => {
    const msg = String(event?.message || event?.reason?.message || '').toLowerCase()
    if (
      msg.includes('importing a module script failed') ||
      msg.includes('failed to fetch dynamically imported module') ||
      msg.includes('loading chunk') ||
      msg.includes('failed to load module script')
    ) {
      const lastReload = Number(sessionStorage.getItem('chunk_reload_ts') || 0)
      if (Date.now() - lastReload > 8000) {
        sessionStorage.setItem('chunk_reload_ts', String(Date.now()))
        window.location.reload()
      }
    }
  }
  window.addEventListener('error', handleScriptError)
  window.addEventListener('unhandledrejection', handleScriptError)
}

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={googleClientId || 'placeholder-client-id'}>
        <App />
      </GoogleOAuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
