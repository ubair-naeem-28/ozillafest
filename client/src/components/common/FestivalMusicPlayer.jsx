import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FESTIVAL_TRACKS = [
  { id: 1, artist: 'TALWINDER', title: 'Gallan 4 / Dhundhala', genre: 'Indie Fusion', bpm: 128, vibe: 'Euphoric Night', color: '#EC4899' },
  { id: 2, artist: 'IMRAN KHAN', title: 'Amplifier · Festival VIP Mix', genre: 'Urban Punjabi', bpm: 132, vibe: 'High Energy', color: '#cf5704' },
  { id: 3, artist: 'BOHEMIA', title: 'Rooh · Live Concert Edit', genre: 'Desi Hip Hop', bpm: 95, vibe: 'Underground Bass', color: '#ba5916' },
  { id: 4, artist: 'HASSAN RAHEEM', title: 'Aisay Kaisay · Acoustic Sunset', genre: 'Indie R&B', bpm: 115, vibe: 'Golden Hour', color: '#EC4899' }
]

export default function FestivalMusicPlayer({ activeArtist, onArtistSelect }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(0.6)
  const [isMuted, setIsMuted] = useState(false)
  const audioCtxRef = useRef(null)
  const oscillatorNodesRef = useRef([])
  const gainNodeRef = useRef(null)
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)

  // Sync with active artist if passed from parent
  useEffect(() => {
    if (activeArtist) {
      const idx = FESTIVAL_TRACKS.findIndex(t => t.artist.toLowerCase().includes(activeArtist.toLowerCase()))
      if (idx !== -1) setCurrentTrackIndex(idx)
    }
  }, [activeArtist])

  const track = FESTIVAL_TRACKS[currentTrackIndex]

  // Web Audio Synth ambient festival chord generator (runs 100% offline, 0 audio file dependencies)
  const startSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        audioCtxRef.current = new AudioContext()
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }

      stopSynth()

      const ctx = audioCtxRef.current
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, ctx.currentTime)
      masterGain.connect(ctx.destination)
      gainNodeRef.current = masterGain

      // Chord frequencies based on track
      const baseFreqs = currentTrackIndex === 0 ? [130.81, 196.0, 261.63, 329.63] // C maj
                      : currentTrackIndex === 1 ? [146.83, 220.0, 293.66, 369.99] // D maj
                      : currentTrackIndex === 2 ? [110.0, 164.81, 220.0, 277.18]  // A min
                      : [164.81, 246.94, 329.63, 392.0]                           // E min

      const oscs = baseFreqs.map((freq, i) => {
        const osc = ctx.createOscillator()
        const oscGain = ctx.createGain()
        osc.type = i % 2 === 0 ? 'sine' : 'triangle'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)

        // Subtle LFO modulation for warmth
        const lfo = ctx.createOscillator()
        const lfoGain = ctx.createGain()
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, ctx.currentTime)
        lfoGain.gain.setValueAtTime(3.0, ctx.currentTime)
        lfo.connect(osc.frequency)
        lfo.start()

        oscGain.gain.setValueAtTime(0.2, ctx.currentTime)
        osc.connect(oscGain)
        oscGain.connect(masterGain)
        osc.start()
        return { osc, lfo }
      })

      oscillatorNodesRef.current = oscs
    } catch (err) {
      console.warn('Web Audio synthesis initialized in visual-only mode:', err)
    }
  }

  const stopSynth = () => {
    oscillatorNodesRef.current.forEach(({ osc, lfo }) => {
      try {
        osc.stop()
        osc.disconnect()
        lfo.stop()
        lfo.disconnect()
      } catch (e) {}
    })
    oscillatorNodesRef.current = []
  }

  const togglePlay = () => {
    if (isPlaying) {
      stopSynth()
      setIsPlaying(false)
    } else {
      startSynth()
      setIsPlaying(true)
    }
  }

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % FESTIVAL_TRACKS.length
    setCurrentTrackIndex(nextIdx)
    if (onArtistSelect) onArtistSelect(FESTIVAL_TRACKS[nextIdx].artist)
    if (isPlaying) {
      setTimeout(() => startSynth(), 50)
    }
  }

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + FESTIVAL_TRACKS.length) % FESTIVAL_TRACKS.length
    setCurrentTrackIndex(prevIdx)
    if (onArtistSelect) onArtistSelect(FESTIVAL_TRACKS[prevIdx].artist)
    if (isPlaying) {
      setTimeout(() => startSynth(), 50)
    }
  }

  // Volume update
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, audioCtxRef.current.currentTime)
    }
  }, [volume, isMuted])

  // Canvas visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let phase = 0

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const numBars = 32
      const barWidth = canvas.width / numBars - 2

      for (let i = 0; i < numBars; i++) {
        let height = 4
        if (isPlaying) {
          const speed = (track.bpm / 120) * 0.05
          const wave1 = Math.sin(phase + i * 0.3) * 0.5 + 0.5
          const wave2 = Math.cos(phase * 1.5 + i * 0.2) * 0.5 + 0.5
          const beatPulse = Math.sin(phase * 4) > 0.7 ? 1.4 : 1.0
          height = Math.max(4, (wave1 * 0.6 + wave2 * 0.4) * (canvas.height - 8) * beatPulse)
        } else {
          height = Math.sin(phase * 0.5 + i * 0.4) * 6 + 10
        }

        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0)
        gradient.addColorStop(0, '#550e0e')
        gradient.addColorStop(0.5, '#ba5916')
        gradient.addColorStop(1, '#EC4899')

        ctx.fillStyle = gradient
        ctx.shadowColor = '#EC4899'
        ctx.shadowBlur = isPlaying ? 8 : 2

        const x = i * (barWidth + 2)
        const y = canvas.height - height
        ctx.beginPath()
        ctx.roundRect(x, y, barWidth, height, [3, 3, 0, 0])
        ctx.fill()
      }

      phase += isPlaying ? 0.08 : 0.02
      animationFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      stopSynth()
    }
  }, [isPlaying, track])

  return (
    <div className="festival-player-card">
      <div className="player-ambient-glow" style={{ background: `radial-gradient(circle, ${track.color}44 0%, transparent 70%)` }} />

      {/* Top Header Badge */}
      <div className="player-top-badge">
        <span className="live-beat-dot" style={{ background: isPlaying ? '#EC4899' : '#ba5916' }} />
        <span className="player-badge-text">
          {isPlaying ? 'LIVE FESTIVAL BEAT STREAM' : 'OZILLA AUDIO LAB · CLICK PLAY'}
        </span>
        <span className="player-bpm-pill">{track.bpm} BPM</span>
      </div>

      <div className="player-body">
        {/* Holographic Vinyl Turntable Disc */}
        <div className="vinyl-deck-wrap">
          <motion.div
            className={`vinyl-record ${isPlaying ? 'spinning' : ''}`}
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={isPlaying ? { repeat: Infinity, duration: 3, ease: 'linear' } : { duration: 0.5 }}
          >
            <div className="vinyl-grooves" />
            <div className="vinyl-center-sticker" style={{ background: `linear-gradient(135deg, #550e0e, ${track.color})` }}>
              <span className="vinyl-logo">OZ</span>
            </div>
          </motion.div>
          <div className={`turntable-needle ${isPlaying ? 'needle-on' : ''}`} />
        </div>

        {/* Track Details & Visualizer */}
        <div className="player-info-column">
          <div className="player-track-meta">
            <span className="player-genre-tag">{track.genre} · {track.vibe}</span>
            <h3 className="player-track-title">{track.title}</h3>
            <p className="player-artist-name">⚡ {track.artist} (Live Act)</p>
          </div>

          {/* Equalizer Frequency Spectrum Canvas */}
          <div className="player-visualizer-container">
            <canvas ref={canvasRef} width={280} height={48} className="player-canvas" />
          </div>

          {/* Controls Bar */}
          <div className="player-controls-row">
            <button className="player-nav-btn" onClick={handlePrev} title="Previous Artist" aria-label="Previous Artist">
              ⏮
            </button>
            <button
              className={`player-main-play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause Festival Vibe' : 'Play Festival Vibe'}
            >
              {isPlaying ? '⏸ PAUSE VIBE' : '▶ PLAY FESTIVAL BEAT'}
            </button>
            <button className="player-nav-btn" onClick={handleNext} title="Next Artist" aria-label="Next Artist">
              ⏭
            </button>

            {/* Mute Toggle */}
            <button
              className="player-mute-btn"
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label="Toggle Mute"
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </div>

      {/* Track Quick Select Pills */}
      <div className="player-track-selector">
        {FESTIVAL_TRACKS.map((t, idx) => (
          <button
            key={t.id}
            className={`track-pill-btn ${currentTrackIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setCurrentTrackIndex(idx)
              if (onArtistSelect) onArtistSelect(t.artist)
              if (isPlaying) {
                setTimeout(() => startSynth(), 50)
              }
            }}
          >
            <span className="track-pill-num">0{idx + 1}</span>
            <span className="track-pill-artist">{t.artist}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
