import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Leadership & Faculty Photos (New Grid)
const CA_Underlined = () => (
    <span>CA</span>
);

const BDS_Underlined = () => (
    <span>BDS</span>
);


import prasanna_final from '../assets/faculty/prasanna.png';
import ravikiran_new from '../assets/faculty/ravikiran_new.png';
import shashikala_final from '../assets/faculty/shashikala_final.jpg';
import akshay_final from '../assets/faculty/akshay_final.jpg';
import anusha_final from '../assets/faculty/anusha_final.jpg';
import swathi_final from '../assets/faculty/swathi_final.jpg';
import agnel_final from '../assets/faculty/agnel_final.png';
import soumya_final from '../assets/faculty/soumya_final.png';
import saikumar_final from '../assets/faculty/saikumar_final.png';
import deepa_v_final from '../assets/faculty/deepa_v_final.png';
import deepa_d_final from '../assets/faculty/deepa_d_final.jpg';
import dikshitha_final from '../assets/faculty/dikshitha_final.png';
import pradeep_final from '../assets/faculty/pradeep_final.png';
import dakshayini_final from '../assets/faculty/dakshayini_final.png';
import sampath_final from '../assets/faculty/sampath_final.png';
import bharath_final from '../assets/faculty/bharath_enhanced.png';
import shravan_final from '../assets/faculty/shravan_final.jpg';
import vani_final from '../assets/faculty/vani_final.png';

