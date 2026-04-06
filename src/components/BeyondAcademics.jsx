import React, { useState, useEffect, useRef } from 'react';

const seakNodes = [
    {
        id: 's',
        letter: 'S',
        title: 'SKILL',
        items: ['Toastmasters', 'Placements/Internships', 'TechScale', 'Networking', 'Project Work'],
        gradient: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(129,140,248,0.15) 100%)',
        hoverGradient: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(129,140,248,0.25))',
        borderActive: 'rgba(129,140,248,0.5)',
        iconColor: '#6366f1',
    },
    {
        id: 'e',
        letter: 'E',
        title: 'ENTERTAINMENT',
        items: ['Sports & Fitness', 'Art & Cultural Activities', 'Outings & Excursions', 'Celebrations', 'Inter/Intra Fests'],
        gradient: 'linear-gradient(135deg, rgba(67,56,202,0.1) 0%, rgba(99,102,241,0.12) 100%)',
        hoverGradient: 'linear-gradient(135deg, rgba(67,56,202,0.2), rgba(99,102,241,0.22))',
        borderActive: 'rgba(99,102,241,0.45)',
        iconColor: '#4f46e5',
    },
    {
        id: 'a',
        letter: 'A',
        title: 'ATTITUDE',
        items: ['Personality Development', 'Placement Training', 'LIFE Programs', 'Inspiring Minds', 'Follow Me!!!'],
        gradient: 'linear-gradient(135deg, rgba(30,42,107,0.12) 0%, rgba(67,56,202,0.15) 100%)',
        hoverGradient: 'linear-gradient(135deg, rgba(30,42,107,0.22), rgba(67,56,202,0.25))',
        borderActive: 'rgba(67,56,202,0.5)',
        iconColor: '#2d3e91',
    },
    {
        id: 'k',
        letter: 'K',
        title: 'KNOWLEDGE',
        items: ['BU [NEP] Curriculum', 'Subject Plus', 'Certificate Courses', 'Current Affairs', 'Career Universe'],
        gradient: 'linear-gradient(135deg, rgba(45,62,145,0.12) 0%, rgba(99,102,241,0.15) 100%)',
        hoverGradient: 'linear-gradient(135deg, rgba(45,62,145,0.2), rgba(99,102,241,0.25))',
        borderActive: 'rgba(99,102,241,0.5)',
        iconColor: '#4338ca',
    },
];

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
            top: `${5 + (i * 7) % 85}%`,
            left: `${2 + (i * 13) % 95}%`,
            size: 24 + (i % 3) * 10,
            delay: i * 0.3,
            dur: 4 + (i % 4),
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <style>{`
                @keyframes floatShape { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(8deg)} }
                @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            `}</style>

            {/* Animated Blobs */}
            <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-30 blur-[100px] animate-pulse"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-pulse"
                style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.06) 0%, transparent 70%)' }} />

            {/* Shapes */}
            {shapes.map((s, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        top: s.top, left: s.left,
                        opacity: 0.5,
                        animation: `floatShape ${s.dur}s ease-in-out infinite`,
                        animationDelay: `${s.delay}s`,
                        color: '#6366f1'
                    }}>
                    {s.Icon(s.size)}
                </div>
            ))}

            {/* Dot Grid Layer */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
};

