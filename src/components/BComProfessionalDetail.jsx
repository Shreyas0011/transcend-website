import React from 'react';

const BComProfessionalDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d3e91]" style={{ fontFamily: 'Georgia, serif' }}>
                        B.Com Professional
                    </h1>
                    <div className="w-20 h-1 bg-[#6366f1] mb-8"></div>

                    <div className="space-y-6 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p>
                            The <strong>B.Com Professional Program</strong> is specially designed for students aspiring to become Chartered Accountants (<u className="decoration-[#6366f1] decoration-2 underline-offset-4">CA</u>) and other finance professionals.
                        </p>
                        <p>
                            Understanding the rigorous journey of <u className="decoration-[#6366f1] decoration-2 underline-offset-4">CA</u> preparation, this program provides academic flexibility, attendance support, and internal assessment considerations to help students balance professional studies with degree education.
                        </p>
                        <p>
                            It seamlessly integrates B.Com coursework as a strong academic foundation while supporting <u className="decoration-[#6366f1] decoration-2 underline-offset-4">CA</u> preparation.
                        </p>

                        <div className="bg-indigo-50 p-8 rounded-xl mt-12 border-l-4 border-[#2d3e91]">
                            <h3 className="text-2xl font-bold text-[#2d3e91] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                Ideal For
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span><u className="decoration-[#6366f1] decoration-2 underline-offset-4">CA</u> aspirants seeking flexibility and support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Students pursuing CMA, ACCA, or finance careers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3 text-xl">✔</span>
                                    <span>Learners wanting a strong commerce backup degree</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-bold text-[#6366f1] mt-8 text-center italic">
                            A smart pathway for ambitious finance professionals.
                        </p>
                    </div>
                </div>

                {/* Sidebar Image / Placeholder */}
                <div className="lg:w-1/3 flex justify-center lg:mt-0 relative">
                    <div className="absolute bg-[#6366f1] w-full h-96 rounded-2xl top-4 -right-4 opacity-10"></div>

                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-center z-10 p-6 text-center">
                        {/* Placeholder graphic */}
                        <svg className="w-16 h-16 mb-4 text-[#cfd1fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        <span className="font-semibold text-lg text-gray-500">Program Image</span>
                        <span className="text-sm text-gray-400 mt-2">Upload a relevant picture of the B.Com Professional program</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComProfessionalDetail;
