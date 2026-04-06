import React, { useEffect, useRef } from 'react'

// ─── Interactive Circles Configuration (Visible Foreground) ──────────────────
const CIRCLE_STYLES = [
    { stroke: 'rgba(61,47,150,0.10)', fill: 'rgba(61,47,150,0.02)', r: 50 },
    { stroke: 'rgba(91,75,220,0.10)', fill: 'transparent', r: 28 },
    { stroke: 'rgba(99,69,255,0.08)', fill: 'transparent', r: 38 },
    { stroke: 'rgba(129,140,248,0.09)', fill: 'transparent', r: 65 },
]

const GLOBAL_STYLE = `
  :root {
    --indigo-primary: 61, 47, 150;
    --indigo-soft: 91, 75, 220;
    --gold-accent: 201, 169, 110;
  }

  @media (prefers-reduced-motion: no-preference) {
    @keyframes floatUp {
      0%   { transform: translateY(0px)   rotate(var(--r, 0deg)); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateY(-110vh) rotate(calc(var(--r, 0deg) + 20deg)); opacity: 0; }
    }
    @keyframes driftOrb {
      0%,100% { transform: translate(0, 0) scale(1); }
      33%     { transform: translate(30px, -20px) scale(1.04); }
      66%     { transform: translate(-20px, 15px) scale(0.97); }
    }
    @keyframes floatGeo {
      0%,100% { transform: translateY(0px)   rotate(var(--gr, 0deg)); }
      50%     { transform: translateY(-18px) rotate(calc(var(--gr, 0deg) + var(--grs, 8deg))); }
    }
    @keyframes microFloat {
      0%,100% { transform: translateY(0px)   rotate(var(--mr, 0deg)); opacity: var(--mo, 0.08); }
      50%     { transform: translateY(-12px) rotate(calc(var(--mr, 0deg) + 10deg)); opacity: calc(var(--mo, 0.08) * 1.8); }
    }
  }
`

