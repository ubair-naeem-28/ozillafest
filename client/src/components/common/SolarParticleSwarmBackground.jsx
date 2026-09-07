import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * SolarParticleSwarmBackground
 * Full-site 3D Solar Particle Swarm Simulation
 * Featuring:
 * - 7 Layered Stellar Dynamics (Fusion Core, Radiative Zone, Convection Cells, Photosphere, Chromosphere, Coronal Loops, Prominences & Solar Wind)
 * - Pure Three.js InstancedMesh for ultra-high 60-120fps GPU performance
 * - Smooth camera parallax & responsive particle allocation
 */
function SolarParticleSwarmBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId = null
    let isVisible = true

    // Scene Setup
    const scene = new THREE.Scene()

    const width = window.innerWidth
    const height = window.innerHeight

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 90)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Particle Configuration
    const isMobile = width < 768
    const count = isMobile ? 8000 : 18000
    const speedMult = 1.0

    const dummy = new THREE.Object3D()
    const target = new THREE.Vector3()
    const pColor = new THREE.Color()

    // Geometry & Material (Increased size for vivid crisp glow)
    const geometry = new THREE.TetrahedronGeometry(isMobile ? 0.58 : 0.48)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.96
    })

    const mesh = new THREE.InstancedMesh(geometry, material, count)
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    scene.add(mesh)

    // Particle initial positions
    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 140,
          (Math.random() - 0.5) * 140,
          (Math.random() - 0.5) * 140
        )
      )
    }

    // Solar Parameters
    const scaleR = isMobile ? 70 : 95
    const fusionRate = 2.5
    const convection = 1.2
    const magnetic = 1.4
    const windSpeed = 1.8
    const loopsCount = 16

    const t0 = 0.12, t1 = 0.32, t2 = 0.55, t3 = 0.68, t4 = 0.78, t5 = 0.90, t6 = 0.97

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Resize Handler
    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    }
    window.addEventListener('resize', onResize, { passive: true })

    // Visibility change handler to save battery
    const onVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const clock = new THREE.Clock()

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const time = clock.getElapsedTime() * speedMult

      // Mouse Parallax smoothing
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      camera.position.x = mouseX * 12
      camera.position.y = -mouseY * 12
      camera.lookAt(0, 0, 0)

      for (let i = 0; i < count; i++) {
        const t = i / count
        const h1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1
        const h2 = Math.abs(Math.sin(i * 78.2330) * 12543.1230) % 1
        const h3 = Math.abs(Math.sin(i * 45.1640) * 98765.4320) % 1
        const h4 = Math.abs(Math.sin(i * 33.7190) * 54321.9870) % 1
        const h5 = Math.abs(Math.sin(i * 61.4310) * 31415.9265) % 1
        const h6 = Math.abs(Math.sin(i * 19.8410) * 27182.8182) % 1

        let px = 0, py = 0, pz = 0

        if (t < t0) {
          // 1. Fusion Core
          const coreR = scaleR * 0.22
          const theta = h1 * 6.2831853
          const cphi = h2 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const rr = Math.cbrt(Math.max(h3, 0.0001)) * coreR
          const jitter = Math.sin(time * 3 + h4 * 6.283) * coreR * 0.03
          const rad = rr + jitter
          px = rad * sphi * Math.cos(theta)
          py = rad * sphi * Math.sin(theta)
          pz = rad * cphi
          const burst = Math.pow(0.5 + 0.5 * Math.sin(time * fusionRate * 4 + h5 * 18.85), 6)
          const bright = 0.5 + 0.5 * burst
          pColor.setHSL(Math.max(0, 0.14 - burst * 0.05), 1.0, Math.min(0.95, 0.55 + bright * 0.4))
        } else if (t < t1) {
          // 2. Radiative Zone
          const rMin = scaleR * 0.22, rMax = scaleR * 0.46
          const rr = rMin + h1 * (rMax - rMin)
          const theta = h2 * 6.2831853 + Math.sin(time * 0.03 + h3 * 6.283) * 0.3
          const cphi = h3 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const wander = Math.sin(time * 0.08 + h4 * 6.283) * scaleR * 0.02
          const rad = rr + wander
          px = rad * sphi * Math.cos(theta)
          py = rad * sphi * Math.sin(theta)
          pz = rad * cphi
          pColor.setHSL(0.06, 0.9, 0.25 + h5 * 0.1)
        } else if (t < t2) {
          // 3. Convection Zone
          const rMin = scaleR * 0.46, rMax = scaleR * 0.72
          const rr = rMin + h1 * (rMax - rMin)
          const theta = h2 * 6.2831853
          const cphi = h3 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const cell = Math.sin(theta * 6 + time * convection * 0.5) + Math.sin(cphi * 18 + time * convection * 0.4 + h4 * 6.283) + Math.sin((theta + cphi) * 12 - time * convection * 0.6)
          const flow = cell * convection * scaleR * 0.015
          const rad = rr + flow
          px = rad * sphi * Math.cos(theta + flow * 0.01)
          py = rad * sphi * Math.sin(theta + flow * 0.01)
          pz = rad * cphi
          const heat = (cell + 3) / 6
          pColor.setHSL(Math.max(0, 0.08 - heat * 0.02), 1.0, 0.3 + heat * 0.35)
        } else if (t < t3) {
          // 4. Photosphere
          const R = scaleR * 0.76
          const theta = h1 * 6.2831853
          const cphi = h2 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const granule = Math.sin(theta * 24 + time * 0.6) + Math.sin(cphi * 30 - time * 0.5 + h3 * 6.283) + Math.sin(theta * 17 + cphi * 13 + time * 0.4)
          const spotNoise = Math.sin(theta * 3 + h4 * 6.283) + Math.sin(cphi * 4 + time * 0.05)
          const spotDark = Math.max(0, -spotNoise - 1.1) * 0.8
          const rad = R + granule * scaleR * 0.004
          px = rad * sphi * Math.cos(theta)
          py = rad * sphi * Math.sin(theta)
          pz = rad * cphi
          const bright = 0.6 + granule * 0.1 - spotDark
          pColor.setHSL(0.13, 0.9, Math.max(0.08, Math.min(0.85, bright)))
        } else if (t < t4) {
          // 5. Chromosphere
          const Rbase = scaleR * 0.79
          const theta = h1 * 6.2831853
          const cphi = h2 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const spiculeLen = scaleR * 0.05
          const spicule = Math.abs(Math.sin(time * 2 + h3 * 18.85)) * spiculeLen
          const rad = Rbase + spicule
          px = rad * sphi * Math.cos(theta)
          py = rad * sphi * Math.sin(theta)
          pz = rad * cphi
          pColor.setHSL(0.98, 0.85, 0.35 + (spicule / Math.max(spiculeLen, 0.0001)) * 0.25)
        } else if (t < t5) {
          // 6. Coronal Loops & Open Field Lines
          if (h5 < 0.5) {
            const loopIndex = Math.floor(i % loopsCount)
            const lh1 = Math.abs(Math.sin(loopIndex * 17.17) * 6543.21) % 1
            const lh2 = Math.abs(Math.sin(loopIndex * 29.71) * 7654.32) % 1
            const lh3 = Math.abs(Math.sin(loopIndex * 53.13) * 8765.43) % 1
            const lh4 = Math.abs(Math.sin(loopIndex * 71.91) * 9876.54) % 1
            const pcphi = lh2 * 2 - 1
            const psphi = Math.sqrt(Math.max(0, 1 - pcphi * pcphi))
            const pTheta = lh1 * 6.2831853
            const pX = psphi * Math.cos(pTheta), pY = psphi * Math.sin(pTheta), pZ = pcphi
            const refX = 0, refY = 1, refZ = 0.15
            let e1x = refY * pZ - refZ * pY, e1y = refZ * pX - refX * pZ, e1z = refX * pY - refY * pX
            const len1 = Math.max(Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z), 1e-5)
            e1x /= len1; e1y /= len1; e1z /= len1
            let e2x = pY * e1z - pZ * e1y, e2y = pZ * e1x - pX * e1z, e2z = pX * e1y - pY * e1x
            const len2 = Math.max(Math.sqrt(e2x * e2x + e2y * e2y + e2z * e2z), 1e-5)
            e2x /= len2; e2y /= len2; e2z /= len2
            const halfWidth = 0.2 + lh3 * 0.35
            const s = h1
            const alpha = (s - 0.5) * halfWidth * 2
            let dirx = e1x * Math.cos(alpha) + e2x * Math.sin(alpha)
            let diry = e1y * Math.cos(alpha) + e2y * Math.sin(alpha)
            let dirz = e1z * Math.cos(alpha) + e2z * Math.sin(alpha)
            const dlen = Math.max(Math.sqrt(dirx * dirx + diry * diry + dirz * dirz), 1e-5)
            dirx /= dlen; diry /= dlen; dirz /= dlen
            const bulge = Math.cos((s - 0.5) * 3.14159)
            const flarePulse = 0.6 + 0.4 * Math.sin(time * 0.4 * magnetic + lh4 * 6.283)
            const archHeight = scaleR * (0.1 + lh3 * 0.15) * Math.max(0.1, magnetic) * flarePulse
            const radius = scaleR * 0.8 + archHeight * bulge
            px = dirx * radius; py = diry * radius; pz = dirz * radius
            pColor.setHSL(0.52, 0.95, 0.65 + bulge * 0.25)
          } else {
            const theta = h1 * 6.2831853
            const cphi = h2 * 2 - 1
            const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
            const travel = (time * windSpeed * 0.6 + h3 * 18) % 18
            const rad = scaleR * 0.82 + travel * scaleR * 0.05
            px = rad * sphi * Math.cos(theta)
            py = rad * sphi * Math.sin(theta)
            pz = rad * cphi
            const fade = Math.max(0, 1 - travel / 18)
            pColor.setHSL(0.56, 0.85, 0.45 + fade * 0.45)
          }
        } else if (t < t6) {
          // 7. Prominences & Solar Flares
          const loopIndex = Math.floor(i % loopsCount)
          const lh1 = Math.abs(Math.sin(loopIndex * 21.31) * 5432.19) % 1
          const lh2 = Math.abs(Math.sin(loopIndex * 37.77) * 6321.98) % 1
          const lh3 = Math.abs(Math.sin(loopIndex * 59.59) * 7219.87) % 1
          const lh4 = Math.abs(Math.sin(loopIndex * 83.13) * 8123.65) % 1
          const pcphi = lh2 * 2 - 1
          const psphi = Math.sqrt(Math.max(0, 1 - pcphi * pcphi))
          const pTheta = lh1 * 6.2831853
          const pX = psphi * Math.cos(pTheta), pY = psphi * Math.sin(pTheta), pZ = pcphi
          const refX = 0.15, refY = 0, refZ = 1
          let e1x = refY * pZ - refZ * pY, e1y = refZ * pX - refX * pZ, e1z = refX * pY - refY * pX
          const len1 = Math.max(Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z), 1e-5)
          e1x /= len1; e1y /= len1; e1z /= len1
          let e2x = pY * e1z - pZ * e1y, e2y = pZ * e1x - pX * e1z, e2z = pX * e1y - pY * e1x
          const len2 = Math.max(Math.sqrt(e2x * e2x + e2y * e2y + e2z * e2z), 1e-5)
          e2x /= len2; e2y /= len2; e2z /= len2
          const halfWidth = 0.3 + lh3 * 0.5
          const s = h1
          const alpha = (s - 0.5) * halfWidth * 2
          let dirx = e1x * Math.cos(alpha) + e2x * Math.sin(alpha)
          let diry = e1y * Math.cos(alpha) + e2y * Math.sin(alpha)
          let dirz = e1z * Math.cos(alpha) + e2z * Math.sin(alpha)
          const dlen = Math.max(Math.sqrt(dirx * dirx + diry * diry + dirz * dirz), 1e-5)
          dirx /= dlen; diry /= dlen; dirz /= dlen
          const bulge = Math.cos((s - 0.5) * 3.14159)
          const flarePulse = 0.5 + 0.5 * Math.sin(time * 0.5 * magnetic + lh4 * 6.283)
          const archHeight = scaleR * (0.2 + lh3 * 0.3) * Math.max(0.1, magnetic) * flarePulse
          const radius = scaleR * 0.79 + archHeight * bulge
          px = dirx * radius; py = diry * radius; pz = dirz * radius
          pColor.setHSL(Math.max(0, 0.05 - flarePulse * 0.02), 1.0, 0.55 + flarePulse * 0.35 + bulge * 0.1)
        } else {
          // Outflowing Solar Wind
          const theta = h1 * 6.2831853
          const cphi = h2 * 2 - 1
          const sphi = Math.sqrt(Math.max(0, 1 - cphi * cphi))
          const travel = (time * windSpeed * 1.1 + h3 * 70) % 70
          const rad = scaleR * 0.95 + travel * scaleR * 0.045
          px = rad * sphi * Math.cos(theta)
          py = rad * sphi * Math.sin(theta)
          pz = rad * cphi
          const fade = Math.max(0, 1 - travel / 70)
          pColor.setHSL(0.58, 0.85, 0.4 + fade * 0.45)
        }

        // Slow celestial rotation around Y axis
        const ang = time * 0.035
        const ca = Math.cos(ang)
        const sa = Math.sin(ang)
        const fx = px * ca - py * sa
        const fy = px * sa + py * ca
        target.set(fx, fy, pz)

        positions[i].lerp(target, 0.12)
        dummy.position.copy(positions[i])
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
        mesh.setColorAt(i, pColor)
      }

      mesh.instanceMatrix.needsUpdate = true
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibilityChange)

      geometry.dispose()
      material.dispose()
      renderer.dispose()

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  )
}

export default SolarParticleSwarmBackground