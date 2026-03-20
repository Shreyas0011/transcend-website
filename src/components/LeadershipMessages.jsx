import React, { useState, useRef, useEffect } from 'react';
import prasanna from '../assets/faculty/prasanna.png';
import ravikiran from '../assets/leadership/ravikiran_v2.png';
import siddharth from '../assets/siddharth_kt_white.png';

const CA_Underlined = () => (
    <u className="decoration-indigo-500 decoration-2 underline-offset-4">CA</u>
);


const VIDEOS = [
    {
        type: 'gdrive',
        id: '1tFOQr_FW_w5G8_GlubTYD-JDa4Budq-p',
        label: "Chairman's Message",
        name: (
            <span>
                Dr. <CA_Underlined /> Siddharth KT
            </span>
        ),
        title: 'Chairman, Transcend Group of Institutions',
    },
    {
        type: 'gdrive',
        id: '1tR3bPNv090Qd9JntXn5Qms6Em1VvTHpF',
        label: "Principal's Message",
        name: 'Prof Ravi Kiran TN',
        title: 'Principal, Transcend Group of Institutions',
    },
];

const VideoCard = ({ video, index, visible }) => {
    const [playing, setPlaying] = useState(false);

    // YouTube / GDrive URL logic
    const isGDrive = video.type === 'gdrive';
    const thumbUrl = video.thumbnail || (isGDrive ? `https://drive.google.com/thumbnail?id=${video.id}&sz=w1000` : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
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
                <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer mb-6"
                    style={{ background: '#0a0c1a' }}
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
                            {/* Thumbnail */}
                            {thumbUrl && (
                                <img
                                    src={thumbUrl}
                                    alt={video.label}
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            )}

                            {/* External Link Icon */}
                            <div className="absolute top-4 right-4 z-20">
                                <div className="p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                            </div>

                            {/* Dark overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                                style={{ background: 'rgba(5,6,15,0.45)' }}
                            />
                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="flex items-center justify-center w-20 h-20 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]"
                                    style={{
                                        background: 'rgba(255,255,255,0.15)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1.5px solid rgba(255,255,255,0.3)',
                                        boxShadow: '0 0 40px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    {/* Triangle play icon */}
                                    <svg className="w-8 h-8 text-white ml-1 filter drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            {/* "Click to play" label */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-8">
                                <span
                                    className="text-[11px] font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full text-white"
                                    style={{ background: 'rgba(99,102,241,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
                                >
                                    Play Message
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
            className="relative overflow-hidden section-padding"
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

            <div className="container-standard relative z-10">

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
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
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
