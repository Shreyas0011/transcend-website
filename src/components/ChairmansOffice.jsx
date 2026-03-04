import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChairmansOffice = () => {
    const [visible, setVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (headerRef.current) obs.observe(headerRef.current);
        return () => obs.disconnect();
    }, []);

    const sections = [
        {
            title: "Founder's Vision",
            content: "Education must teach us how to live, not just how to make a living. At Transcend, we focus on value-based education that prepares students for life's challenges with the right attitude and skills.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.958-.71l1.192-3.577a1 1 0 00-.958-1.313H13.5V7.414l-2.086 2.086a1 1 0 01-1.414 0l-2.086-2.086V11.4h-1.929a1 1 0 00-.958 1.313l1.192 3.577a1 1 0 00.958.71z" />
                </svg>
            )
        },
        {
            title: "Strategic Excellence",
            content: "Our office serves as the cornerstone for strategic planning and institutional growth, ensuring that every program we offer meets the highest standards of academic and industry relevance.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Student Mentorship",
            content: "We are committed to direct student engagement. The Chairman's Office regularly hosts open sessions and mentorship programs to guide the next generation of leaders.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    const anim = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    });

    return (
        <div className="min-h-screen text-white pt-28 pb-24 px-6 md:px-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #05060f 0%, #080b1a 60%, #05060f 100%)' }}>

            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.12) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.1) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Back Link */}
                <div style={anim(0)}>
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors group mb-12">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
                    </Link>
                </div>

                {/* Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <div style={anim(0.1)}>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                            <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Institutional Leadership</span>
                            <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                        </div>
                        <h1 className="text-5xl md:text-[4rem] font-black tracking-tight text-white leading-tight mb-6">
                            Chairman's{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Office</span>
                        </h1>
                        <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                            Driving excellence through visionary leadership and a commitment to transforming the future of education.
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {sections.map((section, idx) => (
                        <div key={idx} style={anim(0.3 + idx * 0.1)}>
                            <div className="group h-full p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    background: 'rgba(12,14,30,0.85)',
                                    border: '1.5px solid rgba(255,255,255,0.08)',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(67,56,202,0.15)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                                }}
                            >
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(135deg, rgba(67,56,202,0.2), rgba(99,102,241,0.1))', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8' }}>
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{section.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chairman's Message Feature */}
                <div style={anim(0.7)}>
                    <div className="relative rounded-[40px] overflow-hidden p-8 md:p-12"
                        style={{
                            background: 'linear-gradient(135deg, rgba(45,62,145,0.15) 0%, rgba(12,14,30,0.95) 100%)',
                            border: '1.5px solid rgba(99,102,241,0.25)',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.4)'
                        }}>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg className="w-32 h-32 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56931 13 6.017 13H4.017V21H6.017Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0"
                                style={{ border: '4px solid rgba(99,102,241,0.3)', boxShadow: '0 0 40px rgba(67,56,202,0.3)' }}>
                                <img src="https://i.pravatar.cc/400?img=33" alt="Chairman" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-black mb-6 text-indigo-300">A Message from the Chairman</h2>
                                <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-8 font-medium">
                                    "Our mission is to empower students with not just degrees, but the wisdom and character to lead lives of significance and purpose. Transcend is more than a college—it is a cradle of innovation and values."
                                </p>
                                <div>
                                    <p className="text-white font-bold text-xl">Siddharth K.T</p>
                                    <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Chairman, Transcend Group</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChairmansOffice;
