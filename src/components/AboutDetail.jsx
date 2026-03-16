import React from 'react';

const AboutDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#2d3e91', fontFamily: 'Georgia, serif' }}>
                        About TRANSCEND
                    </h1>
                    <div className="w-20 h-1 bg-[#6366f1] mb-8"></div>

                    <div className="space-y-6 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p>
                            TRANSCEND Group of Institutions has emerged as a premier center for higher education in Karnataka, committed to delivering academic excellence and holistic student development.
                        </p>
                        <p>
                            The institution provides a progressive learning ecosystem where students are empowered to grow intellectually, professionally, and personally.
                        </p>
                    </div>
                </div>

                {/* Right Column - Image Placeholder */}
                <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
                    {/* Decorative background behind image */}
                    <div className="absolute bg-[#6366f1] w-full h-full rounded-2xl top-4 -right-4 opacity-10"></div>

                    <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex items-center justify-center z-10">
                        {/* Placeholder graphic */}
                        <div className="text-gray-400 flex flex-col items-center p-8 text-center">
                            <svg className="w-16 h-16 mb-4 text-[#cfd1fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v10z"></path>
                            </svg>
                            <span className="font-semibold text-lg text-gray-500">College Picture Placeholder</span>
                            <span className="text-sm text-gray-400 mt-2">Insert your preferred campus image here</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutDetail;
