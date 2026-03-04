import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Total animation time 3.2 seconds
        const timer = setTimeout(() => {
            setFadingOut(true);
            setTimeout(() => {
                setLoading(false);
                document.body.style.overflow = 'auto';
            }, 1000); // 1-second split/fade out duration
        }, 3200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden"
        >
            {/* ── SPLIT SHUTTER DOORS ── */}
            <div
                className={`absolute inset-0 bg-[#03040a] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] origin-top ${fadingOut ? '-translate-y-full' : 'translate-y-0'}`}
                style={{ height: '50.1%' }}
            />
            <div
                className={`absolute top-1/2 inset-x-0 bottom-0 bg-[#03040a] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] origin-bottom ${fadingOut ? 'translate-y-full' : 'translate-y-0'}`}
            />

            {/* ── CONTENT (fades & scales out slightly when shutter opens) ── */}
            <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ease-in-out ${fadingOut ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>

                {/* Glow behind logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 60%)' }} />

                {/* LOGO */}
                <div className="relative mb-8 w-28 h-28 flex items-center justify-center animate-[logoReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <img
                        src="/logo.png"
                        alt="Transcend Logo"
                        className="w-16 h-16 object-contain z-10 drop-shadow-2xl"
                    />
                </div>

                {/* TEXT REVEALS */}
                <div className="overflow-hidden">
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent tracking-[0.2em] uppercase translate-y-[100%] animate-[textReveal_1s_cubic-bezier(0.85,0,0.15,1)_0.6s_forwards]"
                        style={{
                            WebkitTextStroke: '1px rgba(255,255,255,0.8)',
                        }}
                    >
                        Transcend
                    </h1>
                </div>

                <div className="overflow-hidden mt-4">
                    <p className="text-white text-[10px] md:text-xs font-black tracking-[0.6em] md:tracking-[0.8em] uppercase -translate-y-[100%] opacity-0 animate-[subtitleReveal_1s_cubic-bezier(0.85,0,0.15,1)_1.2s_forwards]">
                        Group of Institutions
                    </p>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-16 w-64 h-[2px] bg-white/5 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-indigo-500 animate-[progressFill_2.6s_cubic-bezier(0.76,0,0.24,1)_forwards]" />
                </div>
            </div>

            {/* KEYFRAMES */}
            <style>{`
        @keyframes logoReveal {
          0% { transform: scale(0.6) translateY(20px); opacity: 0; filter: blur(10px); }
          50% { filter: blur(0px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes textReveal {
          0% { transform: translateY(100%) rotate(5deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
        @keyframes subtitleReveal {
          0% { transform: translateY(100%); opacity: 0; filter: blur(4px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0px); }
        }
        @keyframes progressFill {
          0% { width: 0%; left: 0%; transform: translateX(0); }
          40% { width: 40%; left: 0%; transform: translateX(0); }
          80% { width: 100%; left: 0%; transform: translateX(0); }
          100% { width: 100%; left: 100%; transform: translateX(-100%); }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
