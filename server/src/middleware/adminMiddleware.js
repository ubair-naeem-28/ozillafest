import { env } from '../config/env.js'

export function requireAdmin(req, res, next) {
  const adminEmails = env.adminEmails || ['admin@ozillafestival.com', 'ubair1100@gmail.com', 'muhammadubair@gmail.com']
  const isEmailAdmin = req.user?.email && adminEmails.includes(req.user.email.toLowerCase().trim())

  if (!req.user || (req.user.role !== 'admin' && !isEmailAdmin)) {
    return res.status(403).json({ message: 'Admin access required' })
  }
  return next()
}
