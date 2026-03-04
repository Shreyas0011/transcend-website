import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const bcomATStudents = [
    { id: 1, name: 'Aditi G', stream: 'B.Com [Accounting & Taxation]', details: 'Academic Topper · CA Foundation Cleared · CGPA 9.4', photo: null, resume: '#' },
    { id: 2, name: 'Aditya G Attimarad', stream: 'B.Com [Accounting & Taxation]', details: 'Finance Club Lead · Placed at Ernst & Young', photo: null, resume: '#' },
    { id: 3, name: 'Aditya P', stream: 'B.Com [Accounting & Taxation]', details: 'Best Project Award · TechScale Participant', photo: null, resume: '#' },
    { id: 4, name: 'Aditya V Kashyap', stream: 'B.Com [Accounting & Taxation]', details: 'Taxation Workshop Winner · Internship at Deloitte', photo: null, resume: '#' },
    { id: 5, name: 'Ananya K S', stream: 'B.Com [Accounting & Taxation]', details: 'Cultural Secretary · NSS Best Volunteer · CGPA 9.1', photo: null, resume: '#' },
    { id: 6, name: 'Anusha C', stream: 'B.Com [Accounting & Taxation]', details: 'Toastmasters Best Speaker · Merit Scholarship Awardee', photo: null, resume: '#' },
    { id: 7, name: 'Anya N Makam', stream: 'B.Com [Accounting & Taxation]', details: 'Debate Champion · Ranked 2nd in University Exams', photo: null, resume: '#' },
    { id: 8, name: 'Archana Ramesh', stream: 'B.Com [Accounting & Taxation]', details: 'Best Outgoing Student · Placed at KPMG', photo: null, resume: '#' },
    { id: 9, name: 'Asha Vivek', stream: 'B.Com [Accounting & Taxation]', details: 'Commerce Olympiad Gold · Social Impact Project Lead', photo: null, resume: '#' },
    { id: 10, name: 'B Amritha', stream: 'B.Com [Accounting & Taxation]', details: 'Management Conclave Speaker · Internship at PwC', photo: null, resume: '#' },
    { id: 11, name: 'C G Charan Ram', stream: 'B.Com [Accounting & Taxation]', details: 'Sports Captain · Finance Quiz Runner-Up', photo: null, resume: '#' },
    { id: 12, name: 'Dhanyashree T M', stream: 'B.Com [Accounting & Taxation]', details: "Dean's List · GST Symposium Presenter", photo: null, resume: '#' },
    { id: 13, name: 'Disha Singanamala', stream: 'B.Com [Accounting & Taxation]', details: 'Entrepreneurship Award · Campus Innovation Finalist', photo: null, resume: '#' },
    { id: 14, name: 'Greeshma V', stream: 'B.Com [Accounting & Taxation]', details: 'Best Paper Presenter · Placed at Grant Thornton', photo: null, resume: '#' },
    { id: 15, name: 'H S Deemanth Sai', stream: 'B.Com [Accounting & Taxation]', details: 'Class Representative · Audit Internship at BDO', photo: null, resume: '#' },
    { id: 16, name: 'Hithapriya S', stream: 'B.Com [Accounting & Taxation]', details: 'Merit Rank Holder · CA Inter Pursuing', photo: null, resume: '#' },
    { id: 17, name: 'Jairaj Unnikrishnan', stream: 'B.Com [Accounting & Taxation]', details: 'Quiz Champion · Internship at Infosys Finance Division', photo: null, resume: '#' },
    { id: 18, name: 'Jasmine Purohit', stream: 'B.Com [Accounting & Taxation]', details: 'Cultural Fest Organiser · CGPA 9.2 · NSS Leader', photo: null, resume: '#' },
    { id: 19, name: 'K R Rishikesh', stream: 'B.Com [Accounting & Taxation]', details: 'Startup Pitch Finalist · Income Tax Moot Winner', photo: null, resume: '#' },
    { id: 20, name: 'Kruthi K Prasad', stream: 'B.Com [Accounting & Taxation]', details: 'Gold Medalist · Ranked 1st in Batch · Inspiring Minds Awardee', photo: null, resume: '#' },
    { id: 21, name: 'Maithili S Kulkarni', stream: 'B.Com [Accounting & Taxation]', details: 'Placed at Wipro Finance · Commerce Society President', photo: null, resume: '#' },
    { id: 22, name: 'Manas Kumar Jha', stream: 'B.Com [Accounting & Taxation]', details: 'Inter-College Debate Winner · Internship at HDFC Bank', photo: null, resume: '#' },
    { id: 23, name: 'Nikiths B N', stream: 'B.Com [Accounting & Taxation]', details: 'Sports Representative · Accounting Case Study Champion', photo: null, resume: '#' },
    { id: 24, name: 'Padmashree S', stream: 'B.Com [Accounting & Taxation]', details: 'Best Intern Award · Placed at Bajaj Finance', photo: null, resume: '#' },
    { id: 25, name: 'Phalguni Prashant Acharya', stream: 'B.Com [Accounting & Taxation]', details: 'TEDx Speaker · Community Service Award · CGPA 9.0', photo: null, resume: '#' },
    { id: 26, name: 'R Anirudh', stream: 'B.Com [Accounting & Taxation]', details: 'Finance Hackathon Winner · Internship at Axis Bank', photo: null, resume: '#' },
    { id: 27, name: 'R Bhaskar', stream: 'B.Com [Accounting & Taxation]', details: 'Academic Excellence Award · GST Workshop Facilitator', photo: null, resume: '#' },
    { id: 28, name: 'S Shiva Raja Vell', stream: 'B.Com [Accounting & Taxation]', details: 'Entrepreneurship Club Head · Placed at Cognizant Finance', photo: null, resume: '#' },
    { id: 29, name: 'Samhita Mudgal', stream: 'B.Com [Accounting & Taxation]', details: 'Toastmasters Leader · Best Research Paper Award', photo: null, resume: '#' },
    { id: 30, name: 'Samhitha Narasimha D R', stream: 'B.Com [Accounting & Taxation]', details: 'University Rank Holder · Internship at Accenture', photo: null, resume: '#' },
    { id: 31, name: 'Satvik Gupta', stream: 'B.Com [Accounting & Taxation]', details: 'Business Plan Winner · Placed at TCS Finance Division', photo: null, resume: '#' },
    { id: 32, name: 'Seshasai V R', stream: 'B.Com [Accounting & Taxation]', details: 'Student Parliament President · Debate Runner-Up', photo: null, resume: '#' },
    { id: 33, name: 'Srinath R N', stream: 'B.Com [Accounting & Taxation]', details: 'Commerce Fest Coordinator · Internship at ICICI Bank', photo: null, resume: '#' },
    { id: 34, name: 'Tejas V', stream: 'B.Com [Accounting & Taxation]', details: 'Placed at Deloitte USI · Transfer Pricing Internship', photo: null, resume: '#' },
    { id: 35, name: 'Varsha Mohan', stream: 'B.Com [Accounting & Taxation]', details: 'Best Outgoing Student · NSS State-Level Award', photo: null, resume: '#' },
    { id: 36, name: 'Vidith C C', stream: 'B.Com [Accounting & Taxation]', details: 'Innovation Challenge Winner · Interned at Sundaram Finance', photo: null, resume: '#' },
    { id: 37, name: 'Vilok Srajan Meda', stream: 'B.Com [Accounting & Taxation]', details: 'Startup Incubation Finalist · Business Model Canvas Winner', photo: null, resume: '#' },
    { id: 38, name: 'Devika V', stream: 'B.Com [Accounting & Taxation]', details: 'Cultural Ambassador · Placed at IndusInd Bank · CGPA 8.9', photo: null, resume: '#' },
    { id: 39, name: 'Gaurav M Kashyap', stream: 'B.Com [Accounting & Taxation]', details: 'Finance Hackathon Winner · Internship at Bajaj Finserv', photo: null, resume: '#' },
    { id: 40, name: 'Shreyas Kashyap', stream: 'B.Com [Accounting & Taxation]', details: 'Best Project Award · Placed at Axis Bank · CGPA 9.1', photo: null, resume: '#' },
    { id: 41, name: 'Suraj R', stream: 'B.Com [Accounting & Taxation]', details: 'Entrepreneurship Club Head · Campus Innovation Challenge Winner', photo: null, resume: '#' },
    { id: 42, name: 'Abhinaya R', stream: 'B.Com [Accounting & Taxation]', details: 'Merit Scholarship Awardee · Internship at HDFC Securities', photo: null, resume: '#' },
    { id: 43, name: 'Anica Kulkarni', stream: 'B.Com [Accounting & Taxation]', details: 'Toastmasters Best Speaker · Placed at Deloitte USI', photo: null, resume: '#' },
    { id: 44, name: 'Divya Thirumal', stream: 'B.Com [Accounting & Taxation]', details: 'Cultural Fest Co-ordinator · NSS Best Volunteer · CGPA 9.0', photo: null, resume: '#' },
    { id: 45, name: 'Eshwar H G', stream: 'B.Com [Accounting & Taxation]', details: 'Finance Quiz Champion · Internship at Sundaram Mutual Fund', photo: null, resume: '#' },
    { id: 46, name: 'Shraavya Cadabam Sreenivas', stream: 'B.Com [Accounting & Taxation]', details: 'Best Paper Presenter · Commerce Olympiad Silver · CGPA 9.2', photo: null, resume: '#' },
    { id: 47, name: 'Varsha Santhosh', stream: 'B.Com [Accounting & Taxation]', details: 'Class Representative · Placed at KPMG · Dean\'s List', photo: null, resume: '#' },
    { id: 48, name: 'Karthikeya M A', stream: 'B.Com [Accounting & Taxation]', details: 'Startup Pitch Finalist · Internship at Axis Capital', photo: null, resume: '#' },

];

