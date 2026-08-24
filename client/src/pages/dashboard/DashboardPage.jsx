import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'
import { assetUrl } from '../../utils/assetUrl.util'

const heroImage = assetUrl('/assets/logo.jpeg')

const highlights = [
  {
    icon: '⚡',
    title: 'Live Music',
    description: 'High-energy stage nights with immersive sound, lights, and crowd moments.',
    accent: '#ffb000'
  },
  {
    icon: '🎤',
    title: 'Celebrity Singers',
    description: 'A curated lineup of crowd-favorite artists for a premium festival experience.',
    accent: '#ff4d2e'
  },
  {
    icon: '🎪',
    title: 'Entertainment',
    description: 'Brand zones, creators, food streets, games, activations, and social experiences.',
    accent: '#00f2fe'
  },
  {
    icon: '🏨',
    title: 'Luxury Hotels',
    description: 'Recommended Lahore stays for visitors, partners, performers, and teams.',
    accent: '#9b51e0'
  },
  {
    icon: '🎟️',
    title: 'Easy Ticket Booking',
    description: 'A simple ticket portal with user details, payment proof, QR tickets, and history.',
    accent: '#00f5a0'
  },
  {
    icon: '🤝',
    title: 'Brand Partners',
    description: 'High-visibility sponsorship and collaboration opportunities for premium brands.',
    accent: '#ff007f'
  }
]

const stats = [
  { value: 5000, suffix: '+', label: 'Visitors', icon: '👥' },
  { value: 50, suffix: '+', label: 'Artists', icon: '🎸' },
  { value: 100, suffix: '+', label: 'Partners', icon: '💎' },
  { value: 2, suffix: '', label: 'Festival Days', icon: '🔥' }
]

const reasons = [
  { title: 'Amazing Performances', subtitle: 'Live stage magic', icon: '🎶' },
  { title: 'International Stage Energy', subtitle: 'World-class production', icon: '✨' },
  { title: 'Food Festival Culture', subtitle: 'Gourmet street eats', icon: '🍔' },
  { title: 'Safe Family Environment', subtitle: 'Secure & curated space', icon: '🛡️' },
  { title: 'Premium Guest Experience', subtitle: 'VIP hospitality', icon: '👑' },
  { title: 'Exclusive Partner Discounts', subtitle: 'Perks across Lahore', icon: '🏷️' }
]

const upcomingEvents = [
  {
    title: 'Ozilla Festival 2026',
    date: '2026',
    tag: 'Flagship Event',
    description: 'A premium Lahore festival experience built around music, food, creators, and partners.'
  },
  {
    title: 'Future Events',
    date: 'Coming Soon',
    tag: 'Announcing Soon',
    description: 'Upcoming brand activations, entertainment nights, and community experiences.'
  },
  {
    title: 'Celebrity Night',
    date: 'Live Stage',
    tag: 'Exclusive Night',
    description: 'A powerful stage experience featuring celebrity performers and crowd moments.'
  }
]

const celebrityPreview = [
  { name: 'Talwinder', role: 'Headliner', genre: 'Indie Fusion', image: assetUrl('/assets/ozilla/talwinder.jpg') },
  { name: 'Bohemia', role: 'Rap Icon', genre: 'Punjabi Rap', image: assetUrl('/assets/ozilla/Bohemia.jpg') },
  { name: 'Hassan Raheem', role: 'Pop Sensation', genre: 'R&B / Pop', image: assetUrl('/assets/ozilla/hassan-raheem.jpg') },
  { name: 'Imran Khan', role: 'Urban Pop', genre: 'Punjabi Urban', image: assetUrl('/assets/ozilla/Imran-Khan.jpg') }
]

const partnerItems = [
  'Restaurants',
  'Hotels',
  'Creators',
  'Sponsors',
  'Media',
  'Brands',
  'Food Partners',
  'Venue Partners'
]

