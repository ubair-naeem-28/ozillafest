/**
 * Helper to safely sanitize and resolve returnTo redirect destinations.
 * Strips any base path prefix (e.g. /ozillafest/) to work seamlessly with React Router basename.
 * Prevents loops back to login/register and blocks malicious external URLs.
 */
export function getSafeReturnTo(queryReturnTo, defaultRoute = '/dashboard') {
  if (!queryReturnTo || typeof queryReturnTo !== 'string') {
    return defaultRoute
  }

  let path = queryReturnTo.trim()

  // Prevent external protocol redirects (e.g., //evil.com or https://...)
  if (path.startsWith('//') || /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(path)) {
    return defaultRoute
  }

  // Strip known repository base prefixes if present in returnTo
  if (path.startsWith('/ozillafest')) {
    path = path.slice('/ozillafest'.length)
  }

  // Ensure it starts with a single '/'
  if (!path.startsWith('/')) {
    path = `/${path}`
  }

  // Check if destination is empty or is an auth route itself
  const cleanPath = path.split('?')[0].replace(/\/$/, '')
  if (!cleanPath || cleanPath === '/login' || cleanPath === '/register') {
    return defaultRoute
  }

  return path
}
