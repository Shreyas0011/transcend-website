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
const SVG_GLOBE = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const SVG_ATOM = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M10.3 8.3a6.7 6.7 0 0 1 3.4 0c1.7.5 2.9 2.2 2.9 4.1 0 1.9-1.2 3.6-2.9 4.1a6.7 6.7 0 0 1-3.4 0c-1.7-.5-2.9-2.2-2.9-4.1 0-1.9 1.2-3.6 2.9-4.1Z"></path><path d="m8.3 10.3 7.4 3.4c1.7.5 2.9 2.2 2.9 4.1 0 1.9-1.2 3.6-2.9 4.1-1.7.5-3.4-.7-3.4-2.6 0-1.9 1.2-3.6 2.9-4.1"></path><path d="m10.3 15.7-7.4-3.4c-1.7-.5-2.9-2.2-2.9-4.1 0-1.9 1.2-3.6 2.9-4.1 1.7-.5 3.4.7 3.4 2.6 0 1.9-1.2 3.6-2.9 4.1"></path></svg>
);

const shapeIcons = [SVG_BOOK, SVG_CAP, SVG_GLOBE, SVG_ATOM];

const FloatingBg = () => {
    const [shapes] = useState(() =>
        Array.from({ length: 24 }).map((_, i) => ({
            Icon: shapeIcons[i % shapeIcons.length],
            top: `${5 + (i * 8.5) % 85}%`,
            left: `${2 + (i * 11.3) % 95}%`,
            size: 20 + (i % 4) * 8,
            delay: i * 0.4,
            dur: 3 + (i % 3),
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden testimonials-floating-bg pointer-events-none z-0">
            <style>{`
                @keyframes floatShape { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(10deg)} }
                @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(30px,-40px) rotate(6deg)} 66%{transform:translate(-20px,20px) rotate(-4deg)} }
                @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(-40px,30px) rotate(-8deg)} 66%{transform:translate(25px,-20px) rotate(5deg)} }
                @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.08)} }
            `}</style>

            {/* Animated Blobs */}
            {[
                { size: 550, color: 'rgba(99,102,241,0.08)', x: '5%', y: '5%', anim: 'floatA 22s ease-in-out infinite' },
                { size: 450, color: 'rgba(236,72,153,0.06)', x: '75%', y: '55%', anim: 'floatB 28s ease-in-out infinite' },
                { size: 400, color: 'rgba(6,182,212,0.05)', x: '25%', y: '75%', anim: 'floatC 20s ease-in-out infinite' },
            ].map((b, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        width: b.size, height: b.size,
                        borderRadius: '50%',
                        background: b.color,
                        left: b.x, top: b.y,
                        filter: 'blur(90px)',
                        animation: b.anim,
                    }} />
            ))}
            {/* Floating Shapes */}
            {shapes.map((s, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        top: s.top, left: s.left,
                        opacity: 0.5,
                        animation: `floatShape ${s.dur + 2}s ease-in-out infinite`,
                        animationDelay: `${s.delay}s`,
                        color: '#6366f1'
                    }}>
                    {s.Icon(s.size)}
                </div>
            ))}
            {/* Subtle Dot Grid */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '35px 35px' }} />
        </div>
    );
};

const testimonials = [
    {
        name: 'Aiman Shaikh',
        role: 'Student',
        program: 'BBA SEM1',
        avatar: 'AS',
        quote: 'I feel Transcend is the right place to enhance skills and showcase talent for every student. Transcend focuses on magnifying students\' mindset and their personality and not just on academics which is the need of the current hour. Since I\'ve joined Transcend, I see consequent improvement within myself and this keeps me motivated to achieve more every single day.',
        rating: 5,
    },
    {
        name: 'Iffath Aayesha Siddiqa',
        role: 'Student',
        program: 'BBA SEM1',
        avatar: 'IA',
        quote: 'From the moment I stepped onto this campus, I felt a sense of belonging and excitement. Selecting TRANSCEND GROUP OF INSTITUIONS to pursue my BBA degree has been the wisest decision of my academic career. The vibrant community, dedicated faculty, and diverse opportunities have made my college journey not just educational, but truly transformative. They\'ve challenged me to think beyond the ordinary, fostering an environment where intellectual curiosity thrives. Thank you for creating an environment with endless possibilities. I look forward to continuing to explore and make the most of all that Transcend has to offer.',
        rating: 5,
    },
    {
        name: 'Sanath K',
        role: 'Student',
        program: 'BCOM SEM3',
        avatar: 'SK',
        quote: 'Attending Transcend College has been transformative, shaping both my personal and academic growth over the past 3.5 years. This Institution Values Not just grades but holistic development of its students. I\'m grateful for the invaluable lessons learned both inside and outside the classroom.',
        rating: 5,
    },
    {
        name: 'Anya Naveen Makam',
        role: 'Student',
        program: 'BCOM SEM1',
        avatar: 'AN',
        quote: 'Transcend truly abides by the GEL concept, which is grow, enjoy and learn. Staff and faculty are supportive and friendly. There are various events, seminars and guest lectures organised from time and again. Transcend has helped me grow and excel in academics as well as co-curriculars.',
        rating: 5,
    },
    {
        name: 'Harini Praveen',
        role: 'Student',
        program: '1st PU - Commerce',
        avatar: 'HP',
        quote: 'Transcend has shaped me both academically and non-academically. It has taught me that life is not about "this or that" it is about both "this and that". Though being an extrovert, this college has been a huge support for me to overcome my fear of public speaking by making it simple and molding me to become the best at it. I\'m truly grateful to transcend for giving me an amazing platform and multiple opportunities to learn grow and enjoy all the experiences at the most.',
        rating: 5,
    },
]

