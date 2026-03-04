import React, { useState, useRef, useEffect } from 'react';

const VIDEOS = [
    {
        type: 'gdrive',
        id: '1tFOQr_FW_w5G8_GlubTYD-JDa4Budq-p',
        label: "Chairman's Message",
        name: 'Siddharth K.T',
        title: 'Chairman, Transcend Group of Institutions',
    },
    {
        type: 'gdrive',
        id: '1tR3bPNv090Qd9JntXn5Qms6Em1VvTHpF',
        label: "Principal's Message",
        name: 'Dr. Shwetha S',
        title: 'Principal, Transcend Group of Institutions',
    },
];

const VideoCard = ({ video, index, visible }) => {
    const [playing, setPlaying] = useState(false);

    // YouTube / GDrive URL logic
    const isGDrive = video.type === 'gdrive';
    const thumbUrl = isGDrive ? '' : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    const embedUrl = isGDrive
        ? `https://drive.google.com/file/d/${video.id}/preview`
        : `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.7s ease ${0.15 + index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.15}s`,
            }}
        >
            <div
                className="rounded-[24px] overflow-hidden h-full flex flex-col"
                style={{
                    background: 'rgba(12,14,30,0.95)',
                    border: '1.5px solid rgba(99,102,241,0.18)',
                    boxShadow: '0 20px 56px rgba(45,62,145,0.2)',
                }}
            >
                {/* Label pill */}
                <div className="px-6 pt-6 pb-2">
                    <span
                        className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
                        style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.25)' }}
                    >
                        {video.label}
                    </span>
                </div>

                {/* Video / Thumbnail */}
                <div className="relative mx-6 rounded-[16px] overflow-hidden cursor-pointer group"
                    style={{ aspectRatio: '16/9', background: '#0d0f20' }}
                    onClick={() => setPlaying(true)}
                >
                    {playing ? (
                        <iframe
                            src={embedUrl}
                            title={video.label}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            {/* Thumbnail / Fallback */}
                            {thumbUrl ? (
                                <img
                                    src={thumbUrl}
                                    alt={video.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-indigo-900/20">
                                    <svg className="w-12 h-12 text-indigo-400 opacity-50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}
                            {/* Dark overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                                style={{ background: 'rgba(5,6,15,0.45)' }}
                            />
                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: 'linear-gradient(135deg, #2d3e91, #4338ca)',
                                        boxShadow: '0 8px 32px rgba(67,56,202,0.6)',
                                    }}
                                >
                                    {/* Triangle play icon */}
                                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            {/* "Click to play" label */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                <span
                                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white/70"
                                    style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
                                >
                                    Click to play
                                </span>
                            </div>
                        </>
                    )}
                </div>

                {/* Name & title */}
                <div className="px-6 py-5">
                    <p className="text-white font-black text-lg leading-tight">{video.name}</p>
                    <p className="text-indigo-400 text-[11px] font-bold tracking-wide mt-1">{video.title}</p>
                </div>
            </div>
        </div>
    );
};

const LeadershipMessages = () => {
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

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-24 px-6 md:px-12"
            style={{ background: 'linear-gradient(160deg, #080b1a 0%, #05060f 60%, #080b1a 100%)' }}
        >
            {/* Background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[45%] h-[60%] rounded-full blur-[150px]"
                    style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.09) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[50%] rounded-full blur-[130px]"
                    style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.08) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div
                    className="text-center mb-14"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(28px)',
                        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}
                >
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                        <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Words of Wisdom</span>
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Leadership{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Messages</span>
                    </h2>
                    <p className="text-gray-500 text-base font-medium mt-4 max-w-lg mx-auto">
                        Hear directly from the visionaries who lead Transcend Group of Institutions.
                    </p>
                </div>

                {/* Two-column video cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {VIDEOS.map((video, i) => (
                        <VideoCard key={video.id} video={video} index={i} visible={visible} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LeadershipMessages;
