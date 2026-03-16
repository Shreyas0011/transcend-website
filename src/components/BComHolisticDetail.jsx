import React from 'react';

const BComHolisticDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d3e91]" style={{ fontFamily: 'Georgia, serif' }}>
                        B.Com Holistic
                    </h1>
                    <div className="w-20 h-1 bg-[#6366f1] mb-8"></div>

                    <div className="space-y-6 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p>
                            The <strong>B.Com Holistic Program</strong> at TRANSCEND Degree College is our flagship offering, designed to shape industry-ready professionals through a blend of academic excellence and real-world skill development.
                        </p>
                        <p>
                            Going beyond traditional commerce education, the program integrates certification courses, personality development, leadership training, and technology-based learning to build a well-rounded professional profile.
                        </p>
                        <p>
                            Students gain practical exposure through internships, presentations, and skill-based training while developing confidence through Toastmasters and communication workshops.
                        </p>

                        <div className="bg-indigo-50 p-8 rounded-xl mt-12 border-l-4 border-[#2d3e91]">
                            <h3 className="text-2xl font-bold text-[#2d3e91] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                What Makes It Unique
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Skill & certification programs beyond curriculum</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Personality & leadership development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Industry exposure & internship opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Technology & business skill training</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Communication & presentation mastery</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-bold text-[#6366f1] mt-8 text-center italic">
                            Knowledge. Skills. Attitude. Experience — Beyond the Classroom.
                        </p>
                    </div>
                </div>

                {/* Sidebar Image / Placeholder */}
                <div className="lg:w-1/3 flex justify-center lg:mt-0 relative">
                    <div className="absolute bg-[#6366f1] w-full h-96 rounded-2xl top-4 -right-4 opacity-10"></div>

                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-center z-10 p-6 text-center">
                        {/* Placeholder graphic */}
                        <svg className="w-16 h-16 mb-4 text-[#cfd1fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v10z"></path>
                        </svg>
                        <span className="font-semibold text-lg text-gray-500">Program Image</span>
                        <span className="text-sm text-gray-400 mt-2">Upload a relevant picture of the B.Com Holistic program activities</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComHolisticDetail;
