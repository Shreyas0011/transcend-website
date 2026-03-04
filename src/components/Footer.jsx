import React, { useState } from 'react'

const footerLinks = {
    'Quick Links': [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Programs', href: '#programs' },
        { label: 'Events', href: '#events' },
        { label: 'Campus', href: '#campus' }
    ],
    'Programs': ['B.Com', 'BBA', 'BCA', 'Science & Arts', 'Executive Education'],
    'Support': ['Enquire Now', 'Admission Process', 'Scholarships', 'Contact Us', 'Careers@TDC'],
}

const socials = [
    { label: 'Facebook', icon: 'FB', color: '#1877f2' },
    { label: 'Instagram', icon: 'IG', color: '#e4405f' },
    { label: 'LinkedIn', icon: 'IN', color: '#0077b5' },
    { label: 'Twitter', icon: 'X', color: '#0f1419' }, // Darker X on white
    { label: 'YouTube', icon: 'YT', color: '#ff0000' },
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
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-float-slow opacity-20 pointer-events-none mix-blend-multiply"
                    style={{
                        width: 40 + i * 20,
                        height: 40 + i * 20,
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 30}%`,
                        background: i % 2 === 0 ? '#fde68a' : '#bfdbfe',
                        filter: 'blur(30px)',
                        animationDelay: `${i * 0.7}s`,
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
                                className="h-28 object-contain"
                            />
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                            Empowering minds, fostering innovation, and building tomorrow's leaders through quality education since 2000.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3 mb-8">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href="#"
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
                                            className="text-gray-600 text-sm font-medium hover:text-[#2d3e91] transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-[#2d3e91] transition-all duration-300" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact bar */}
                <div id="contact" className="glass-card bg-slate-50 border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center rounded-2xl shadow-sm">
                    {[
                        { icon: '📍', label: 'Address', val: '123 Education Boulevard, Bangalore, KA 560001' },
                        { icon: '📞', label: 'Phone', val: '+91 98765 43210 / +91 80 1234 5678' },
                        { icon: '✉️', label: 'Email', val: 'admissions@transcendgroup.edu.in' },
                    ].map(({ icon, label, val }) => (
                        <div key={label} className="group hover:scale-105 transition-transform duration-300 p-4">
                            <div className="text-3xl mb-3 animate-float-fast drop-shadow-sm"
                                style={{ animationDelay: label === 'Phone' ? '1s' : label === 'Email' ? '2s' : '0s' }}>
                                {icon}
                            </div>
                            <p className="text-[#2d3e91] text-xs font-black uppercase tracking-widest mb-2">{label}</p>
                            <p className="text-gray-600 font-medium text-sm leading-relaxed">{val}</p>
                        </div>
                    ))}
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