const StarRating = ({ count }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="#4338ca" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
)

const Testimonials = () => {
    const [current, setCurrent] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [animating, setAnimating] = useState(false)
    const sectionRef = useRef(null)
    const autoRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const goTo = (idx) => {
        if (animating) return
        setAnimating(true)
        setCurrent(idx)
        setTimeout(() => setAnimating(false), 500)
    }

    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
    const next = () => goTo((current + 1) % testimonials.length)

    useEffect(() => {
        autoRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(autoRef.current)
    }, [])

    const t = testimonials[current]

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative py-28 px-6 overflow-hidden bg-[#fafbff]"
        >
            <FloatingBg />

            {/* Decorative gradient quote marks */}
            <div className="absolute top-8 left-6 text-[180px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(99,102,241,0.06)', fontFamily: 'Georgia, serif', zIndex: 0 }}>"</div>
            <div className="absolute bottom-8 right-6 text-[180px] font-black leading-none select-none pointer-events-none rotate-180"
                style={{ color: 'rgba(99,102,241,0.06)', fontFamily: 'Georgia, serif', zIndex: 0 }}>"</div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}>
                    <span className="section-badge mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] inline-block"></span>
                        Testimonials
                    </span>
                    <h2 className="text-5xl md:text-[3.5rem] font-black text-[#1e2a6b] leading-tight tracking-tight mt-4 mb-4">
                        Voices of{' '}
                        <span className="shimmer-text">Success</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
                        Hear from our students who transformed their ambitions into achievements at Transcend.
                    </p>
                </div>

                {/* Main Card */}
                <div
                    className="relative rounded-[24px] p-8 md:p-12 mb-8 overflow-hidden"
                    style={{
                        background: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(99,102,241,0.15)',
                        boxShadow: '0 24px 64px rgba(45,62,145,0.08)',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
                        zIndex: 10,
                    }}
                >
                    {/* Indigo top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px]"
                        style={{ background: 'linear-gradient(90deg, #2d3e91, #4338ca, #6366f1)' }} />

                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        {/* Avatar */}
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-black mb-5 shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #2d3e91, #4338ca)' }}
                        >
                            {t.avatar}
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center mb-5">
                            <StarRating count={t.rating} />
                        </div>

                        {/* Quote */}
                        <blockquote
                            className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic"
                            style={{
                                opacity: animating ? 0 : 1,
                                transform: animating ? 'translateY(12px)' : 'translateY(0)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            "{t.quote}"
                        </blockquote>

                        {/* Name & Info */}
                        <div>
                            <p className="text-[#1e2a6b] font-black text-lg md:text-xl">{t.name}</p>
                            <p className="font-bold text-base md:text-lg mt-0.5"
                                style={{ color: '#4338ca' }}>{t.role}</p>
                            <p className="text-gray-500 text-sm md:text-base mt-1 font-medium">{t.program}</p>
                        </div>
                    </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between relative z-20">
                    {/* Prev button */}
                    <button onClick={prev}
                        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                        style={{
                            border: '1px solid rgba(99,102,241,0.2)',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#4338ca',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#4338ca';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                            e.currentTarget.style.color = '#4338ca';
                        }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dot nav */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="rounded-full transition-all duration-400"
                                style={{
                                    width: i === current ? 28 : 8,
                                    height: 8,
                                    background: i === current
                                        ? 'linear-gradient(90deg, #2d3e91, #4338ca)'
                                        : 'rgba(99,102,241,0.2)',
                                }}
                            />
                        ))}
                    </div>

                    {/* Next button */}
                    <button onClick={next}
                        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                        style={{
                            border: '1px solid rgba(99,102,241,0.2)',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#4338ca',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#4338ca';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                            e.currentTarget.style.color = '#4338ca';
                        }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Side preview cards */}
                <div className="hidden md:grid grid-cols-2 gap-4 mt-8 relative z-20">
                    {[
                        testimonials[(current + 1) % testimonials.length],
                        testimonials[(current + 2) % testimonials.length],
                    ].map((item, i) => (
                        <div
                            key={i}
                            onClick={() => goTo((current + i + 1) % testimonials.length)}
                            className="p-5 rounded-[18px] cursor-pointer transition-all duration-300 shadow-sm"
                            style={{
                                background: 'rgba(255,255,255,0.8)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(99,102,241,0.1)',
                                opacity: 0.65,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.opacity = '1';
                                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(67,56,202,0.12)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.opacity = '0.65';
                                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(45,62,145,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #2d3e91, #4338ca)' }}>
                                    {item.avatar}
                                </div>
                                <div>
                                    <p className="text-gray-900 text-sm font-bold">{item.name}</p>
                                    <p className="text-gray-500 text-sm font-medium">{item.program}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm line-clamp-2 italic leading-relaxed">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
