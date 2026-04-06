import React from 'react';

const BComACCADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                            Global Certification
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 6L - 12L PA</span>
                    </div>
                    <h1 className="text-3xl xs:text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b] leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="shimmer-text">B.Com + ACCA</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-emerald-500 mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="text-xl font-bold text-[#1e2a6b]">
                            Our integrated B.Com + ACCA program offers a globally recognized qualification (Association of Chartered Certified Accountants) alongside a comprehensive commerce degree.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                                <h4 className="text-lg font-black text-emerald-900 mb-2">Applied Knowledge</h4>
                                <p className="text-xs text-emerald-600">Fundamental accounting concepts: Business Tech, Financial and Mgmt Accounting.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
                                <h4 className="text-lg font-black text-emerald-900 mb-2">Applied Skills</h4>
                                <p className="text-xs text-emerald-600">Complex topics: Performance Mgmt, Taxation, and Financial Mgmt.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💎</div>
                                <h4 className="text-lg font-black text-emerald-900 mb-2">Strategic Prof.</h4>
                                <p className="text-xs text-emerald-600">Advanced skills: strategic planning, professional ethics, and leadership.</p>
                            </div>
                        </div>

                        <div className="my-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-emerald-50 relative group">
                            <div className="absolute inset-0 bg-emerald-600/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                            <iframe 
                                width="100%" 
                                height="450" 
                                src="https://www.youtube.com/embed/grH9Rw_KvKY" 
                                title="B.Com + ACCA Program Highlight" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="w-full aspect-video"
                            ></iframe>
                        </div>

                        <p>
                            The B.Com + ACCA qualification is known for its rigor, requiring a blend of theoretical understanding and practical application. Students must also complete an Ethics and Professional Skills module and gain relevant work experience to qualify. 
                        </p>
                        
                        <p>
                            Earning the B.Com + ACCA designation opens up numerous career opportunities as financial analysts, auditors, and tax advisors, making it a sought-after qualification in the accounting profession.
                        </p>

                        <div className="bg-[#1a2e21] text-white p-8 rounded-3xl mt-12 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400 opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Professional Tracks</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Global Auditor',
                                    'International Tax Specialist',
                                    'Management Accountant',
                                    'Wealth Manager',
                                    'Risk Manager',
                                    'CFO Advisory'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                        <span className="text-sm font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-[#1e2a6b] mb-6">Course Outlook</h5>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Starting CTC</span>
                                    <span className="text-3xl font-black text-emerald-700">₹6L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                                <div className="pt-6 border-t border-gray-50">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Top Career Growth</span>
                                    <span className="text-3xl font-black text-emerald-700">₹12L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComACCADetail;
