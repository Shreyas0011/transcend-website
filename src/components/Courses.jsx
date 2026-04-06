import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AcademicBatchStats from './AcademicBatchStats';

const coursesData = [
    {
        id: 'bcom-professional',
        title: 'B.Com Professional',
        subtitle: 'Bachelor of Commerce',
        stream: 'Commerce',
        badge: 'High Package',
        icon: '💎',
        duration: '3 Years',
        ctc: '8L - 15L PA',
        description: 'Caters to young achievers who dedicate themselves to big goals, starting careers with premium packages.',
        path: '/bcom-professional',
    },
    {
        id: 'bcom-ca',
        title: 'B.Com + CA',
        subtitle: 'Chartered Accountancy',
        stream: 'Commerce',
        badge: 'Prestigious',
        icon: '⚖️',
        duration: '3 Years + Internship',
        ctc: '8L - 12L PA',
        description: 'A rigorous three-level professional course (Foundation, Inter, Final) for success in finance and accounting.',
        path: '/bcom-ca',
    },
    {
        id: 'acca',
        title: 'B.Com + ACCA',
        subtitle: 'Global Finance & Accounting',
        stream: 'Commerce',
        badge: 'Global Icon',
        icon: '🌍',
        duration: '3 Years',
        ctc: '6L - 12L PA',
        description: 'Globally recognized qualification preparing students for international careers in finance and accounting.',
        path: '/acca',
    },
    {
        id: 'us-cma',
        title: 'US-CMA',
        subtitle: 'Mgmt. Accountancy',
        stream: 'Commerce',
        badge: 'Strategic',
        icon: '📈',
        duration: '3 Years',
        ctc: '6L - 12L PA',
        description: 'Equipping students with essential skills in financial management and strategic decision-making.',
        path: '/us-cma',
    },
    {
        id: 'bcom-holistic',
        title: 'B.Com Holistic',
        subtitle: 'Bachelor of Commerce',
        stream: 'Commerce',
        badge: 'Popular',
        icon: '📊',
        duration: '3 Years',
        ctc: '4.5L - 11L PA',
        description: 'Immersive program with global perspectives, international study tours, and Toastmasters integration.',
        path: '/bcom-holistic',
    },
    {
        id: 'bba',
        title: 'BBA',
        subtitle: 'Bachelor of Biz Admin',
        stream: 'Management',
        badge: 'Leadership',
        icon: '🏆',
        duration: '3 Years',
        ctc: '4.5L - 11L PA',
        description: 'Dynamic management program focused on entrepreneurship, global perspective, and leadership.',
        path: '/bba',
    },
    {
        id: 'bcom-evening',
        title: 'B.Com Evening',
        subtitle: 'Bachelor of Commerce',
        stream: 'Commerce',
        badge: 'Flexible',
        icon: '🌙',
        duration: '3 Years',
        ctc: '3L - 6L PA',
        description: 'Ideal for working professionals who want to earn a commerce degree at their own pace.',
        path: '/bcom-evening',
    },
];

const filters = ['All', 'Commerce', 'Management'];

