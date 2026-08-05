import { Router } from 'express'

const router = Router()

router.get('/dashboard', (_req, res) => {
  res.json({
    mode: 'no-db',
    totals: {
      users: 0,
      tickets: 0,
      pendingPayments: 0,
      approvedTickets: 0
    }
  })
})

router.get('/users', (_req, res) => {
  res.json([])
})

router.get('/payments', (_req, res) => {
  res.json([])
})

router.get('/reports', (_req, res) => {
  res.json({
    mode: 'no-db',
    message: 'Reports are available when MongoDB is connected.'
  })
})

export default router
