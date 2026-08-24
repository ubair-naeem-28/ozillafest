/**
 * Resolves an asset URL so it works correctly on GitHub Pages
 * where the app is served from a sub-path (e.g. /ozillafest/ or /Prism-event-and-tour/).
 */
export function assetUrl(path) {
  if (!path || typeof path !== 'string') return path
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path
  }

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.replace(/^\/+/, '')

  if (
    cleanPath.startsWith('assets/') ||
    cleanPath.startsWith('favicon')
  ) {
    return `${normalizedBase}${cleanPath}`
  }

  if (path.startsWith('/')) {
    return `${normalizedBase}${cleanPath}`
  }

  return path
}