const BeyondAcademics = () => {
    const [hoveredNode, setHoveredNode] = useState(null);
    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="section-padding bg-[#fafbff] relative overflow-hidden" id="events" ref={sectionRef}>
            <FloatingBg />

            <div className="container-standard relative z-10">
                {/* Header */}
                <div className="text-center mb-20"
                    style={{
                        opacity: sectionVisible ? 1 : 0,
                        transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}>
                    <span className="section-badge mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] inline-block"></span>
                        SEAK Framework
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] font-black text-[#1e2a6b] mt-5 leading-tight tracking-tight">
                        Beyond Academics
                    </h2>
                    <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg font-medium">
                        Exploring horizons beyond the classroom to foster holistic leadership and creative excellence through our SEAK framework.
                    </p>
                </div>

                {/* SEAK Grid */}
                <div className="w-full max-w-[1000px] mx-auto relative flex justify-center items-center py-10 md:py-16">
                    <div className="relative w-full aspect-[4/5] sm:aspect-square flex items-center justify-center">

                        {/* SVG connecting lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
                            {[
                                { x2: 19, y2: 19, id: 'k' },
                                { x2: 81, y2: 19, id: 'a' },
                                { x2: 19, y2: 81, id: 's' },
                                { x2: 81, y2: 81, id: 'e' },
                            ].map(line => (
                                <line key={line.id} x1="50" y1="50" x2={line.x2} y2={line.y2}
                                    stroke={hoveredNode === line.id ? '#6366f1' : '#e0e7ff'}
                                    strokeWidth={hoveredNode === line.id ? '0.7' : '0.3'}
                                    strokeDasharray={hoveredNode === line.id ? '2,2' : 'none'}
                                    className="transition-all duration-500"
                                />
                            ))}
                            {hoveredNode && (
                                <circle cx="50" cy="50" r="6" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" className="animate-ping" />
                            )}
                        </svg>

                        {/* Central Core */}
                        <div className="absolute z-30 w-28 h-28 xs:w-32 xs:h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl"
                            style={{
                                top: '50%',
                                left: '50%',
                                background: hoveredNode ? 'linear-gradient(135deg, #eef2ff, #e0e7ff)' : '#fff',
                                border: hoveredNode ? '3px solid rgba(99,102,241,0.4)' : '3px solid #e0e7ff',
                                boxShadow: hoveredNode ? '0 16px 48px rgba(67,56,202,0.28)' : '0 8px 32px rgba(45,62,145,0.12)',
                                transform: `translate(-50%, -50%) scale(${hoveredNode ? 1.07 : 1})`,
                            }}>
                            <div className="absolute inset-4 border-2 border-dashed border-indigo-100 rounded-full animate-spin-slow pointer-events-none" />
                            <div className="text-center relative z-10 px-2">
                                <span className="text-2xl xs:text-3xl md:text-5xl font-black text-[#1e2a6b] tracking-tighter block leading-none">SEAK</span>
                                <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-[0.2em] mt-1 block">Framework</span>
                            </div>
                        </div>

                        {/* Node Cards */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-16 xs:gap-x-8 xs:gap-y-24 sm:gap-x-44 sm:gap-y-44 md:gap-x-56 w-full h-full p-2 xs:p-4 relative z-20">
                            {seakNodes.map((node, idx) => (
                                <div
                                    key={node.id}
                                    className="relative rounded-[16px] xs:rounded-[20px] p-3 xs:p-5 sm:p-8 flex flex-col items-center text-center transition-all duration-500 ease-out cursor-default overflow-visible min-h-[140px] xs:min-h-[180px] sm:min-h-0"
                                    style={{
                                        background: hoveredNode === node.id ? node.hoverGradient : node.gradient,
                                        border: `1px solid ${hoveredNode === node.id ? node.borderActive : 'rgba(99,102,241,0.1)'}`,
                                        boxShadow: hoveredNode === node.id ? '0 20px 50px rgba(67,56,202,0.18)' : '0 4px 16px rgba(45,62,145,0.04)',
                                        transform: hoveredNode === node.id
                                            ? 'scale(1.06) translateY(-4px)'
                                            : hoveredNode
                                                ? 'scale(0.96) opacity(0.5)'
                                                : 'scale(1)',
                                        opacity: hoveredNode && hoveredNode !== node.id ? 0.45 : 1,
                                    }}
                                    onMouseEnter={() => setHoveredNode(node.id)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    {/* Letter tag */}
                                    <div
                                        className={`absolute ${idx % 2 === 0 ? '-right-2 xs:-right-4' : '-left-2 xs:-left-4'} -top-3 xs:-top-4 w-8 h-8 xs:w-11 xs:h-11 rounded-lg xs:rounded-xl flex items-center justify-center text-white font-black text-sm xs:text-lg shadow-lg transition-all duration-500`}
                                        style={{
                                            background: 'linear-gradient(135deg, #2d3e91, #4338ca)',
                                            transform: hoveredNode === node.id ? 'rotate(12deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                                        }}
                                    >
                                        {node.letter}
                                    </div>

                                    <h3 className="text-[#1e2a6b] font-black text-xs xs:text-base md:text-xl mb-2 xs:mb-4 tracking-wide">{node.title}</h3>
                                    <ul className="text-[10px] xs:text-xs sm:text-base text-gray-500 space-y-1.5 xs:space-y-2.5 font-semibold w-full">
                                        {node.items.map((item, i) => (
                                            <li key={i} className="flex justify-center items-center gap-1 xs:gap-2">
                                                <span className={`rounded-full shrink-0 transition-all duration-300 ${hoveredNode === node.id ? 'w-1.5 h-1.5 xs:w-2 xs:h-2 bg-indigo-400' : 'w-0.5 h-0.5 xs:w-1 xs:h-1 bg-indigo-200'}`} />
                                                <span className={hoveredNode === node.id ? 'text-gray-800' : ''}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div
                    className="mt-20 rounded-[28px] p-10 md:p-16 text-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1e2a6b 0%, #2d3e91 50%, #4338ca 100%)',
                        opacity: sectionVisible ? 1 : 0,
                        transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
                    }}
                >
                    {/* Decorative circles inside CTA */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-10"
                        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none opacity-10"
                        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                    <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="relative z-10">
                        <p className="text-indigo-300 text-sm font-bold tracking-[0.25em] uppercase mb-4">Start Your Journey</p>
                        <h3 className="text-2xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
                            Ready to Transcend<br />Your Potential?
                        </h3>
                        <p className="text-indigo-200 text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Join 1,800+ students discovering their best selves at one of Karnataka's most dynamic campuses.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://transcenddegree.campuselement.in/enquiries"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-[#1e2a6b] text-[15px] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                style={{
                                    background: '#fff',
                                    boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                                }}
                                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.3)'}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'}
                            >
                                Apply Now
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
                                </svg>
                            </a>
                            <a
                                href="/#programs"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-[15px] transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    border: '2px solid rgba(255,255,255,0.25)',
                                    background: 'rgba(255,255,255,0.08)',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                            >
                                Explore Programs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondAcademics;
