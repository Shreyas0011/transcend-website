import React from 'react';

const BComEveningDetail = () => {
    return (
        <main className="relative z-10 flex-grow py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d3e91]" style={{ fontFamily: 'Georgia, serif' }}>
                        B.Com Evening
                    </h1>
                    <div className="w-20 h-1 bg-[#6366f1] mb-8"></div>

                    <div className="space-y-6 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p>
                            The <strong>B.Com Evening Program</strong> is designed for students and working professionals who require flexibility without compromising on quality education.
                        </p>
                        <p>
                            This program offers the same curriculum and academic standards as daytime B.Com courses, delivered through convenient evening classes.
                        </p>

                        <div className="bg-indigo-50 p-8 rounded-xl mt-12 border-l-4 border-[#2d3e91]">
                            <h3 className="text-2xl font-bold text-[#2d3e91] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                Program Highlights
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Flexible schedule for working students</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Same academic value as regular B.Com</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Ideal for career growth & skill enhancement</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Strong foundation in accounting, finance & business</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-[#2d3e91] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Career Opportunities
                            </h3>
                            <p className="mb-4">Graduates can pursue careers in:</p>
                            <ul className="list-disc list-inside space-y-2 text-[#52525c] ml-4">
                                <li>Accounting & Auditing</li>
                                <li>Banking & Finance</li>
                                <li>Business Management</li>
                                <li>Corporate & Administrative Roles</li>
                            </ul>
                        </div>

                        <p className="text-xl font-bold text-[#6366f1] mt-8 text-center italic">
                            Learn. Work. Grow — at your own pace.
                        </p>
                    </div>
                </div>

                {/* Sidebar Image / Placeholder */}
                <div className="lg:w-1/3 flex justify-center lg:mt-0 relative">
                    <div className="absolute bg-[#6366f1] w-full h-96 rounded-2xl top-4 -right-4 opacity-10"></div>

                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-center z-10 p-6 text-center">
                        {/* Placeholder graphic */}
                        <svg className="w-16 h-16 mb-4 text-[#cfd1fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <span className="font-semibold text-lg text-gray-500">Program Image</span>
                        <span className="text-sm text-gray-400 mt-2">Upload a relevant picture of the B.Com Evening program</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComEveningDetail;
