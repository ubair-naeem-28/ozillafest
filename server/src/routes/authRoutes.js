import { Router } from 'express'
import {
  forgotPassword,
  googleAuth,
  googleAuthCallback,
  googleAuthStart,
  googleCodeLogin,
  googleTokenLogin,
  login,
  logout,
  me,
  register,
  resendOtp,
  resetPassword,
  sendOtp,
  updateProfile,
  verifyOtp
} from '../controllers/authController.js'
import { requireAuth } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', requireAuth, logout)
router.post('/send-otp', sendOtp)
router.post('/resend-otp', resendOtp)
router.post('/verify-otp', verifyOtp)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.get('/google/start', googleAuthStart)
router.get('/google/callback', googleAuthCallback)
router.post('/google', googleAuth)
router.post('/google/code-login', googleCodeLogin)
router.post('/google/token-login', googleTokenLogin)
router.get('/me', requireAuth, me)
router.put('/profile', requireAuth, updateProfile)

export default router
