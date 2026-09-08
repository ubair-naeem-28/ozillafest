import React from 'react'

import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Application render failed:', error, info)
    const isChunkError =
      /Failed to fetch dynamically imported module/i.test(error?.message) ||
      /Loading chunk/i.test(error?.message) ||
      /Failed to load module script/i.test(error?.message)

    if (isChunkError) {
      const lastReload = Number(sessionStorage.getItem('chunk_reload_ts') || 0)
      if (Date.now() - lastReload > 10000) {
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
      const isChunkError =
        /Failed to fetch dynamically imported module/i.test(this.state.error?.message) ||
        /Loading chunk/i.test(this.state.error?.message)

      return (
        <main style={{ padding: '32px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
          <h1 style={{ color: '#7c2d12', marginBottom: '12px' }}>
            {isChunkError ? 'New Update Available' : 'OZILLA FEST could not render'}
          </h1>
          <p style={{ color: '#444', marginBottom: '16px' }}>
            {isChunkError
              ? 'A new version of the website was published. Please refresh to load the latest version.'
              : 'Check the browser console for the full error details.'}
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ea580c',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}
          >
            Refresh Page
          </button>
          {!isChunkError && (
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                background: '#fff7ed',
                border: '1px solid #fed7aa',
                padding: '16px',
                borderRadius: '6px',
                color: '#7c2d12',
                textAlign: 'left'
              }}
            >
              {this.state.error.message}
            </pre>
          )}
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
