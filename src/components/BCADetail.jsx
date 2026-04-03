import React from 'react';

const BCADetail = () => {
    return (
        <main className="relative z-10 flex-grow section-padding bg-white container-standard mt-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                            Technology & Innovation
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Approx. CTC: 4L - 10L PA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#1e2a6b]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Bachelor of <span className="shimmer-text">Computer Applications (BCA)</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-900 to-indigo-500 mb-10 rounded-full"></div>

                    <div className="space-y-8 text-[#52525c] text-lg leading-relaxed font-medium">
                        <p className="first-letter:text-5xl first-letter:font-black first-letter:text-indigo-900 first-letter:mr-3 first-letter:float-left">
                            The BCA program at TRANSCEND Degree College is a fast-track into the world of technology and software development. Our curriculum is designed to bridge the gap between academic theory and the rapidly evolving tech industry, focusing on Full-stack development, AI/ML, and Cloud Computing.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-4">👨‍💻</div>
                                <h4 className="text-xl font-bold text-indigo-950 mb-2">Modern Stack</h4>
                                <p className="text-sm text-gray-600">Hands-on training in React, Node.js, Python, and modern database management.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-4">🤖</div>
                                <h4 className="text-xl font-bold text-blue-950 mb-2">AI & Machine Learning</h4>
                                <p className="text-sm text-gray-600">Explore the future of tech with dedicated modules on artificial intelligence and data science.</p>
                            </div>
                        </div>

                        <p>
                            Beyond coding, our BCA students are groomed for leadership in the tech sector. They participate in regular hackathons, industry workshops, and technical seminars. Like our other flagship programs, BCA students also benefit from <strong>Toastmasters International</strong> training to master the art of technical communication.
                        </p>

                        <p className="p-8 border-l-4 border-indigo-900 bg-gray-50 rounded-r-3xl italic">
                            "Building the architects of the digital future through industry-integrated learning."
                        </p>

                        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl mt-12 relative overflow-hidden group">
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                            <h3 className="text-2xl font-bold mb-6">Technical Domains</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    'Full-Stack Web Development',
                                    'Cloud Infrastructure & DevOps',
                                    'Mobile App Ecosystems',
                                    'AI & Machine Learning Pathways',
                                    'Cyber Security Fundamentals',
                                    'UI/UX Design Thinking'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-xl font-black text-indigo-800 mt-12 text-center italic">
                            Empowering the Next Generation of Tech Leaders.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl">
                            <h5 className="font-bold text-indigo-950 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                                ROI & Tech Career
                            </h5>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Entry-Level Placement</span>
                                    <span className="text-3xl font-black text-indigo-900">₹4L <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                                <div className="pt-6 border-t border-gray-50">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Growth Potential</span>
                                    <span className="text-3xl font-black text-indigo-900">₹10L+ <span className="text-sm font-medium text-gray-500">PA</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BCADetail;
