import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen bg-[#05060f] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw] pointer-events-none opacity-80 scale-[1.1]"
                    src="https://drive.google.com/file/d/1i83S1ZEE6IFMYgr9AU7GQjuE7YiAKq5g/preview"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Hero Video"
                ></iframe>
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060f]/20 to-[#05060f]" />
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
