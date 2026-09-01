import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import {
  cancelTicket,
  decideTicketAdmin,
  getPendingTicketsAdmin,
  getTicketAvailability,
  getMyTickets,
  getTicketById,
  payWithCard,
  payWithJazzCash,
  payWithEasypaisa,
  initiatePayFastCheckout,
  handlePayFastIpn,
  handlePayFastReturn,
  initiateJazzCashCheckout,
  handleJazzCashIpn,
  initiateEasypaisaCheckout,
  handleEasypaisaIpn,
  requestTicket,
  uploadPaymentProof,
  verifyTicket,
  verifyTicketByQr
} from '../controllers/ticketController.js'
import { requireAdmin } from '../middleware/adminMiddleware.js'
import { requireAuth } from '../middleware/authMiddleware.js'

const router = Router()

const uploadsDir = path.resolve(process.cwd(), 'uploads', 'payment-proofs')
fs.mkdirSync(uploadsDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '.png')
    cb(null, `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`)
  }
})

const upload = multer({ storage })

// Public ticket actions
router.get('/availability', getTicketAvailability)
router.post('/verify-qr', verifyTicketByQr)
router.get('/view/:id', getTicketById)
router.post('/payfast-ipn', handlePayFastIpn)
router.get('/payfast-return', handlePayFastReturn)
router.post('/jazzcash-ipn', handleJazzCashIpn)
router.post('/easypaisa-ipn', handleEasypaisaIpn)

// Protected ticket actions
router.use(requireAuth)
router.post('/request', requestTicket)
router.get('/admin/pending', requireAdmin, getPendingTicketsAdmin)
router.post('/admin/:id/decision', requireAdmin, decideTicketAdmin)
router.get('/my-tickets', getMyTickets)
router.post('/:id/cancel', cancelTicket)
router.post('/:id/pay-card', payWithCard)
router.post('/:id/pay-jazzcash', payWithJazzCash)
router.post('/:id/pay-easypaisa', payWithEasypaisa)
router.post('/:id/payfast-checkout', initiatePayFastCheckout)
router.post('/:id/jazzcash-checkout', initiateJazzCashCheckout)
router.post('/:id/easypaisa-checkout', initiateEasypaisaCheckout)
router.post('/:id/payment-proof', upload.single('paymentProof'), uploadPaymentProof)
router.post('/:id/verify', verifyTicket)

export default router
