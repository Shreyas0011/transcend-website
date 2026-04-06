import React from 'react';

const BComUSCMADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                            Management Analytics
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 6L - 12L PA</span>
                    </div>
                    <h1 className="text-3xl xs:text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b] leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="shimmer-text">US-CMA</span> <span className="block xs:inline">(Certified Management Accountant)</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-indigo-600 mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="text-xl font-bold text-[#1e2a6b]">
                            The US Certified Management Accountant (US-CMA) program is an esteemed certification aimed at equipping students with essential skills in financial management and strategic decision-making.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="p-8 rounded-[40px] bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm relative group overflow-hidden">
                                <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">📊</div>
                                <h4 className="text-2xl font-black text-indigo-900 mb-4">Part 1</h4>
                                <h5 className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">Focus Areas</h5>
                                <p className="text-sm text-gray-600">Financial Planning, Performance, and Analytics.</p>
                                <div className="absolute top-0 right-0 p-6 text-indigo-100 text-6xl font-black -mr-4 -mt-2">I</div>
                            </div>
                            <div className="p-8 rounded-[40px] bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm relative group overflow-hidden">
                                <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">🎯</div>
                                <h4 className="text-2xl font-black text-indigo-900 mb-4">Part 2</h4>
                                <h5 className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">Focus Areas</h5>
                                <p className="text-sm text-gray-600">Strategic Financial Management and Risk Analysis.</p>
                                <div className="absolute top-0 right-0 p-6 text-indigo-100 text-6xl font-black -mr-4 -mt-2">II</div>
                            </div>
                        </div>

                        <div className="my-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-indigo-50 relative group">
                            <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                            <iframe 
                                width="100%" 
                                height="450" 
                                src="https://www.youtube.com/embed/Mb4Xw_FLwgE" 
                                title="US-CMA Program Highlight" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="w-full aspect-video"
                            ></iframe>
                        </div>

                        <p>
                            Each part covers critical subjects such as budgeting, forecasting, financial analysis, and risk management, helping students develop a holistic understanding of corporate finance. The US-CMA exam is known for its rigor, requiring not only theoretical knowledge but also practical application and analytical thinking.
                        </p>
                        
                        <p>
                            Candidates are expected to demonstrate proficiency in management accounting concepts and financial strategies to excel in today's competitive business environment.
                        </p>

                        <div className="bg-[#2d3e91] text-white p-10 rounded-[2.5rem] mt-12 relative overflow-hidden group">
                           <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -mr-32 -mb-32 group-hover:scale-150 transition-transform duration-1000"></div>
                            <h3 className="text-2xl font-bold mb-8">Career Opportunities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    'Management Accountant',
                                    'Financial Analyst',
                                    'Business Consultant',
                                    'Cost Accountant',
                                    'Budget Director',
                                    'Financial Controller'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                                        <span className="text-sm font-bold tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-[2rem] border border-gray-100 bg-white shadow-2xl">
                            <h5 className="font-black text-[#1e2a6b] mb-8 flex items-center gap-2">
                                <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                                ROI Insights
                            </h5>
                            <div className="space-y-8">
                                <div>
                                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] block mb-2">Base Salary Range</span>
                                    <span className="text-4xl font-black text-indigo-700">₹6L <span className="text-lg font-medium text-gray-400">PA</span></span>
                                </div>
                                <div className="pt-8 border-t border-gray-50">
                                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] block mb-2">Maximum Potential</span>
                                    <span className="text-4xl font-black text-indigo-700">₹12L <span className="text-lg font-medium text-gray-400">PA</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComUSCMADetail;
