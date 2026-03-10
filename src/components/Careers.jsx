import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────────────────── */
const SVG_BRIEFCASE = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const SVG_BOOK = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const SVG_CAP = (size = 24, color = "currentColor") => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
);

/* ─────────────────────────────────────────────────────────
   FLOATING BACKGROUND
───────────────────────────────────────────────────────── */
const shapeIcons = [SVG_BRIEFCASE, SVG_BOOK, SVG_CAP];
const blobs = [
    { size: 600, color: 'rgba(99,102,241,0.08)', x: '-10%', y: '-5%', anim: 'floatA 20s ease-in-out infinite' },
    { size: 500, color: 'rgba(79,70,229,0.06)', x: '70%', y: '15%', anim: 'floatB 25s ease-in-out infinite' },
    { size: 400, color: 'rgba(67,56,202,0.05)', x: '20%', y: '60%', anim: 'floatA 18s ease-in-out infinite reverse' },
];

const FloatingBg = () => {
    const [shapes] = useState(() =>
        Array.from({ length: 12 }).map((_, i) => ({
            Icon: shapeIcons[i % shapeIcons.length],
            top: `${10 + (i * 8) % 80}%`,
            left: `${(i * 9) % 90}%`,
            size: 24 + (i % 3) * 12,
            delay: i * 0.8,
            dur: 5 + (i % 4),
        }))
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {blobs.map((b, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: b.size, height: b.size,
                    borderRadius: '50%',
                    background: b.color,
                    left: b.x, top: b.y,
                    filter: 'blur(100px)',
                    animation: b.anim,
                }} />
            ))}
            {shapes.map((s, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: s.top, left: s.left,
                    opacity: 0.08,
                    animation: `floatShape ${s.dur + 3}s ease-in-out infinite`,
                    animationDelay: `${s.delay}s`,
                }}>
                    {s.Icon(s.size)}
                </div>
            ))}
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────────────────── */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.classList.add('reveal-visible');
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const id = 'careers-styles';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            style.textContent = `
                @keyframes floatA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-60px)} }
                @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
                @keyframes floatShape { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
                .reveal-visible { opacity: 1; transform: translateY(0); }
                .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.4); }
                .input-field { background: rgba(255, 255, 255, 0.9); border: 1px solid rgba(0, 0, 0, 0.08); transition: all 0.3s; }
                .input-field:focus { border-color: #4f46e5; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1); }
            `;
            document.head.appendChild(style);
        }
    }, []);

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', education: '', postApplyingFor: '', resume: null });
    const revealHero = useReveal();
    const revealCulture = useReveal();
    const revealForm = useReveal();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFileChange = (e) => setFormData({ ...formData, resume: e.target.files[0] });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application Submitted Successfully!');
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden font-sans">
            <FloatingBg />

            {/* 1. HERO SECTION */}
            <section ref={revealHero} className="reveal pt-40 pb-20 px-6 relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-[#4f46e5] font-bold text-xs tracking-widest uppercase mb-10 hover:gap-3 transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black text-[#1e2a6b] leading-[1.1] mb-8 tracking-tighter">
                        Join the <span className="indigo-gradient-text">Journey</span> <br />
                        Shape the <span className="relative">
                            Future
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100 -z-10" />
                        </span>
                    </h1>
                    <p className="text-gray-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Become a part of one of Karnataka's leading institutions where education meets purpose and professionals thrive in a holistic environment.
                    </p>
                </div>
            </section>

            {/* 2. CULTURE SECTION */}
            <section ref={revealCulture} className="reveal py-20 px-6 relative z-10 bg-indigo-50/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-badge mb-4">Our Ethos</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e2a6b]">Life at TRANSCEND</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Work as Worship', desc: 'We perceive work as a form of worship, intertwining dedication with enjoyment in everything we do.', icon: '🙏' },
                            { title: 'Team Building', desc: 'Saturdays are for games, public speaking, and collaborative endeavors to foster strong professional bonds.', icon: '🤝' },
                            { title: 'Holistic Growth', desc: 'Encouraging hobbies like singing, dancing, arts, and sports for a vibrant, happy community.', icon: '✨' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-indigo-50 shadow-xl shadow-indigo-100/20 hover:-translate-y-2 transition-transform duration-500">
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-black text-[#1e2a6b] mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-4xl mx-auto">
                        <div className="inline-block p-1 rounded-3xl bg-white border border-indigo-50 shadow-lg">
                            <div className="px-8 py-6 rounded-[1.4rem] bg-indigo-600">
                                <p className="text-white italic font-bold text-lg">
                                    "A person who is not happy at work is not happy in life – an essence encapsulated in our staff motto."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FORM SECTION */}
            <section ref={revealForm} className="reveal py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-indigo-100">
                        {/* Blob accent */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="mb-12">
                                <h2 className="text-3xl font-black text-[#1e2a6b] mb-4">Career Application</h2>
                                <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-8">Ready to Transend? Fill the details below.</p>
                                <div className="h-1 w-20 bg-indigo-600 rounded-full" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">First Name</label>
                                        <input type="text" name="firstName" placeholder="John" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Last Name</label>
                                        <input type="text" name="lastName" placeholder="Doe" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Work Email</label>
                                        <input type="email" name="email" placeholder="john@example.com" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input type="tel" name="phone" placeholder="+91 00000 00000" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Highest Qualification</label>
                                    <input type="text" name="education" placeholder="e.g. Master of Commerce" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Position Interested In</label>
                                    <input type="text" name="postApplyingFor" placeholder="e.g. Science Faculty" required onChange={handleChange} className="input-field w-full px-6 py-4 rounded-2xl outline-none font-medium placeholder:text-gray-200" />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest ml-1">Upload Resume (PDF/DOC)</label>
                                    <div className="relative border-2 border-dashed border-indigo-100 rounded-3xl p-8 text-center bg-indigo-50/20 hover:bg-indigo-50/40 transition-colors group cursor-pointer">
                                        <input type="file" required onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 8l-4-4m0 0L8 8m4-4v12" /></svg>
                                            </div>
                                            <span className="text-gray-500 font-bold text-sm">Chose file or drop it here</span>
                                            <span className="text-xs text-gray-300">Max file size 5MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="w-full md:w-auto px-16 py-5 rounded-[2rem] font-black text-white text-[15px] transition-all hover:scale-[1.02] hover:-translate-y-1 active:scale-95 shadow-xl shadow-indigo-200 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500" />
                                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Send Application
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
