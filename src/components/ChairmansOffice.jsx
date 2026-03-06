import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ url, title, description, color = "#2d3e91" }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
                boxShadow: hovered ? '0 30px 60px -12px rgba(45,62,145,0.25)' : '0 10px 40px -15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(45,62,145,0.08)'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Video Slot */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <iframe
                    src={url}
                    className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    allow="autoplay; fullscreen"
                    title={title}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#2d3e91] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
};

const ChairmansOffice = () => {
    const videos = [
        {
            title: "Vision for 2026",
            description: "A comprehensive look into our strategic goals and institutional evolution over the next three years.",
            url: "https://drive.google.com/file/d/1OZEWapCt5jcdIdbvzFBRnkZzBF67M9HC/preview"
        },
        {
            title: "Global Partnerships",
            description: "Expanding our footprint through elite international collaborations and industry-integrated learning.",
            url: "https://drive.google.com/file/d/1OWkbiQbI1UiNzbCAnraOBky5ZJH8ZouI/preview"
        },
        {
            title: "Student Leadership",
            description: "Empowering the next generation of leaders through structured workshops and real-world exposure.",
            url: "https://drive.google.com/file/d/1OZEWapCt5jcdIdbvzFBRnkZzBF67M9HC/preview"
        },
        {
            title: "Campus Excellence",
            description: "An overview of our world-class infrastructure and its impact on modern educational delivery.",
            url: "https://drive.google.com/file/d/1OWkbiQbI1UiNzbCAnraOBky5ZJH8ZouI/preview"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-x-hidden pt-36 pb-24">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d3e91] animate-pulse"></span>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#2d3e91]">Strategic Leadership</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                        The Chairman's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d3e91] to-indigo-600">Office</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                        Driving institutional excellence through visionary leadership, global integration, and a relentless focus on student success. This portal serves as the hub for our most critical strategic communications and updates.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Latest Communications</h2>
                        <div className="h-px flex-1 mx-8 bg-slate-200 hidden sm:block"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {videos.map((vid, i) => (
                            <VideoCard key={i} {...vid} />
                        ))}
                    </div>
                </div>

                {/* General Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16 border-t border-slate-200">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Strategic Priorities</h2>
                        <ul className="space-y-4">
                            {["Global Academic Integration", "Industry-Responsive Pedagogy", "Student Welfare & Outcomes", "Faculty Excellence Programs"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-lg shadow-indigo-50/40">
                        <h3 className="text-2xl font-black text-slate-900 mb-6">A Message of Excellence</h3>
                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                            <p>
                                At the heart of our mission lies a commitment to transforming the educational landscape in Karnataka. We believe that a degree is more than just a credential; it is a gateway to a lifelong journey of learning, leadership, and social responsibility.
                            </p>
                            <p>
                                The Chairman's Office works closely with our expert faculty and industry partners to ensure that every program we offer is not only academically rigorous but also deeply connected to the realities of the modern global economy. From our state-of-the-art campus to our extensive placement networks, every facet of TRANSCEND is designed to empower our students to achieve their highest potential.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-24 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-slate-900 text-white font-black text-sm transition-all duration-300 hover:bg-[#2d3e91] hover:scale-105 shadow-xl shadow-slate-200"
                    >
                        Back to Home
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChairmansOffice;
