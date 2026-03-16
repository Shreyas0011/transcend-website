import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import prasanna from '../assets/leadership/prasanna.png';
import ravikiran from '../assets/leadership/ravikiran.png';
import akshay_leader from '../assets/leadership/akshay.png';
import agnel from '../assets/leadership/agnel.png';

// Faculty Batch 1
import kiran_kumar from '../assets/faculty/kiran_kumar.png';
import reddy_shekar from '../assets/faculty/reddy_shekar.png';
import varsha_v from '../assets/faculty/varsha_v.png';
import pratyush from '../assets/faculty/pratyush.png';
import shashikala from '../assets/faculty/shashikala.png';
import anusha from '../assets/faculty/anusha.png';
import shivarama from '../assets/faculty/shivarama.png';
import soumya from '../assets/faculty/soumya.png';
import amrutha from '../assets/faculty/amrutha.png';
import apoorva from '../assets/faculty/apoorva.png';
import madhuri from '../assets/faculty/madhuri.png';
import swathi_k_iyer from '../assets/faculty/swathi_k_iyer.png';
import deepa_dinakar from '../assets/faculty/deepa_dinakar.png';
import pradeep_hegade from '../assets/faculty/pradeep_hegade.png';
import dikshitha_h from '../assets/faculty/dikshitha_h.png';
import dakshayini from '../assets/faculty/dakshayini.png';
import bharath_s from '../assets/faculty/bharath_s.png';
import saikumar_velu from '../assets/faculty/saikumar_velu.png';
import deepa_venkatesh from '../assets/faculty/deepa_venkatesh.png';
import shobha_girish from '../assets/faculty/shobha_girish.png';

const leadershipTeam = [
    { id: 1, name: 'CA. PRASANNA KUMAR K', designation: 'Director - Operations', department: 'Leadership', qualification: 'B.Com, (M.Com), CA', expertise: 'Strategic Operations · Finance · Management', photo: prasanna },
    { id: 2, name: 'Prof. RAVI KIRAN T N', designation: 'Principal TDC & HOD Languages', department: 'Leadership', qualification: 'B.Com, LLB, MBA, (PhD)', expertise: 'Author of 7 Books · BOS & BOE Member (BU) · Vidwath (Vocal/Veena)', photo: ravikiran },
    { id: 3, name: 'AKSHAY KUMAR KULKARNI', designation: 'Coordinator TDC', department: 'Leadership', qualification: 'M.A (English), B.Ed', expertise: 'Republic Day March (NCC) · Sharp Shooter', photo: akshay_leader },
    { id: 4, name: 'AGNEL TRIVIKRAM G', designation: 'Co-ordinator - East Campus', department: 'Leadership', qualification: 'B.Com, PGDCA', expertise: 'Campus Operations · Digital Systems', photo: agnel },
];

