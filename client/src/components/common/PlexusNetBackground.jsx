import React, { useEffect, useRef } from 'react'

/**
 * PlexusNetBackground
 * 3D Geometric Mesh / Constellation Network (Vanta.js NET style)
 * High-performance, 60fps HTML5 Canvas with 3D perspective projection,
 * connecting polygon facets, and smooth interactive mouse tracking.
 */
function PlexusNetBackground({
  className = '',
  nodeColor = '#EC4899',
  lineColor = '236, 72, 153',
  secondaryColor = '255, 90, 31',
  maxDistance = 140,
  speed = 0.6
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const isMobile = width < 768
    const count = isMobile ? 42 : 72
    const fov = 350
    const depth = 500

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
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
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * depth,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: (Math.random() - 0.5) * speed * 0.8,
        vz: (Math.random() - 0.5) * speed * 0.8,
        radius: Math.random() * 2 + 1.5,
        colorType: Math.random() > 0.4 ? 'primary' : 'secondary'
      })
    }

    // Resize Handler
    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse Interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.targetX = mouse.x
      mouse.targetY = mouse.y
      mouse.active = true

      // Camera rotation based on mouse offset from center
      const ndcX = (mouse.x - width / 2) / (width / 2)
      const ndcY = (mouse.y - height / 2) / (height / 2)
      camera.targetRotY = ndcX * 0.18
      camera.targetRotX = -ndcY * 0.18
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

      // Project Nodes to 2D screen coordinates
      const projected = []

      for (let i = 0; i < count; i++) {
        const p = nodes[i]

        // Update positions
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        const boundX = width * 0.7
        const boundY = height * 0.7
        const boundZ = depth * 0.6

        // Bounce within boundaries
        if (p.x < -boundX || p.x > boundX) p.vx *= -1
        if (p.y < -boundY || p.y > boundY) p.vy *= -1
        if (p.z < -boundZ || p.z > boundZ) p.vz *= -1

        // 3D Camera Rotation Transform
        // Y-axis rotation
        let x1 = p.x * cosY - p.z * sinY
        let z1 = p.z * cosY + p.x * sinY

        // X-axis rotation
        let y1 = p.y * cosX - z1 * sinX
        let z2 = z1 * cosX + p.y * sinX

        // Perspective Projection
        const zShift = z2 + depth
        if (zShift <= 0) continue

        const scale = fov / (fov + zShift * 0.7)
        const projX = halfW + x1 * scale
        const projY = halfH + y1 * scale

        const alpha = Math.max(0.15, Math.min(0.9, (z2 + depth) / (depth * 1.5)))

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha,
          radius: p.radius * scale,
          colorType: p.colorType,
          original: p
        })
      }

      const projLen = projected.length

      // Draw Connections & Geometric Facets (Triangles)
      for (let i = 0; i < projLen; i++) {
        const p1 = projected[i]

        for (let j = i + 1; j < projLen; j++) {
          const p2 = projected[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.45 * Math.min(p1.alpha, p2.alpha)
            const strokeColor = p1.colorType === 'primary' ? lineColor : secondaryColor

            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${strokeColor}, ${lineAlpha})`
            ctx.lineWidth = Math.max(0.6, (1 - dist / maxDistance) * 1.4)
            ctx.stroke()

            // 3-point Geometric Facet Triangles (Vanta NET polygon effect)
            for (let k = j + 1; k < projLen; k++) {
              const p3 = projected[k]
              const d2 = Math.hypot(p2.x - p3.x, p2.y - p3.y)
              const d3 = Math.hypot(p1.x - p3.x, p1.y - p3.y)

              if (d2 < maxDistance && d3 < maxDistance) {
                const triAlpha = (1 - (dist + d2 + d3) / (maxDistance * 3)) * 0.08
                ctx.beginPath()
                ctx.moveTo(p1.x, p1.y)
                ctx.lineTo(p2.x, p2.y)
                ctx.lineTo(p3.x, p3.y)
                ctx.closePath()
                ctx.fillStyle = `rgba(${lineColor}, ${triAlpha})`
                ctx.fill()
              }
            }
          }
        }
      }

      // Draw Particle Nodes
      for (let i = 0; i < projLen; i++) {
        const p = projected[i]
        const col = p.colorType === 'primary' ? `rgba(${lineColor}, ${p.alpha})` : `rgba(${secondaryColor}, ${p.alpha})`

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1.2, p.radius), 0, Math.PI * 2)
        ctx.fillStyle = col
        ctx.shadowColor = `rgba(${lineColor}, 0.8)`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
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
        zIndex: 1
      }}
    />
  )
}

export default PlexusNetBackground