// ─── Micro Education Icons ──────────────────────────────────────────────────
const ICONS = [
    { id: 'cap', path: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z' },
    { id: 'book', path: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V6h10v2z' },
    { id: 'bulb', path: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z' },
    { id: 'note', path: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' },
    { id: 'pencil', path: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' },
    { id: 'star', path: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' },
    { id: 'atom', path: 'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6.37 5c.28.28.71.28.99 0 .28-.28.28-.71 0-.99-.28-.28-.71-.28-.99 0-.27.28-.27.71 0 .99zm11.26 0c.28.28.71.28.99 0 .28-.28.28-.71 0-.99-.28-.28-.71-.28-.99 0-.28.28-.28.71 0 .99zm-.01 13.99c.28.28.71.28.99 0s.28-.71 0-.99c-.28-.28-.71-.28-.99 0s-.28.71 0 .99zM6.38 19c.28.28.71.28.99 0 .28-.28.28-.71 0-.99-.28-.28-.71-.28-.99 0s-.28.71 0 .99zM21 12c0-1.12-.61-4.21-4.28-6.43.11-.47.03-.97-.26-1.37-.56-.76-1.64-.92-2.4-.36-.84-.24-1.72-.38-2.62-.38s-1.78.14-2.62.38c-.76-.56-1.84-.4-2.4.36-.29.4-.37.9-.26 1.37C3.61 7.79 3 11 3 12s.61 4.21 4.28 6.43c-.11.47-.03.97.26 1.37.56.76 1.64.92 2.4.36.84.24 1.72.38 2.62.38s1.78-.14 2.62-.38c.76.56 1.84.4 2.4-.36.29-.4.37-.9.26-1.37C20.39 16.21 21 13 21 12z' },
    { id: 'globe', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
]

// ─── Geo shapes config (rendered purely via CSS) ─────────────────────────────
const GEO_SHAPES = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    type: i % 3 === 0 ? 'diamond' : i % 3 === 1 ? 'circle' : 'rect',
    size: 18 + Math.random() * 36,
    left: `${4 + Math.random() * 92}%`,
    top: `${2 + Math.random() * 96}%`,
    animDur: `${10 + Math.random() * 14}s`,
    animDelay: `${Math.random() * 12}s`,
    rotation: Math.random() * 360,
    rotateSign: Math.random() > 0.5 ? 1 : -1,
    opacity: 0.025 + Math.random() * 0.03,
}))

// ─── Parallax blobs config ───────────────────────────────────────────────────
const BLOBS = [
    { color: 'rgba(61,47,150,0.03)', w: 460, h: 340, top: '5%', left: '65%', speed: 0.18, blur: 100, rx: '60% 40% 55% 45% / 50% 60% 40% 50%' },
    { color: 'rgba(91,75,220,0.025)', w: 380, h: 400, top: '38%', left: '-6%', speed: 0.24, blur: 110, rx: '40% 60% 45% 55% / 60% 40% 55% 45%' },
]

// ─── Micro icon placement ─────────────────────────────────────────────────────
const MICRO_ICONS = ICONS.map((icon, i) => ({
    ...icon,
    size: 18 + Math.random() * 14,
    left: `${8 + Math.random() * 84}%`,
    bottom: `${2 + Math.random() * 45}%`,
    animDur: `${12 + Math.random() * 10}s`,
    animDelay: `${Math.random() * 10}s`,
    rotation: (Math.random() - 0.5) * 30,
    opacity: 0.065 + Math.random() * 0.045,
}))

// ─── Main component ──────────────────────────────────────────────────────────
const FloatingElements = () => {
    const canvasRef = useRef(null)
    const circlesCanvasRef = useRef(null)
    const meshRef = useRef(null)
    const blobRefs = useRef([])
    const reducedMotion = useRef(
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false
    )

    // ── Unified Animation Engine (Circles + Constellations) ──────────────────
    useEffect(() => {
        if (reducedMotion.current) return

        const circlesCanvas = circlesCanvasRef.current
        const dotsCanvas = canvasRef.current
        if (!circlesCanvas || !dotsCanvas) return

        const ctxC = circlesCanvas.getContext('2d', { alpha: true })
        const ctxD = dotsCanvas.getContext('2d', { alpha: true })
        let animId

        const mouse = { x: -999, y: -999 }
        const REPEL_RADIUS = 100
        const REPEL_FORCE = 3.5

        const resize = () => {
            circlesCanvas.width = dotsCanvas.width = window.innerWidth
            circlesCanvas.height = dotsCanvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const onMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        const onMouseLeave = () => { mouse.x = -999; mouse.y = -999 }
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        window.addEventListener('mouseleave', onMouseLeave)

        const isMobile = window.innerWidth < 768
        
        // Setup Clusters
        const circleStyleItems = CIRCLE_STYLES
        const circleCount = isMobile ? 2 : 3
        const circles = Array.from({ length: circleCount }, (_, i) => {
            const style = circleStyleItems[i % circleStyleItems.length]
            return {
                x: (i / circleCount) * window.innerWidth + 100,
                y: (i / circleCount) * window.innerHeight + 100,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                r: style.r,
                stroke: style.stroke,
                fill: style.fill,
                lineW: 1.2
            }
        })

        // Setup Dots
        const dotCount = isMobile ? 12 : 28 // Reduced slightly for perf
        const dots = Array.from({ length: dotCount }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: 1 + Math.random() * 1.5,
        }))

        let frame = 0
        const render = () => {
            frame++
            
            // 1. Update & Draw Circles
            ctxC.clearRect(0, 0, circlesCanvas.width, circlesCanvas.height)
            circles.forEach(c => {
                const dx = c.x - mouse.x
                const dy = c.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < REPEL_RADIUS && dist > 0) {
                    const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
                    c.vx += (dx / dist) * force * REPEL_FORCE
                    c.vy += (dy / dist) * force * REPEL_FORCE
                }
                c.vx *= 0.96
                c.vy *= 0.96
                c.x += c.vx
                c.y += c.vy
                
                if (c.x < 0 || c.x > circlesCanvas.width) c.vx *= -1
                if (c.y < 0 || c.y > circlesCanvas.height) c.vy *= -1

                ctxC.beginPath()
                ctxC.arc(c.x, c.y, c.r, 0, Math.PI * 2)
                ctxC.fillStyle = c.fill
                ctxC.fill()
                ctxC.strokeStyle = c.stroke
                ctxC.lineWidth = c.lineW
                ctxC.stroke()
            })

            // 2. Update & Draw Dots/Constellations (Every other frame for dots)
            if (frame % 2 === 0) {
                ctxD.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height)
                const DIST_MAX = isMobile ? 70 : 90
                
                dots.forEach(d => {
                    d.x += d.vx
                    d.y += d.vy
                    if (d.x < 0 || d.x > dotsCanvas.width) d.vx *= -1
                    if (d.y < 0 || d.y > dotsCanvas.height) d.vy *= -1

                    ctxD.beginPath()
                    ctxD.arc(d.x, d.y, d.r, 0, Math.PI * 2)
                    ctxD.fillStyle = 'rgba(91,75,220,0.1)'
                    ctxD.fill()
                })

                for (let i = 0; i < dots.length; i++) {
                    for (let j = i + 1; j < dots.length; j++) {
                        const dx = dots[i].x - dots[j].x
                        const dy = dots[i].y - dots[j].y
                        if (Math.abs(dx) < DIST_MAX && Math.abs(dy) < DIST_MAX) {
                            const d2 = dx * dx + dy * dy
                            if (d2 < DIST_MAX * DIST_MAX) {
                                const dist = Math.sqrt(d2)
                                ctxD.beginPath()
                                ctxD.moveTo(dots[i].x, dots[i].y)
                                ctxD.lineTo(dots[j].x, dots[j].y)
                                ctxD.strokeStyle = `rgba(61,47,150,${(1 - dist / DIST_MAX) * 0.06})`
                                ctxD.lineWidth = 0.5
                                ctxD.stroke()
                            }
                        }
                    }
                }
            }

            animId = requestAnimationFrame(render)
        }
        animId = requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])



    // ── Layer 4: Scroll Parallax (Throttled) ──────────────────────────────────
    useEffect(() => {
        if (reducedMotion.current) return
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sy = window.scrollY
                    blobRefs.current.forEach((el, i) => {
                        if (el) el.style.transform = `translate3d(0, ${sy * BLOBS[i].speed}px, 0)`
                    })
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // ── Layer 6: Gradient Mesh (Throttled) ────────────────────────────────────
    useEffect(() => {
        if (reducedMotion.current) return
        const el = meshRef.current
        if (!el) return
        let ticking = false
        let cx = 30, cy = 40

        const onMove = (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const tx = (e.clientX / window.innerWidth) * 100
                    const ty = (e.clientY / window.innerHeight) * 100
                    cx += (tx - cx) * 0.05
                    cy += (ty - cy) * 0.05
                    el.style.setProperty('--x', `${cx.toFixed(1)}%`)
                    el.style.setProperty('--y', `${cy.toFixed(1)}%`)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('mousemove', onMove, { passive: true })
        return () => window.removeEventListener('mousemove', onMove)
    }, [])

    return (
        <>
            {/* Inject global keyframes once */}
            <style>{GLOBAL_STYLE}</style>

            {/* ── Interactive Physics Circles (behind content) ─────────── */}
            <canvas
                ref={circlesCanvasRef}
                style={{
                    position: 'fixed', inset: 0,
                    width: '100%', height: '100%',
                    pointerEvents: 'none', zIndex: 0,
                    willChange: 'transform',
                }}
            />

            {/* ── Layer 2: Constellations canvas (z-index 0, behind content) ── */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed', inset: 0,
                    width: '100%', height: '100%',
                    pointerEvents: 'none', zIndex: 0,
                    willChange: 'transform',
                }}
            />

            {/* ── Layer 6: Animated Gradient Mesh ────────────────────────────── */}
            <div
                ref={meshRef}
                style={{
                    position: 'fixed', inset: 0,
                    pointerEvents: 'none', zIndex: 2,
                    background: 'radial-gradient(ellipse at var(--x, 30%) var(--y, 40%), rgba(91,75,220,.04) 0%, transparent 60%)',
                    transition: 'background 0.1s linear',
                }}
            />

            {/* ── Layer 1: Floating Geometric Shapes ──────────────────────────── */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 3, overflow: 'hidden' }}>
                {GEO_SHAPES.map(s => (
                    <div
                        key={`geo-${s.id}`}
                        style={{
                            position: 'absolute',
                            left: s.left, top: s.top,
                            width: s.size,
                            height: s.type === 'rect' ? s.size * 0.45 : s.size,
                            border: `1px solid rgba(var(--indigo-primary), ${s.opacity})`,
                            borderRadius: s.type === 'circle' ? '50%' : '2px',
                            '--gr': `${s.rotation}deg`,
                            '--grs': `${s.rotateSign * 12}deg`,
                            transform: s.type === 'diamond' ? `rotate(${s.rotation}deg) scaleX(0.85)` : `rotate(${s.rotation}deg)`,
                            animation: reducedMotion.current ? 'none' : `floatGeo ${s.animDur} ${s.animDelay} ease-in-out infinite`,
                            willChange: 'transform',
                        }}
                    />
                ))}
            </div>

            {/* ── Layer 3: Hero blurred orbs ───────────────────────────────────── */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                {[
                    { w: 500, h: 500, top: '-8%', left: '-6%', color: 'rgba(61,47,150,0.03)', dur: '22s' },
                    { w: 400, h: 400, top: '55%', left: '70%', color: 'rgba(91,75,220,0.025)', dur: '28s', delay: '6s' },
                ].map((orb, i) => (
                    <div
                        key={`orb-${i}`}
                        style={{
                            position: 'absolute',
                            width: orb.w, height: orb.h,
                            top: orb.top, left: orb.left,
                            background: orb.color,
                            borderRadius: '50%',
                            filter: 'blur(120px)',
                            animation: reducedMotion.current ? 'none' : `driftOrb ${orb.dur} ${orb.delay || '0s'} ease-in-out infinite`,
                            willChange: 'transform',
                        }}
                    />
                ))}
            </div>

            {/* ── Layer 4: Parallax Blobs ──────────────────────────────────────── */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
                {BLOBS.map((blob, i) => (
                    <div
                        key={`blob-${i}`}
                        ref={el => blobRefs.current[i] = el}
                        style={{
                            position: 'absolute',
                            width: blob.w, height: blob.h,
                            top: blob.top, left: blob.left,
                            background: blob.color,
                            borderRadius: blob.rx,
                            filter: `blur(${blob.blur}px)`,
                            willChange: 'transform',
                        }}
                    />
                ))}
            </div>

            {/* Micro icons removed for cleaner background */}
        </>
    )
}

export default FloatingElements
