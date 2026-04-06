import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function useReveal(options = {}) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
            { threshold: 0.15, ...options }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return ref
}

const About = () => {
    const sectionRef = useReveal()
    const leftRef = useReveal()
    const rightRef = useReveal()

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            {/* Floating decorative gradients */}
            <div className="absolute top-[-80px] right-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
            <div className="absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none animate-float-extra-slow"
                style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.06) 0%, transparent 70%)' }} />
            <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full pointer-events-none animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)' }} />

            {/* Floating decorative ring */}
            <div className="absolute top-16 right-24 w-32 h-32 rounded-full border border-indigo-100/60 pointer-events-none animate-float-slow opacity-60" />
            <div className="absolute bottom-24 left-16 w-20 h-20 rounded-full border border-indigo-200/40 pointer-events-none animate-float-medium opacity-60" style={{ animationDelay: '2s' }} />

            <div className="container-standard relative z-10">
                {/* Section label */}
                <div ref={sectionRef} className="reveal flex justify-center mb-16">
                    <span className="section-badge">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] inline-block"></span>
                        Our Legacy
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column - Text Content */}
                    <div ref={leftRef} className="reveal-left lg:w-[58%]">
                        <h2 className="text-3xl md:text-[3.2rem] font-black mb-8 leading-[1.08] tracking-tight"
                            style={{ color: '#1e2a6b' }}>
                            About{' '}
                            <span className="relative inline-block">
                                <span className="indigo-gradient-text">Transcend</span>
                                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full opacity-30"
                                    style={{ background: 'linear-gradient(90deg, #2d3e91, #4338ca)' }} />
                            </span>
                        </h2>

                        <div className="space-y-5 text-gray-500 text-[17px] leading-relaxed font-medium">
                            <p style={{ transitionDelay: '0.1s' }}>
                                TRANSCEND Group of Institutions is one of the{' '}
                                <span className="text-[#2d3e91] font-bold">leading degree colleges in Karnataka</span>,
                                offering industry-focused education in Commerce and Science streams. With a modern campus spanning over{' '}
                                <span className="text-[#2d3e91] font-bold">2,00,000 sq. ft.</span>,{' '}
                                <span className="text-[#2d3e91] font-bold">160+ expert faculty</span>, and{' '}
                                <span className="text-[#2d3e91] font-bold">1,800+ students</span>, TRANSCEND provides a dynamic
                                learning environment that blends academic excellence with real-world skills.
                            </p>
                            <p style={{ transitionDelay: '0.2s' }}>
                                Recognized among the{' '}
                                <span className="text-indigo-600 font-bold">top colleges in Bangalore</span>, the institution
                                offers <span className="text-[#2d3e91] font-bold">B.Com and BBA</span> programs designed
                                to build career-ready professionals equipped for today's competitive world.
                            </p>
                            <p className="italic text-[#2d3e91] font-semibold text-[16px] border-l-4 border-indigo-300 pl-4" style={{ transitionDelay: '0.3s' }}>
                                Shaping knowledge. Building skills. Empowering futures.
                            </p>
                        </div>

                        <div className="pt-10">
                            <Link
                                to="/about-detail"
                                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-[15px] transition-all duration-300 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #2d3e91 0%, #4338ca 100%)',
                                    boxShadow: '0 12px 32px rgba(67, 56, 202, 0.35)',
                                }}
                            >
                                <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></span>
                                <span className="relative z-10">Know More</span>
                                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Stats Panel */}
                    <div ref={rightRef} className="reveal-right lg:w-2/5 w-full">
                        <div
                            className="relative p-8 md:p-10 rounded-[28px] overflow-hidden group"
                            style={{
                                background: 'rgba(255,255,255,0.85)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(99,102,241,0.12)',
                                boxShadow: '0 24px 64px rgba(45,62,145,0.10)',
                            }}
                        >
                            {/* Card top indigo accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[28px]"
                                style={{ background: 'linear-gradient(90deg, #2d3e91, #4338ca, #6366f1)' }} />

                            {/* Inner glow on hover */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-1000 group-hover:scale-[2] opacity-0 group-hover:opacity-100 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />

                            <p className="text-xs font-bold text-indigo-400 tracking-[0.2em] uppercase mb-8">By The Numbers</p>

                            <div className="flex flex-col gap-8">
                                {[
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        ),
                                        val: '1,842+', label: 'Students Enrolled'
                                    },
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                                                <rect x="3" y="4" width="18" height="12" rx="2" />
                                                <path d="M12 16v4M8 20h8" />
                                                <circle cx="12" cy="9" r="2.5" />
                                            </svg>
                                        ),
                                        val: '168+', label: 'Expert Faculty'
                                    },
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        ),
                                        val: '2,05,300', label: 'Sq ft Campus'
                                    }
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex items-center gap-6 group/stat cursor-default">
                                        <div
                                            className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/stat:scale-110 group-hover/stat:shadow-lg"
                                            style={{
                                                background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
                                                color: '#2d3e91',
                                            }}
                                        >
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div
                                                className="text-[1.8rem] md:text-[2.4rem] font-black leading-tight transition-all duration-300 group-hover/stat:translate-x-1"
                                                style={{
                                                    background: 'linear-gradient(135deg, #1e2a6b, #4338ca)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                }}
                                            >
                                                {stat.val}
                                            </div>
                                            <div className="text-gray-400 text-xs font-bold uppercase tracking-[0.18em]">{stat.label}</div>
                                        </div>
                                        {/* Separator */}
                                        {idx < 2 && (
                                            <div className="absolute left-8 right-8" style={{ marginTop: '5rem' }}>
                                                <div className="h-px bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
