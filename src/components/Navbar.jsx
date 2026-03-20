import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    { label: 'Home', href: '/#home', section: 'home' },
    { label: 'Programs', href: '/#programs', section: 'programs' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const dropdownRef = useRef(null)

    useEffect(() => {
        const sections = navLinks.map(l => l.section).filter(Boolean)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.4 }
        )
        sections.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <>
            {/* ── Header Row ─────────────────────────────────────────────── */}
            <header className="fixed top-4 left-0 w-full z-50 px-5 md:px-8 flex items-center justify-between pointer-events-none">

                {/* Logo */}
                <a href="/#home" className="pointer-events-auto flex items-center shrink-0 group bg-white/95 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-sm border border-white/20 transition-all duration-300 hover:shadow-md">
                    <img
                        src="/logo.png"
                        alt="Transcend Group of Institutions"
                        className="h-12 md:h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </a>

                {/* Pill nav — desktop */}
                <nav
                    className="pointer-events-auto hidden lg:flex items-center gap-0.5 px-5 h-12 rounded-full lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                    style={{
                        background: 'rgba(255,255,255,0.88)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.7)',
                        boxShadow: '0 8px 32px rgba(45,62,145,0.15), 0 0 0 1px rgba(99,102,241,0.05)',
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = link.section && activeSection === link.section
                        if (link.href.startsWith('/#')) {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="nav-link-underline px-4 py-1.5 text-[14px] rounded-full transition-all duration-200 hover:bg-indigo-50"
                                    style={{ fontWeight: isActive ? 700 : 500, color: isActive ? '#2d3e91' : '#374151' }}
                                >
                                    {link.label}
                                </a>
                            )
                        }
                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="nav-link-underline px-4 py-1.5 text-[14px] rounded-full transition-all duration-200 hover:bg-indigo-50"
                                style={{ fontWeight: isActive ? 700 : 500, color: isActive ? '#2d3e91' : '#374151' }}
                            >
                                {link.label}
                            </Link>
                        )
                    })}

                    {/* Our Team */}
                    <Link
                        to="/our-team"
                        className="nav-link-underline px-4 py-1.5 text-[14px] rounded-full transition-all duration-200 hover:bg-indigo-50 font-medium text-gray-700"
                    >
                        Our Team
                    </Link>

                    {/* Differentiators */}
                    <Link
                        to="/differentiators"
                        className="nav-link-underline px-4 py-1.5 text-[14px] rounded-full transition-all duration-200 hover:bg-indigo-50 font-medium text-gray-700"
                    >
                        Differentiators
                    </Link>
                </nav>

                {/* Action Buttons + hamburger */}
                <div className="pointer-events-auto flex items-center gap-3">
                    <Link
                        to="/careers"
                        className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold text-[#2d3e91] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 border border-indigo-100 bg-white/50 backdrop-blur-sm shadow-sm"
                    >
                        <span>Careers@TDC</span>
                    </Link>

                    <a
                        href="https://transcenddegree.campuselement.in/enquiries"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 overflow-hidden relative group"
                        style={{
                            background: 'linear-gradient(135deg, #2d3e91 0%, #4338ca 100%)',
                            boxShadow: '0 4px 16px rgba(67,56,202,0.38)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(67,56,202,0.55)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(67,56,202,0.38)'}
                    >
                        <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                        <span className="relative z-10">Apply Now</span>
                        <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-300"
                        style={{
                            background: menuOpen ? '#eef2ff' : 'rgba(255,255,255,0.75)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(99,102,241,0.2)',
                            boxShadow: '0 4px 16px rgba(45,62,145,0.1)',
                        }}
                    >
                        <span className={`block h-[2px] rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ width: '18px' }} />
                        <span className={`block h-[2px] rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ width: '18px' }} />
                        <span className={`block h-[2px] rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ width: '18px' }} />
                    </button>
                </div>
            </header>

            {/* Mobile Slide-Down Menu */}
            <div
                className={`lg:hidden fixed top-20 left-4 right-4 z-40 rounded-2xl overflow-hidden transition-all duration-400 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                style={{
                    background: 'rgba(255,255,255,0.97)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(45,62,145,0.14)',
                    border: '1px solid rgba(99,102,241,0.1)',
                }}
            >
                <div className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`px-5 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${link.section && activeSection === link.section
                                ? 'bg-indigo-50 text-[#2d3e91] font-bold'
                                : 'text-gray-700 hover:bg-indigo-50 hover:text-[#2d3e91]'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Our Team mobile link */}
                    <Link
                        to="/our-team"
                        onClick={() => setMenuOpen(false)}
                        className="px-5 py-3.5 rounded-xl text-[15px] font-semibold text-gray-700 hover:bg-indigo-50 hover:text-[#2d3e91] transition-all duration-200"
                    >
                        Our Team
                    </Link>

                    {/* Differentiators mobile link */}
                    <Link
                        to="/differentiators"
                        onClick={() => setMenuOpen(false)}
                        className="px-5 py-3.5 rounded-xl text-[15px] font-semibold text-gray-700 hover:bg-indigo-50 hover:text-[#2d3e91] transition-all duration-200"
                    >
                        Differentiators
                    </Link>

                    <div className="h-px bg-indigo-50 my-2" />
                    <div className="flex flex-col gap-2">
                        <Link
                            to="/careers"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[15px] font-bold text-[#2d3e91] bg-indigo-50 border border-indigo-100"
                        >
                            Careers@TDC
                        </Link>
                        <a
                            href="https://transcenddegree.campuselement.in/enquiries"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[15px] font-bold text-white shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #2d3e91, #4338ca)' }}
                        >
                            Apply Now
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar