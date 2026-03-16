import React from 'react';

const BBADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d3e91]" style={{ fontFamily: 'Georgia, serif' }}>
                        BBA (Bachelor of Business Administration)
                    </h1>
                    <div className="w-20 h-1 bg-[#6366f1] mb-8"></div>

                    <div className="space-y-6 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p>
                            The <strong>BBA program</strong> at TRANSCEND Degree College is designed to develop future business leaders equipped with global perspectives, entrepreneurial thinking, and industry-ready skills.
                        </p>
                        <p>
                            Going beyond traditional management education, the program blends academic learning with real-world exposure, leadership development, and international outlook. Students gain insight into global business practices through international study tours, exchange opportunities, and industry interactions.
                        </p>
                        <p>
                            With a strong emphasis on innovation and entrepreneurship, the program empowers students to think strategically, lead confidently, and build successful careers in the dynamic business world.
                        </p>
                        <p>
                            Students enhance their communication and leadership abilities through Toastmasters participation, while mandatory internships provide hands-on industry experience — ensuring graduates are confident, skilled, and career-ready.
                        </p>

                        <div className="bg-indigo-50 p-8 rounded-xl mt-12 border-l-4 border-[#2d3e91]">
                            <h3 className="text-2xl font-bold text-[#2d3e91] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                Why Choose BBA at TRANSCEND?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Global exposure & international study opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Entrepreneurship & leadership development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Industry internships & real-world business experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Public speaking & communication mastery (Toastmasters)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Industry-relevant curriculum & business simulations</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-bold text-[#6366f1] mt-8 text-center italic">
                            Where future leaders are shaped and business minds are built.
                        </p>
                    </div>
                </div>

                {/* Sidebar Image / Placeholder */}
                <div className="lg:w-1/3 flex justify-center lg:mt-0 relative">
                    <div className="absolute bg-[#6366f1] w-full h-96 rounded-2xl top-4 -right-4 opacity-10"></div>

                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-center z-10 p-6 text-center">
                        {/* Placeholder graphic */}
                        <svg className="w-16 h-16 mb-4 text-[#cfd1fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6m4 2h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        <span className="font-semibold text-lg text-gray-500">Program Image</span>
                        <span className="text-sm text-gray-400 mt-2">Upload a relevant picture of the BBA program activities</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BBADetail;
