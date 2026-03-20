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

    // ── Interactive Physics Circles ───────────────────────────────────────────
    useEffect(() => {
        const canvas = circlesCanvasRef.current
        if (!canvas || reducedMotion.current) return

        const ctx = canvas.getContext('2d')
        let animId
        const mouse = { x: -999, y: -999 }
        const REPEL_RADIUS = 100
        const REPEL_FORCE = 3.5

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
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
        const COUNT = isMobile ? 2 : 3
        const circles = Array.from({ length: COUNT }, (_, i) => {
            const style = CIRCLE_STYLES[i % CIRCLE_STYLES.length]
            // Spread across grid so they start well-distributed
            const col = i % 5
            const row = Math.floor(i / 5)
            return {
                x: (col / 4.5) * window.innerWidth + (Math.random() - 0.5) * 120,
                y: (row / 1.5) * window.innerHeight + (Math.random() - 0.5) * 120,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                r: style.r * (0.85 + Math.random() * 0.5),
                stroke: style.stroke,
                fill: style.fill,
                lineW: 1.2 + Math.random() * 1.0,
                baseVx: 0,
                baseVy: 0,
            }
        })

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            circles.forEach(c => {
                // Mouse repulsion
                const dx = c.x - mouse.x
                const dy = c.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < REPEL_RADIUS && dist > 0) {
                    const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
                    c.vx += (dx / dist) * force * REPEL_FORCE
                    c.vy += (dy / dist) * force * REPEL_FORCE
                }

                // Dampen velocity so circles settle back to gentle drift
                c.vx *= 0.97
                c.vy *= 0.97

                // Keep a minimum drift so they never fully stop
                const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy)
                if (speed < 0.25) {
                    c.vx += (Math.random() - 0.5) * 0.05
                    c.vy += (Math.random() - 0.5) * 0.05
                }

                c.x += c.vx
                c.y += c.vy

                // Bounce off edges with margin
                if (c.x - c.r < 0) { c.x = c.r; c.vx = Math.abs(c.vx) }
                if (c.x + c.r > canvas.width) { c.x = canvas.width - c.r; c.vx = -Math.abs(c.vx) }
                if (c.y - c.r < 0) { c.y = c.r; c.vy = Math.abs(c.vy) }
                if (c.y + c.r > canvas.height) { c.y = canvas.height - c.r; c.vy = -Math.abs(c.vy) }

                // Draw circle
                ctx.beginPath()
                ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
                ctx.fillStyle = c.fill
                ctx.fill()
                ctx.strokeStyle = c.stroke
                ctx.lineWidth = c.lineW
                ctx.stroke()
            })

            animId = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    // ── Layer 2: Particle Constellation Canvas ────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas || reducedMotion.current) return

        const ctx = canvas.getContext('2d')
        let animId
        const isMobile = window.innerWidth < 768

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const COUNT = isMobile ? 15 : 35
        const dots = Array.from({ length: COUNT }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: 1.5 + Math.random() * 1.5,
        }))

            // Skip every other frame for performance on heavy constellation logic
            let frameCount = 0;
            const draw = () => {
                frameCount++;
                if (frameCount % 2 !== 0) {
                    animId = requestAnimationFrame(draw);
                    return;
                }
                
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                const DOT_COLOR = 'rgba(91,75,220,0.12)'
                const LINE_COLOR = 'rgba(61,47,150,'
                const DIST = isMobile ? 80 : 100

                dots.forEach(d => {
                    d.x += d.vx
                    d.y += d.vy
                    if (d.x < 0 || d.x > canvas.width) d.vx *= -1
                    if (d.y < 0 || d.y > canvas.height) d.vy *= -1

                    ctx.beginPath()
                    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
                    ctx.fillStyle = DOT_COLOR
                    ctx.fill()
                })

                for (let i = 0; i < dots.length; i++) {
                    for (let j = i + 1; j < dots.length; j++) {
                        const dx = dots[i].x - dots[j].x
                        const dy = dots[i].y - dots[j].y
                        const dist = Math.sqrt(dx * dx + dy * dy)
                        if (dist < DIST) {
                            const alpha = (1 - dist / DIST) * 0.08
                            ctx.beginPath()
                            ctx.moveTo(dots[i].x, dots[i].y)
                            ctx.lineTo(dots[j].x, dots[j].y)
                            ctx.strokeStyle = `${LINE_COLOR}${alpha.toFixed(3)})`
                            ctx.lineWidth = 0.5
                            ctx.stroke()
                        }
                    }
                }
                animId = requestAnimationFrame(draw)
            }
        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    // ── Layer 4: Scroll Parallax Blobs ────────────────────────────────────────
    useEffect(() => {
        if (reducedMotion.current) return
        const onScroll = () => {
            const sy = window.scrollY
            blobRefs.current.forEach((el, i) => {
                if (!el) return
                el.style.transform = `translateY(${sy * BLOBS[i].speed}px)`
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // ── Layer 6: Gradient Mesh via mousemove ─────────────────────────────────
    useEffect(() => {
        if (reducedMotion.current) return
        const el = meshRef.current
        if (!el) return
        let cx = 30, cy = 40
        const onMove = (e) => {
            const tx = (e.clientX / window.innerWidth) * 100
            const ty = (e.clientY / window.innerHeight) * 100
            cx += (tx - cx) * 0.05
            cy += (ty - cy) * 0.05
            el.style.setProperty('--x', `${cx.toFixed(1)}%`)
            el.style.setProperty('--y', `${cy.toFixed(1)}%`)
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
