import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/common/ErrorBoundary'
import './assets/styles/global.css'
import './assets/styles/variables.css'
import './assets/styles/responsive.css'
import './assets/styles/auth-theme.css'
import './assets/styles/ui-utilities.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
