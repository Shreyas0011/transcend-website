import React from 'react';
import { Link } from 'react-router-dom';

const BComProfessionalDetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-[#2d3e91] text-xs font-bold uppercase tracking-wider">
                            Elite Path
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 8L - 15L PA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b]" style={{ fontFamily: 'var(--font-heading)' }}>
                        B.Com <span className="shimmer-text">Professional</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-[#2d3e91] mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="text-2xl text-[#1e2a6b] font-bold leading-tight">
                            Offered at Transcend Degree College, this program caters to young achievers who don't just plan—they decide and dedicate their time to achieve big at a very young age.
                        </p>
                        
                        <p>
                            These are the candidates who would start their career with a <strong>minimum salary package of 8 lakh to 15 lakh CTC per annum</strong> based on their chosen professional course and the skills they acquire during their journey.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                            <Link to="/bcom-ca" className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group">
                                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
                                <h4 className="font-bold text-[#1e2a6b]">B.Com + CA</h4>
                                <p className="text-xs text-gray-500 mt-2">Chartered Accountancy</p>
                            </Link>
                            <Link to="/acca" className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group">
                                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">🌍</div>
                                <h4 className="font-bold text-[#1e2a6b]">ACCA</h4>
                                <p className="text-xs text-gray-500 mt-2">Global Accounting</p>
                            </Link>
                            <Link to="/us-cma" className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group">
                                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">📈</div>
                                <h4 className="font-bold text-[#1e2a6b]">US-CMA</h4>
                                <p className="text-xs text-gray-500 mt-2">Management Accounting</p>
                            </Link>
                        </div>

                        <div className="bg-indigo-50 p-8 rounded-3xl mt-12 border-l-8 border-[#2d3e91]">
                            <h3 className="text-2xl font-black text-[#1e2a6b] mb-6">
                                Why Choose B.Com Professional?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-3 text-xl font-bold">01</span>
                                    <span><strong>High ROI:</strong> Start with packages ranging from 8L to 15L PA.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-3 text-xl font-bold">02</span>
                                    <span><strong>Specialized Training:</strong> Integrated coaching for global certifications.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-3 text-xl font-bold">03</span>
                                    <span><strong>Industry Alignment:</strong> Curriculum mapped to real-world financial demands.</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-black text-[#6366f1] mt-12 text-center italic">
                            Decide. Dedicate. Achieve Big.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-[#1e2a6b] mb-4 text-xs uppercase tracking-widest">ROI Insights</h5>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Starting CTC</span>
                                    <span className="font-bold text-indigo-600">₹8L PA</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="text-sm text-gray-500">Highest CTC</span>
                                    <span className="font-bold text-indigo-600">₹15L PA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Program Focus</span>
                                    <span className="font-bold text-gray-900">Professional Paths</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BComProfessionalDetail;

