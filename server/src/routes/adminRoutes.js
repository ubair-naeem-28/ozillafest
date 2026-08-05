import { Router } from 'express'
import {
  getAdminDashboard,
  getAdminPayments,
  getAdminReports,
  getAdminUsers
} from '../controllers/adminController.js'
import { requireAdmin } from '../middleware/adminMiddleware.js'
import { requireAuth } from '../middleware/authMiddleware.js'

const router = Router()

router.use(requireAuth, requireAdmin)
router.get('/dashboard', getAdminDashboard)
router.get('/users', getAdminUsers)
router.get('/payments', getAdminPayments)
router.get('/reports', getAdminReports)

export default router
