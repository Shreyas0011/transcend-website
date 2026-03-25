import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
    'Quick Links': [
        { label: 'Home', href: '/#home' },
        { label: 'About Us', href: '/#about' },
        { label: 'Programs', href: '/#programs' },
        { label: 'Events', href: '/#events' },
        { label: 'Campus', href: '/#campus' }
    ],
    'Programs': [
        { label: 'B.Com', href: '/bcom-holistic' },
        { label: 'BBA', href: '/bba' },
        { label: 'Executive Education', href: '/#programs' }
    ],
    'Support': [
        { label: 'Enquire Now', href: 'https://transcenddegree.campuselement.in/enquiries' },
        { label: 'Admission Process', href: '/#about' },
        { label: 'Scholarships', href: '/#about' },
        { label: 'Contact Us', href: 'https://transcenddegree.campuselement.in/enquiries' },
        { label: 'Careers@TDC', href: '/careers' },
    ],
}

const socials = [
    { 
        label: 'Instagram', 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ), 
        color: '#e4405f', 
        href: 'https://www.instagram.com/transcendgroup?igsh=dmFjOXU4N3ppcG1o' 
    },
    { 
        label: 'LinkedIn', 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        ), 
        color: '#0077b5' 
    },
]

const Footer = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
        }
    }

    return (
        <footer
            className="relative overflow-hidden bg-white border-t border-gray-100"
        >
            {/* Top wave (light theme) */}
            <div className="w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full" style={{ height: 40 }}>
                    <path d="M0,20 C480,40 960,0 1440,20 L1440,0 L0,0 Z" fill="#f8fafc" />
                </svg>
            </div>

            {/* Floating particles background - light theme */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute rounded-full animate-float-slow opacity-30 pointer-events-none mix-blend-multiply"
                    style={{
                        width: 40 + (i % 8) * 25,
                        height: 40 + (i % 8) * 25,
                        left: `${(i * 12) % 100}%`,
                        top: `${(i * 17) % 100}%`,
                        background: i % 4 === 0 ? '#fde68a' : i % 4 === 1 ? '#bfdbfe' : i % 4 === 2 ? '#e0e7ff' : '#ddd6fe',
                        filter: 'blur(35px)',
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${12 + (i % 5) * 4}s`,
                    }}
                />
            ))}

            {/* Floating geometric shapes for extra texture - brighter and more dense */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={`geo-${i}`}
                    className="absolute border border-indigo-400/40 animate-pulse pointer-events-none opacity-20"
                    style={{
                        width: 25 + (i % 5) * 15,
                        height: 25 + (i % 5) * 15,
                        left: `${(i * 15) % 95}%`,
                        top: `${(i * 9) % 95}%`,
                        borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
                        transform: `rotate(${i * 30}deg)`,
                        animation: `float-slow ${10 + (i % 4) * 3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.8}s`,
                    }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Top section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.png"
                                alt="Transcend Group of Institutions"
                                loading="lazy"
                                className="h-28 object-contain"
                            />
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                            Empowering minds, fostering innovation, and building tomorrow's leaders through quality education since 2015.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3 mb-8">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href || "#"}
                                    target={s.href ? "_blank" : undefined}
                                    rel={s.href ? "noopener noreferrer" : undefined}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm border border-gray-200 bg-white"
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = s.color;
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderColor = s.color;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = '#ffffff';
                                        e.currentTarget.style.color = '#374151';
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                    }}
                                    title={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div>
                            <p className="text-gray-900 text-sm font-bold mb-3 uppercase tracking-wider">Stay Updated</p>
                            {subscribed ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl text-center text-sm font-bold animate-fade-up">
                                    ✓ You're subscribed!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 px-4 py-2.5 rounded-xl text-sm text-gray-900 bg-gray-50 border border-gray-200 focus:bg-white focus:border-indigo-500 outline-none transition-colors duration-300 shadow-inner"
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                        style={{ background: 'linear-gradient(135deg, #2d3e91, #4f46e5)' }}
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Links columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="text-gray-900 font-black text-sm mb-5 uppercase tracking-widest">{section}</h4>
                            <ul className="space-y-3">
                                {links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-600 text-[15px] font-semibold hover:text-[#2d3e91] transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-[#2d3e91] transition-all duration-300" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Join Our Team CTA - Premium UI Section */}
                <div className="mb-16 reveal border border-indigo-50 bg-gradient-to-br from-indigo-50/50 to-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-black text-[#1e2a6b] mb-3">Want to shape the future?</h3>
                            <p className="text-gray-500 font-medium max-w-md">We're always looking for passionate educators and professionals to join our growing family.</p>
                        </div>
                        <Link 
                            to="/careers"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-white text-[15px] transition-all duration-300 shadow-xl shadow-indigo-200 group/btn relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #2d3e91 0%, #4338ca 100%)' }}
                        >
                            <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 skew-x-12" />
                            <span className="relative z-10 font-bold">Join Our Team</span>
                            <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Campus Information */}
                <div id="contact" className="mb-12">
                    {/* Main Campus (Centered/Full Width) */}
                    <div className="glass-card bg-slate-50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">📍</div>
                            <div>
                                <h4 className="text-[#2d3e91] font-black text-xl uppercase tracking-tight">Bangalore Main Campus</h4>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Since 2015</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-400 mt-1 text-lg">📞</span>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                        <p className="text-gray-700 font-bold text-[15px]">+91 95912 95914</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-400 mt-1 text-lg">✉️</span>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-gray-700 font-bold text-[15px]">admissions@transcendgroup.org</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-gray-400 mt-1 text-lg">🏫</span>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Programs</p>
                                        <p className="text-gray-600 text-[13px] font-bold leading-relaxed">
                                            Pre-School (KG & Mont.) • School (CBSE) • PU College • Degree College
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-gray-500 text-[13px] font-bold italic">
                                        <span className="text-indigo-500 not-italic mr-1">🚇</span>
                                        10-min walk from Yelachenahalli Metro Station
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Transcend+Group+of+Institutions+South+Campus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 text-[13px] font-black hover:underline flex items-center gap-1"
                                    >
                                        <span>📍 View on Google Maps</span>
                                        <span className="text-[10px]">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                    <p>© 2026 Transcend Group of Institutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
                            <a key={l} href="#" className="hover:text-amber-500 transition-colors duration-200">{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