const bcomHRMStudents = [
    { id: 1, name: 'Ananya V Kumar', stream: 'B.Com [Hr & Management]', details: 'HR Leadership Award · Internship at Unilever HR Division', photo: null, resume: '#' },
    { id: 2, name: 'Bhargav Rama', stream: 'B.Com [Hr & Management]', details: 'Class Representative · Placed at Accenture · CGPA 9.1', photo: null, resume: '#' },
    { id: 3, name: 'Chinmay Ganesh Netravali', stream: 'B.Com [Hr & Management]', details: 'Debate Champion · Management Conclave Speaker', photo: null, resume: '#' },
    { id: 4, name: 'Harshitha S', stream: 'B.Com [Hr & Management]', details: 'Best Outgoing Student · Toastmasters Club President', photo: null, resume: '#' },
    { id: 5, name: 'N K Mayur Somanna', stream: 'B.Com [Hr & Management]', details: 'Sports Captain · Community Service Award · NSS Leader', photo: null, resume: '#' },
    { id: 6, name: 'Nagavarsha B N', stream: 'B.Com [Hr & Management]', details: 'Cultural Secretary · Internship at TCS HR Division', photo: null, resume: '#' },
    { id: 7, name: 'R Sharath', stream: 'B.Com [Hr & Management]', details: 'Entrepreneurship Award · Startup Incubation Programme Finalist', photo: null, resume: '#' },
    { id: 8, name: 'Ridhi Shetty', stream: 'B.Com [Hr & Management]', details: 'Gold Medalist · Ranked 1st in Batch · Inspiring Minds Awardee', photo: null, resume: '#' },
    { id: 9, name: 'Saiskandan Sabarinathan', stream: 'B.Com [Hr & Management]', details: 'Finance Quiz Runner-Up · Internship at Wipro HR', photo: null, resume: '#' },
    { id: 10, name: 'Shrujan Shreekanth Prabhu', stream: 'B.Com [Hr & Management]', details: "Dean's List · Placed at Infosys · CGPA 9.3", photo: null, resume: '#' },
    { id: 11, name: 'T Harshith Aryan', stream: 'B.Com [Hr & Management]', details: 'TEDx Speaker · Best Paper Presenter · Campus Innovation Winner', photo: null, resume: '#' },
    { id: 12, name: 'Drishya Aiyyappa', stream: 'B.Com [Hr & Management]', details: 'NSS Best Volunteer · Social Impact Project Lead', photo: null, resume: '#' },
    { id: 13, name: 'Abhijna R Bhat', stream: 'B.Com [Hr & Management]', details: 'Merit Scholarship Awardee · Internship at HDFC Bank HR', photo: null, resume: '#' },
    { id: 14, name: 'B Balaji Ramanathan', stream: 'B.Com [Hr & Management]', details: 'Placed at Deloitte · Business Plan Winner · Commerce Society VP', photo: null, resume: '#' },
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
                transition: `opacity 0.6s ease ${index * 0.05}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s`,
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
                {/* Photo */}
                <div
                    className="w-full rounded-[14px] overflow-hidden mb-5 flex items-center justify-center relative"
                    style={{ aspectRatio: '4/3', background: 'linear-gradient(145deg, #0d0f20, #181b38)', border: '1.5px solid rgba(255,255,255,0.07)' }}
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
                                background: hovered ? 'linear-gradient(135deg, #2d3e91, #4338ca)' : 'transparent',
                                border: hovered ? '1.5px solid transparent' : '1.5px solid rgba(255,255,255,0.13)',
                                color: hovered ? '#fff' : '#6b7280',
                                boxShadow: hovered ? '0 8px 24px rgba(67,56,202,0.4)' : 'none',
                            }}
                            View Resume
                        </Link>
                </div>
            </div>
        </div>
        </div >
    );
};

const BComStudentDetails = () => {
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
                <div ref={headerRef} className="mb-16 text-center"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}>
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-400 transition-colors group mb-10">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
                    </Link>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #4338ca, #6366f1)' }} />
                        <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">B.Com Students</span>
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                    </div>

                    <h1 className="text-5xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
                        B.Com{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Achievers</span>
                    </h1>
                    <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto">
                        Meet the brilliant B.Com students who've excelled in academics, internships, and beyond.
                    </p>
                </div>

                {/* Section: Accounting & Taxation */}
                <div>
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">B.Com [Accounting & Taxation]</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {bcomATStudents.map((student, idx) => (
                            <StudentCard key={student.id} student={student} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Section: HR & Management */}
                <div className="mt-20">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">B.Com [Hr & Management]</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {bcomHRMStudents.map((student, idx) => (
                            <StudentCard key={student.id} student={student} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BComStudentDetails;
