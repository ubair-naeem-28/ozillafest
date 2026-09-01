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
