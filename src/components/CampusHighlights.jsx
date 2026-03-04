import React, { useEffect, useRef, useState } from 'react'

const highlights = [
    {
        title: 'Modern Campus',
        desc: '50-acre green campus with state-of-the-art infrastructure and sustainable architecture.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200',
        color: '#1e3a8a'
    },
    {
        title: 'Research Labs',
        desc: 'Advanced research laboratories equipped with cutting-edge instruments and technology.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
        color: '#b91c1c'
    },
    {
        title: 'Digital Library',
        desc: '1 lakh+ books, e-journals, and 24/7 digital access to global knowledge repositories.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12bcf74bc1?auto=format&fit=crop&q=80&w=1200',
        color: '#b45309'
    },
    {
        title: 'Sports Complex',
        desc: 'Olympic-standard sports facilities including swimming pool, courts, and fitness centers.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
        color: '#1e3a8a'
    },
    {
        title: 'Auditorium',
        desc: '2000-seat air-conditioned auditorium hosting international conferences and cultural events.',
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1200',
        color: '#b91c1c'
    },
    {
        title: 'Student Hostels',
        desc: 'Secure and comfortable residential facilities for 3000+ students with modern amenities.',
        image: 'https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=1200',
        color: '#b45309'
    },
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

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIdx(prev => (prev + 1) % highlights.length)
        }, 5000)
        return () => clearInterval(id)
    }, [])

    return (
        <section
            id="campus"
            ref={sectionRef}
            className="relative py-32 px-6 overflow-hidden bg-white"
        >
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#2d3e91] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Campus Experience</span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
                        Premium <span className="text-blue-600">Amenities</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Beyond academics, we provide an ecosystem designed for excellence, comfort, and holistic growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Featured Image Section */}
                    <div className="lg:col-span-8 relative group">
                        <div
                            className="relative overflow-hidden rounded-[32px] h-[500px] md:h-[600px] shadow-2xl transition-all duration-700"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'none' : 'translateY(40px)',
                            }}
                        >
                            {/* Background Image with Crossfade */}
                            {highlights.map((h, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                                    style={{
                                        opacity: activeIdx === i ? 1 : 0,
                                        zIndex: activeIdx === i ? 1 : 0
                                    }}
                                >
                                    <img
                                        src={h.image}
                                        alt={h.title}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[10s] ease-linear"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>
                            ))}

                            {/* Content Over Image */}
                            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 z-10">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-0.5 w-12 bg-blue-500" />
                                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Highlight {activeIdx + 1}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                        {highlights[activeIdx].title}
                                    </h3>
                                    <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8">
                                        {highlights[activeIdx].desc}
                                    </p>
                                    <div className="flex gap-2">
                                        {highlights.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveIdx(i)}
                                                className="h-1.5 rounded-full transition-all duration-500"
                                                style={{
                                                    width: activeIdx === i ? '40px' : '12px',
                                                    background: activeIdx === i ? '#3b82f6' : 'rgba(255,255,255,0.3)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Thumbnails */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {highlights.map((h, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIdx(i)}
                                className={`group flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left h-full ${activeIdx === i
                                    ? 'bg-blue-50 border-blue-500 shadow-lg translate-x-2'
                                    : 'bg-white border-gray-100 hover:border-gray-200 hover:translate-x-1'
                                    }`}
                            >
                                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-md">
                                    <img src={h.image} alt={h.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className={`font-black text-lg ${activeIdx === i ? 'text-blue-700' : 'text-gray-800'}`}>
                                        {h.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-0.5">Explore Feature</p>
                                </div>
                                <div className={`ml-auto transition-all duration-300 ${activeIdx === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CampusHighlights
