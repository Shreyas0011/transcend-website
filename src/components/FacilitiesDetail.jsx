import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import classroom from '../assets/facilities/classroom.png';
import yoga from '../assets/facilities/yoga.png';
import library from '../assets/facilities/library.png';
import auditorium from '../assets/facilities/auditorium.png';
import reception from '../assets/facilities/reception.png';
import comp_lab from '../assets/facilities/comp_lab.png';
import pool from '../assets/facilities/pool.png';
import av_theatre from '../assets/facilities/av_theatre.png';
import table_tennis from '../assets/facilities/table_tennis.png';
import badminton from '../assets/facilities/badminton.png';
import canteen from '../assets/facilities/canteen.png';
import basketball from '../assets/facilities/basketball.png';

const facilities = [
    { title: 'Classroom', image: classroom, description: 'Modern learning spaces equipped with the latest educational technology.' },
    { title: 'Yoga Room', image: yoga, description: 'A peaceful sanctuary for mental and physical well-being.' },
    { title: 'Library', image: library, description: 'Extensive collection of resources to fuel academic curiosity.' },
    { title: 'Auditorium', image: auditorium, description: 'High-capacity venue for events, seminars, and performances.' },
    { title: 'Conference Room', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop', description: 'Professional setting for meetings and collaborative discussions.' },
    { title: 'Computer Lab', image: comp_lab, description: 'Advanced computing facilities for research and skill development.' },
    { title: 'Swimming Pool', image: pool, description: 'Olympic-standard pool for recreation and competitive training.' },
    { title: 'Table Tennis', image: table_tennis, description: 'Indoor sports facilities for students to unwind and compete.' },
    { title: 'Basketball Court', image: basketball, description: 'Professional-grade courts for athletic excellence.' },
    { title: 'AV Theatre Room', image: av_theatre, description: 'Dedicated space for multimedia learning and screenings.' },
    { title: 'Canteen', image: canteen, description: 'A vibrant hub for nutritious meals and social interaction.' },
    { title: 'Badminton Court', image: badminton, description: 'Well-maintained courts for indoor sports enthusiasts.' },
    { title: 'Reception', image: reception, description: 'Welcoming gateway providing support and information.' }
];

const FacilitiesDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 section-padding pt-32 px-6">
            <div className="container-standard">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-[#2d3e91] font-bold hover:gap-3 transition-all mb-4"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-3xl xs:text-4xl md:text-6xl font-black text-[#2d3e91] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our World-Class <span className="text-blue-600 block xs:inline">Facilities</span>
                        </h1>
                        <p className="mt-4 text-gray-600 max-w-2xl text-lg font-medium leading-relaxed">
                            Every corner of our institution is designed to provide an inspiring environment for holistic growth, creativity, and excellence.
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 group hover:shadow-[0_25px_60px_rgba(45,62,145,0.12)] hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Polaroid Frame */}
                            <div className="bg-white p-2 border border-gray-100 shadow-sm rounded-lg mb-6 overflow-hidden">
                                <div className="aspect-[4/3] overflow-hidden rounded-md bg-gray-50 relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        onError={(e) => {
                                            e.target.src = `https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop&text=${item.title}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e91]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-[#2d3e91] mb-3 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                {item.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                {item.description}
                            </p>

                            {/* Bottom Accent */}
                            <div className="mt-6 h-1 w-12 bg-blue-100 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacilitiesDetail;
