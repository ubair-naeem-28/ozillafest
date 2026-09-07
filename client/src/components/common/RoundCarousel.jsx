import React, { useEffect, useRef, useState, useCallback } from 'react'
import { assetUrl } from '../../utils/assetUrl.util'

const DEFAULT_SINGERS = [
  {
    name: 'TALWINDER',
    isHeadliner: true,
    genre: 'Indie Pop / Punjabi Fusion',
    stage: 'Main Prism Stage',
    bpm: '128 BPM',
    vibe: 'Euphoric Night',
    src: assetUrl('/assets/ozilla/talwinder.jpg'),
    image: assetUrl('/assets/ozilla/talwinder.jpg')
  },
  {
    name: 'IMRAN KHAN',
    isHeadliner: false,
    genre: 'Punjabi Pop / Urban',
    stage: 'Neon Bass Arena',
    bpm: '132 BPM',
    vibe: 'High Energy',
    src: assetUrl('/assets/ozilla/Imran-Khan.jpg'),
    image: assetUrl('/assets/ozilla/Imran-Khan.jpg')
  },
  {
    name: 'BOHEMIA',
    isHeadliner: false,
    genre: 'Punjabi Rap / Desi Hip Hop',
    stage: 'Underground Stage',
    bpm: '95 BPM',
    vibe: 'Heavy Bass',
    src: assetUrl('/assets/ozilla/Bohemia.jpg'),
    image: assetUrl('/assets/ozilla/Bohemia.jpg')
  },
  {
    name: 'HASSAN RAHEEM',
    isHeadliner: false,
    genre: 'Pop / Indie R&B',
    stage: 'Sunset Stage',
    bpm: '115 BPM',
    vibe: 'Golden Hour Chill',
    src: assetUrl('/assets/ozilla/hassan-raheem.jpg'),
    image: assetUrl('/assets/ozilla/hassan-raheem.jpg')
  }
]

