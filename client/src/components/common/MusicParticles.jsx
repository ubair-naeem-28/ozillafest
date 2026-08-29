import React, { useMemo } from 'react'

const NOTES = ['♪', '♫', '♬', '♩', '✦', '⚡', '✨', '♪', '♫']

export default function MusicParticles({ count = 22 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      char: NOTES[i % NOTES.length],
      left: `${Math.random() * 96 + 2}%`,
      top: `${Math.random() * 90 + 5}%`,
      size: `${Math.random() * 1.1 + 0.8}rem`,
      duration: `${Math.random() * 10 + 12}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.45 + 0.25,
      color: i % 3 === 0 ? '#EC4899' : i % 3 === 1 ? '#cf5704' : '#ba5916'
    }))
  }, [count])

  return (
    <div className="music-particles-layer" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="floating-music-glyph"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            color: p.color,
            textShadow: `0 0 12px ${p.color}`,
            opacity: p.opacity
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}
