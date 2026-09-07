import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
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
    image: assetUrl('/assets/ozilla/talwinder.jpg'),
    offsetY: 0
  },
  {
    name: 'IMRAN KHAN',
    isHeadliner: false,
    genre: 'Punjabi Pop / Urban',
    stage: 'Neon Bass Arena',
    bpm: '132 BPM',
    vibe: 'High Energy',
    src: assetUrl('/assets/ozilla/Imran-Khan.jpg'),
    image: assetUrl('/assets/ozilla/Imran-Khan.jpg'),
    offsetY: 0
  },
  {
    name: 'BOHEMIA',
    isHeadliner: false,
    genre: 'Punjabi Rap / Desi Hip Hop',
    stage: 'Underground Stage',
    bpm: '95 BPM',
    vibe: 'Heavy Bass',
    src: assetUrl('/assets/ozilla/Bohemia.jpg'),
    image: assetUrl('/assets/ozilla/Bohemia.jpg'),
    offsetY: 0
  },
  {
    name: 'HASSAN RAHEEM',
    isHeadliner: false,
    genre: 'Pop / Indie R&B',
    stage: 'Sunset Stage',
    bpm: '115 BPM',
    vibe: 'Golden Hour Chill',
    src: assetUrl('/assets/ozilla/hassan-raheem.jpg'),
    image: assetUrl('/assets/ozilla/hassan-raheem.jpg'),
    offsetY: 0
  }
]

const MAX_SCALE = 1.38
const MIN_SCALE = 0.72

