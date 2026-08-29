let googleScriptPromise

export function loadGoogleScript() {
  if (window.google?.accounts?.id || window.google?.accounts?.oauth2) {
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

/**
 * Initializes Google One Tap / Identity Services
 */
export async function initGoogleOneTap({ clientId, onCredential, onError }) {
  if (!clientId) return null

  try {
    await loadGoogleScript()
    if (!window.google?.accounts?.id) return null

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          if (response?.credential && onCredential) {
            await onCredential(response.credential)
          }
        } catch (err) {
          if (onError) onError(err)
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true
    })

    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        // Notification wasn't displayed (e.g. suppressed by browser/FedCM/cooldown)
      } else if (notification.isSkippedMoment()) {
        // Notification was skipped
      } else if (notification.isDismissedMoment()) {
        // Notification was dismissed
      }
    })
  } catch (error) {
    if (onError) onError(error)
  }
}

/**
 * Initiates Google OAuth popup code login
 */
export async function startGooglePopupLogin({ clientId, onCode }) {
  if (!clientId) {
    throw new Error('Google Client ID is not configured. Please set VITE_GOOGLE_CLIENT_ID in client/.env')
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

