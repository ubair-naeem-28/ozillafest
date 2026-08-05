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

// Protected ticket actions
router.use(requireAuth)
router.post('/request', requestTicket)
router.get('/admin/pending', requireAdmin, getPendingTicketsAdmin)
router.post('/admin/:id/decision', requireAdmin, decideTicketAdmin)
router.get('/my-tickets', getMyTickets)
router.post('/:id/cancel', cancelTicket)
router.post('/:id/payment-proof', upload.single('paymentProof'), uploadPaymentProof)
router.post('/:id/verify', verifyTicket)

export default router
