import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen bg-[#0b0c15] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw] pointer-events-none opacity-100"
                    src="https://www.youtube.com/embed/o6IqDVyOAbA?autoplay=1&mute=1&loop=1&playlist=o6IqDVyOAbA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&playsinline=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Content Overlay - Empty for minimalist video look */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
            </div>
        </section>
    )
}

export default Hero
