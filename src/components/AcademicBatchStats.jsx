import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiAward, FiCheckCircle, FiTrendingUp, FiExternalLink } from 'react-icons/fi';

const batchData = [
    {
        year: '2019-2022',
        appeared: 43,
        cleared: 43,
        results: [
            { name: 'Outstanding', value: 24, color: '#4338ca' }, // Indigo-700
            { name: 'Distinction', value: 11, color: '#6366f1' }, // Indigo-500
            { name: 'First Class', value: 8, color: '#818cf8' },  // Indigo-400
        ],
        professional: [
            { name: 'CA', students: 12, icon: '💼' },
            { name: 'CMA', students: 5, icon: '📈' },
        ],
    },
    {
        year: '2020-2023',
        appeared: 61,
        cleared: 61,
        results: [
            { name: 'Outstanding', value: 24, color: '#4338ca' },
            { name: 'Distinction', value: 26, color: '#6366f1' },
            { name: 'First Class', value: 11, color: '#818cf8' },
        ],
        professional: [
            { name: 'CA', students: 14, icon: '💼' },
            { name: 'CMA', students: 7, icon: '📈' },
        ],
    },
    {
        year: '2021-2024',
        appeared: 82,
        cleared: 82,
        results: [
            { name: 'Outstanding', value: 31, color: '#4338ca' },
            { name: 'Distinction', value: 36, color: '#6366f1' },
            { name: 'First Class', value: 15, color: '#818cf8' },
        ],
        professional: [
            { name: 'CA', students: 15, icon: '💼' },
            { name: 'CMA', students: 6, icon: '📈' },
        ],
    },
    {
        year: '2022-2025',
        appeared: 127,
        cleared: 120,
        results: [
            { name: 'Outstanding', value: 32, color: '#4338ca' },
            { name: 'Distinction', value: 61, color: '#6366f1' },
            { name: 'First Class', value: 34, color: '#818cf8' },
        ],
        professional: [
            { name: 'CA', students: 15, icon: '💼' },
            { name: 'CMA', students: 10, icon: '📈' },
        ],
    },
];

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <div className="bg-white/80 backdrop-blur-md border border-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
                <h4 className="text-3xl font-black text-slate-800">{value}</h4>
                {subtext && <p className="text-indigo-600 text-xs font-bold mt-1 uppercase tracking-wider">{subtext}</p>}
            </div>
            <div className={`p-3 rounded-xl ${colorClass}`}>
                <Icon size={20} />
            </div>
        </div>
    </div>
);

const AcademicBatchStats = () => {
    const [activeTab, setActiveTab] = useState(batchData.length - 1);
    const data = batchData[activeTab];

    const passPercentage = ((data.cleared / data.appeared) * 100).toFixed(1);

    return (
        <div className="mt-20 py-16 px-4 bg-gradient-to-br from-indigo-50/50 to-white rounded-[32px] border border-indigo-100/50 relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 border border-indigo-200/50 mb-4">
                        <FiTrendingUp className="text-indigo-600" />
                        <span className="text-indigo-700 text-xs font-bold uppercase tracking-widest">Academic Excellence</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Batch Performance <span className="text-indigo-600">Results</span></h3>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Consistent track record of academic success and professional certifications in B.Com Final Year studies.
                    </p>
                </div>

                {/* Batch Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {batchData.map((batch, index) => (
                        <button
                            key={batch.year}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                                activeTab === index
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                                    : 'bg-white text-gray-500 hover:bg-indigo-50 border border-indigo-50'
                            }`}
                        >
                            {batch.year}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                    >
                        {/* Summary Column */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            <StatCard
                                title="Students Appeared"
                                value={data.appeared}
                                icon={FiUsers}
                                colorClass="bg-blue-50 text-blue-600"
                            />
                            <StatCard
                                title="Students Cleared"
                                value={data.cleared}
                                subtext={`${passPercentage}% Pass Rate`}
                                icon={FiCheckCircle}
                                colorClass="bg-emerald-50 text-emerald-600"
                            />
                            <div className="mt-4 p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <FiAward size={80} />
                                </div>
                                <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">Professional Certifications</h5>
                                <div className="flex gap-8">
                                    {data.professional.map(pro => (
                                        <div key={pro.name}>
                                            <div className="text-2xl mb-1">{pro.icon}</div>
                                            <div className="text-xl font-black">{pro.students}</div>
                                            <div className="text-gray-400 text-xs font-bold uppercase">{pro.name} Cleared</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Chart Column */}
                        <div className="lg:col-span-8 bg-white/60 backdrop-blur-sm border border-white p-8 rounded-[32px] shadow-sm flex flex-col items-center">
                            <h5 className="text-center text-slate-800 font-bold mb-8 flex items-center gap-2">
                                Result Distribution (Batch {data.year})
                            </h5>
                            <div className="w-full h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data.results}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={100}
                                            paddingAngle={8}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {data.results.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: '16px',
                                                border: 'none',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                fontWeight: 'bold',
                                                fontSize: '14px'
                                            }}
                                        />
                                        <Legend verticalAlign="bottom" height={36}/>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                {data.results.map((res, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: res.color }} />
                                        <div>
                                            <div className="text-xs text-gray-500 font-bold uppercase tracking-tight">{res.name}</div>
                                            <div className="text-lg font-black text-slate-800">{res.value} Students</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Footer Insight */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm font-medium italic">
                        * Distribution reflects B.Com Final Year academic metrics as of {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AcademicBatchStats;