const CourseCard = ({ course, index, visible }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * (window.innerWidth < 768 ? 6 : 18);
        const y = -((e.clientY - rect.top) / rect.height - 0.5) * (window.innerWidth < 768 ? 6 : 18);
        
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(0)`;
        card.style.boxShadow = '0 24px 48px rgba(45,62,145,0.20), 0 0 0 1px rgba(99,102,241,0.3)';
        card.style.transition = 'transform 0.1s ease, opacity 0.6s ease, box-shadow 0.3s ease';
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        card.style.boxShadow = '0 8px 32px rgba(45,62,145,0.07)';
        card.style.transition = `transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.6s ease, box-shadow 0.3s ease`;
    };

    return (
        <Link
            to={course.path}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group block rounded-[20px] overflow-hidden cursor-pointer h-full flex flex-col"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`
                    : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(28px)`,
                transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.1}s, opacity 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease`,
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(99,102,241,0.1)',
                boxShadow: '0 8px 32px rgba(45,62,145,0.07)',
                willChange: 'transform',
            }}
        >
            {/* Top gradient bar */}
            <div className="h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: 'linear-gradient(90deg, #2d3e91, #4338ca, #6366f1)' }} />

            {/* Icon area */}
            <div className="p-5 xs:p-6 pb-0 flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)' }}
                    >
                        {course.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide"
                            style={{
                                background: 'rgba(238,242,255,1)',
                                color: '#4338ca',
                                border: '1px solid rgba(99,102,241,0.2)',
                            }}
                        >
                            {course.badge}
                        </span>
                        {course.ctc && (
                            <span className="text-[10px] font-black text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                CTC: {course.ctc}
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-[10px] text-indigo-400 font-bold tracking-[0.15em] uppercase mb-1">{course.subtitle}</p>
                <h3 className="text-lg font-black text-[#1e2a6b] mb-2 leading-snug">{course.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium mb-4 line-clamp-3">{course.description}</p>
            </div>

            {/* Footer */}
            <div className="px-5 xs:px-6 pb-5 xs:pb-6 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                </div>
                <span
                    className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 text-xs font-bold"
                    style={{ color: '#4338ca' }}
                >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
                    </svg>
                </span>
            </div>
        </Link>
    );
};

const Courses = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const filtered = activeFilter === 'All'
        ? coursesData
        : coursesData.filter(c => c.stream === activeFilter);

    return (
        <section id="programs" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
            {/* Background decoratives */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-40"
                style={{ background: 'radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-40"
                style={{ background: 'radial-gradient(circle at bottom left, rgba(45,62,145,0.05) 0%, transparent 60%)' }} />

            <div className="container-standard relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.7s ease, transform 0.7s ease',
                        }}
                    >
                        <span className="section-badge mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] inline-block"></span>
                            Academic Programs
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] font-black leading-[1.1] tracking-tight"
                            style={{ color: '#1e2a6b' }}>
                            Future-Ready <span className="shimmer-text block xs:inline">Courses</span>
                        </h2>
                        <p className="text-gray-500 text-lg mt-4 font-medium max-w-xl">
                            Unlock high-potential careers with certifications and skills that top global employers demand.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div
                        className="flex items-center gap-2 p-1.5 rounded-2xl overflow-x-auto no-scrollbar"
                        style={{
                            background: '#f8f9ff',
                            border: '1px solid rgba(99,102,241,0.12)',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                            maxWidth: 'calc(100vw - 3rem)',
                        }}
                    >
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap"
                                style={{
                                    background: activeFilter === filter
                                        ? 'linear-gradient(135deg, #2d3e91, #4338ca)'
                                        : 'transparent',
                                    color: activeFilter === filter ? '#fff' : '#64748b',
                                    boxShadow: activeFilter === filter ? '0 4px 14px rgba(67,56,202,0.3)' : 'none',
                                    transform: activeFilter === filter ? 'scale(1.02)' : 'scale(1)',
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid - Centered Flexbox for better balance */}
                <div className="flex flex-wrap justify-center gap-6">
                    {filtered.map((course, i) => (
                        <div key={course.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] max-w-[400px]">
                            <CourseCard course={course} index={i} visible={visible} />
                        </div>
                    ))}
                </div>
                
                {/* Academic Results Statistics */}
                <AcademicBatchStats />

                {/* Bottom CTA */}
                <div
                    className="text-center mt-14"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
                    }}
                >
                    <p className="text-gray-400 text-sm font-medium">
                        All programs are{' '}
                        <span className="text-[#2d3e91] font-bold">Bangalore University affiliated</span>
                        {' '}and{' '}
                        <span className="text-[#2d3e91] font-bold">NEP 2020 compliant</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Courses;

