import React, { useEffect, useRef, useState } from 'react'

const highlights = [
    { icon: '🏛️', title: 'Modern Campus', desc: '50-acre green campus with state-of-the-art infrastructure and sustainable architecture.', color: '#1e3a8a' },
    { icon: '🔬', title: 'Research Labs', desc: 'Advanced research laboratories equipped with cutting-edge instruments and technology.', color: '#b91c1c' },
    { icon: '📚', title: 'Digital Library', desc: '1 lakh+ books, e-journals, and 24/7 digital access to global knowledge repositories.', color: '#b45309' },
    { icon: '🏃', title: 'Sports Complex', desc: 'Olympic-standard sports facilities including swimming pool, courts, and fitness centers.', color: '#1e3a8a' },
    { icon: '🎬', title: 'Auditorium', desc: '2000-seat air-conditioned auditorium hosting international conferences and cultural events.', color: '#b91c1c' },
    { icon: '🛏️', title: 'Student Hostels', desc: 'Secure and comfortable residential facilities for 3000+ students with modern amenities.', color: '#b45309' },
]

const CampusHighlights = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIdx, setActiveIdx] = useState(0)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    // Auto-cycle active card
    useEffect(() => {
        const id = setInterval(() => {
            setActiveIdx(prev => (prev + 1) % highlights.length)
        }, 3500)
        return () => clearInterval(id)
    }, [])

    return (
        <section
            id="campus"
            ref={sectionRef}
            className="relative py-24 px-6 overflow-hidden bg-slate-50"
        >
            {/* Floating circles - light theme mix-blending */}
            <div className="absolute -left-20 top-1/3 w-64 h-64 rounded-full opacity-40 animate-morph mix-blend-multiply pointer-events-none"
                style={{ background: 'radial-gradient(circle, #bfdbfe, transparent)', filter: 'blur(40px)' }} />
            <div className="absolute -right-20 bottom-1/3 w-48 h-48 rounded-full opacity-40 animate-morph mix-blend-multiply pointer-events-none"
                style={{ background: 'radial-gradient(circle, #fecaca, transparent)', filter: 'blur(40px)', animationDelay: '4s' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-600 text-sm font-bold tracking-widest uppercase mb-3 block">Campus Life</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Experience Our <span className="shimmer-text">Campus</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Life at Transcend is vibrant, supportive, and inspiring — every corner is designed for growth.
                    </p>
                </div>

                {/* Main layout: big active card + grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Active highlight card */}
                    <div
                        className="relative overflow-hidden rounded-3xl p-10 text-center bg-white"
                        style={{
                            border: `1px solid ${highlights[activeIdx].color}30`,
                            boxShadow: `0 20px 50px ${highlights[activeIdx].color}15`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease, border 0.5s ease',
                            minHeight: 320,
                        }}
                    >
                        {/* Animated backdrop splash */}
                        <div
                            className="absolute inset-0 opacity-10 transition-colors duration-500"
                            style={{ background: `linear-gradient(135deg, ${highlights[activeIdx].color}, transparent)` }}
                        />

                        {/* Animated ring */}
                        <div
                            className="absolute -inset-10 rounded-full border border-dashed opacity-20 animate-spin-slow pointer-events-none"
                            style={{ borderColor: highlights[activeIdx].color, borderWidth: 1 }}
                        />

                        <div className="relative z-10">
                            <div className="text-8xl mb-6 animate-float-medium drop-shadow-sm">{highlights[activeIdx].icon}</div>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">{highlights[activeIdx].title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">{highlights[activeIdx].desc}</p>
                        </div>

                        {/* Dot indicator */}
                        <div className="relative z-10 flex justify-center gap-2 mt-8">
                            {highlights.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIdx(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === activeIdx ? 24 : 8,
                                        height: 8,
                                        background: i === activeIdx ? highlights[activeIdx].color : '#cbd5e1',
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Grid of all highlights */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((h, i) => (
                            <div
                                key={h.title}
                                onClick={() => setActiveIdx(i)}
                                className="glass-card bg-white p-5 cursor-pointer transition-all duration-300"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: `all 0.4s ease ${i * 0.08}s`,
                                    border: activeIdx === i ? `1px solid ${h.color}40` : '1px solid rgba(0,0,0,0.05)',
                                    boxShadow: activeIdx === i ? `0 12px 24px ${h.color}15` : '0 4px 12px rgba(0,0,0,0.02)',
                                    transform: isVisible ? (activeIdx === i ? 'translateY(-4px) scale(1.02)' : 'translateY(0)') : 'translateY(20px)',
                                }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-3xl animate-float-fast drop-shadow-sm" style={{ animationDelay: `${i * 0.4}s` }}>{h.icon}</div>
                                </div>
                                <p className={`text-base font-bold mb-1 transition-colors ${activeIdx === i ? 'text-gray-900' : 'text-gray-700'}`}>{h.title}</p>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-2">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CampusHighlights