const faculty = [
    { id: 1, name: 'CA. Kiran Kumar', designation: 'Faculty', department: 'Accounts & Finance', qualification: 'M.Com, C.A', expertise: 'Financial Accounting · Taxation · Auditing', photo: kiran_kumar },
    { id: 2, name: 'CA. Reddy Shekar P', designation: 'Faculty', department: 'Accounts & Finance', qualification: 'B.Com, C.A', expertise: 'Corporate Accounting · Direct Tax · GST', photo: reddy_shekar },
    { id: 3, name: 'CA. Varsha V', designation: 'Faculty', department: 'Accounts & Finance', qualification: 'B.Com, CA, CWA', expertise: 'Cost Accounting · Financial Reporting · CWA', photo: varsha_v },
    { id: 4, name: 'CA. Pratyush Bhagwani', designation: 'Faculty', department: 'Accounts & Finance', qualification: 'B.Com, C.A', expertise: 'Taxation · Auditing · Financial Analysis', photo: pratyush },
    { id: 5, name: 'Dr. Shashikala Rao KR', designation: 'Principal TECC & HOD Languages', department: 'Languages', qualification: 'M.A (Hindi), B.Ed, Ph.D', expertise: 'Author of 15 Books (Hindi) · Translator · BOS & BOE Member (BU)', photo: shashikala },
    { id: 6, name: 'Anusha Balaji', designation: 'HOD Department of Management Studies', department: 'Management', qualification: 'B.Com, MBA Finance, ICWA', expertise: 'ICWAI · Anna University 11th Rank (MBA) · PhD (Pursuing, Christ Univ)', photo: anusha },
    { id: 7, name: 'Shivarama Guptha B', designation: 'Faculty', department: 'Humanities', qualification: 'M.A (Vedanta), B.Ed', expertise: 'Philosophy · Value Education · Soft Skills', photo: shivarama },
    { id: 8, name: 'Soumya D', designation: 'Faculty Kannada', department: 'Languages', qualification: 'M.A (Kannada), Ph.D (Pursuing)', expertise: 'Author · Translator · BOS Member (BU) · BOE Member (RNS)', photo: soumya },
    { id: 9, name: 'Amrutha S', designation: 'Faculty', department: 'Languages', qualification: 'M.A (Kannada), B.Ed', expertise: 'Kannada Language · Communication · Education', photo: amrutha },
    { id: 10, name: 'Apoorva A Jain', designation: 'Faculty', department: 'Commerce', qualification: 'M.Com', expertise: 'Commerce · Business Studies · Entrepreneurship', photo: apoorva },
    { id: 11, name: 'Madhuri Ajay', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'M.B.A – Finance', expertise: 'Financial Management · Banking · Investment', photo: madhuri },
    { id: 12, name: 'Shobha Girish', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'M.Com', expertise: 'Highest Scorer M.Com (MGU) · 23+ Years Exp · Social Service', photo: shobha_girish },
    { id: 13, name: 'Saikumar Velu C R', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'BA, PGDSM', expertise: 'Microsoft Certified Professional (Excel) · Pursuing Linux Cert', photo: saikumar_velu },
    { id: 14, name: 'Ms. Shreenidhi', designation: 'Faculty', department: 'Commerce', qualification: 'B.Com, M.Com, K.SET', expertise: 'Commerce · SET Qualified · Financial Accounting', photo: 'https://i.pravatar.cc/300?img=46' },
    { id: 15, name: 'Akshay Champak', designation: 'Faculty', department: 'Commerce', qualification: 'B.Com, M.Com', expertise: 'Commerce · Business Economics · Statistics', photo: 'https://i.pravatar.cc/300?img=22' },
    { id: 16, name: 'Mr. Subramanian V Iyer', designation: 'Faculty', department: 'Management', qualification: 'B.Com, MBA', expertise: 'Business Management · Strategy · Marketing', photo: 'https://i.pravatar.cc/300?img=25' },
    { id: 17, name: 'Deepa Venkatesh', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'B.Com, M.Com', expertise: '28 Years Exp · NSS Volunteer (NIC 2000 Karnataka)', photo: deepa_venkatesh },
    { id: 18, name: 'Mukunda K M', designation: 'Faculty', department: 'Languages', qualification: 'B.A, M.A, Sanskritam', expertise: 'Sanskrit · Classical Languages · Literature', photo: 'https://i.pravatar.cc/300?img=27' },
    { id: 19, name: 'Swathi K Iyer', designation: 'HOD Department of Commerce', department: 'Commerce', qualification: 'Univ 2nd Rank, State 1st Rank', expertise: 'Commercial Practice · Bharat Natyam Vidhwat 2nd Rank · BOE Member', photo: swathi_k_iyer },
    { id: 20, name: 'Deepa Dinakar', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'Certificate Course in Counselling Skills for Teachers', photo: deepa_dinakar },
    { id: 21, name: 'Pradeep Hegade', designation: 'Faculty Kannada', department: 'Languages', qualification: '', expertise: '1st Prize Veda Exam 2024 · Best All-rounder State Level Kabaddi', photo: pradeep_hegade },
    { id: 22, name: 'Dikshitha H', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'Advanced Excel · 4+ Years Exp · 5+ Papers Published', photo: dikshitha_h },
    { id: 23, name: 'Dakshayini', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'DTP (Desktop Publishing) Training Program Topper', photo: dakshayini },
    { id: 24, name: 'BHARATH S', designation: 'Faculty', department: 'TBD', qualification: 'TBD', expertise: 'TBD', photo: bharath_s },
];

