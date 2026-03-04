import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


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

/* ─────────────────────────────────────────────────────────
   INJECT KEYFRAMES
───────────────────────────────────────────────────────── */
const injectStyles = () => {
    const id = 'diff-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
        @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(30px,-40px) rotate(6deg)} 66%{transform:translate(-20px,20px) rotate(-4deg)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(-40px,30px) rotate(-8deg)} 66%{transform:translate(25px,-20px) rotate(5deg)} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.08)} }
        @keyframes floatShape { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(10deg)} }
        @keyframes spin {from{transform:rotate(0deg)} to{transform:rotate(360deg)}}
        @keyframes spinSlow {from{transform:rotate(0deg)} to{transform:rotate(360deg)}}
        @keyframes pulsate { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.9;transform:scale(1.05)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes slideIn { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .diff-card:hover .diff-card-glow { opacity:1; }
        .video-slot:hover .vs-play { transform:scale(1.15); box-shadow: 0 12px 40px var(--vsglow); }
        .video-slot:hover .vs-border { border-color: var(--vscolor) !important; opacity:1; }
        .pill-jump:hover { transform: translateY(-3px) scale(1.05); }
        .pill-jump { transition: all 0.2s cubic-bezier(0.16,1,0.3,1); }
    `;
    document.head.appendChild(style);
};

/* ─────────────────────────────────────────────────────────
   FLOATING BACKGROUND
───────────────────────────────────────────────────────── */
const shapeIcons = [SVG_BOOK, SVG_CAP, SVG_GLOBE, SVG_ATOM];
const blobs = [
    { size: 600, color: 'rgba(139,92,246,0.12)', x: '-10%', y: '-5%', anim: 'floatA 18s ease-in-out infinite' },
    { size: 500, color: 'rgba(236,72,153,0.10)', x: '65%', y: '10%', anim: 'floatB 22s ease-in-out infinite' },
    { size: 450, color: 'rgba(6,182,212,0.09)', x: '20%', y: '50%', anim: 'floatC 15s ease-in-out infinite' },
    { size: 400, color: 'rgba(245,158,11,0.08)', x: '75%', y: '60%', anim: 'floatA 20s ease-in-out infinite reverse' },
    { size: 350, color: 'rgba(99,102,241,0.11)', x: '40%', y: '80%', anim: 'floatB 25s ease-in-out infinite' },
];

const FloatingBg = () => {
    const [shapes] = useState(() =>
        Array.from({ length: 15 }).map((_, i) => ({
            Icon: shapeIcons[i % shapeIcons.length],
            top: `${10 + (i * 5.8) % 80}%`,
            left: `${(i * 6.7) % 90}%`,
            size: 20 + (i % 4) * 8,
            delay: i * 0.7,
            dur: 4 + (i % 3),
        }))
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Blobs */}
            {blobs.map((b, i) => (
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
            {/* Floating shapes */}
            {shapes.map((s, i) => (
                <div key={i}
                    style={{
                        position: 'absolute',
                        top: s.top, left: s.left,
                        opacity: 0.1,
                        animation: `floatShape ${s.dur + 2}s ease-in-out infinite`,
                        animationDelay: `${s.delay}s`,
                        userSelect: 'none',
                    }}>
                    {s.Icon(s.size)}
                </div>
            ))}
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   MARQUEE STRIP
───────────────────────────────────────────────────────── */
const MarqueeStrip = () => {
    const items = ['CERTIFICATIONS ✦', 'CORPORATE EXPOSURE ✦', 'VALUE ADDED PROGRAMS ✦', 'TOASTMASTERS ✦', 'FUN & NETWORKING ✦'];
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden py-3 mb-16 rounded-2xl"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1.5px solid rgba(99,102,241,0.15)' }}>
            <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
                {doubled.map((t, i) => (
                    <span key={i} className="text-xs font-black tracking-[0.25em] uppercase px-8 whitespace-nowrap"
                        style={{ color: i % 2 === 0 ? '#818cf8' : '#c084fc' }}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   VIDEO SLOT
───────────────────────────────────────────────────────── */
const VideoSlot = ({ url, label, color, isPlaceholder }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="video-slot relative rounded-[20px] overflow-hidden flex items-center justify-center cursor-pointer group"
            style={{
                aspectRatio: '16/9',
                background: `linear-gradient(135deg, rgba(12,14,30,0.95) 0%, ${color}12 100%)`,
                '--vscolor': color,
                '--vsglow': `${color}80`,
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: hovered ? `0 12px 40px ${color}25, inset 0 0 40px ${color}08` : `0 4px 32px rgba(0,0,0,0.4)`,
                border: `1.5px solid ${color}${hovered ? '60' : '15'}`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {!isPlaceholder ? (
                <iframe
                    src={url}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="autoplay; fullscreen"
                    title={label}
                />
            ) : (
                <div className="flex flex-col items-center gap-3 z-10 relative">
                    <div className="vs-play w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase"
                        style={{ color: hovered ? color : '#94a3b8', transition: 'color 0.3s' }}>
                        {label}
                    </span>
                </div>
            )}

            {/* Overlay Gradient for premium look */}
            <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-0"
                style={{ background: `linear-gradient(to top, #000, transparent)` }} />
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   SECTION DATA
───────────────────────────────────────────────────────── */
const sections = [
    {
        number: '01', emoji: '🎓', title: 'Industry Certifications',
        sub: 'Elevate Your Career at TRANSCEND',
        color: '#818cf8', accent: '#6366f1',
        tag: 'NO CAP 🎓',
        tagColor: '#818cf8',
        blocks: [
            { icon: '🤝', heading: 'Power of TRANSCEND VAP', body: 'TRANSCEND partners with Udemy, Coursera, Harvard, Yale, and Wharton — delivering corporate-ready certifications in investment banking, AI, digital transformation, Six Sigma, and negotiation. Top placements, right from campus.' },
            { icon: '🌍', heading: 'Ivy League Access, Affordable Price', body: 'Certifications from ₹499 to ₹6,401 spanning 4–33 hours. Yale\'s "Connected Leadership," Harvard\'s "Managing Happiness," Google Cloud\'s "Intro to Gen AI" — curated for BBA & B.Com students in Bangalore.' },
            { icon: '📈', heading: 'Real-World Edge', body: 'Programs like Udemy\'s "Complete Investment Banking Course," Coursera\'s "Entrepreneurship Strategy," and Wharton\'s "Business Strategy" build elite skills. Emotional intelligence, Six Sigma, data-driven decision making — all covered.' },
        ],
        badges: ['Udemy', 'Coursera', 'Harvard', 'Yale', 'Wharton', 'Google Cloud'],
    },
    {
        number: '02', emoji: '🏢', title: 'Corporate Exposure',
        sub: 'Maximize Corporate Immersion via Career Services',
        color: '#c084fc', accent: '#a855f7',
        tag: 'IYKYK 💼',
        tagColor: '#c084fc',
        blocks: [
            { icon: '🔥', heading: '100-Hour Internships, Every Semester', body: 'Every TRANSCEND student completes at least one 100-hour internship per semester — applying academic skills to live business projects across finance, tech, and management. Not theory. Real work.' },
            { icon: '🤝', heading: 'Deep Industry Immersion', body: 'Structured semester-wise internships foster direct corporate networking, real-world problem-solving, and professional skill development. Paired with visual CV workshops that bridge classroom learning to corporate reality.' },
            { icon: '🌟', heading: 'Launch into the Corporate World', body: 'TRANSCEND Career Services emphasises sustained industry engagement. Guaranteed 100-hour internships + visual CV mastery = an unmatched competitive edge for finance, tech, and management roles.' },
        ],
        stat: { value: '100', unit: 'Hours', note: 'Per Semester · Guaranteed' },
    },
    {
        number: '03', emoji: '🚀', title: 'Value Added Programs',
        sub: 'Real-World Mastery: Institution-Crafted VAP',
        color: '#34d399', accent: '#10b981',
        tag: 'BASED 🚀',
        tagColor: '#34d399',
        blocks: [
            { icon: '👁️', heading: 'Authentic Real-World Journeys', body: 'TRANSCEND\'s exclusive VAP immerses students in real-world journeys — from BPL worker perspectives to entrepreneur success stories — unlocking practical wisdom beyond textbooks. Teaches monetizing existing skills while facing genuine business challenges.' },
            { icon: '💡', heading: 'Transformative Stories & Exposure', body: 'Narratives spanning grassroots struggles to entrepreneurial triumphs. Students gain insights into resilience, opportunity spotting, and income generation from innate talents — in interactive, institution-led sessions.' },
            { icon: '⚡', heading: 'Empower Your Real-World Success', body: 'These skill monetisation programs bridge academia to entrepreneurship — empowering you to earn from day one. Join TRANSCEND VAP to convert challenges into opportunities and launch confidently.' },
        ],
    },
    {
        number: '04', emoji: '🎤', title: 'Toastmasters On Campus',
        sub: 'Leadership Excellence at TRANSCEND',
        color: '#fbbf24', accent: '#f59e0b',
        tag: 'SLAY 🎤',
        tagColor: '#fbbf24',
        blocks: [
            { icon: '🌍', heading: 'Three Dynamic Clubs', body: 'TRANSCEND\'s three Toastmasters clubs host frequent networking events and high-impact international speech evaluation contests. Alumni serve as Area Directors and Division Directors across India & USA.' },
            { icon: '🤝', heading: 'Networking & Leadership Growth', body: 'Connect with industry leaders, peers, and mentors while sharpening public speaking and evaluation skills through rigorous international speech contests. Cultivates the executive presence corporate success demands.' },
            { icon: '🏆', heading: 'Global Leaders from TRANSCEND', body: 'Students serve in prestigious leadership roles in the Toastmasters India & USA networks — Area Directors, Division Directors. Our clubs don\'t just teach speaking; they create world-class communicators.' },
        ],
        highlight: 'Alumni as Area & Division Directors — India & USA 🌎',
    },
    {
        number: '05', emoji: '🎉', title: 'Fun & Networking',
        sub: 'Where Learning Meets Life',
        color: '#f472b6', accent: '#ec4899',
        tag: 'VIBES ✨',
        tagColor: '#f472b6',
        blocks: [
            { icon: '🥳', heading: 'More Than Just a Degree', body: 'The friendships forged, memories made, and the network built during your college years are as valuable as the classroom. TRANSCEND buzzes with energy — inter-college fests, alumni mixers, spontaneous team challenges.' },
            { icon: '🎊', heading: 'Events, Fests & Competitions', body: 'Annual cultural fests, business plan competitions, sports tournaments, and tech expos — every semester is packed with opportunities to showcase talents, build your brand, and connect with people who shape your future.' },
            { icon: '💜', heading: 'The TRANSCEND Community', body: 'Our alumni network spans finance, technology, management, and entrepreneurship — actively mentoring current students. Looking for your first internship, job, or co-founder? The TRANSCEND community has your back, for life.' },
        ],
    },
];

/* ─────────────────────────────────────────────────────────
   SECTION COMPONENT
───────────────────────────────────────────────────────── */
const DiffSection = ({ section, index }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.06 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref} id={`section-${section.number}`} className="mb-28">

            {/* Section heading */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
                <div className="font-black leading-none select-none"
                    style={{ fontSize: 'clamp(5rem,12vw,9rem)', color: `${section.color}18`, lineHeight: 1, letterSpacing: '-0.04em' }}>
                    {section.number}
                </div>
                <div className="pb-2">
                    <span className="inline-block px-4 py-1 rounded-full text-[11px] font-black tracking-widest mb-3"
                        style={{ background: `${section.color}18`, color: section.color, border: `1.5px solid ${section.color}40` }}>
                        {section.tag}
                    </span>
                    <h2 className="font-black text-white leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                        {section.emoji} {section.title}
                    </h2>
                    <p className="font-semibold text-sm mt-1 opacity-60" style={{ color: section.color }}>{section.sub}</p>
                </div>
            </div>

            {/* Text blocks — 3-col */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
                {section.blocks.map((b, i) => (
                    <div key={i} className="rounded-[20px] p-5 transition-all duration-300 cursor-default"
                        style={{ background: 'rgba(10,12,26,0.9)', border: `1.5px solid ${section.color}18`, backdropFilter: 'blur(12px)' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.border = `1.5px solid ${section.color}55`;
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = `0 12px 32px ${section.color}18`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.border = `1.5px solid ${section.color}18`;
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        <div className="text-2xl mb-3">{b.icon}</div>
                        <p className="text-white font-black text-base mb-2">{b.heading}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{b.body}</p>
                    </div>
                ))}
            </div>

            {/* Optional extras */}
            {(section.badges || section.stat || section.highlight) && (
                <div className="flex flex-wrap items-center gap-3 mb-4"
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.2s' }}>
                    {section.badges && section.badges.map(p => (
                        <span key={p} className="px-4 py-2 text-sm font-bold rounded-xl hover:scale-105 cursor-default transition-transform"
                            style={{ background: `${section.color}12`, color: section.color, border: `1px solid ${section.color}30` }}>
                            {p}
                        </span>
                    ))}
                    {section.stat && (
                        <div className="rounded-2xl px-6 py-3 flex items-center gap-3"
                            style={{ background: `${section.color}12`, border: `1.5px solid ${section.color}30` }}>
                            <span className="font-black text-4xl leading-none" style={{ color: section.color }}>{section.stat.value}</span>
                            <div>
                                <p className="text-white font-black text-base">{section.stat.unit}</p>
                                <p className="text-gray-400 text-xs font-semibold">{section.stat.note}</p>
                            </div>
                        </div>
                    )}
                    {section.highlight && (
                        <div className="rounded-2xl px-5 py-3 flex items-center gap-3"
                            style={{ background: `${section.color}12`, border: `1.5px solid ${section.color}30` }}>
                            <span className="text-2xl">🏆</span>
                            <p className="text-base font-bold" style={{ color: section.color }}>{section.highlight}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Divider */}
            <div className="mt-16 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${section.color}40, ${sections[(index + 1) % sections.length].color}30, transparent)` }} />
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
const Differentiators = () => {
    const [hv, setHv] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        injectStyles();
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHv(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="min-h-screen text-white relative overflow-x-hidden"
            style={{ background: 'linear-gradient(160deg, #04050e 0%, #070918 60%, #04050e 100%)' }}>

            <FloatingBg />

            <div className="relative z-10 pt-28 pb-32 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* Back */}
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-400 transition-colors group mb-10">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-black tracking-[0.3em] uppercase">Back to Home</span>
                    </Link>

                    {/* Hero */}
                    <div ref={ref} className="mb-14 text-center"
                        style={{ opacity: hv ? 1 : 0, transform: hv ? 'none' : 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7 text-xs font-black tracking-[0.25em] uppercase"
                            style={{ background: 'rgba(139,92,246,0.12)', border: '1.5px solid rgba(139,92,246,0.3)', color: '#c084fc' }}>
                            ✨ What Sets Us Apart
                        </div>

                        {/* Big title */}
                        <h1 className="font-black text-white leading-none mb-6"
                            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', letterSpacing: '-0.04em' }}>
                            The
                            <span style={{
                                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 40%, #f472b6 80%, #fbbf24 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                display: 'block',
                            }}>
                                TRANSCEND
                            </span>
                            Difference
                        </h1>

                        <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto leading-relaxed">
                            5 things that make TRANSCEND hit different. No cap. 🔥
                        </p>

                        {/* Jump pills */}
                        <div className="flex flex-wrap justify-center gap-2.5 mt-9">
                            {sections.map(s => (
                                <a key={s.number} href={`#section-${s.number}`}
                                    className="pill-jump px-4 py-2 rounded-full text-xs font-black"
                                    style={{ background: `${s.color}14`, color: s.color, border: `1.5px solid ${s.color}35` }}>
                                    {s.emoji} {s.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Marquee */}
                    <MarqueeStrip />

                    {/* Video Highlights Grid */}
                    <div className="mb-32" style={{ opacity: hv ? 1 : 0, transform: hv ? 'none' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s' }}>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-1 rounded-full bg-gradient-to-r from-indigo-500/40 to-transparent" />
                            <span className="text-xs font-black tracking-[0.4em] uppercase text-indigo-300 bg-indigo-500/10 px-6 py-2.5 rounded-full border border-indigo-500/20 backdrop-blur-md">
                                Global Session Highlights
                            </span>
                            <div className="h-px flex-1 rounded-full bg-gradient-to-l from-indigo-500/40 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {/* Slot 1: Active Video */}
                            <div className="relative group">
                                <VideoSlot
                                    url="https://drive.google.com/file/d/1OZEWapCt5jcdIdbvzFBRnkZzBF67M9HC/preview"
                                    color="#818cf8"
                                    label="Featured Session"
                                    isPlaceholder={false}
                                />
                                <div className="absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black z-10"
                                    style={{ background: '#818cf8', color: '#000', boxShadow: '0 4px 15px rgba(129,140,248,0.5)' }}>
                                    1
                                </div>
                            </div>

                            {/* Slots 2-12: Placeholders */}
                            {Array.from({ length: 11 }).map((_, n) => (
                                <div key={n + 1} className="relative group">
                                    <VideoSlot
                                        color="#818cf8"
                                        label={`Session ${n + 2}`}
                                        isPlaceholder={true}
                                    />
                                    <div className="absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black z-10 transition-all group-hover:scale-110 group-hover:rotate-6"
                                        style={{ background: 'rgba(129,140,248,0.3)', color: '#fff', border: '1px solid rgba(129,140,248,0.5)' }}>
                                        {n + 2}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-400 text-sm font-medium italic opacity-60">
                                "Bringing corporate excellence to your campus journey."
                            </p>
                        </div>
                    </div>

                    {/* Sections */}
                    {sections.map((s, i) => <DiffSection key={s.number} section={s} index={i} />)}

                    {/* CTA */}
                    <div className="text-center mt-10"
                        style={{ opacity: hv ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
                        <p className="text-gray-500 mb-6 font-semibold">Ready to experience the TRANSCEND difference? 🚀</p>
                        <a href="/" className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)', boxShadow: '0 12px 40px rgba(99,102,241,0.4)' }}>
                            Apply Now ✨
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Differentiators;
