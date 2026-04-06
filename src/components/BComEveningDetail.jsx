import React from 'react';

const BComEveningDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-3xl xs:text-4xl md:text-5xl font-black mb-8 text-[#2d3e91] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                         B.Com <span className="shimmer-text">Evening</span>
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

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-[#2d3e91] mb-4 text-xs uppercase tracking-widest">Program Overview</h5>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Starting CTC</span>
                                    <span className="font-bold text-indigo-600">₹3L PA</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Highest CTC</span>
                                    <span className="font-bold text-indigo-600">₹6L PA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Convenience</span>
                                    <span className="font-bold text-gray-900">Evening Classes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComEveningDetail;
