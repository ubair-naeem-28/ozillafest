import React, { useEffect, useRef } from 'react'

/**
 * PlexusNetBackground
 * Highly optimized, 60-120fps Geometric Constellation Canvas
 * - IntersectionObserver to auto-sleep when off-screen
 * - VisibilityChange to auto-sleep when tab is inactive
 * - O(N) neighbor limit for zero lag and minimal CPU/GPU overhead
 */
function PlexusNetBackground({
  className = '',
  nodeColor = '#EC4899',
  lineColor = '236, 72, 153',
  secondaryColor = '255, 90, 31',
  maxDistance = 135,
  speed = 0.5
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId = null
    let isVisible = true
    let isRunning = false

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const isMobile = width < 768
    const count = isMobile ? 18 : 34
    const fov = 340
    const depth = 450
    const maxDistSq = maxDistance * maxDistance

    let mouse = {
      x: width / 2,
      y: height / 2,
      active: false
    }

    let camera = {
      rotX: 0,
      rotY: 0,
      targetRotX: 0,
      targetRotY: 0
    }

    // Generate 3D Nodes
    const nodes = []
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.1,
        y: (Math.random() - 0.5) * height * 1.1,
        z: (Math.random() - 0.5) * depth,
        vx: (Math.random() - 0.5) * speed * 0.7,
        vy: (Math.random() - 0.5) * speed * 0.7,
        vz: (Math.random() - 0.5) * speed * 0.7,
        radius: Math.random() * 1.8 + 1.2,
        colorType: Math.random() > 0.4 ? 'primary' : 'secondary'
      })
    }

    // Resize Handler
    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight
    }
    window.addEventListener('resize', handleResize, { passive: true })

    // Mouse Interaction
    const handleMouseMove = (e) => {
      if (!isVisible) return
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true

      const ndcX = (mouse.x - width / 2) / (width / 2)
      const ndcY = (mouse.y - height / 2) / (height / 2)
      camera.targetRotY = ndcX * 0.14
      camera.targetRotX = -ndcY * 0.14
    }

    const handleMouseLeave = () => {
      mouse.active = false
      camera.targetRotX = 0
      camera.targetRotY = 0
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    // Animation Loop
    const render = () => {
      if (!isVisible || document.hidden) {
        isRunning = false
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Smooth camera interpolation
      camera.rotX += (camera.targetRotX - camera.rotX) * 0.05
      camera.rotY += (camera.targetRotY - camera.rotY) * 0.05

      const cosY = Math.cos(camera.rotY)
      const sinY = Math.sin(camera.rotY)
      const cosX = Math.cos(camera.rotX)
      const sinX = Math.sin(camera.rotX)

      const halfW = width / 2
      const halfH = height / 2
      const boundX = width * 0.65
      const boundY = height * 0.65
      const boundZ = depth * 0.55

      // Project Nodes to 2D
      const projected = []

      for (let i = 0; i < count; i++) {
        const p = nodes[i]

        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        if (p.x < -boundX || p.x > boundX) p.vx *= -1
        if (p.y < -boundY || p.y > boundY) p.vy *= -1
        if (p.z < -boundZ || p.z > boundZ) p.vz *= -1

        // 3D Matrix transform
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.z * cosY + p.x * sinY
        const y1 = p.y * cosX - z1 * sinX
        const z2 = z1 * cosX + p.y * sinX

        const zShift = z2 + depth
        if (zShift <= 0) continue

        const scale = fov / (fov + zShift * 0.65)
        const projX = halfW + x1 * scale
        const projY = halfH + y1 * scale
        const alpha = Math.max(0.18, Math.min(0.85, (z2 + depth) / (depth * 1.4)))

        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          radius: Math.max(1.2, p.radius * scale),
          colorType: p.colorType
        })
      }

      const projLen = projected.length

      // Draw Connections (Fast & Capped per node)
      for (let i = 0; i < projLen; i++) {
        const p1 = projected[i]
        let connections = 0

        for (let j = i + 1; j < projLen && connections < 3; j++) {
          const p2 = projected[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistSq) {
            connections++
            const dist = Math.sqrt(distSq)
            const lineAlpha = (1 - dist / maxDistance) * 0.4 * Math.min(p1.alpha, p2.alpha)
            const strokeColor = p1.colorType === 'primary' ? lineColor : secondaryColor

            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${strokeColor}, ${lineAlpha})`
            ctx.lineWidth = Math.max(0.5, (1 - dist / maxDistance) * 1.2)
            ctx.stroke()
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < projLen; i++) {
        const p = projected[i]
        const col = p.colorType === 'primary' ? `rgba(${lineColor}, ${p.alpha})` : `rgba(${secondaryColor}, ${p.alpha})`

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = col
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    const startLoop = () => {
      if (!isRunning && isVisible && !document.hidden) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const stopLoop = () => {
      isRunning = false
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }
    }

    // IntersectionObserver: Pause when out of screen
    let observer = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting
          if (isVisible) {
            startLoop()
          } else {
            stopLoop()
          }
        },
        { threshold: 0.05 }
      )
      observer.observe(canvas)
    } else {
      startLoop()
    }

    // Visibility Listener: Pause when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop()
      } else if (isVisible) {
        startLoop()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      stopLoop()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (observer) observer.disconnect()
    }
  }, [nodeColor, lineColor, secondaryColor, maxDistance, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`plexus-net-canvas ${className}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform'
      }}
    />
  )
}

export default React.memo(PlexusNetBackground)

