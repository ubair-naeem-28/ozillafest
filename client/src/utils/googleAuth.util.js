let googleScriptPromise

function loadGoogleScript() {
  if (window.google?.accounts?.oauth2) {
    return Promise.resolve(window.google)
  }

  if (googleScriptPromise) {
    return googleScriptPromise
  }

  googleScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-google-identity="true"]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.google), { once: true })
      existing.addEventListener('error', () => reject(new Error('Failed to load Google Identity script')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.dataset.googleIdentity = 'true'
    script.onload = () => resolve(window.google)
    script.onerror = () => reject(new Error('Failed to load Google Identity script'))
    document.head.appendChild(script)
  })

  return googleScriptPromise
}

export async function startGooglePopupLogin({ clientId, onCode }) {
  if (!clientId) {
    throw new Error('Google client is not configured')
  }

  await loadGoogleScript()

  if (!window.google?.accounts?.oauth2?.initCodeClient) {
    throw new Error('Google Identity Services is unavailable')
  }

  return new Promise((resolve, reject) => {
    const codeClient = window.google.accounts.oauth2.initCodeClient({
      client_id: clientId,
      scope: 'openid email profile',
      ux_mode: 'popup',
      prompt: 'select_account',
      callback: async (response) => {
        try {
          if (!response?.code) {
            throw new Error('Google login was cancelled')
          }
          await onCode(response.code)
          resolve()
        } catch (error) {
          reject(error)
        }
      },
      error_callback: (error) => {
        reject(new Error(error?.message || 'Google login failed'))
      }
    })

    codeClient.requestCode()
  })
}