function wrap(value, span) {
  return ((value % span) + span) % span
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function resolveSrc(value) {
  if (!value) return null
  if (typeof value === 'string') return value || null
  const src = value.src || value.image
  return typeof src === 'string' && src ? src : null
}

function imageOf(item) {
  if (item && typeof item === 'object') {
    return resolveSrc(item.image || item.src || item)
  }
  return resolveSrc(item)
}

function offsetOf(item) {
  if (item && typeof item === 'object' && 'offsetY' in item) {
    const offset = item.offsetY
    return typeof offset === 'number' && isFinite(offset) ? offset : 0
  }
  return 0
}

export default function SmoothScrollSlider({
  items = DEFAULT_SINGERS,
  images,
  slideWidth = 320,
  slideHeight = 440,
  spacing = 2.5,
  direction = 'right',
  smoothness = 8.5,
  radius = 24,
  dim = 6,
  background = 'transparent',
  sensitivity = 5,
  loop = true,
  autoPlay = true,
  autoPlaySpeed = 1.2,
  style,
  onItemClick
}) {
  const containerRef = useRef(null)
  const nodes = useRef([])
  const target = useRef(0)
  const current = useRef(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Use items if passed, else images or default singers
  const rawList = items && items.length > 0 ? items : (images && images.length > 0 ? images : DEFAULT_SINGERS)

  const source = useMemo(() => {
    return rawList.map((item, idx) => ({
      ...item,
      src: imageOf(item),
      offsetY: offsetOf(item),
      name: item.name || `Artist ${idx + 1}`,
      genre: item.genre || 'Live Performer',
      stage: item.stage || 'Ozilla Arena',
      bpm: item.bpm || '128 BPM',
      vibe: item.vibe || 'Festival Energy',
      isHeadliner: Boolean(item.isHeadliner)
    }))
  }, [rawList])

  // Responsive dimensions
  const responsiveWidth = containerWidth > 0 && containerWidth < 640 ? Math.min(slideWidth, 240) : containerWidth < 1024 ? Math.min(slideWidth, 280) : slideWidth
  const responsiveHeight = containerWidth > 0 && containerWidth < 640 ? Math.round(responsiveWidth * 1.36) : slideHeight

  const step = responsiveWidth + clamp(spacing, 0, 10) * 18
  const ease = 0.15 - (clamp(smoothness, 0, 10) / 10) * 0.11
  const dimAmount = (clamp(dim, 0, 10) / 10) * 0.75
  const wheelMultiplier = 0.4 + (clamp(sensitivity, 0, 10) / 10) * 1.1
  const dragMultiplier = 0.6 + (clamp(sensitivity, 0, 10) / 10) * 1.6
  const flip = direction === 'left'

  const repeats = useMemo(() => {
    if (!loop || containerWidth <= 0 || step <= 0 || source.length === 0) return 2
    return Math.max(2, Math.ceil((containerWidth + step * 3) / (source.length * step)) + 1)
  }, [loop, containerWidth, step, source.length])

  const slides = useMemo(() => {
    const out = []
    for (let r = 0; r < repeats; r += 1) {
      out.push(...source)
    }
    return out
  }, [source, repeats])

  const frame = useRef({
    count: 0,
    step: 0,
    slideWidth: 0,
    width: 0,
    ease: 0.075,
    maxScale: MAX_SCALE,
    minScale: MIN_SCALE,
    dim: 0,
    loop: true,
    flip: false
  })

  frame.current = {
    count: slides.length,
    step,
    slideWidth: responsiveWidth,
    width: containerWidth,
    ease,
    maxScale: MAX_SCALE,
    minScale: MIN_SCALE,
    dim: dimAmount,
    loop,
    flip
  }

  const input = useRef({ wheelMultiplier, dragMultiplier, flip })
  input.current = { wheelMultiplier, dragMultiplier, flip }

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width)
      }
    })
    observer.observe(node)
    setContainerWidth(node.getBoundingClientRect().width)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    nodes.current.length = slides.length
  }, [slides.length])

  // Animation Loop
  useEffect(() => {
    let raf = 0
    let last = 0

    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const c = frame.current
      const delta = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
      last = now
      if (!c.count || c.step <= 0 || c.width <= 0) return

      // Gentle auto drift if not hovered
      if (autoPlay && !isHovered) {
        target.current += (c.flip ? -1 : 1) * autoPlaySpeed * (delta * 60)
      }

      const span = c.count * c.step

      if (c.loop) {
        if (current.current > span || current.current < -span) {
          const shift = Math.trunc(current.current / span) * span
          current.current -= shift
          target.current -= shift
        }
      } else {
        target.current = clamp(target.current, 0, (c.count - 1) * c.step)
      }

      const k = 1 - Math.pow(1 - c.ease, delta * 60)
      current.current += (target.current - current.current) * k

      const pad = (c.width - c.slideWidth) / 2
      const half = c.width / 2

      for (let i = 0; i < c.count; i += 1) {
        const node = nodes.current[i]
        if (!node) continue

        const raw = i * c.step - current.current + pad
        const x = c.loop ? wrap(raw + c.step, span) - c.step : raw

        const distance = x + c.slideWidth / 2 - half
        let scale
        let push
        if (distance > 0) {
          scale = Math.min(c.maxScale, 1 + (distance / c.width) * 0.6)
          push = (scale - 1) * c.slideWidth * 0.45
        } else {
          scale = Math.max(c.minScale, 1 + (distance / c.width) * 0.65)
          push = 0
        }

        const left = c.flip ? c.width - c.slideWidth - (x + push) : x + push
        node.style.transform = `translate3d(${left}px, -50%, 0) scale(${scale})`

        if (c.dim > 0 && scale < 1) {
          const t = (1 - scale) / Math.max(0.001, 1 - c.minScale)
          node.style.filter = `brightness(${Math.max(0.3, 1 - t * c.dim)})`
        } else {
          node.style.filter = 'none'
        }
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [autoPlay, autoPlaySpeed, isHovered])

  // Wheel listener
  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const onWheel = (event) => {
      event.preventDefault()
      const dominant =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY
      target.current += dominant * input.current.wheelMultiplier
    }
    node.addEventListener('wheel', onWheel, { passive: false })
    return () => node.removeEventListener('wheel', onWheel)
  }, [])

  // Pointer Drag listener
  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    let pointer = null
    let lastX = 0

    const onDown = (event) => {
      if (pointer !== null) return
      pointer = event.pointerId
      lastX = event.clientX
      try {
        node.setPointerCapture(event.pointerId)
      } catch {
        // ignore
      }
    }
    const onMove = (event) => {
      if (pointer !== event.pointerId) return
      const dx = event.clientX - lastX
      lastX = event.clientX
      target.current += (input.current.flip ? dx : -dx) * input.current.dragMultiplier
    }
    const onUp = (event) => {
      if (pointer !== event.pointerId) return
      pointer = null
      try {
        if (node.hasPointerCapture(event.pointerId)) {
          node.releasePointerCapture(event.pointerId)
        }
      } catch {
        // ignore
      }
    }

    node.addEventListener('pointerdown', onDown)
    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerup', onUp)
    node.addEventListener('pointercancel', onUp)
    return () => {
      node.removeEventListener('pointerdown', onDown)
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerup', onUp)
      node.removeEventListener('pointercancel', onUp)
    }
  }, [])

  const nudge = useCallback((dir) => {
    target.current += (dir === 'left' ? -1 : 1) * step * 1.2
  }, [step])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1.5rem 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Viewport */}
      <div
        ref={containerRef}
        className="smooth-scroll-slider-viewport"
        style={{
          position: 'relative',
          width: '100%',
          height: `${responsiveHeight + 60}px`,
          overflow: 'hidden',
          background,
          cursor: 'grab',
          touchAction: 'pan-y',
          opacity: containerWidth > 0 ? 1 : 0,
          transition: 'opacity 0.35s ease',
          userSelect: 'none',
          ...style,
        }}
      >
        {slides.map((slide, i) => {
          const isHeadliner = slide.isHeadliner
          return (
            <div
              key={`${slide.name}-${i}`}
              ref={(el) => {
                nodes.current[i] = el
              }}
              onClick={() => onItemClick && onItemClick(slide, i)}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: `${responsiveWidth}px`,
                height: `${responsiveHeight}px`,
                borderRadius: `${radius}px`,
                overflow: 'hidden',
                background: '#130c0a',
                border: isHeadliner
                  ? '1.5px solid rgba(255, 138, 61, 0.75)'
                  : '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: isHeadliner
                  ? '0 24px 60px rgba(0,0,0,0.85), 0 0 35px rgba(255, 90, 31, 0.35)'
                  : '0 20px 50px rgba(0,0,0,0.75)',
                willChange: 'transform, filter',
                transform: 'translate3d(0, -50%, 0)',
                cursor: 'pointer',
              }}
            >
              {/* Singer Portrait Image */}
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.name}
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg')
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: `50% calc(50% + ${slide.offsetY}px)`,
                    display: 'block',
                    userSelect: 'none',
                  }}
                />
              ) : null}

              {/* Top Badges */}
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
                    {slide.stage}
                  </span>
                )}

                {/* Animated Equalizer */}
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
                  <span className="sss-eq-bar sss-eq-1" />
                  <span className="sss-eq-bar sss-eq-2" />
                  <span className="sss-eq-bar sss-eq-3" />
                </div>
              </div>

              {/* Gradient Information Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px 14px',
                  zIndex: 2,
                }}
              >
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
                  {slide.genre}
                </span>

                <h3
                  style={{
                    margin: 0,
                    color: '#ffffff',
                    fontSize: '1.28rem',
                    fontWeight: '900',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    textTransform: 'uppercase',
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                  }}
                >
                  {slide.name}
                </h3>

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
                  <span>⚡ {slide.bpm}</span>
                  <span>♫ {slide.vibe}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls & Interaction Hint */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '0.8rem',
          zIndex: 10,
        }}
      >
        <button
          type="button"
          onClick={() => nudge('left')}
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
            fontSize: '1.2rem',
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
          <span>↔</span> Drag, Wheel or Swipe Smooth Rail
        </span>

        <button
          type="button"
          onClick={() => nudge('right')}
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
            fontSize: '1.2rem',
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

      <style>{`
        .sss-eq-bar {
          width: 2px;
          border-radius: 999px;
          background: #ff8a3d;
          animation: sssEqPulse 850ms ease-in-out infinite alternate;
        }
        .sss-eq-1 { height: 6px; animation-delay: 0ms; }
        .sss-eq-2 { height: 12px; animation-delay: 220ms; }
        .sss-eq-3 { height: 8px; animation-delay: 440ms; }
        @keyframes sssEqPulse {
          0% { height: 3px; }
          100% { height: 13px; }
        }
        .smooth-scroll-slider-viewport:active {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  )
}
