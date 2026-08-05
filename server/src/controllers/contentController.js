import { contentData } from '../data/contentData.js'

export async function getEvents(_req, res) {
  return res.json(contentData.events)
}

export async function getEventById(req, res) {
  const event = contentData.events.find((item) => item.id === req.params.id)
  if (!event) {
    return res.status(404).json({ message: 'Event not found' })
  }
  return res.json(event)
}

export async function getSponsors(_req, res) {
  return res.json(contentData.sponsors)
}

export async function getFacilities(_req, res) {
  return res.json(contentData.facilities)
}

export async function getHotels(_req, res) {
  return res.json(contentData.hotels || [])
}

export async function submitContact(req, res) {
  return res.status(201).json({
    message: 'Contact form submitted successfully',
    data: req.body
  })
}