// Light Presets for Interactive Stage Background
const LIGHT_PRESETS = {
  gold: { name: 'Golden Flame', primary: '#ffb000', secondary: '#ff6b1a', accent: '#ffe066', laser: 'rgba(255, 176, 0, ' },
  cyber: { name: 'Cyber Neon', primary: '#00f2fe', secondary: '#7928ca', accent: '#4facfe', laser: 'rgba(0, 242, 254, ' },
  sunset: { name: 'Sunset Violet', primary: '#ff007f', secondary: '#7928ca', accent: '#ff007f', laser: 'rgba(255, 0, 127, ' },
  aurora: { name: 'Cosmic Aurora', primary: '#00f5a0', secondary: '#00d2ff', accent: '#00f5a0', laser: 'rgba(0, 245, 160, ' }
}

/**
 * 60FPS Canvas Stage Lighting & Particle System
 */
function HeroStageCanvas({ currentPreset, beatMode }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Create Stage Energy Particles
    const numParticles = beatMode ? 75 : 45
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (beatMode ? 2.5 : 1.2),
      vy: (Math.random() - 0.5) * (beatMode ? 2.5 : 1.2),
      radius: Math.random() * 3 + 1.5,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.5 ? LIGHT_PRESETS[currentPreset].primary : LIGHT_PRESETS[currentPreset].secondary,
      pulseSpeed: Math.random() * 0.05 + 0.02
    }))

    // Laser Light Beam angles
    let laserAngle = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth Mouse Position Damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08

      const preset = LIGHT_PRESETS[currentPreset]

      // Draw Cursor Ambient Spotlight
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        beatMode ? 360 : 260
      )
      gradient.addColorStop(0, preset.laser + '0.22)')
      gradient.addColorStop(0.5, preset.laser + '0.06)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, beatMode ? 360 : 260, 0, Math.PI * 2)
      ctx.fill()

      // Draw Stage Sweeping Laser Beams
      laserAngle += beatMode ? 0.025 : 0.012
      const beamCount = beatMode ? 6 : 4
      const stageTopY = 0

      for (let i = 0; i < beamCount; i++) {
        const offsetAngle = laserAngle + (i * Math.PI) / (beamCount / 2)
        const beamStartX = (width / (beamCount + 1)) * (i + 1)
        const beamEndX = beamStartX + Math.sin(offsetAngle) * (width * 0.35)

        const laserGrad = ctx.createLinearGradient(beamStartX, stageTopY, beamEndX, height)
        laserGrad.addColorStop(0, preset.laser + '0.45)')
        laserGrad.addColorStop(0.7, preset.laser + '0.08)')
        laserGrad.addColorStop(1, 'transparent')

        ctx.strokeStyle = laserGrad
        ctx.lineWidth = beatMode ? 3.5 : 2
        ctx.shadowBlur = beatMode ? 20 : 10
        ctx.shadowColor = preset.primary

        ctx.beginPath()
        ctx.moveTo(beamStartX, stageTopY)
        ctx.lineTo(beamEndX, height)
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      // Draw Particles & Cursor Physics
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse attraction/repulsion physics
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          const force = (180 - dist) / 180
          p.x -= (dx / dist) * force * (beatMode ? 5 : 2.5)
          p.y -= (dy / dist) * force * (beatMode ? 5 : 2.5)
        }

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.015

        ctx.save()
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha))
        ctx.fillStyle = p.color
        ctx.shadowBlur = 12
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * (beatMode ? 1.4 : 1), 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentPreset, beatMode])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}

/**
 * 3D Tilt Card Wrapper with Dynamic Spotlight Glare
 */
