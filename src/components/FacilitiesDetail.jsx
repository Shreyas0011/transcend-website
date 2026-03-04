import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const facilities = [
    { title: 'Classroom', image: 'https://images.unsplash.com/photo-1585827367315-9968b19edb6b?auto=format&fit=crop&q=80&w=800', description: 'Modern learning spaces equipped with the latest educational technology.' },
    { title: 'Yoga Room', image: 'https://images.unsplash.com/photo-1518611012118-283d63c14dcb?auto=format&fit=crop&q=80&w=800', description: 'A peaceful sanctuary for mental and physical well-being.' },
    { title: 'Library', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', description: 'Extensive collection of resources to fuel academic curiosity.' },
    { title: 'Auditorium', image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800', description: 'High-capacity venue for events, seminars, and performances.' },
    { title: 'Conference Room', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800', description: 'Professional setting for meetings and collaborative discussions.' },
    { title: 'Computer Lab', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', description: 'Advanced computing facilities for research and skill development.' },
    { title: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800', description: 'Olympic-standard pool for recreation and competitive training.' },
    { title: 'Table Tennis', image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800', description: 'Indoor sports facilities for students to unwind and compete.' },
    { title: 'Basketball Court', image: 'https://images.unsplash.com/photo-1504450758481-7338ebe75224?auto=format&fit=crop&q=80&w=800', description: 'Professional-grade courts for athletic excellence.' },
    { title: 'AV Theatre Room', image: 'https://images.unsplash.com/photo-1489433390058-2dca2c192c45?auto=format&fit=crop&q=80&w=800', description: 'Dedicated space for multimedia learning and screenings.' },
    { title: 'Canteen', image: 'https://images.unsplash.com/photo-1555396273-cf921244267c?auto=format&fit=crop&q=80&w=800', description: 'A vibrant hub for nutritious meals and social interaction.' },
    { title: 'Badminton Court', image: 'https://images.unsplash.com/photo-1626245917822-b19f42531513?auto=format&fit=crop&q=80&w=800', description: 'Well-maintained courts for indoor sports enthusiasts.' },
    { title: 'Reception', image: 'https://images.unsplash.com/photo-1568992687396-43ac0755cc50?auto=format&fit=crop&q=80&w=800', description: 'Welcoming gateway providing support and information.' }
];

const FacilitiesDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
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
                        <h1 className="text-4xl md:text-6xl font-black text-[#2d3e91]" style={{ fontFamily: 'Georgia, serif' }}>
                            Our World-Class <span className="text-blue-600">Facilities</span>
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
