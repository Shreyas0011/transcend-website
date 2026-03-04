import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const students = [
    {
        id: 1,
        name: 'Ananya Embrandiri',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'HR Lead · Organised 3 inter-college fests · LIFE Program Mentor',
        photo: null,
        resume: '#',
    },
    {
        id: 2,
        name: 'Anirudh K M',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Class Representative · TechScale Winner · Internship at Infosys',
        photo: null,
        resume: '#',
    },
    {
        id: 3,
        name: 'Brunda Jagadeesh',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Best Outgoing Student · Toastmasters Club President',
        photo: null,
        resume: '#',
    },
    {
        id: 4,
        name: 'Chandan R Kolla',
        stream: 'BBA [HR & MANAGEMENT]',
        details: "Sports Captain · State-Level Basketball Player · Dean's List",
        photo: null,
        resume: '#',
    },
    {
        id: 5,
        name: 'Chethan C',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Entrepreneurship Award · Co-founded a Campus Startup',
        photo: null,
        resume: '#',
    },
    {
        id: 6,
        name: 'D C Vedapriya',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Cultural Secretary · National Dance Performer · Top 5 Batch',
        photo: null,
        resume: '#',
    },
    {
        id: 7,
        name: 'Eeksha A M',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Academic Excellence Award · Internship at Deloitte · CGPA 9.2',
        photo: null,
        resume: '#',
    },
    {
        id: 8,
        name: 'K K Purvitha',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'NSS Volunteer of the Year · Community Leadership Award',
        photo: null,
        resume: '#',
    },
    {
        id: 9,
        name: 'Laya M K',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Marketing Olympiad Silver · Brand Strategy Intern at HUL',
        photo: null,
        resume: '#',
    },
    {
        id: 10,
        name: 'M P Anushka',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Best Paper Presenter · Management Conclave Speaker',
        photo: null,
        resume: '#',
    },
    {
        id: 11,
        name: 'Parth Shailesh Bhatt',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Placed at KPMG · Finance Club Head · Quiz Champion',
        photo: null,
        resume: '#',
    },
    {
        id: 12,
        name: 'Raksha R Jain',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Gold Medalist · Ranked 1st in University · Inspiring Minds Awardee',
        photo: null,
        resume: '#',
    },
    {
        id: 13,
        name: 'Sai Pallavi Meda',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'TEDx Speaker · Social Media Campaign Lead · Placed at PwC',
        photo: null,
        resume: '#',
    },
    {
        id: 14,
        name: 'Shridhar R',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Debate Champion · Networked with 50+ Industry Leaders',
        photo: null,
        resume: '#',
    },
    {
        id: 15,
        name: 'Manvith M V',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'Best Intern Award · Startup Incubation Programme Finalist',
        photo: null,
        resume: '#',
    },
    {
        id: 16,
        name: 'Pragya S Bodhi',
        stream: 'BBA [HR & MANAGEMENT]',
        details: 'E-Commerce Project Award · Campus Innovation Challenge Winner',
        photo: null,
        resume: '#',
    },
];

const rmSclStudents = [
    {
        id: 1,
        name: 'Abhinav Narayanan',
        stream: 'BBA [RM & SCL]',
        details: 'Retail Strategy Intern · Supply Chain Club Lead · CGPA 9.0',
        photo: null,
        resume: '#',
    },
    {
        id: 2,
        name: 'Adish N N',
        stream: 'BBA [RM & SCL]',
        details: 'Best Project Award · Logistics Symposium Winner',
        photo: null,
        resume: '#',
    },
    {
        id: 3,
        name: 'Aiman Shaikh',
        stream: 'BBA [RM & SCL]',
        details: 'Cultural Fest Organiser · Internship at Amazon Logistics',
        photo: null,
        resume: '#',
    },
    {
        id: 4,
        name: 'Akshay D',
        stream: 'BBA [RM & SCL]',
        details: 'Sports Captain · E-Commerce Case Study Champion',
        photo: null,
        resume: '#',
    },
    {
        id: 5,
        name: 'Hafsa Sameer',
        stream: 'BBA [RM & SCL]',
        details: 'Toastmasters Best Speaker · Placed at Flipkart',
        photo: null,
        resume: '#',
    },
    {
        id: 6,
        name: 'Prajwal A S',
        stream: 'BBA [RM & SCL]',
        details: 'Retail Analytics Hackathon Finalist · TechScale Runner-Up',
        photo: null,
        resume: '#',
    },
    {
        id: 7,
        name: 'Pranav P',
        stream: 'BBA [RM & SCL]',
        details: "Class Representative · Dean's List · Internship at BigBasket",
        photo: null,
        resume: '#',
    },
    {
        id: 8,
        name: 'R Pranith',
        stream: 'BBA [RM & SCL]',
        details: 'NSS Best Volunteer · Supply Chain Paper Presenter',
        photo: null,
        resume: '#',
    },
    {
        id: 9,
        name: 'Rishi Kiran',
        stream: 'BBA [RM & SCL]',
        details: 'Entrepreneurship Award · Business Model Canvas Winner',
        photo: null,
        resume: '#',
    },
    {
        id: 10,
        name: 'S Rithvik',
        stream: 'BBA [RM & SCL]',
        details: 'Marketing Olympiad Gold · Internship at Reliance Retail',
        photo: null,
        resume: '#',
    },
    {
        id: 11,
        name: 'Shreyas Rao',
        stream: 'BBA [RM & SCL]',
        details: 'Best Outgoing Student · Placed at DMart · CGPA 9.3',
        photo: null,
        resume: '#',
    },
    {
        id: 12,
        name: 'Yusuf Aliakbar Merchant',
        stream: 'BBA [RM & SCL]',
        details: 'Debate Runner-Up · Social Impact Project Lead',
        photo: null,
        resume: '#',
    },
    {
        id: 13,
        name: 'Zayan Khan',
        stream: 'BBA [RM & SCL]',
        details: 'Innovation Challenge Winner · Internship at Decathlon',
        photo: null,
        resume: '#',
    },
];

