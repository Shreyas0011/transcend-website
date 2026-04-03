import React from 'react';

const BComCADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                            Professional Certification
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 8L - 12L PA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b]" style={{ fontFamily: 'var(--font-heading)' }}>
                        B.Com with <span className="shimmer-text">Chartered Accountancy (CA)</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-amber-500 mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="text-xl font-bold text-[#1e2a6b]">
                            B.Com with Chartered Accountancy (CA) is a prestigious and rigorous professional course designed to equip students for success in finance and accounting.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                                <h4 className="text-lg font-black text-[#1e2a6b] mb-2">Foundation</h4>
                                <p className="text-xs text-gray-500">Essential principles: accounting, business laws, and quantitative aptitude.</p>
                                <div className="absolute top-0 right-0 p-4 text-gray-100 text-4xl font-black -mr-2 -mt-2">01</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
                                <h4 className="text-lg font-black text-[#1e2a6b] mb-2">Intermediate</h4>
                                <p className="text-xs text-gray-500">Deep knowledge: Financial Mgmt, Taxation, and Auditing.</p>
                                <div className="absolute top-0 right-0 p-4 text-gray-100 text-4xl font-black -mr-2 -mt-2">02</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 relative group overflow-hidden">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                                <h4 className="text-lg font-black text-[#1e2a6b] mb-2">Final</h4>
                                <p className="text-xs text-gray-500">Advanced topics: Strategic Financial Mgmt and Corporate Laws.</p>
                                <div className="absolute top-0 right-0 p-4 text-gray-100 text-4xl font-black -mr-2 -mt-2">03</div>
                            </div>
                        </div>

                        <p>
                            The CA course is notably challenging, demanding dedication and strong analytical abilities. Students must also complete a mandatory practical training period, enhancing their real-world experience. 
                        </p>
                        
                        <p>
                            Achieving CA certification opens diverse career opportunities as auditors, financial analysts, and consultants, both domestically and internationally, making it a valuable investment for aspiring finance professionals.
                        </p>

                        <div className="bg-[#1e2a6b] text-white p-8 rounded-3xl mt-12">
                            <h3 className="text-2xl font-bold mb-6 text-amber-400">Career Prospects</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Statutory Auditor',
                                    'Financial Consultant',
                                    'Tax Advisor',
                                    'Investment Banker',
                                    'Internal Auditor',
                                    'Corporate Secretary'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
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
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Approx. Starting Package</span>
                                    <span className="text-3xl font-black text-amber-600">₹8L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                                <div className="pt-6 border-t border-gray-50">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Growth Potential</span>
                                    <span className="text-3xl font-black text-amber-600">₹12L+ <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComCADetail;