const resourcePersonnel = [
    { id: 1, name: 'Vani S R Rao', designation: 'Admin Executive', department: 'Administration', qualification: 'B.Com, ICWAI (Inter)', expertise: 'Administration · Office Management · Accounts', photo: 'https://i.pravatar.cc/300?img=45' },
    { id: 2, name: 'Bharathi Srikanth', designation: 'Admin Executive', department: 'Administration', qualification: 'Bachelors in HR', expertise: 'HR Administration · Office Coordination', photo: 'https://i.pravatar.cc/300?img=48' },
    { id: 3, name: 'Shravana Kumar', designation: 'Admin Executive', department: 'Administration', qualification: 'B.Com', expertise: 'Administration · Operations · Coordination', photo: 'https://i.pravatar.cc/300?img=8' },
    { id: 4, name: 'A P Sampath Kumar', designation: 'Physical Education Trainer', department: 'Sports', qualification: 'B.A, B.P.Ed, M.P.Ed', expertise: 'Physical Training · Sports · Fitness', photo: 'https://i.pravatar.cc/300?img=3' },
    { id: 5, name: 'Reshma Belagaje', designation: 'HR & PR Co-ordinator', department: 'HR & PR', qualification: '', expertise: 'Human Resources · Public Relations · Coordination', photo: 'https://i.pravatar.cc/300?img=53' },
    { id: 6, name: 'Padma Latha Paluri', designation: 'Senior Accountant', department: 'Accounts', qualification: 'M.Com', expertise: 'Accounting · Finance · Reporting', photo: 'https://i.pravatar.cc/300?img=62' },
    { id: 7, name: 'Prasad K', designation: 'Facility Head', department: 'Facilities', qualification: '', expertise: 'Facility Management · Operations · Infrastructure', photo: 'https://i.pravatar.cc/300?img=13' },
    { id: 8, name: 'Roopa Kambam', designation: 'Admission Counsellor', department: 'Admissions', qualification: 'B.Com', expertise: 'Admissions · Student Counselling · Outreach', photo: 'https://i.pravatar.cc/300?img=60' },
    { id: 9, name: 'Jessy Mathew', designation: 'Stores In-charge', department: 'Stores', qualification: 'B.Com', expertise: 'Inventory Management · Procurement · Stores', photo: 'https://i.pravatar.cc/300?img=64' },
    { id: 10, name: 'Padmaja Ravi', designation: 'Admin Executive', department: 'Administration', qualification: '', expertise: 'Administration · Records Management', photo: 'https://i.pravatar.cc/300?img=54' },
    { id: 11, name: 'Pankaj R Matta', designation: 'Data & Technology Head', department: 'Technology', qualification: '', expertise: 'Data Management · Technology · Digital Systems', photo: 'https://i.pravatar.cc/300?img=28' },
    { id: 12, name: 'Niranjan D G', designation: 'Facility Executive', department: 'Facilities', qualification: '', expertise: 'Facility Operations · Maintenance · Support', photo: 'https://i.pravatar.cc/300?img=30' },
];

