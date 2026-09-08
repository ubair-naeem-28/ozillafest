import mongoose from 'mongoose'
import { Event } from '../models/Event.js'
import { Hotel } from '../models/Hotel.js'
import { Sponsor } from '../models/Sponsor.js'
import { Facility } from '../models/Facility.js'
import { contentData } from './contentData.js'

export async function seedDatabase() {
  if (mongoose.connection.readyState !== 1) {
    return
  }

  try {
    // Seed Events
    const eventCount = await Event.countDocuments()
    if (eventCount === 0 && contentData.events?.length) {
      const eventDocs = contentData.events.map((e) => ({
        eventId: e.id,
        name: e.name,
        date: e.date,
        time: e.time,
        location: e.location,
        venue: e.location,
        description: e.description,
        capacity: 5000,
        status: e.id === 'oz2026' ? 'upcoming' : 'completed',
        isActive: true
      }))
      await Event.insertMany(eventDocs)
      console.log('✅ Seeded initial Events into MongoDB')
    }

    // Seed Hotels
    const hotelCount = await Hotel.countDocuments()
    if (hotelCount === 0 && contentData.hotels?.length) {
      const hotelDocs = contentData.hotels.map((h, index) => ({
        hotelId: `htl-${index + 1}`,
        name: h.name,
        address: h.address,
        contact: h.contact,
        description: h.description,
        rating: 5.0,
        distance: '5-10 mins from Festival Venue',
        amenities: ['Luxury Suites', 'High-Speed Wi-Fi', '24/7 Security', 'Valet Parking', 'Fine Dining'],
        isActive: true
      }))
      await Hotel.insertMany(hotelDocs)
      console.log('✅ Seeded initial Hotels into MongoDB')
    }

    // Seed Sponsors
    const sponsorCount = await Sponsor.countDocuments()
    if (sponsorCount === 0 && contentData.sponsors?.length) {
      const sponsorDocs = contentData.sponsors.map((s, index) => ({
        tier: s.tier,
        amount: s.amount,
        companyName: `${s.tier} Partner`,
        description: `Official ${s.tier} partner of OZILLA FEST 2026`,
        benefits: ['VIP Stage Access', 'Brand Activation Booth', 'Main SMD Logo Placement', 'Digital PR Amplification'],
        displayOrder: index + 1,
        isActive: true
      }))
      await Sponsor.insertMany(sponsorDocs)
      console.log('✅ Seeded initial Sponsors into MongoDB')
    }

    // Seed Facilities
    const facilityCount = await Facility.countDocuments()
    if (facilityCount === 0 && contentData.facilities?.length) {
      const facilityDocs = contentData.facilities.map((f) => ({
        name: f.name,
        description: f.description,
        category: 'Event Experience',
        icon: 'sparkles',
        isActive: true
      }))
      await Facility.insertMany(facilityDocs)
      console.log('✅ Seeded initial Facilities into MongoDB')
    }
  } catch (error) {
    console.warn('⚠️ Seeding notice (non-fatal):', error.message)
  }
}
