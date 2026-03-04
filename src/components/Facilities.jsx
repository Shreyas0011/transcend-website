import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const facilities = [
    { title: 'Classroom', image: '/facilities/classroom.png' },
    { title: 'Yoga Room', image: '/facilities/yoga.png' },
    { title: 'Library', image: '/facilities/library.png' },
    { title: 'Auditorium', image: '/facilities/auditorium.png' },
    { title: 'Conference Room', image: '/facilities/conference.png' },
    { title: 'Computer Lab', image: '/facilities/lab.png' },
    { title: 'Swimming Pool', image: '/facilities/pool.png' },
    { title: 'Table Tennis', image: '/facilities/tt.png' },
    { title: 'Basketball Court', image: '/facilities/basketball.png' },
    { title: 'AV Theatre Room', image: '/facilities/av.png' },
    { title: 'Canteen', image: '/facilities/canteen.png' },
    { title: 'Badminton Court', image: '/facilities/badminton.png' },
    { title: 'Reception', image: '/facilities/reception.png' },
];

const Facilities = () => {
    const scrollRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);
    const duplicated = [...facilities, ...facilities, ...facilities];

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
            { threshold: 0.2 }
        );
        if (headerRef.current) obs.observe(headerRef.current);
        return () => obs.disconnect();
    }, []);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="campus"
            className="py-28 overflow-hidden relative group/section"
            style={{ background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #0f0c29 100%)' }}
        >
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Glow blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full pointer-events-none animate-pulse opacity-20"
                style={{ background: 'radial-gradient(circle, #4338ca, transparent)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full pointer-events-none animate-pulse opacity-15"
                style={{ background: 'radial-gradient(circle, #2d3e91, transparent)', filter: 'blur(80px)', animationDelay: '2s' }} />

            {/* Marquee animation */}
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-320px * 13 - 1.5rem * 13)); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 70s linear infinite;
                }
                .marquee-track:hover { animation-play-state: paused; }
            `}</style>

            {/* Header */}
            <div ref={headerRef} className="max-w-[1400px] mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}>
                        <span className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"></span>
                            Our Campus
                        </span>
                        <h2 className="text-5xl md:text-[3.5rem] font-black text-white leading-tight tracking-tight">
                            Our facilities{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Facilities</span>
                        </h2>
                        <p className="text-[#6b7280] mt-4 text-lg font-medium max-w-lg">
                            Experience a campus designed for learning, athletics, creativity, and growth.
                        </p>
                    </div>

                    {/* Arrow Controls */}
                    <div className="flex gap-3 shrink-0">
                        {['left', 'right'].map((dir) => (
                            <button key={dir}
                                onClick={() => scroll(dir)}
                                className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
                                style={{
                                    background: 'rgba(99,102,241,0.1)',
                                    border: '1px solid rgba(99,102,241,0.25)',
                                    color: '#818cf8',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#4338ca';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#4338ca';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                                    e.currentTarget.style.color = '#818cf8';
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {dir === 'left'
                                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    }
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div ref={scrollRef} className="relative w-full overflow-x-auto no-scrollbar">
                <div className="marquee-track gap-6 px-6 py-4">
                    {duplicated.map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[280px] md:w-[320px]">
                            <div
                                className="overflow-hidden rounded-[20px] group/card h-full transition-all duration-500"
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(99,102,241,0.12)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(67,56,202,0.25)';
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] w-full relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        onError={(e) => {
                                            e.target.src = `https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop`;
                                        }}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                                        style={{ background: 'linear-gradient(to top, rgba(45,62,145,0.6) 0%, transparent 60%)' }} />
                                </div>

                                {/* Title */}
                                <div className="px-5 py-4 flex items-center justify-between">
                                    <h3 className="text-white font-bold text-base">{item.title}</h3>
                                    <div className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300"
                                        style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-14 px-6 relative z-10">
                <Link
                    to="/facilities"
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-[15px] text-white transition-all duration-300 group hover:-translate-y-1"
                    style={{
                        background: 'linear-gradient(135deg, #2d3e91, #4338ca)',
                        boxShadow: '0 12px 32px rgba(67,56,202,0.4)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(67,56,202,0.55)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(67,56,202,0.4)'}
                >
                    View All Facilities
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-20 hidden md:block"
                style={{ background: 'linear-gradient(to right, #0f0c29, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-20 hidden md:block"
                style={{ background: 'linear-gradient(to left, #0f0c29, transparent)' }} />
        </section>
    );
};

export default Facilities;
