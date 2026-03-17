import React, { useState, useRef, useEffect } from 'react';
import founderSiddharth from '../assets/siddharth_kt_white.png';
import founderShwetha from '../assets/shwetha_new.jpg';

const FounderMessage = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const founders = [
        {
            name: 'Dr. CA Siddharth KT',
            title: 'Founder',
            qualification: 'CA, MBA, LLB',
            highlights: [
                'Completed CA, MBA, LLB by Age 26',
                'Awarded BEST SPEAKER 10 times in a row by Mecon Communication Club',
            ],
            avatar: founderSiddharth,
        },
        {
            name: 'Dr. Shwetha S',
            title: 'Co-Founder',
            qualification: 'BDS, CA',
            highlights: [
                'Gold Medalist & Best Outgoing Student of RV Dental College in 2009',
                '1st Rank in Karnataka & 31st Rank in India during CA-IPCC exam Nov 2012',
            ],
            avatar: founderShwetha,
        },
    ];

    const messageParas = [
        `Education must teach us how to live, not just how to make a living [earn money]. Ensure you imbibe the right values and attitude in addition to knowledge and skill. You can't learn everything from someone, but you can learn something from everyone. Be alert, be ready & be open minded. Always remember that "not knowing is not a crime, but not asking, is."`,
        `Life is like a coin, it can be spent the way you choose, but can be spent only once. Prioritise your desires & needs. Each of us have the potential to leave this world a little better than we found it, and it is our responsibility to live up to this potential. Strive for holistic success. Success that comes at the cost of your Health, Happiness & Peace is neither lasting nor fulfilling.`,
        `Wishing you abundance of every positive emotion and experience. We sincerely pray that your years with us manifest as the best years of your life.`,
    ];

    const anim = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden section-padding"
            style={{ background: 'linear-gradient(160deg, #05060f 0%, #080b1a 60%, #05060f 100%)' }}
        >
            {/* Background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[160px]"
                    style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.1) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.09) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            </div>

            <div className="container-standard relative z-10">

                {/* Section header */}
                <div className="text-center mb-14" style={anim(0)}>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                        <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Vision & Leadership</span>
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Founder Couple{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>&amp; Vision</span>
                    </h2>
                </div>

                {/* Founder cards — two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {founders.map((founder, i) => (
                        <div key={founder.name} style={anim(0.15 + i * 0.15)}>
                            <div className="rounded-[24px] overflow-hidden h-full flex flex-col"
                                style={{
                                    background: 'rgba(12,14,30,0.95)',
                                    border: '1.5px solid rgba(99,102,241,0.18)',
                                    boxShadow: '0 20px 56px rgba(45,62,145,0.2)',
                                }}>

                                {/* Photo */}
                                <div className="relative w-full overflow-hidden"
                                    style={{ height: '320px', background: '#ffffff' }}>
                                    <img
                                        src={founder.avatar}
                                        alt={founder.name}
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: 'center 10%' }}
                                    />
                                    <div className="absolute inset-0"
                                        style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(12,14,30,0.95) 100%)' }} />
                                    {/* Name on photo */}
                                    <div className="absolute bottom-0 left-0 p-6 z-10">
                                        <p className="text-white text-xl font-black">{founder.name}</p>
                                        <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mt-0.5">{founder.title}</p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 p-6 flex flex-col gap-4">
                                    <p className="text-gray-500 text-xs font-bold tracking-wide uppercase">{founder.qualification}</p>
                                    <ul className="space-y-2">
                                        {founder.highlights.map((h, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message to Students */}
                <div style={anim(0.45)}>
                    <div
                        className="rounded-[24px] p-8 md:p-10"
                        style={{
                            background: 'rgba(12,14,30,0.95)',
                            border: '1.5px solid rgba(99,102,241,0.2)',
                            boxShadow: '0 20px 56px rgba(45,62,145,0.18)',
                        }}
                    >
                        {/* Label */}
                        <div className="flex items-center gap-4 mb-7">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #6366f1, #4338ca)' }} />
                                <h3 className="text-white text-xl font-black tracking-tight">Message to Students</h3>
                            </div>
                            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-5">
                            {messageParas.map((para, i) => (
                                <p key={i}
                                    className={`text-sm md:text-base leading-relaxed ${i === messageParas.length - 1 ? 'text-indigo-300 font-semibold' : 'text-gray-400'}`}
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Signatures */}
                        <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/5">
                            {founders.map(f => (
                                <div key={f.name} className="flex items-center gap-3">
                                    <img src={f.avatar} alt={f.name}
                                        className="w-9 h-9 rounded-full object-cover"
                                        style={{ border: '1.5px solid rgba(99,102,241,0.4)' }} />
                                    <div>
                                        <p className="text-white text-sm font-bold leading-tight">{f.name}</p>
                                        <p className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase">{f.title} · {f.qualification}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderMessage;
