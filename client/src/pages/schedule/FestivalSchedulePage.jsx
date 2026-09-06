import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const scheduleData = {
  day1: {
    date: 'Saturday, November 01, 2026',
    title: 'Day 1: The Grand Opening & Cultural Genesis',
    theme: 'Fusion, Indie Rhythms & Opening Ceremony',
    gatesOpen: '03:00 PM',
    curfew: '12:30 AM',
    timeline: [
      {
        time: '03:00 PM - 04:00 PM',
        stage: 'Main Entrance & Ingress',
        title: 'Gate Opening & Red Carpet Welcoming',
        desc: 'Fast-track QR scanning at gates, welcome drinks, media wall red carpet arrivals, and official festival merchandise store opening.',
        category: 'Entry',
        highlight: false
      },
      {
        time: '04:00 PM - 05:30 PM',
        stage: 'Central Promenade & Food Court',
        title: 'Sponsor Activation & Food Carnival Launch',
        desc: 'Over 40+ partner culinary stalls, brand experience booths, interactive gaming lounges, and acoustic busker performances.',
        category: 'Experience',
        highlight: false
      },
      {
        time: '05:30 PM - 07:00 PM',
        stage: 'Indie & Discovery Stage',
        title: 'Emerging Indie & Sufi-Rock Showcase',
        desc: 'Live performances by leading underground indie bands, modern Sufi fusion ensembles, and youth creator collaborations.',
        category: 'Live Music',
        highlight: false
      },
      {
        time: '07:15 PM - 08:15 PM',
        stage: 'Main Arena',
        title: 'Grand Festival Opening Ceremony & Light Show',
        desc: 'Official keynote by festival founders, sponsor recognition tributes, high-powered multi-beam laser inauguration, and 3D hologram showcase.',
        category: 'Ceremony',
        highlight: true
      },
      {
        time: '08:30 PM - 10:45 PM',
        stage: 'Main Arena Stage',
        title: 'Prime Time Pop & Rock Headliners',
        desc: 'Blockbuster performances by Pakistan’s top-charting pop icons, live orchestral backing, and crowd-favorite anthem singalongs.',
        category: 'Headliner',
        highlight: true
      },
      {
        time: '11:00 PM - 12:30 AM',
        stage: 'Electronic Beats Arena',
        title: 'Midnight DJ & Laser EDM Extravaganza',
        desc: 'High-energy electronic dance music, confetti cannons, smoke blasters, and immersive LED visuals closing Day 1.',
        category: 'EDM / DJ',
        highlight: true
      }
    ]
  },
  day2: {
    date: 'Sunday, November 02, 2026',
    title: 'Day 2: The Grand Finale & Star Power Spectacular',
    theme: 'Celebrity Headliners, Mega Concert & Pyro Finale',
    gatesOpen: '02:30 PM',
    curfew: '12:30 AM',
    timeline: [
      {
        time: '02:30 PM - 04:00 PM',
        stage: 'Main Gates & VIP Deck',
        title: 'VIP Lounge Ingress & Networking Reception',
        desc: 'Early access for VIP pass holders, executive lounge high tea, artist meet & greets, and celebrity media lounge interviews.',
        category: 'VIP Access',
        highlight: false
      },
      {
        time: '04:00 PM - 05:30 PM',
        stage: 'Youth Arena & Gaming Zone',
        title: 'Esports Championship & Creator Challenges',
        desc: 'Live gaming tournament finals on massive SMD displays, celebrity creator showmatches, and youth dance crew battles.',
        category: 'Youth & Gaming',
        highlight: false
      },
      {
        time: '05:30 PM - 07:15 PM',
        stage: 'Sunset Stage',
        title: 'Folk, Qawwali & Fusion Heritage Sets',
        desc: 'Soulful sunset Qawwali and regional fusion performances featuring traditional instruments mixed with modern ambient synthesizers.',
        category: 'Cultural Music',
        highlight: false
      },
      {
        time: '07:30 PM - 08:30 PM',
        stage: 'Main Arena',
        title: 'Sponsorship Awards & Creator Honors',
        desc: 'Official partner appreciation ceremonies, brand campaign awards, and youth creator milestone presentations.',
        category: 'Awards',
        highlight: false
      },
      {
        time: '08:30 PM - 11:30 PM',
        stage: 'Main Mega Stage',
        title: 'The Mega Celebrity Grand Finale Concert',
        desc: 'The biggest headline concert of the year featuring 4 superstar artists performing back-to-back non-stop blockbuster sets.',
        category: 'Mega Headliner',
        highlight: true
      },
      {
        time: '11:45 PM - 12:30 AM',
        stage: 'Main Arena Sky',
        title: 'Grand Pyro Fireworks & 500-Drone Sky Ballet',
        desc: 'A world-class synchronized fireworks display and 500 LED illuminated drones crafting the Ozilla emblem and Pakistan map in the night sky.',
        category: 'Grand Finale',
        highlight: true
      }
    ]
  }
}

