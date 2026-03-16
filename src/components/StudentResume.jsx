import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const StudentResume = () => {
    const { state } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
        window.scrollTo(0, 0);
    }, []);

    // Fallback if navigated directly
    const student = state || {
        name: 'Student Name',
        stream: 'B.Com / BBA',
        details: 'Academic Achiever · Campus Leader',
    };

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=1e2a6b&color=fff&size=300&bold=true&rounded=true`;

    // Parse details into chips
    const chips = student.details ? student.details.split('·').map(s => s.trim()).filter(Boolean) : [];

    return (
        <div className="min-h-screen text-white section-padding pt-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #05060f 0%, #080b1a 60%, #05060f 100%)' }}>

            {/* Background glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.14) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.1) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            </div>

            <div className="container-standard relative z-10"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                }}>

                {/* Back link */}
                <Link to={-1}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-400 transition-colors group mb-10">
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="text-xs font-bold tracking-widest uppercase">Back</span>
                </Link>

                {/* Resume card */}
                <div className="rounded-[28px] overflow-hidden"
                    style={{
                        background: 'rgba(12,14,30,0.95)',
                        border: '1.5px solid rgba(99,102,241,0.2)',
                        boxShadow: '0 32px 80px rgba(45,62,145,0.3)',
                    }}>

                    {/* Header banner */}
                    <div className="relative px-10 pt-12 pb-10 flex flex-col sm:flex-row items-center gap-8"
                        style={{ background: 'linear-gradient(135deg, #0d1130 0%, #1a1f4b 100%)', borderBottom: '1px solid rgba(99,102,241,0.15)' }}>
                        {/* Decorative dots */}
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <img src={avatarUrl} alt={student.name}
                                className="w-28 h-28 rounded-2xl object-cover relative z-10"
                                style={{ border: '3px solid rgba(99,102,241,0.5)', boxShadow: '0 8px 32px rgba(45,62,145,0.5)' }}
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 z-20"
                                style={{ border: '2px solid #080b1a', boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
                        </div>

                        <div className="text-center sm:text-left relative z-10">
                            <p className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase mb-2">Student Resume</p>
                            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">{student.name}</h1>
                            <p className="text-indigo-300 font-semibold mt-1">{student.stream}</p>
                            <p className="text-gray-500 text-sm mt-1">Transcend Group of Institutions · Batch 2023–26</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-8 md:p-12 space-y-10">

                        {/* Highlights */}
                        {chips.length > 0 && (
                            <section>
                                <SectionTitle>Highlights</SectionTitle>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {chips.map((chip, i) => (
                                        <span key={i}
                                            className="px-4 py-2 rounded-full text-sm font-semibold text-indigo-200"
                                            style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Education */}
                        <section>
                            <SectionTitle>Education</SectionTitle>
                            <div className="mt-4 space-y-4">
                                <ResumeItem
                                    title={student.stream}
                                    sub="Transcend Group of Institutions, Bangalore"
                                    meta="2023 – 2026 (Ongoing)"
                                    desc="Affiliated to Bangalore University under the National Education Policy (NEP) framework."
                                />
                                <ResumeItem
                                    title="Pre-University (Commerce)"
                                    sub="Karnataka State Board"
                                    meta="2021 – 2023"
                                    desc="Completed with distinction. Core subjects: Accountancy, Business Studies, Economics."
                                />
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <SectionTitle>Internship Experience</SectionTitle>
                            <div className="mt-4 space-y-4">
                                <ResumeItem
                                    title="Summer Intern"
                                    sub="Industry Partner Organisation"
                                    meta="June 2025 – July 2025 · 6 Weeks"
                                    desc="Assisted in departmental projects, prepared reports and presentations, and collaborated with cross-functional teams."
                                />
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <SectionTitle>Skills</SectionTitle>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                                {['MS Office', 'Tally ERP', 'Business Communication', 'Team Leadership', 'Financial Analysis', 'Public Speaking'].map(skill => (
                                    <div key={skill}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-300"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <SectionTitle>Co-curricular &amp; Achievements</SectionTitle>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Active member of the Toastmasters Club at Transcend',
                                    'Participated in inter-college commerce and management events',
                                    'Volunteered in NSS community outreach programmes',
                                    'Attended LIFE Program workshops on personality development',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Contact */}
                        <section>
                            <SectionTitle>Contact</SectionTitle>
                            <div className="mt-4 grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Institution', value: 'Transcend Group of Institutions' },
                                    { label: 'Location', value: 'Bangalore, Karnataka' },
                                    { label: 'Email', value: `${student.name.split(' ')[0].toLowerCase()}@transcend.edu.in` },
                                    { label: 'LinkedIn', value: 'linkedin.com/in/profile' },
                                ].map(({ label, value }) => (
                                    <div key={label}
                                        className="px-5 py-3 rounded-xl"
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.1)' }}>
                                        <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-1">{label}</p>
                                        <p className="text-gray-300 text-sm font-semibold">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer note */}
                        <p className="text-center text-gray-700 text-xs pt-4 border-t border-white/5">
                            This resume is auto-generated for demonstration purposes · Transcend Group of Institutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionTitle = ({ children }) => (
    <div className="flex items-center gap-4">
        <h2 className="text-white font-black text-lg tracking-wide">{children}</h2>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
    </div>
);

const ResumeItem = ({ title, sub, meta, desc }) => (
    <div className="pl-5 border-l-2 border-indigo-900/60">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <p className="text-white font-bold text-base">{title}</p>
            <span className="text-indigo-400 text-xs font-semibold tracking-wide">{meta}</span>
        </div>
        <p className="text-indigo-300 text-sm font-semibold mb-1">{sub}</p>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default StudentResume;