const FacultyCard = ({ member, index }) => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.12 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const chips = member.expertise.split('·').map(s => s.trim()).filter(Boolean);

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s`,
            }}
            className="flex flex-col rounded-[22px] overflow-hidden"
        >
            <div
                className="flex flex-col h-full rounded-[22px] p-4 transition-all duration-300"
                style={{
                    background: hovered
                        ? 'linear-gradient(160deg, rgba(45,62,145,0.18) 0%, rgba(15,17,40,0.97) 100%)'
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
                <div className="w-full overflow-hidden mb-5 relative mx-auto"
                    style={{ aspectRatio: '1/1', width: '75%', borderRadius: '50%', background: 'rgba(20,22,45,0.9)' }}>
                    <img
                        src={member.photo}
                        alt={member.name}
                        style={{ transform: 'scale(1.33)', transformOrigin: 'center center' }}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(12,14,30,0.5) 100%)' }} />
                    {/* Department tag */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                        style={{ background: 'rgba(99,102,241,0.85)', color: '#e0e7ff', backdropFilter: 'blur(8px)' }}>
                        {member.department}
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col px-1">
                    <p className="text-base font-black text-white mb-0.5 leading-tight">{member.name}</p>
                    <p className="text-indigo-400 text-xs font-bold tracking-wide uppercase mb-1">{member.designation}</p>
                    <p className="text-gray-600 text-xs mb-4">{member.qualification}</p>

                    {/* Expertise chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {chips.map((chip, i) => (
                            <span key={i}
                                className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-gray-400 transition-colors duration-300"
                                style={{
                                    background: hovered ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(99,102,241,0.15)',
                                    color: hovered ? '#c7d2fe' : '#6b7280',
                                }}>
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Parses "18", "4", "2+", "100%" → { num: 18, suffix: '' } etc.
const parseValue = (val) => {
    const match = String(val).match(/^(\d+)(.*)$/);
    return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: val };
};

const AnimatedStat = ({ value, label, delay }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const { num, suffix } = parseValue(value);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const duration = 1400;
        const startTime = performance.now() + delay;
        let raf;
        const tick = (now) => {
            if (now < startTime) { raf = requestAnimationFrame(tick); return; }
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(ease * num));
            if (progress < 1) raf = requestAnimationFrame(tick);
            else setCount(num);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [started, num, delay]);

    return (
        <div ref={ref} className="text-center py-6 rounded-2xl"
            style={{ background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.08)' }}>
            <p className="text-4xl md:text-5xl font-black mb-1.5"
                style={{ background: 'linear-gradient(135deg,#818cf8,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {count}{suffix}
            </p>
            <p className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase">{label}</p>
        </div>
    );
};

const StatsBar = ({ visible }) => {
    const stats = [
        { value: '18', label: 'Teaching Faculty' },
        { value: '4', label: 'Chartered Accountants' },
        { value: '2+', label: 'Ph.D. Holders' },
        { value: '100%', label: 'Industry Experienced' },
    ];
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.3s' }}>
            {stats.map(({ value, label }, i) => (
                <AnimatedStat key={label} value={value} label={label} delay={i * 120} />
            ))}
        </div>
    );
};

const OurTeam = () => {
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
        <div className="min-h-screen text-white section-padding relative overflow-hidden"
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

            <div className="container-standard relative z-10">
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
                        <span className="text-indigo-400 text-xs tracking-[0.3em] font-bold uppercase">Faculty & Staff</span>
                        <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #4338ca)' }} />
                    </div>

                    <h1 className="text-5xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
                        Our{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Team</span>
                    </h1>
                    <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto">
                        Meet the dedicated educators and mentors who shape the future at Transcend Group of Institutions.
                    </p>
                </div>

                {/* Stats bar — animated counters */}
                <StatsBar visible={headerVisible} />

                {/* Section: Leadership Team */}
                <div className="mb-20">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">Leadership Team</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {leadershipTeam.map((member, idx) => (
                            <FacultyCard key={member.id} member={member} index={idx} />
                        ))}
                    </div>

                    {/* Message to Students */}
                    <div className="max-w-4xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative p-10 rounded-[2.5rem] overflow-hidden group">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e91]/10 to-transparent opacity-50" />
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

                            {/* Quote icon */}
                            <div className="absolute top-8 left-8 text-indigo-500/20 select-none pointer-events-none">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H17.017L17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67386 18 8.017 18H6.017L6.017 21H3.017Z" />
                                </svg>
                            </div>

                            <div className="relative z-10 text-center px-4">
                                <h3 className="text-xs font-black tracking-[0.4em] uppercase text-indigo-400 mb-8 px-6 py-2 rounded-full border border-indigo-500/20 inline-block bg-indigo-500/5">
                                    Message to Students
                                </h3>

                                <blockquote className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed italic max-w-3xl mx-auto">
                                    "Education is the key to unlocking your potential and achieving your goals. However, education is not just about academic excellence. It is also about developing a well-rounded personality and being an individual who is socially responsible, empathetic, and companionate."
                                </blockquote>

                                <div className="mt-8 pt-8 border-t border-indigo-500/10 flex flex-col items-center">
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                                        At <span className="text-indigo-400 font-bold">TRANSCEND</span>, we are committed to creating a safe and inclusive environment where you can thrive. We encourage you to participate in extra curricular activities, volunteer in your community and develop your leadership skills. We believe in you, and we are proud to be a part of your journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section divider */}
                <div className="flex items-center gap-5 mb-10">
                    <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                    <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">Teaching Faculty</span>
                    <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                </div>

                {/* Faculty grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {faculty.map((member, idx) => (
                        <FacultyCard key={member.id} member={member} index={idx} />
                    ))}
                </div>

                {/* Section: Resource Personnel */}
                <div className="mt-20">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.4), transparent)' }} />
                        <span className="text-indigo-400 text-base tracking-[0.2em] font-bold uppercase whitespace-nowrap">Resource Personnel</span>
                        <div className="h-[1.5px] flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4))' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {resourcePersonnel.map((member, idx) => (
                            <FacultyCard key={member.id} member={member} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