function TiltCard({ children, className = '', maxTilt = 14, style = {} }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, opacity: 0 })

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setTilt({ rotateX, rotateY, glareX, glareY, opacity: 1 })
  }, [maxTilt])

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({ ...prev, rotateX: 0, rotateY: 0, opacity: 0 }))
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        position: 'relative',
        ...style
      }}
    >
      {children}
      {/* Dynamic Glare Overlay */}
      <div
        className="tilt-glare-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: tilt.opacity,
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.28), transparent 60%)`,
          transition: 'opacity 250ms ease',
          zIndex: 10
        }}
      />
    </motion.div>
  )
}

/**
 * Animated Number Counter
 */
function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let frameId = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 1400
        const start = performance.now()

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(value * eased))

          if (progress < 1) {
            frameId = requestAnimationFrame(animate)
          }
        }

        frameId = requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/**
 * Kinetic Word-by-Word Title Reveal
 */
function KineticTitle({ text }) {
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -60 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 180, damping: 14 }
    }
  }

  return (
    <motion.h1
      className="home-kinetic-title"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
          className="kinetic-word"
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.h1>
  )
}

/**
 * Main Dashboard Page Component
 */
function DashboardPage() {
  const [stagePreset, setStagePreset] = useState('gold')
  const [beatMode, setBeatMode] = useState(false)

  // Motion Container Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 16 }
    }
  }

  return (
    <main className={`home-premium preset-${stagePreset}`}>
      {/* Hero Section with Live Canvas & Sound Visualizer */}
      <section className="home-hero" aria-label="Ozilla Festival 2026">
        <HeroStageCanvas currentPreset={stagePreset} beatMode={beatMode} />

        <motion.img
          className="home-hero-media"
          src={heroImage}
          alt="Ozilla Festival stage"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.58 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          onError={(e) => {
            e.currentTarget.src = assetUrl('/assets/ozilla/logo.png')
          }}
        />
        <div className="home-hero-overlay" />

        {/* Floating Interactive Stage Controls */}
        <div className="home-stage-controls" title="Custom Stage Controls">
          <button
            className={`beat-toggle-btn ${beatMode ? 'active' : ''}`}
            onClick={() => setBeatMode(!beatMode)}
            aria-label="Toggle Beat Mode"
          >
            <span className="equalizer-bars">
              <i />
              <i />
              <i />
            </span>
            {beatMode ? 'BEAT MODE ON' : 'PULSE BEAT'}
          </button>

          <div className="preset-selector">
            {Object.keys(LIGHT_PRESETS).map((key) => (
              <button
                key={key}
                className={`preset-pill ${stagePreset === key ? 'active' : ''}`}
                style={{ '--accent': LIGHT_PRESETS[key].primary }}
                onClick={() => setStagePreset(key)}
              >
                {LIGHT_PRESETS[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="home-hero-content">
          <motion.p
            className="home-kicker"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            LAHORE PUNJAB
          </motion.p>

          <KineticTitle text="OZILLA FESTIVAL 2026" />

          <motion.p
            className="home-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Experience music, entertainment, culture and unforgettable moments.
          </motion.p>

          <motion.div
            className="home-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <Link className="home-btn home-btn-primary" to="/events">
              <span>Explore Events</span>
              <span className="btn-glow-spark" />
            </Link>
            <Link className="home-btn home-btn-secondary" to="/tickets">
              Purchase Tickets
            </Link>
          </motion.div>

          <motion.div
            className="home-hero-badges"
            aria-label="Festival highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span>2026 Lahore</span>
            <span>Live Music</span>
            <span>Family Experience</span>
          </motion.div>
        </div>

        <div className="home-scroll-indicator" aria-hidden="true">
          <span />
          Scroll
        </div>
      </section>

      <div className="home-hero-divider" aria-hidden="true" />

      {/* Intro Section */}
      <motion.section
        className="home-section home-intro-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section-heading home-center-heading">
          <p className="home-eyebrow">Festival Details</p>
          <h2>Future of <span>Entertainment</span></h2>
          <p>{ozillaProfessionalContent.objective}</p>
        </div>
      </motion.section>

      {/* Highlights Grid with 3D Tilt Cards */}
      <motion.section
        className="home-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="home-section-heading">
          <p className="home-eyebrow">Highlights</p>
          <h2>Everything visitors expect from a premium festival.</h2>
        </div>

        <div className="home-highlight-grid">
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <TiltCard className="home-highlight-card" maxTilt={12}>
                <div className="home-card-icon" style={{ '--accent-color': item.accent }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-ambient-glow" style={{ background: item.accent }} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Animated Stats Section */}
      <motion.section
        className="home-stats-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-stats-grid">
          {stats.map((item) => (
            <TiltCard key={item.label} className="home-stat-card" maxTilt={10}>
              <span className="stat-icon-badge">{item.icon}</span>
              <strong>
                <CountUp value={item.value} suffix={item.suffix} />
              </strong>
              <span>{item.label}</span>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Ozilla */}
      <motion.section
        className="home-section home-split-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section-heading">
          <p className="home-eyebrow">Why Choose Ozilla</p>
          <h2>Designed for music lovers, families, creators and brands.</h2>
          <p>
            A safe, premium and highly shareable event experience with live performances,
            food culture, partner discounts and powerful brand moments.
          </p>
        </div>

        <div className="home-reason-grid">
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={itemVariants}>
              <TiltCard className="home-reason-card" maxTilt={12}>
                <span className="reason-icon">{reason.icon}</span>
                <div className="reason-info">
                  <h4>{reason.title}</h4>
                  <p>{reason.subtitle}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section
        className="home-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section-heading">
          <p className="home-eyebrow">Upcoming Events</p>
          <h2>Festival moments coming next.</h2>
        </div>

        <div className="home-event-grid">
          {upcomingEvents.map((event) => (
            <motion.div key={event.title} variants={itemVariants}>
              <TiltCard className="home-event-card" maxTilt={12}>
                <div className="event-card-inner">
                  <div className="event-tag-badge">{event.tag}</div>
                  <span>{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <Link to="/events" className="event-link-btn">
                    View Details →
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Celebrity Preview with Soundwave Hover Effect */}
      <motion.section
        className="home-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section-heading">
          <p className="home-eyebrow">Celebrity Preview</p>
          <h2>Featured voices for the Ozilla stage.</h2>
        </div>

        <div className="home-celebrity-grid">
          {celebrityPreview.map((artist) => (
            <motion.div key={artist.name} variants={itemVariants}>
              <TiltCard className="home-celebrity-card" maxTilt={16}>
                <img
                  src={artist.image}
                  alt={artist.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg')
                  }}
                />
                <div className="artist-soundwave-ring">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="home-celebrity-overlay">
                  <span className="celebrity-role-badge">{artist.role}</span>
                  <h3>{artist.name}</h3>
                  <p className="celebrity-genre">{artist.genre}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Partner Marquee */}
      <motion.section
        className="home-partner-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section-heading home-center-heading">
          <p className="home-eyebrow">Partners</p>
          <h2>Built for brands that want real audience attention.</h2>
        </div>

        <div className="home-partner-marquee">
          <div className="home-partner-track">
            {[...partnerItems, ...partnerItems, ...partnerItems].map((partner, index) => (
              <span key={`${partner}-${index}`} className="partner-chip">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dynamic CSS Styles */}
      <style>{`
        .home-premium {
          --home-deep: #041719;
          --home-ink: #101819;
          --home-muted: #55706f;
          --home-card: rgba(255, 250, 242, 0.88);
          --home-gold: #ffb000;
          --home-wine: #39132f;
          color: var(--home-ink);
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 18%, rgba(255, 176, 0, 0.09), transparent 24rem),
            radial-gradient(circle at 90% 42%, rgba(7, 51, 50, 0.14), transparent 26rem),
            linear-gradient(180deg, #fffaf4 0%, #f7eee8 48%, #fffaf4 100%);
        }

        .home-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(13rem, 20vw, 16rem) 1.25rem 5rem;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 40%, rgba(255, 176, 0, 0.2), transparent 22rem),
            radial-gradient(circle at 18% 78%, rgba(255, 77, 46, 0.18), transparent 20rem),
            radial-gradient(circle at 82% 18%, rgba(11, 79, 76, 0.72), transparent 26rem),
            linear-gradient(135deg, #020b0d, #041719 48%, #39132f);
        }

        .home-hero-media {
          position: absolute;
          left: 50%;
          top: 48%;
          width: min(78vw, 860px);
          height: min(70vh, 680px);
          object-fit: contain;
          opacity: 0.54;
          filter: saturate(1.25) contrast(1.1) drop-shadow(0 0 45px rgba(255, 176, 0, 0.28));
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 38%, rgba(255, 176, 0, 0.08), transparent 20rem),
            linear-gradient(90deg, rgba(2, 12, 12, 0.92), rgba(2, 12, 12, 0.44), rgba(2, 12, 12, 0.88)),
            linear-gradient(180deg, rgba(2, 12, 12, 0.26), rgba(2, 12, 12, 0.92));
          z-index: 1;
        }

        /* Interactive Stage Controls Widget */
        .home-stage-controls {
          position: absolute;
          right: 2rem;
          bottom: 2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .beat-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(4, 23, 25, 0.75);
          color: #fff;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          cursor: pointer;
          backdrop-filter: blur(16px);
          transition: all 220ms ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .beat-toggle-btn.active {
          background: linear-gradient(135deg, #ff007f, #7928ca);
          border-color: #ff007f;
          box-shadow: 0 0 25px rgba(255, 0, 127, 0.5);
        }

        .equalizer-bars {
          display: inline-flex;
          align-items: flex-end;
          gap: 3px;
          height: 14px;
        }

        .equalizer-bars i {
          width: 3px;
          background: var(--home-gold);
          border-radius: 2px;
          height: 100%;
          animation: eqPulse 800ms ease-in-out infinite alternate;
        }

        .equalizer-bars i:nth-child(2) { animation-delay: 200ms; }
        .equalizer-bars i:nth-child(3) { animation-delay: 400ms; }

        @keyframes eqPulse {
          0% { height: 30%; }
          100% { height: 100%; }
        }

        .preset-selector {
          display: flex;
          gap: 0.4rem;
          padding: 0.4rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
        }

        .preset-pill {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .preset-pill.active,
        .preset-pill:hover {
          color: #fff;
          background: var(--accent, #ffb000);
          box-shadow: 0 0 14px var(--accent, #ffb000);
        }

        .home-hero-content {
          width: min(1120px, 100%);
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .home-kicker,
        .home-eyebrow {
          color: var(--home-gold);
          font-size: 0.88rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .home-kinetic-title {
          max-width: 920px;
          margin: 0.7rem 0 1rem;
          font-size: clamp(3.4rem, 9.5vw, 8.5rem);
          line-height: 0.88;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .kinetic-word {
          display: inline-block;
          background: linear-gradient(135deg, #ffffff 30%, #ffd36a 70%, #ff6b1a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.5));
          cursor: default;
        }

        .home-hero-copy {
          max-width: 620px;
          color: rgba(255, 255, 255, 0.86);
          font-size: clamp(1.08rem, 2vw, 1.45rem);
          line-height: 1.65;
        }

        .home-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.4rem;
          padding: 0 1.6rem;
          border-radius: 999px;
          font-weight: 900;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .home-btn-primary {
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          color: #111;
          box-shadow: 0 18px 38px rgba(255, 126, 0, 0.35);
        }

        .home-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 24px 48px rgba(255, 126, 0, 0.5);
        }

        .home-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .home-btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.16);
        }

        .home-hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.4rem;
        }

        .home-hero-badges span {
          display: inline-flex;
          align-items: center;
          min-height: 2.3rem;
          padding: 0 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(16px);
        }

        .home-scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 1.4rem;
          transform: translateX(-50%);
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          z-index: 2;
        }

        .home-scroll-indicator span {
          width: 1px;
          height: 2.8rem;
          background: linear-gradient(180deg, transparent, #ffb000, transparent);
          animation: homePulse 1.7s ease-in-out infinite;
        }

        @keyframes homePulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.75); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        .home-hero-divider {
          width: min(1180px, calc(100% - 2rem));
          height: 1px;
          margin: -1px auto 0;
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.55), rgba(11, 79, 76, 0.32), transparent);
          position: relative;
          z-index: 3;
        }

        .home-section,
        .home-stats-section,
        .home-partner-section {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) 0;
          position: relative;
          isolation: isolate;
        }

        .home-section-heading {
          max-width: 760px;
          margin-bottom: 2.2rem;
        }

        .home-center-heading {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .home-section-heading h2 {
          margin-top: 0.45rem;
          color: var(--home-ink);
          font-size: clamp(2.2rem, 5.5vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        .home-section-heading h2 span {
          color: #ff6b1a;
        }

        .home-section-heading p:not(.home-eyebrow) {
          margin-top: 1rem;
          color: var(--home-muted);
          font-size: 1.05rem;
          line-height: 1.75;
        }

        /* Highlight Cards Grid */
        .home-highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .home-highlight-card {
          min-height: 240px;
          padding: 1.5rem;
          border: 1px solid rgba(11, 79, 76, 0.15);
          border-radius: 26px;
          background: linear-gradient(145deg, rgba(255, 250, 245, 0.94), rgba(246, 238, 232, 0.8));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          overflow: hidden;
          transition: box-shadow 300ms ease, border-color 300ms ease;
        }

        .home-highlight-card:hover {
          border-color: rgba(255, 176, 0, 0.6);
          box-shadow: 0 30px 70px rgba(18, 34, 34, 0.16);
        }

        .home-card-icon {
          width: 3.4rem;
          height: 3.4rem;
          display: grid;
          place-items: center;
          font-size: 1.6rem;
          margin-bottom: 1.4rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          color: #ffd36a;
          box-shadow: 0 10px 24px rgba(4, 23, 25, 0.25);
        }

        .home-highlight-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--home-ink);
          margin-bottom: 0.6rem;
        }

        .home-highlight-card p {
          color: var(--home-muted);
          font-size: 0.96rem;
          line-height: 1.65;
        }

        /* Stats Grid */
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.2rem;
          padding: 1.2rem;
          border-radius: 32px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 28px 75px rgba(2, 11, 13, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .home-stat-card {
          min-height: 155px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.2rem;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          backdrop-filter: blur(12px);
          transition: background 220ms ease;
        }

        .home-stat-card:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .stat-icon-badge {
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
        }

        .home-stat-card strong {
          display: block;
          color: #ffd36a;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1;
        }

        .home-stat-card span:not(.stat-icon-badge) {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 800;
          font-size: 0.9rem;
          margin-top: 0.35rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Reasons Grid */
        .home-split-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
        }

        .home-reason-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .home-reason-card {
          min-height: 110px;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 45px rgba(18, 34, 34, 0.08);
          backdrop-filter: blur(12px);
        }

        .reason-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .reason-info h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--home-ink);
          margin-bottom: 0.2rem;
        }

        .reason-info p {
          font-size: 0.85rem;
          color: var(--home-muted);
        }

        /* Upcoming Events */
        .home-event-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .home-event-card {
          border-radius: 28px;
          background: #fffaf5;
          box-shadow: 0 22px 58px rgba(18, 34, 34, 0.1);
          padding: 1.6rem;
          border: 1px solid rgba(11, 79, 76, 0.12);
        }

        .event-tag-badge {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb000, #ff6b1a);
          color: #111;
          font-size: 0.72rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .home-event-card span:not(.event-tag-badge) {
          display: block;
          color: #9a3b0b;
          font-weight: 900;
          font-size: 0.8rem;
          margin-bottom: 0.4rem;
        }

        .home-event-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--home-ink);
          margin-bottom: 0.6rem;
        }

        .home-event-card p {
          color: var(--home-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .event-link-btn {
          font-weight: 800;
          color: #39132f;
          text-decoration: none;
          transition: color 200ms ease;
        }

        .event-link-btn:hover {
          color: #ff6b1a;
        }

        /* Celebrity Grid */
        .home-celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .home-celebrity-card {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          border-radius: 28px;
          background: #111;
          box-shadow: 0 25px 60px rgba(18, 34, 34, 0.16);
          isolation: isolate;
        }

        .home-celebrity-card img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .home-celebrity-card:hover img {
          transform: scale(1.08);
        }

        .home-celebrity-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          background: linear-gradient(180deg, transparent 36%, rgba(2, 10, 10, 0.94));
          z-index: 2;
        }

        .celebrity-role-badge {
          display: inline-block;
          width: fit-content;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.25);
          border: 1px solid rgba(255, 176, 0, 0.5);
          color: #ffd36a;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          backdrop-filter: blur(8px);
        }

        .home-celebrity-overlay h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .celebrity-genre {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          margin-top: 0.2rem;
        }

        /* Partner Marquee */
        .home-partner-marquee {
          overflow: hidden;
          padding: 1.2rem;
          border-radius: 30px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 24px 65px rgba(2, 11, 13, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-partner-track {
          display: inline-flex;
          min-width: max-content;
          gap: 1.2rem;
          animation: homePartnerMove 28s linear infinite;
        }

        .partner-chip {
          min-width: 170px;
          padding: 1.1rem 1.4rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-align: center;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }

        @keyframes homePartnerMove {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }

        @media (max-width: 1024px) {
          .home-highlight-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-stats-grid,
          .home-split-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .home-highlight-grid,
          .home-stats-grid,
          .home-split-section,
          .home-reason-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: 1fr;
          }

          .home-stage-controls {
            right: 1rem;
            bottom: 1rem;
          }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
