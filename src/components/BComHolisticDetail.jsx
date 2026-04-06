import React from 'react';

const BComHolisticDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                            Flagship Program
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 4.5L - 11L PA</span>
                    </div>
                    <h1 className="text-3xl xs:text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b] leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                        B.Com <span className="shimmer-text block xs:inline">Holistic</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#2d3e91] to-[#6366f1] mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#2d3e91] first-letter:mr-3 first-letter:float-left">
                            The B.Com Holistic program at TRANSCEND Degree College is an immersive educational experience that goes beyond traditional boundaries. With a dedicated focus on fostering a global perspective, it offers a stimulating student exchange program and an enriching international study tour, allowing students to broaden their horizons and grasp diverse business cultures firsthand.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm">
                                <div className="text-3xl mb-4">🌍</div>
                                <h4 className="text-xl font-bold text-[#1e2a6b] mb-2">Global Exposure</h4>
                                <p className="text-sm text-gray-600">Student exchange programs and international study tours to broaden horizons.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
                                <div className="text-3xl mb-4">🚀</div>
                                <h4 className="text-xl font-bold text-amber-900 mb-2">Entrepreneurship</h4>
                                <p className="text-sm text-gray-600">Special emphasis on nurturing entrepreneurial skills, empowering innovation.</p>
                            </div>
                        </div>

                        <p>
                            Alongside these global opportunities, the program places special emphasis on nurturing entrepreneurial skills, empowering students to innovate and create. Every B.Com student enhances their public speaking abilities by actively participating in <strong>Toastmasters International</strong>, complemented by mandatory internships embedded within their curriculum.
                        </p>

                        <div className="bg-[#1e2a6b] text-white p-8 rounded-3xl mt-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-200">
                                Beyond the Classroom
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'International Study Tours',
                                    'Toastmasters International',
                                    'Mandatory Internships',
                                    'Student Exchange Programs',
                                    'Innovation Workshops',
                                    'Cultural Immersion'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-indigo-500/30 flex items-center justify-center text-[10px]">✔</span>
                                        <span className="text-sm font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-xl font-black text-[#6366f1] mt-12 text-center italic">
                            Constructing a 360° Professional Profile.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-[#1e2a6b] mb-4">Quick Stats</h5>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Starting CTC</span>
                                    <span className="font-bold text-green-600">₹4.5L PA</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Highest CTC</span>
                                    <span className="font-bold text-green-600">₹11L PA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Duration</span>
                                    <span className="font-bold text-gray-900">3 Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComHolisticDetail;

