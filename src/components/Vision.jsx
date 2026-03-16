import React, { useState, useEffect, useRef } from 'react';

const Vision = () => {
    const [activeTab, setActiveTab] = useState('PERCEIVE');
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

    const tabContent = {
        PERCEIVE: 'We perceive education as the key to unlocking human potential—every student is a universe of possibilities.',
        BELIEVE: 'We believe in holistic development, where academics, arts, sports, and character form the pillars of true education.',
        ACHIEVE: 'We achieve excellence by creating leaders, innovators, and change-makers who shape a better tomorrow.',
    };

    return (
        <section id="vision" ref={sectionRef} className="relative text-white section-padding overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #0a0c1b 0%, #0d1130 50%, #0a0c1b 100%)' }}>

            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

            {/* Glow blobs */}
            <div className="absolute top-0 right-[-15%] w-[70%] h-full opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #4338ca 0%, transparent 60%)' }} />
            <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #2d3e91 0%, transparent 60%)' }} />

            <div className="max-w-[860px] mx-auto relative z-10 text-center"
                style={{
                    opacity: sectionVisible ? 1 : 0,
                    transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}>

                {/* Badge */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                    <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Vision Statement</span>
                    <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                </div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.08] mb-10 tracking-tight">
                    Building a Future of{' '}
                    <span className="italic font-black" style={{
                        background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Holistic</span>
                    {' '}Excellence.
                </h2>

                {/* Vision quote */}
                <div className="text-7xl font-black text-indigo-900/50 leading-none mb-2 select-none">"</div>
                <p className="text-[#8b90b0] text-2xl md:text-3xl leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
                    To evolve an environment that fosters{' '}
                    <strong className="text-white">Holistic Development</strong>, through the integration of{' '}
                    <strong className="text-white">Knowledge, Sports, Arts, Music &amp; Entertainment</strong>, thereby enriching the experience of{' '}
                    <strong className="text-indigo-300">Education, Employment &amp; Parenting</strong>.
                </p>

                {/* Philosophy Tabs */}
                <div>
                    <p className="text-gray-500 text-[11px] tracking-[0.25em] font-bold uppercase mb-5">Our Philosophy</p>
                    <div className="flex text-4xl font-black gap-3 flex-wrap mb-8 italic justify-center"
                        style={{ fontFamily: 'Georgia, serif' }}>
                        {['PERCEIVE', 'BELIEVE', 'ACHIEVE'].map((tab, i) => (
                            <React.Fragment key={tab}>
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className="transition-all duration-400"
                                    style={{
                                        color: activeTab === tab ? '#818cf8' : '#2d3045',
                                        transform: activeTab === tab ? 'scale(1.05)' : 'scale(1)',
                                    }}
                                >
                                    {tab.charAt(0) + tab.slice(1).toLowerCase()}
                                </button>
                                {i < 2 && <span className="text-gray-700 font-light">·</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl overflow-hidden transition-all duration-500 max-w-2xl mx-auto"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(99,102,241,0.15)',
                        }}>
                        <p className="text-gray-300 text-lg leading-relaxed font-medium">
                            {tabContent[activeTab]}
                        </p>
                    </div>

                    {/* Enriching pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                        <span className="text-gray-600 text-[10px] tracking-[0.2em] font-bold uppercase">Enriching</span>
                        {['Education', 'Employment', 'Parenting'].map(pill => (
                            <div key={pill}
                                className="px-4 py-2 rounded-full text-sm font-semibold text-gray-300 flex items-center gap-2 cursor-default transition-all duration-300 hover:text-white group"
                                style={{
                                    border: '1px solid rgba(99,102,241,0.2)',
                                    background: 'rgba(99,102,241,0.05)',
                                }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:animate-pulse" />
                                {pill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
