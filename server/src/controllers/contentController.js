import mongoose from 'mongoose'
import { contentData } from '../data/contentData.js'
import { Event } from '../models/Event.js'
import { Hotel } from '../models/Hotel.js'
import { Sponsor } from '../models/Sponsor.js'
import { Facility } from '../models/Facility.js'

function isDbConnected() {
  return mongoose.connection.readyState === 1
}

export async function getEvents(_req, res) {
  try {
    if (isDbConnected()) {
      const events = await Event.find({ isActive: true }).sort({ createdAt: 1 })
      if (events.length > 0) {
        return res.json(events.map((e) => e.toJSON()))
      }
    }
  } catch (error) {
    console.warn('DB events lookup failed, falling back to local dataset:', error.message)
  }
  return res.json(contentData.events)
}

export async function getEventById(req, res) {
  try {
    if (isDbConnected()) {
      const event = await Event.findOne({
        $or: [{ eventId: req.params.id }, { _id: mongoose.isValidObjectId(req.params.id) ? req.params.id : null }]
      })
      if (event) {
        return res.json(event.toJSON())
      }
    }
  } catch (error) {
    console.warn('DB event lookup failed, falling back to local dataset:', error.message)
  }

  const event = contentData.events.find((item) => item.id === req.params.id)
  if (!event) {
    return res.status(404).json({ message: 'Event not found' })
  }
  return res.json(event)
}

export async function getSponsors(_req, res) {
  try {
    if (isDbConnected()) {
      const sponsors = await Sponsor.find({ isActive: true }).sort({ displayOrder: 1 })
      if (sponsors.length > 0) {
        return res.json(sponsors.map((s) => s.toJSON()))
      }
    }
  } catch (error) {
    console.warn('DB sponsors lookup failed, falling back to local dataset:', error.message)
  }
  return res.json(contentData.sponsors)
}

export async function getFacilities(_req, res) {
  try {
    if (isDbConnected()) {
      const facilities = await Facility.find({ isActive: true }).sort({ createdAt: 1 })
      if (facilities.length > 0) {
        return res.json(facilities.map((f) => f.toJSON()))
      }
    }
  } catch (error) {
    console.warn('DB facilities lookup failed, falling back to local dataset:', error.message)
  }
  return res.json(contentData.facilities)
}

export async function getHotels(_req, res) {
  try {
    if (isDbConnected()) {
      const hotels = await Hotel.find({ isActive: true }).sort({ createdAt: 1 })
      if (hotels.length > 0) {
        return res.json(hotels.map((h) => h.toJSON()))
      }
    }
  } catch (error) {
    console.warn('DB hotels lookup failed, falling back to local dataset:', error.message)
  }
  return res.json(contentData.hotels || [])
}

export async function submitContact(req, res) {
  return res.status(201).json({
    message: 'Contact form submitted successfully',
    data: req.body
  })
}
