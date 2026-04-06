import React, { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────
   EDUCATIONAL SVG ICONS
───────────────────────────────────────────────────────── */
const SVG_BOOK = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const SVG_CAP = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
);
const SVG_CHART = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
);
const SVG_AWARD = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

const shapeIcons = [SVG_BOOK, SVG_CAP, SVG_CHART, SVG_AWARD];

const FloatingBg = () => {
    const [shapes] = useState(() =>
        Array.from({ length: 12 }).map((_, i) => ({
            Icon: shapeIcons[i % shapeIcons.length],
            top: `${10 + (i * 8.5) % 80}%`,
            left: `${(i * 11.3) % 90}%`,
            size: 20 + (i % 4) * 8,
            delay: i * 0.8,
            dur: 4 + (i % 3),
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <style>{`
                @keyframes floatShape { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(10deg)} }
                @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(30px,-40px) rotate(6deg)} 66%{transform:translate(-20px,20px) rotate(-4deg)} }
                @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(-40px,30px) rotate(-8deg)} 66%{transform:translate(25px,-20px) rotate(5deg)} }
                @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.08)} }
            `}</style>

            {/* Animated Blobs */}
            {[
                { size: 500, color: 'rgba(99,102,241,0.08)', x: '10%', y: '10%', anim: 'floatA 20s ease-in-out infinite' },
                { size: 400, color: 'rgba(67,56,202,0.06)', x: '70%', y: '60%', anim: 'floatB 25s ease-in-out infinite' },
                { size: 350, color: 'rgba(129,140,248,0.05)', x: '30%', y: '80%', anim: 'floatC 18s ease-in-out infinite' },
            ].map((b, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        width: b.size, height: b.size,
                        borderRadius: '50%',
                        background: b.color,
                        left: b.x, top: b.y,
                        filter: 'blur(80px)',
                        animation: b.anim,
                    }} />
            ))}
            {/* Floating Shapes */}
            {shapes.map((s, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        top: s.top, left: s.left,
                        opacity: 0.1,
                        animation: `floatShape ${s.dur + 2}s ease-in-out infinite`,
                        animationDelay: `${s.delay}s`,
                        color: '#6366f1'
                    }}>
                    {s.Icon(s.size)}
                </div>
            ))}
            {/* Subtle Dot Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #4338ca 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
};

const statsData = [
    {
        target: 1842, suffix: '+', label: 'Students Enrolled',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        target: 168, suffix: '+', label: 'Expert Faculty',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M12 16v4M8 20h8" /><circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
    },
    {
        target: 205300, suffix: '', label: 'Sq. Ft. Campus',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        target: 95, suffix: '%', label: 'Placement Rate',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        target: 50, suffix: '+', label: 'Industry Partners',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z" />
                <path d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
                <path d="M8 13c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path d="M16 13c-.29 0-.62.02-.97.05C16.19 13.68 17 14.7 17 16v2h7v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        ),
    },
    {
        target: 10, suffix: '+', label: 'Years of Excellence',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        ),
    },
]

const useCountUp = (target, duration = 2500, start = false) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!start) return
        let startTime = null
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }, [target, duration, start])
    return count
}

const StatCard = ({ stat, index, isVisible }) => {
    const count = useCountUp(stat.target, 2500, isVisible)

    return (
        <div
            className="p-5 xs:p-6 md:p-8 rounded-[16px] xs:rounded-[20px] flex flex-col items-center text-center group cursor-default"
            style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(99,102,241,0.15)',
                boxShadow: '0 4px 24px rgba(45,62,145,0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.1}s`,
                zIndex: 10,
            }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(67,56,202,0.16)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(45,62,145,0.06)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
        >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                    background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
                    color: '#4338ca',
                }}>
                {stat.icon}
            </div>

            {/* Counter */}
            <div className="flex items-end justify-center gap-0.5 mb-2">
                <span className="text-3xl xs:text-4xl md:text-5xl font-black leading-none"
                    style={{
                        background: 'linear-gradient(135deg, #1e2a6b, #4338ca)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                    {count >= 1000 ? count.toLocaleString() : count}
                </span>
                <span className="text-2xl font-black text-indigo-400 mb-0.5">{stat.suffix}</span>
            </div>

            <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.18em] mt-1">{stat.label}</p>

            {/* Bottom accent (expands on hover) */}
            <div className="mt-5 h-[2px] rounded-full w-0 group-hover:w-12 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #2d3e91, #4338ca)' }} />
        </div>
    )
}

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="stats"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8faff 100%)' }}
        >
            <FloatingBg />

            <div className="relative z-10 container-standard">
                {/* Header */}
                <div className="text-center mb-16"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}>
                    <span className="section-badge mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] inline-block"></span>
                        By The Numbers
                    </span>
                    <h2 className="text-5xl md:text-[3.5rem] font-black text-[#1e2a6b] mt-4 mb-4 leading-tight tracking-tight">
                        Our <span className="shimmer-text">Impact</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium">
                        Decades of dedication to academic excellence, shaping careers and communities across the globe.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {statsData.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
