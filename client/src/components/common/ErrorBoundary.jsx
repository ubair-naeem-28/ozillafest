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
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ padding: '32px', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: '#7c2d12', marginBottom: '12px' }}>
            Ozilla Festival could not render
          </h1>
          <p style={{ color: '#444', marginBottom: '16px' }}>
            Check the browser console for the full error details.
          </p>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: '#fff7ed',
              border: '1px solid #fed7aa',
              padding: '16px',
              borderRadius: '6px',
              color: '#7c2d12'
            }}
          >
            {this.state.error.message}
          </pre>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
