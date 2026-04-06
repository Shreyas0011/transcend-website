import React from 'react'

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = React.useState(false);

    return (
        <section id="home" className="relative w-full h-screen bg-[#05060f] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover transition-opacity duration-1000 z-10 ${videoLoaded ? 'opacity-80' : 'opacity-0'}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoLoaded(true)}
                    poster="/logo.png" // Temporary poster, ideally a frame from the video
                >
                    <source 
                        src="/hero_video.mp4" 
                        type="video/mp4" 
                    />
                </video>
                {/* Fallback gradient/background always present to prevent layout shift */}
                <div className="absolute inset-0 bg-[#05060f] z-0" />
                {!videoLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#05060f] via-[#05060f]/80 to-[#05060f] animate-pulse z-5" />
                )}
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060f]/20 to-[#05060f] z-20" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <div className="w-[28px] h-[46px] border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-md">
                        <div className="w-1 h-2 bg-indigo-500 rounded-full animate-scroll-down"></div>
                    </div>
                    <span className="text-[9px] text-white/30 font-black tracking-[0.5em] uppercase text-center">Scroll</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
