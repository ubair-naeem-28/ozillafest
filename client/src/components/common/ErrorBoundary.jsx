import React, { Component } from 'react'

const isModuleOrChunkError = (message = '') => {
  const msg = String(message).toLowerCase()
  return (
    msg.includes('importing a module script failed') ||
    msg.includes('failed to fetch dynamically imported module') ||
    msg.includes('loading chunk') ||
    msg.includes('failed to load module script') ||
    msg.includes('error loading dynamically imported module') ||
    msg.includes('mime type') ||
    msg.includes('dynamically imported')
  )
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Application render error:', error, info)
    if (isModuleOrChunkError(error?.message)) {
      const lastReload = Number(sessionStorage.getItem('chunk_reload_ts') || 0)
      if (Date.now() - lastReload > 8000) {
        sessionStorage.setItem('chunk_reload_ts', String(Date.now()))
        window.location.reload()
      }
    }
  }

  handleReload = () => {
    sessionStorage.setItem('chunk_reload_ts', String(Date.now()))
    window.location.reload()
  }

  render() {
    if (this.state.error) {
      const isChunk = isModuleOrChunkError(this.state.error?.message)

      return (
        <main
          style={{
            padding: '32px 20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            maxWidth: '540px',
            margin: '60px auto',
            textAlign: 'center',
            backgroundColor: '#121118',
            color: '#f3f4f6',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <h2 style={{ color: '#f97316', marginBottom: '12px', fontSize: '1.4rem' }}>
            {isChunk ? 'New Update Available' : 'Ozilla Festival could not render'}
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '0.95rem', lineHeight: '1.5' }}>
            {isChunk
              ? 'A fresh update has been deployed. Please tap refresh to load the latest version.'
              : 'Please refresh the page to reload the application.'}
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: '12px 28px',
              backgroundColor: '#ea580c',
              color: '#ffffff',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)',
              transition: 'transform 0.15s ease'
            }}
          >
            Refresh Website
          </button>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
