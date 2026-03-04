import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-[85vh] bg-[#0b0c15] flex items-center justify-center overflow-hidden">
            {/* Background Video Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* 
                  Instructions for User:
                  1. Place your video file (e.g., hero-bg.mp4) in the /public folder.
                  2. Update the src attribute below to matching the filename.
                */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute min-w-full min-h-full object-cover opacity-60"
                    src=""
                >
                    {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay for Cinematic Feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c15]/40 via-transparent to-[#0b0c15]/80 pointer-events-none"></div>
            </div>

            {/* Content Overlay (Currently Empty as requested) */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                {/* Content can be added here later */}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white opacity-40 animate-bounce pointer-events-none">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Scroll</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}

export default Hero