const StudentCard = ({ student, index }) => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s`,
            }}
            className="flex flex-col rounded-[22px] overflow-hidden cursor-default"
        >
            <div
                className="flex flex-col h-full rounded-[22px] p-4 transition-all duration-400"
                style={{
                    background: hovered
                        ? 'linear-gradient(160deg, rgba(45,62,145,0.18) 0%, rgba(15,17,40,0.95) 100%)'
                        : 'rgba(12,14,30,0.9)',
                    border: hovered
                        ? '1.5px solid rgba(99,102,241,0.45)'
                        : '1.5px solid rgba(255,255,255,0.09)',
                    boxShadow: hovered
                        ? '0 24px 60px rgba(45,62,145,0.32)'
                        : '0 4px 24px rgba(0,0,0,0.5)',
                }}
            >
                {/* Photo area */}
                <div
                    className="w-full rounded-[14px] overflow-hidden mb-5 flex items-center justify-center relative"
                    style={{
                        aspectRatio: '4/3',
                        background: 'linear-gradient(145deg, #0d0f20, #181b38)',
                        border: '1.5px solid rgba(255,255,255,0.07)',
                    }}
                >
                    <img
                        src={`https://i.pravatar.cc/300?img=${(index % 70) + 1}`}
                        alt={student.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(12,14,30,0.6) 100%)' }} />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col px-1">
                    <p className="text-base font-bold mb-1 transition-colors duration-300"
                        style={{ color: hovered ? '#c7d2fe' : '#9ca3af' }}>
                        {student.name}
                        <span className="mx-2 text-indigo-700 font-normal">–</span>
                        <span className="font-semibold">{student.stream}</span>
                    </p>

                    <p className="text-sm leading-relaxed mb-6 transition-colors duration-300"
                        style={{ color: hovered ? '#e0e7ff' : '#6b7280' }}>
                        {student.details}
                    </p>

                    <div className="mt-auto">
                        <Link
                            to="/student-resume"
                            state={{ name: student.name, stream: student.stream, details: student.details }}
                            className="block w-full text-center py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300"
                            style={{
                                background: hovered
                                    ? 'linear-gradient(135deg, #2d3e91, #4338ca)'
                                    : 'transparent',
                                border: hovered
                                    ? '1.5px solid transparent'
                                    : '1.5px solid rgba(255,255,255,0.13)',
                                color: hovered ? '#fff' : '#6b7280',
                                boxShadow: hovered ? '0 8px 24px rgba(67,56,202,0.4)' : 'none',
                            }}
                        >
                            view resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StudentDetails = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
            { threshold: 0.1 }
        );
        if (headerRef.current) obs.observe(headerRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="min-h-screen text-white pt-28 pb-24 px-6 md:px-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #05060f 0%, #080b1a 60%, #05060f 100%)' }}>

            {/* Background glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.12) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(45,62,145,0.1) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header */}
                <div
                    ref={headerRef}
                    className="mb-16 text-center"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}
                >
                    <Link to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-400 transition-colors group mb-10">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
                    </Link>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                        <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Our Students</span>
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                    </div>

                    <h1 className="text-5xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
                        Student{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Achievers</span>
                    </h1>
                    <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto">
                        Meet the outstanding students who've shaped the legacy of Transcend College.
                    </p>
                </div>

                {/* Section: HRM & MANAGEMENT */}
                <div className="mb-6">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">BBA [HR &amp; MANAGEMENT]</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {students.map((student, idx) => (
                            <StudentCard key={student.id} student={student} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Section: RM & SCL */}
                <div className="mt-20">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">BBA [RM &amp; SCL]</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {rmSclStudents.map((student, idx) => (
                            <StudentCard key={student.id} student={student} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
