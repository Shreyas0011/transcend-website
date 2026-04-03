import React from 'react';

const BBADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                            Management Studies
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 4.5L - 11L PA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Bachelor of <span className="shimmer-text">Business Administration</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-900 to-blue-500 mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-900 first-letter:mr-3 first-letter:float-left">
                            The BBA program at TRANSCEND Degree College is an immersive educational experience that goes beyond traditional boundaries. With a dedicated focus on fostering a global perspective, it offers a stimulating student exchange program and an enriching international study tour, allowing students to broaden their horizons and grasp diverse business cultures firsthand.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-4">💡</div>
                                <h4 className="text-xl font-bold text-blue-950 mb-2">Innovation Lab</h4>
                                <p className="text-sm text-gray-600">Nurturing entrepreneurial skills and empowering students to innovate and create.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-4">🎤</div>
                                <h4 className="text-xl font-bold text-indigo-950 mb-2">Public Speaking</h4>
                                <p className="text-sm text-gray-600">Active participation in Toastmasters International to enhance communication.</p>
                            </div>
                        </div>

                        <p>
                            Alongside these global opportunities, the program places special emphasis on nurturing entrepreneurial skills, empowering students to innovate and create. Every BBA student enhances their public speaking abilities by actively participating in <strong>Toastmasters International</strong>, complemented by mandatory internships embedded within their curriculum.
                        </p>

                        <p className="p-8 border-l-4 border-blue-900 bg-gray-50 rounded-r-3xl italic">
                            "This combination of theoretical learning and hands-on experience forms the cornerstone of the BBA program."
                        </p>

                        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 rounded-3xl mt-12 relative overflow-hidden group">
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                            <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    'Global Student Exchange',
                                    'International Study Tours',
                                    'Toastmasters Certified',
                                    'Mandatory Industry Internships',
                                    'Entrepreneurial Mentorship',
                                    'Strategic Leadership Modules'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-xl font-black text-blue-800 mt-12 text-center italic">
                            Shaping Global Leaders for Tomorrow.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-blue-950 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                ROI & Placement
                            </h5>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Starting Salary</span>
                                    <span className="text-3xl font-black text-blue-900">₹4.5L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                                <div className="pt-6 border-t border-gray-50">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Top Potential</span>
                                    <span className="text-3xl font-black text-blue-900">₹11L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BBADetail;

