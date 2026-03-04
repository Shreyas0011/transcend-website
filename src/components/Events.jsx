import React, { useEffect, useRef, useState } from 'react'

const events = [
    {
        date: { day: '15', month: 'Mar' },
        tag: 'Symposium',
        title: 'Annual Science & Innovation Summit 2025',
        desc: 'A convergence of brilliant minds exploring the frontiers of science, technology, and innovation.',
        badge: 'Upcoming',
        badgeColor: '#10b981', // emerald
        icon: '🔬',
    },
    {
        date: { day: '22', month: 'Mar' },
        tag: 'Cultural Fest',
        title: 'Transcend Cultural Extravaganza',
        desc: 'Three days of art, music, dance and drama celebrating the vibrant diversity of our campus.',
        badge: 'Featured',
        badgeColor: '#f59e0b', // amber
        icon: '🎭',
    },
    {
        date: { day: '05', month: 'Apr' },
        tag: 'Career Fair',
        title: 'National Campus Recruitment Drive 2025',
        desc: 'Connect with 100+ companies across sectors for placement, internship, and networking opportunities.',
        badge: 'Hot',
        badgeColor: '#ef4444', // red
        icon: '💼',
    },
    {
        date: { day: '18', month: 'Apr' },
        tag: 'Workshop',
        title: 'AI & Machine Learning Bootcamp',
        desc: 'Intensive 3-day hands-on training in artificial intelligence led by industry practitioners.',
        badge: 'New',
        badgeColor: '#6366f1', // indigo
        icon: '🤖',
    },
    {
        date: { day: '10', month: 'May' },
        tag: 'Seminar',
        title: 'Entrepreneurship & Startup Ecosystem Forum',
        desc: 'Inspiring talks from successful startup founders, VCs, and innovation ecosystem leaders.',
        badge: 'Save Date',
        badgeColor: '#1e3a8a', // blue-900
        icon: '🚀',
    },
    {
        date: { day: '25', month: 'May' },
        tag: 'Sports',
        title: 'Inter-College Sports Championship',
        desc: 'Annual sports extravaganza featuring 20+ sports disciplines and 50+ participating colleges.',
        badge: 'Open',
        badgeColor: '#f59e0b',
        icon: '🏆',
    },
]

const Events = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredIdx, setHoveredIdx] = useState(null)
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
            id="events"
            ref={sectionRef}
            className="relative py-24 px-6 overflow-hidden bg-slate-50"
        >
            {/* Background waves - white theme version */}
            <div className="absolute bottom-0 left-0 w-[200%] h-24 opacity-[0.03]">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full animate-wave">
                    <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#1e3a8a" />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3 block">Events & News</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                            What's <span className="shimmer-text">Happening</span>
                        </h2>
                    </div>
                    <a href="#" className="text-amber-500 text-sm font-bold hover:underline flex items-center gap-2 group tracking-wide">
                        View All Events
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                </div>

                {/* Events grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {events.map((ev, i) => (
                        <div
                            key={ev.title}
                            className="glass-card bg-white group cursor-pointer overflow-hidden relative"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                                border: hoveredIdx === i ? `1px solid ${ev.badgeColor}40` : '1px solid rgba(0,0,0,0.05)',
                                boxShadow: hoveredIdx === i ? `0 16px 40px ${ev.badgeColor}15` : '0 4px 20px rgba(0,0,0,0.03)',
                                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border 0.3s ease, box-shadow 0.3s ease`,
                            }}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            {/* Top color strip */}
                            <div
                                className="h-1.5 w-full transition-all duration-300"
                                style={{ background: `linear-gradient(90deg, ${ev.badgeColor}, ${ev.badgeColor}40)` }}
                            />

                            <div className="p-5">
                                {/* Date + icon */}
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="flex flex-col items-center justify-center w-14 h-14 rounded-xl text-white font-black shadow-md transition-transform duration-300 group-hover:scale-105"
                                        style={{ background: `linear-gradient(135deg, ${ev.badgeColor}, ${ev.badgeColor}cc)` }}
                                    >
                                        <span className="text-xl leading-none">{ev.date.day}</span>
                                        <span className="text-xs font-semibold opacity-90">{ev.date.month}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-xs px-2.5 py-1 rounded-full font-bold shadow-sm"
                                            style={{ background: `${ev.badgeColor}15`, color: ev.badgeColor, border: `1px solid ${ev.badgeColor}30` }}
                                        >
                                            {ev.badge}
                                        </span>
                                        <span className="text-2xl group-hover:animate-float-fast">{ev.icon}</span>
                                    </div>
                                </div>

                                {/* Tag */}
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{ev.tag}</span>

                                {/* Title */}
                                <h3
                                    className="text-base font-bold text-gray-900 mt-1 mb-2 leading-tight transition-colors duration-300"
                                    style={{ color: hoveredIdx === i ? ev.badgeColor : '#111827' }}
                                >
                                    {ev.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{ev.desc}</p>

                                {/* Register button */}
                                <button
                                    className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm"
                                    style={{
                                        background: hoveredIdx === i ? ev.badgeColor : '#f1f5f9',
                                        color: hoveredIdx === i ? '#fff' : '#475569',
                                        border: `1px solid ${hoveredIdx === i ? ev.badgeColor : 'transparent'}`,
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Events