const faculty = [
    { id: 0, name: 'CA. PRASANNA KUMAR K', designation: 'Director - Operations', department: 'Leadership', qualification: 'B.Com, (M.Com), CA', expertise: 'Strategic Operations · Financial Management · Institutional Growth', photo: prasanna_final, scale: 1, objectPosition: 'center top' },
    { id: 1, name: 'Prof. RAVI KIRAN T N', designation: 'Principal TDC', department: 'Leadership', qualification: 'B.Com, LLB, MBA, (PhD)', expertise: 'Author of 7 Books in Commerce & Management · BOS & BOE Member (Bangalore University) · Vidwath (Vocal & Veena)', photo: ravikiran_new, scale: 1, objectPosition: 'center 15%' },
    { id: 2, name: 'Dr. Shashikala Rao KR', designation: 'Principal TECC', department: 'Languages', qualification: 'M.A (Hindi), B.Ed, Ph.D', expertise: 'Author of 15 Books in Hindi · Translator (Articles to Hindi) · BOS Member (Bangalore University) · BOE Member (Bangalore University)', photo: shashikala_final, scale: 1, objectPosition: 'center top' },
    { id: 3, name: 'AKSHAY KUMAR KULKARNI', designation: 'Coordinator TDC', department: 'Leadership', qualification: 'M.A (English), B.Ed', expertise: 'NCC Cadet (Republic Day March) · Sharp Shooter', photo: akshay_final, scale: 1, objectPosition: 'center top' },
    { id: 4, name: 'Anusha Balaji', designation: 'HOD Department of Management Studies', department: 'Management', qualification: 'B.Com, MBA Finance, ICWAI', expertise: 'Completed ICWAI · Anna University 11th Rank (MBA) · PhD in Management Studies (Pursuing, Christ University)', photo: anusha_final, scale: 1, objectPosition: 'center top' },
    { id: 5, name: 'Swathi K Iyer', designation: 'HOD Department of Commerce', department: 'Commerce', qualification: 'Univ 2nd Rank (Grad & PG), State 1st Rank (Diploma)', expertise: 'University 2nd Rank Holder · State 1st Rank (Commercial Practice) · Bharat Natyam Vidhwat 2nd Rank · BOE Member (MLACW & BMSCW)', photo: swathi_final, scale: 1, objectPosition: 'center top' },



    { id: 6, name: 'AGNEL TRIVIKRAM G', designation: 'Co-ordinator - East Campus', department: 'Leadership', qualification: 'B.Com, PGDCA', expertise: 'Campus Operations · Digital Systems', photo: agnel_final, scale: 1, objectPosition: 'center top' },
    { id: 7, name: 'Soumya D', designation: 'Faculty Kannada', department: 'Languages', qualification: 'M.A (Kannada), Ph.D (Pursuing)', expertise: 'Author · Translator · BOS Member (BU) · BOE Member (RNS)', photo: soumya_final, scale: 1, objectPosition: 'center top' },
    { id: 8, name: 'Shobha Girish', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'M.Com', expertise: 'Highest Scorer M.Com (MGU) · 23+ Years Exp · Social Service', photo: null },
    { id: 9, name: 'Madhuri Ajay', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'M.B.A – Finance', expertise: 'Financial Management · Banking · Investment', photo: null },
    { id: 10, name: 'Saikumar Velu C R', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'BA, PGDSM', expertise: 'Microsoft Certified Professional (Excel) · Pursuing Linux Cert', photo: saikumar_final, scale: 1, objectPosition: 'center top' },
    { id: 11, name: 'Deepa Venkatesh', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: 'B.Com, M.Com', expertise: '28 Years Exp · NSS Volunteer (NIC 2000 Karnataka)', photo: deepa_v_final, scale: 1, objectPosition: 'center top' },
    { id: 12, name: 'Deepa Dinakar', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'Certificate Course in Counselling Skills for Teachers', photo: deepa_d_final, scale: 1, objectPosition: 'center 15%' },
    { id: 13, name: 'Pradeep Hegde', designation: 'Faculty Kannada', department: 'Languages', qualification: '', expertise: '1st Prize Veda Exam 2024 · Best All-rounder State Level Kabaddi', photo: pradeep_final, scale: 1, objectPosition: 'center 10%' },
    { id: 14, name: 'Dikshitha', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'Advanced Excel · 4+ Years Exp · 5+ Papers Published', photo: dikshitha_final, scale: 1, objectPosition: 'center top' },
    { id: 15, name: 'Dakshayini', designation: 'Faculty of Commerce and Management', department: 'Commerce', qualification: '', expertise: 'DTP (Desktop Publishing) Training Program Topper', photo: dakshayini_final, scale: 1, objectPosition: 'center top' },
    { id: 16, name: 'A P Sampath Kumar', designation: 'Physical Education Trainer', department: 'Sports', qualification: 'B.A, B.P.Ed, M.P.Ed', expertise: 'Physical Training · Sports · Fitness', photo: sampath_final, scale: 1, objectPosition: 'center top' },
    { id: 17, name: 'BHARATH S', designation: 'Faculty', department: 'TBD', qualification: 'TBD', expertise: 'TBD', photo: bharath_final, scale: 1, objectPosition: 'center 10%' },
    { id: 18, name: 'Vani S Rao', designation: 'Admin Executive', department: 'Administration', qualification: 'B.Com, ICWAI (Inter)', expertise: 'Administration · Office Management · Accounts', photo: vani_final, scale: 1, objectPosition: 'center top' },
    { id: 19, name: 'Shravana Kumar', designation: 'Admin Executive', department: 'Administration', qualification: 'B.Com', expertise: 'Administration · Operations · Coordination', photo: shravan_final, scale: 1, objectPosition: 'center top' },
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
                <div className="w-full overflow-hidden mb-5 relative mx-auto"
                    style={{ aspectRatio: '1/1', width: '75%', borderRadius: '24px', background: 'rgba(20,22,45,0.9)' }}>
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            loading="lazy"
                            style={{
                                transform: `scale(${member.scale || 1})`,
                                transformOrigin: 'center center',
                                objectPosition: member.objectPosition || 'center center',
                                imageRendering: 'auto',
                            }}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-indigo-500/10">
                            <svg className="w-12 h-12 text-indigo-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    )}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(12,14,30,0.5) 100%)' }} />
                    {/* Department tag */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg"
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
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const duration = 2500;
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOutCubic (matching Stats.jsx)
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(num);
        };
        requestAnimationFrame(animate);
    }, [started, num]);

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
        { value: '19', label: 'Teaching Faculty' },
        { value: '2+', label: 'Ph.D. Holders' },
        { value: '100%', label: 'Industry Experienced' },
        { value: '10+', label: 'Years of Excellence' },
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

                {/* Statistics Bar */}
                <StatsBar visible={headerVisible} />

                {/* Section: Teaching Faculty */}
                <div className="mb-20">
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
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