export default function RoundCarousel({
  items = DEFAULT_SINGERS,
  images,
  imageWidth = 280,
  imageHeight = 390,
  spacing = 2.8,
  speed = 5.5,
  direction = 'right',
  drag = true,
  sensitivity = 4.2,
  tilt = -6,
  perspective = 2600,
  cornerRadius = 24,
  innerDim = 3.5,
  background = 'transparent',
  style = {},
  renderItem,
  onItemClick,
  showControls = true,
  autoRotate = true,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )

  // Track window resizing for responsive dimensions
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive card width/height
  const responsiveWidth = windowWidth < 640 ? Math.min(imageWidth, 230) : windowWidth < 1024 ? Math.min(imageWidth, 260) : imageWidth
  const responsiveHeight = windowWidth < 640 ? Math.round(responsiveWidth * 1.38) : imageHeight

  // Determine list of items; if fewer than 6, duplicate to create a complete 3D cylindrical ring
  const rawList = items && items.length > 0 ? items : (images && images.length > 0 ? images : DEFAULT_SINGERS)
  const displayItems = rawList.length < 6 ? [...rawList, ...rawList] : rawList
  const count = displayItems.length

  const ringRef = useRef(null)
  const rafRef = useRef(0)
  const rotYRef = useRef(0)
  const velRef = useRef(0)
  const lastRef = useRef(0)
  const dragRef = useRef({ active: false, x: 0, lastX: 0, lastTime: 0 })

  const angle = 360 / count
  const factor = 1 + spacing * 0.15
  const radius = (responsiveWidth * factor) / (2 * Math.tan(Math.PI / count))
  const radiusPx = cornerRadius
  const degPerSec = speed * 6 * (direction === 'left' ? -1 : 1)

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return

    const apply = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`
    }
    apply()

    const draw = (now) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0
      lastRef.current = now
      const f = Math.min(dt, 0.1)
      const d = dragRef.current

      if (!d.active) {
        if (Math.abs(velRef.current) > 0.05) {
          rotYRef.current += velRef.current * f
          velRef.current *= 0.94 // Inertia damping
        } else if (autoRotate && !isHovered) {
          rotYRef.current += degPerSec * f
        }
      }
      apply()
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [radius, degPerSec, count, autoRotate, isHovered])

  const onPointerDown = useCallback((e) => {
    if (!drag) return
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId)
    } catch {
      // ignore
    }
    const now = performance.now()
    dragRef.current = {
      active: true,
      x: e.clientX,
      lastX: e.clientX,
      lastTime: now
    }
    velRef.current = 0
  }, [drag])

  const onPointerMove = useCallback((e) => {
    const d = dragRef.current
    if (!d.active) return
    const now = performance.now()
    const dx = e.clientX - d.x
    const instantDx = e.clientX - d.lastX
    const instantDt = (now - d.lastTime) / 1000

    d.x = e.clientX
    d.lastX = e.clientX
    d.lastTime = now

    const k = 0.28 * sensitivity
    rotYRef.current += dx * k

    if (instantDt > 0.005) {
      velRef.current = (instantDx / instantDt) * 0.06 * sensitivity
    }
  }, [sensitivity])

  const onPointerUp = useCallback((e) => {
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId)
    } catch {
      // ignore
    }
    dragRef.current.active = false
  }, [])

  const rotateStep = (dir) => {
    velRef.current = (dir === 'left' ? -1 : 1) * 85
  }

  const faceBase = {
    position: 'absolute',
    inset: 0,
    borderRadius: `${radiusPx}px`,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }

  return (
    <div
      className="round-carousel-wrapper"
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        background,
        perspective: `${perspective}px`,
        cursor: drag ? 'grab' : 'default',
        touchAction: 'none',
        userSelect: 'none',
        padding: '2rem 0',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Tilted Scene */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt}deg)`,
          width: '100%',
          height: `${responsiveHeight + 40}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Revolving Ring */}
        <div
          ref={ringRef}
          style={{
            position: 'relative',
            width: `${responsiveWidth}px`,
            height: `${responsiveHeight}px`,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {displayItems.map((item, i) => {
            const imgSrc = item?.image || item?.src || (typeof item === 'string' ? item : '')
            const name = item?.name || `Artist ${i + 1}`
            const genre = item?.genre || 'Headline Act'
            const stage = item?.stage || 'Main Arena'
            const bpm = item?.bpm || '128 BPM'
            const vibe = item?.vibe || 'Festival Energy'
            const isHeadliner = Boolean(item?.isHeadliner)

            return (
              <div
                key={`${name}-${i}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => onItemClick && onItemClick(item, i)}
              >
                {/* Front Face of 3D Card */}
                <div
                  className="round-carousel-card-front"
                  style={{
                    ...faceBase,
                    backgroundColor: '#130c0a',
                    border: isHeadliner
                      ? '1.5px solid rgba(255, 138, 61, 0.75)'
                      : '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: isHeadliner
                      ? '0 24px 60px rgba(0,0,0,0.85), 0 0 35px rgba(255, 90, 31, 0.35)'
                      : '0 20px 50px rgba(0,0,0,0.8)',
                  }}
                >
                  {/* Singer Image */}
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg')
                      }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#222' }} />
                  )}

                  {/* Top Glass Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      zIndex: 3,
                    }}
                  >
                    {isHeadliner ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          background: 'linear-gradient(135deg, #ff8a3d, #ff5a1f)',
                          color: '#fff',
                          fontSize: '0.68rem',
                          fontWeight: '900',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 14px rgba(255, 90, 31, 0.45)',
                        }}
                      >
                        ★ MAIN HEADLINER
                      </span>
                    ) : (
                      <span
                        style={{
                          padding: '3px 9px',
                          borderRadius: '999px',
                          background: 'rgba(0, 0, 0, 0.65)',
                          backdropFilter: 'blur(8px)',
                          color: '#f6eee8',
                          fontSize: '0.66rem',
                          fontWeight: '700',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                      >
                        {stage}
                      </span>
                    )}

                    {/* Animated Sound Equalizer */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '2px',
                        height: '14px',
                        padding: '3px 6px',
                        borderRadius: '999px',
                        background: 'rgba(0, 0, 0, 0.55)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      <span className="rc-eq-bar rc-eq-1" />
                      <span className="rc-eq-bar rc-eq-2" />
                      <span className="rc-eq-bar rc-eq-3" />
                    </div>
                  </div>

                  {/* Gradient Overlay for Text Readability */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '16px 14px',
                      zIndex: 2,
                    }}
                  >
                    {/* Genre Pill */}
                    <span
                      style={{
                        display: 'inline-block',
                        width: 'fit-content',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        background: 'rgba(255, 138, 61, 0.18)',
                        border: '1px solid rgba(255, 138, 61, 0.35)',
                        color: '#ffbd59',
                        fontSize: '0.68rem',
                        fontWeight: '800',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {genre}
                    </span>

                    {/* Singer Name */}
                    <h3
                      style={{
                        margin: 0,
                        color: '#ffffff',
                        fontSize: '1.25rem',
                        fontWeight: '900',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        textTransform: 'uppercase',
                        textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                      }}
                    >
                      {name}
                    </h3>

                    {/* Metadata: BPM & Vibe */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                        paddingTop: '6px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255, 255, 255, 0.72)',
                        fontSize: '0.68rem',
                        fontWeight: '700',
                      }}
                    >
                      <span>⚡ {bpm}</span>
                      <span>♫ {vibe}</span>
                    </div>
                  </div>
                </div>

                {/* Back Face of 3D Card (Interior of Ring) */}
                <div
                  style={{
                    ...faceBase,
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#0c0705',
                    backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
                    filter: `brightness(${innerDim / 10}) blur(1px)`,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Controls & Hint */}
      {showControls && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1.2rem',
            zIndex: 10,
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              rotateStep('left')
            }}
            aria-label="Previous artist"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 138, 61, 0.35)',
              background: 'rgba(20, 10, 6, 0.75)',
              backdropFilter: 'blur(10px)',
              color: '#ffbd59',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.borderColor = '#ff8a3d'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.borderColor = 'rgba(255, 138, 61, 0.35)'
            }}
          >
            ‹
          </button>

          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              color: 'rgba(255, 189, 89, 0.85)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>↔</span> Drag / Swipe 3D Carousel to Explore Lineup
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              rotateStep('right')
            }}
            aria-label="Next artist"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 138, 61, 0.35)',
              background: 'rgba(20, 10, 6, 0.75)',
              backdropFilter: 'blur(10px)',
              color: '#ffbd59',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.borderColor = '#ff8a3d'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.borderColor = 'rgba(255, 138, 61, 0.35)'
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* Scoped CSS for Equalizer & 3D styling */}
      <style>{`
        .rc-eq-bar {
          width: 2px;
          border-radius: 999px;
          background: #ff8a3d;
          animation: rcEqPulse 850ms ease-in-out infinite alternate;
        }
        .rc-eq-1 { height: 6px; animation-delay: 0ms; }
        .rc-eq-2 { height: 12px; animation-delay: 220ms; }
        .rc-eq-3 { height: 8px; animation-delay: 440ms; }
        @keyframes rcEqPulse {
          0% { height: 3px; }
          100% { height: 13px; }
        }
        .round-carousel-wrapper:active {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  )
}
