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
        // Notification wasn't displayed
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
 * Fetches user profile from Google UserInfo API using OAuth Access Token
 */
export async function fetchGoogleUserProfile(accessToken) {
  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch Google profile')
  }
  return res.json()
}

/**
 * Initiates Google OAuth popup with Account Chooser ('select_account')
 * Displays all accounts on user's device.
 */
export async function startGooglePopupLogin({ clientId, onProfile, onError }) {
  if (!clientId || clientId.includes('placeholder') || clientId.includes('your_google')) {
    throw new Error('Google Client ID is not configured. Please add GOOGLE_CLIENT_ID in Render or VITE_GOOGLE_CLIENT_ID in client/.env')
  }

  await loadGoogleScript()

  if (!window.google?.accounts?.oauth2?.initTokenClient) {
    throw new Error('Google Identity Services library is unavailable')
  }

  return new Promise((resolve, reject) => {
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'openid email profile',
      prompt: 'select_account',
      callback: async (tokenResponse) => {
        try {
          if (tokenResponse?.error) {
            if (tokenResponse.error === 'popup_closed_by_user') {
              throw new Error('Google sign-in was cancelled')
            }
            throw new Error(tokenResponse.error_description || tokenResponse.error || 'Google login failed')
          }
          if (!tokenResponse?.access_token) {
            throw new Error('Google sign-in was cancelled')
          }

          const profile = await fetchGoogleUserProfile(tokenResponse.access_token)
          if (!profile?.email) {
            throw new Error('Could not retrieve email from selected Google account')
          }

          if (onProfile) {
            await onProfile(profile, tokenResponse.access_token)
          }
          resolve(profile)
        } catch (err) {
          if (onError) onError(err)
          reject(err)
        }
      },
      error_callback: (error) => {
        const err = new Error(error?.message || 'Google account chooser popup failed')
        if (onError) onError(err)
        reject(err)
      }
    })

    tokenClient.requestAccessToken({ prompt: 'select_account' })
  })
}