function FestivalSchedulePage() {
  const [activeDay, setActiveDay] = useState('day1')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const currentDayData = scheduleData[activeDay]
  const categories = ['all', 'Live Music', 'Headliner', 'EDM / DJ', 'Experience', 'Ceremony', 'Youth & Gaming', 'Cultural Music', 'Grand Finale']

  const filteredTimeline = currentDayData.timeline.filter((item) => {
    if (selectedCategory === 'all') return true
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase())
  })

  return (
    <main className="schedule-page-wrap" style={{ minHeight: '100vh', background: '#0b0c10', color: '#e5e7eb', paddingBottom: '80px' }}>
      {/* ══ HERO BANNER ══ */}
      <section style={{ background: 'linear-gradient(180deg, #3d0c1e 0%, #0b0c10 100%)', padding: '100px 20px 40px', textAlign: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <span style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#ffd700', border: '1px solid #d4af37', padding: '6px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
          OFFICIAL FESTIVAL PROGRAM
        </span>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: '#ffffff', margin: '16px 0 12px', letterSpacing: '1px' }}>
          Day 1 & Day 2 Full Lineup Schedule
        </h1>
        <p style={{ maxWidth: '680px', margin: '0 auto 24px', color: '#d1d5db', fontSize: '16px', lineHeight: '1.6' }}>
          Discover the complete minute-by-minute itinerary, stage assignments, headliner performance slots, and grand finale fireworks for Ozilla Festival 2026.
        </p>

        {/* ── DAY SWITCHER TABS ── */}
        <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.4)', padding: '6px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setActiveDay('day1')}
            style={{
              padding: '12px 28px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeDay === 'day1' ? 'linear-gradient(135deg, #d4af37 0%, #aa8420 100%)' : 'transparent',
              color: activeDay === 'day1' ? '#111827' : '#9ca3af',
              boxShadow: activeDay === 'day1' ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            📅 DAY 1 (Nov 01)
          </button>
          <button
            type="button"
            onClick={() => setActiveDay('day2')}
            style={{
              padding: '12px 28px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeDay === 'day2' ? 'linear-gradient(135deg, #d4af37 0%, #aa8420 100%)' : 'transparent',
              color: activeDay === 'day2' ? '#111827' : '#9ca3af',
              boxShadow: activeDay === 'day2' ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            🎉 DAY 2 (Nov 02)
          </button>
        </div>
      </section>

      {/* ══ CONTENT SHELL ══ */}
      <div style={{ maxWidth: '1000px', margin: '40px auto 0', padding: '0 20px' }}>
        {/* Day Header Card */}
        <div style={{ background: 'linear-gradient(135deg, rgba(61, 12, 30, 0.4) 0%, rgba(22, 24, 34, 0.8) 100%)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '20px', padding: '28px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ color: '#ffd700', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {currentDayData.date}
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: '6px 0 4px' }}>
              {currentDayData.title}
            </h2>
            <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>
              Theme: <span style={{ color: '#e5e7eb', fontWeight: '600' }}>{currentDayData.theme}</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '10px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase' }}>Gates Open</span>
              <strong style={{ display: 'block', fontSize: '16px', color: '#34d399' }}>{currentDayData.gatesOpen}</strong>
            </div>
            <Link
              to={`/tickets?day=${activeDay}`}
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #aa8420 100%)',
                color: '#111827',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                display: 'inline-block'
              }}
            >
              Book {activeDay === 'day1' ? 'Day 1' : 'Day 2'} Pass →
            </Link>
          </div>
        </div>

        {/* ── TIMELINE CARDS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                background: item.highlight ? 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26, 28, 40, 0.95) 100%)' : 'rgba(255, 255, 255, 0.03)',
                border: item.highlight ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 220px) 1fr',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {item.highlight && (
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span style={{ background: '#d4af37', color: '#111', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>
                    ★ MUST-SEE
                  </span>
                </div>
              )}
              {/* Left Column: Timing & Stage */}
              <div>
                <span style={{ fontSize: '15px', fontWeight: '800', color: '#ffd700', display: 'block', marginBottom: '6px' }}>
                  🕒 {item.time}
                </span>
                <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '10px' }}>
                  📍 {item.stage}
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', background: 'rgba(255,255,255,0.06)', color: '#d1d5db', padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>
                  {item.category}
                </span>
              </div>

              {/* Right Column: Title & Description */}
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div style={{ marginTop: '48px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '20px', padding: '36px 20px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: '0 0 10px' }}>
            Ready to Experience the Magic Live?
          </h3>
          <p style={{ color: '#9ca3af', maxWidth: '520px', margin: '0 auto 20px', fontSize: '14px' }}>
            Choose between Single Day Passes or the Full Weekend Access Pass with exclusive VIP Lounge & fast-track stage access.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/tickets"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #aa8420 100%)',
                color: '#111827',
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: '800',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)'
              }}
            >
              Get Festival Passes Now →
            </Link>
            <Link
              to="/hotels"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none'
              }}
            >
              Explore Partner Hotels
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FestivalSchedulePage
