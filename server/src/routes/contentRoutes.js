import { Router } from 'express'
import {
  getEventById,
  getEvents,
  getFacilities,
  getHotels,
  getSponsors,
  submitContact
} from '../controllers/contentController.js'

const router = Router()

router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/sponsors', getSponsors)
router.get('/facilities', getFacilities)
router.get('/hotels', getHotels)
router.post('/contact', submitContact)

export default router
