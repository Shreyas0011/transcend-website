import React, { useEffect, useRef, useState } from 'react'

const programs = [
    {
        icon: '⚗️',
        title: 'Science & Technology',
        desc: 'Cutting-edge labs and research facilities for tomorrow\'s scientists and engineers.',
        tags: ['B.Sc.', 'B.Tech', 'M.Sc.'],
        color: '#1e3a8a', // blue-900
        accent: '#3b82f6', // blue-500
    },
    {
        icon: '💼',
        title: 'Management Studies',
        desc: 'Industry-integrated curriculum with global case studies and executive mentors.',
        tags: ['BBA', 'MBA', 'PGDM'],
        color: '#b91c1c', // red-700
        accent: '#ef4444', // red-500
    },
    {
        icon: '🎨',
        title: 'Arts & Humanities',
        desc: 'Cultivating creative and critical thinkers ready to reshape culture and society.',
        tags: ['BA', 'MA', 'Fine Arts'],
        color: '#b45309', // amber-700
        accent: '#f59e0b', // amber-500
    },
    {
        icon: '💻',
        title: 'Computer Applications',
        desc: 'Full-stack development, AI/ML, cloud computing and data science pathways.',
        tags: ['BCA', 'MCA', 'B.Tech CS'],
        color: '#1e3a8a',
        accent: '#6366f1', // indigo-500
    },
    {
        icon: '⚖️',
        title: 'Law & Legal Studies',
        desc: 'Comprehensive legal education with moot courts and judicial internship programs.',
        tags: ['LLB', 'LLM', 'BBA LLB'],
        color: '#b91c1c',
        accent: '#dc2626', // red-600
    },
    {
        icon: '🧬',
        title: 'Pharmacy & Health',
        desc: 'State-of-the-art pharmaceutical labs with clinical placement opportunities.',
        tags: ['B.Pharm', 'M.Pharm', 'D.Pharm'],
        color: '#b45309',
        accent: '#10b981', // emerald-500
    },
]

const ProgramCard = ({ prog, index, isVisible }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="relative group cursor-pointer"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Glow behind on hover */}
            <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${prog.accent}15, transparent 70%)`,
                    opacity: hovered ? 1 : 0,
                }}
            />

            <div
                className="relative glass-card bg-white p-6 h-full transition-all duration-300"
                style={{
                    border: hovered ? `1px solid ${prog.accent}40` : '1px solid rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hovered ? `0 20px 40px ${prog.accent}15` : '0 4px 20px rgba(0,0,0,0.03)',
                }}
            >
                {/* Floating icon */}
                <div
                    className="text-5xl mb-4 block animate-float-fast"
                    style={{ animationDelay: `${index * 0.5}s` }}
                >
                    {prog.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                    {prog.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {prog.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full font-semibold"
                            style={{ background: `${prog.accent}15`, color: prog.color, border: `1px solid ${prog.accent}30` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Animated arrow */}
                <div
                    className="flex items-center gap-2 text-sm font-bold transition-all duration-300"
                    style={{ color: hovered ? prog.color : 'rgba(0,0,0,0.3)' }}
                >
                    Learn More
                    <span style={{ transform: hovered ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>→</span>
                </div>

                {/* Corner accent */}
                <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-2xl transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${prog.accent}20, transparent)`, opacity: hovered ? 1 : 0 }}
                />
            </div>
        </div>
    )
}

const Programs = () => {
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
            id="programs"
            ref={sectionRef}
            className="relative section-padding overflow-hidden bg-white"
        >
            {/* Animated hexagon accent - light theme */}
            <div className="absolute right-0 top-0 opacity-5 text-blue-200 animate-spin-slow pointer-events-none" style={{ fontSize: 400, lineHeight: 1 }}>⬡</div>

            <div className="relative z-10 container-standard">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3 block">Academic Programs</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Choose Your <span className="shimmer-text">Path</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        From foundational sciences to professional management — discover programs crafted for the future.
                    </p>
                </div>

                {/* Program grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((prog, i) => (
                        <ProgramCard key={prog.title} prog={prog} index={i} isVisible={isVisible} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-blue-800 border border-blue-200 hover:border-blue-800 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md"
                    >
                        View All Programs
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Programs
