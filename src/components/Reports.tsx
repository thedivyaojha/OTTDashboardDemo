import React from 'react';
import {
    Download, Music, User, Disc, FileSpreadsheet,
    Smartphone, TrendingUp, ChevronRight,
    Filter
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts';
import { SONGS } from '../data/songs.ts';

const CRBT_DATA = [
    { name: 'Ke Jeno Dake', airtel: 45000, jio: 52000, vi: 21000 },
    { name: 'Tor Sathe', airtel: 38000, jio: 48000, vi: 18000 },
    { name: 'Tramline', airtel: 32000, jio: 41000, vi: 15000 },
    { name: 'Hey Namaji', airtel: 41000, jio: 39000, vi: 22000 },
];

export const Reports = ({ type }: { type: 'CRBT' | 'DSP' }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-10 pb-20">

            {/* HEADER SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-indigo-500"></div>
                        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase">Intelligence Suite</span>
                    </div>
                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                        {type === 'CRBT' ? 'Operator' : 'DSP'} <span className="text-zinc-700">Analytics</span>
                    </h2>
                </div>

                <div className="flex gap-3">
                    <button className="glass border border-white/5 px-6 py-4 rounded-2xl text-[10px] font-black text-zinc-400 tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
                        <Filter size={14} /> FILTERS
                    </button>
                    <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/20 active:scale-95">
                        <Download size={16} /> EXPORT {type} REPORT
                    </button>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Revenue" value="₹24.8L" growth="+12.4%" />
                <StatCard label="Active Assets" value="142" growth="Stable" />
                <StatCard label="Top Operator" value="Jio" growth="42% Share" />
                <StatCard label="Avg Payout" value="₹1.2L" growth="+2.1%" />
            </div>

            {type === 'CRBT' ? (
                /* --- CRBT VIEW --- */
                <div className="glass p-10 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Smartphone size={120} className="rotate-12 text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
                            <TrendingUp className="text-indigo-500" /> Revenue vs Operator Split
                        </h3>
                        <div className="flex gap-4 text-[9px] font-black tracking-widest">
                            <span className="flex items-center gap-1.5 text-indigo-500"><div className="w-2 h-2 rounded-full bg-indigo-500"/> JIO</span>
                            <span className="flex items-center gap-1.5 text-red-500"><div className="w-2 h-2 rounded-full bg-red-500"/> AIRTEL</span>
                            <span className="flex items-center gap-1.5 text-yellow-500"><div className="w-2 h-2 rounded-full bg-yellow-500"/> VI</span>
                        </div>
                    </div>

                    <div className="h-[450px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={CRBT_DATA} barGap={12}>
                                <CartesianGrid strokeDasharray="0 0" stroke="#ffffff03" vertical={false} />
                                <XAxis dataKey="name" stroke="#3f3f46" fontSize={10} tick={{fontWeight: '900'}} axisLine={false} tickLine={false} dy={20} />
                                <Tooltip
                                    cursor={{fill: 'rgba(255,255,255,0.03)'}}
                                    content={({ active, payload }) => {
                                        if (active && payload) return (
                                            <div className="glass border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3 border-b border-white/5 pb-2">{payload[0].payload.name}</p>
                                                {payload.map((p, i) => (
                                                    <div key={i} className="flex justify-between gap-8 py-1">
                                                        <span className="text-[9px] font-bold text-zinc-400 uppercase">{p.name}</span>
                                                        <span className="text-[10px] font-black text-white">₹{p.value?.toLocaleString()}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                        return null;
                                    }}
                                />
                                <Bar dataKey="jio" stackId="a" fill="#6366f1" barSize={40} />
                                <Bar dataKey="airtel" stackId="a" fill="#ef4444" />
                                <Bar dataKey="vi" stackId="a" fill="#eab308" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ) : (
                /* --- UPDATED DSP VIEW: SPACIOUS 2-COLUMN LAYOUT --- */
                <div className="space-y-8">
                    {/* Top Row: Trackwise (Full Width for maximum space) */}
                    <ReportBentoList
                        title="Top Track Performance"
                        icon={<Music size={24}/>}
                        data={SONGS.slice(0, 8).map(s => ({label: s.title, val: s.revenue}))}
                        color="indigo"
                        fullWidth={true}
                    />

                    {/* Bottom Row: Artists & Albums (Side by Side) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReportBentoList
                            title="Artist Revenue"
                            icon={<User size={24}/>}
                            data={[{label: 'Rupankar Bagchi', val: '₹14.2L'}, {label: 'Anupam Roy', val: '₹8.4L'}, {label: 'Iman C', val: '₹2.1L'}]}
                            color="emerald"
                        />
                        <ReportBentoList
                            title="Album Collection"
                            icon={<Disc size={24}/>}
                            data={[{label: 'Studio Vol 1', val: '₹18.4L'}, {label: 'Summer Hits', val: '₹4.1L'}]}
                            color="purple"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const StatCard = ({ label, value, growth }: any) => (
    <div className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/20 transition-all">
        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">{label}</p>
        <div className="flex items-end justify-between">
            <h4 className="text-3xl font-black text-white tracking-tighter">{value}</h4>
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-xl">{growth}</span>
        </div>
    </div>
);

const ReportBentoList = ({ title, icon, data, color, fullWidth = false }: any) => (
    <div className={`glass p-10 rounded-[4rem] border border-white/5 flex flex-col min-h-[500px] hover:border-${color}-500/20 transition-all group overflow-hidden relative`}>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-5">
                <div className={`p-4 rounded-[1.5rem] bg-${color}-500/10 text-${color}-400 shadow-inner`}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-black text-2xl uppercase tracking-tighter text-white italic">{title}</h4>
                    <p className="text-[10px] font-black text-zinc-500 tracking-widest uppercase mt-1">Net Earnings Breakdown</p>
                </div>
            </div>
            <button className="p-3 bg-white/5 rounded-2xl text-zinc-500 hover:text-white transition-colors">
                <FileSpreadsheet size={20}/>
            </button>
        </div>

        {/* Data List Section */}
        <div className={`grid ${fullWidth ? 'grid-cols-1 md:grid-cols-2 gap-x-12' : 'grid-cols-1'} gap-y-4`}>
            {data.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group/item cursor-pointer">
                    <div className="flex items-center gap-5">
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-xs font-black text-zinc-600 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/30 transition-all">
                            {i < 9 ? `0${i + 1}` : i + 1}
                        </div>
                        <span className="text-white text-lg font-bold tracking-tight truncate w-48 group-hover/item:translate-x-1 transition-transform">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className={`text-xl font-black italic ${i === 0 ? 'text-indigo-400' : 'text-white'}`}>
                            {item.val}
                        </span>
                        <ChevronRight size={18} className="text-zinc-800 group-hover/item:text-white transition-colors" />
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Action */}
        <button className="mt-10 w-full py-5 bg-white/5 rounded-[1.5rem] text-[10px] font-black text-zinc-500 tracking-[0.3em] hover:bg-white hover:text-black transition-all uppercase italic">
            Download Comprehensive {title} Data
        </button>
    </div>
);

// import React from 'react';
// import { Download, Music, User, Disc, Smartphone, FileSpreadsheet } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import { SONGS } from '../data/songs.ts';
//
// const CRBT_DATA = [
//     { name: 'Ke Jeno Dake', airtel: 45000, jio: 52000, vi: 21000 },
//     { name: 'Tor Sathe', airtel: 38000, jio: 48000, vi: 18000 },
//     { name: 'Tramline', airtel: 32000, jio: 41000, vi: 15000 },
// ];
//
// export const Reports = ({ type }: { type: 'CRBT' | 'DSP' }) => {
//     return (
//         <div className="animate-in slide-in-from-bottom-6 duration-700 space-y-10">
//             <div className="flex justify-between items-end px-4">
//                 <div>
//                     <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
//                         {type === 'CRBT' ? 'Caller Tune Reports' : 'DSP Revenue Reports'}
//                     </h2>
//                     <p className="text-zinc-500 text-xs font-black tracking-[0.3em] uppercase mt-2">
//                         {type === 'CRBT' ? 'Operator-wise VAS Analytics' : 'Digital Service Provider Breakdown'}
//                     </p>
//                 </div>
//                 <button className="bg-white text-black px-6 py-3 rounded-2xl font-black text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all">
//                     <Download size={16} /> DOWNLOAD {type} SUMMARY
//                 </button>
//             </div>
//
//             {type === 'CRBT' ? (
//                 /* CRBT SECTION */
//                 <div className="glass p-10 rounded-[3rem] border border-white/5 h-[600px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <BarChart data={CRBT_DATA}>
//                             <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
//                             <XAxis dataKey="name" stroke="#52525b" fontSize={10} tick={{fontWeight: 'bold'}} />
//                             <Tooltip contentStyle={{ backgroundColor: '#09090b', borderRadius: '16px' }} />
//                             <Legend />
//                             <Bar dataKey="jio" stackId="a" fill="#6366f1" name="Reliance Jio" />
//                             <Bar dataKey="airtel" stackId="a" fill="#ef4444" name="Airtel" />
//                             <Bar dataKey="vi" stackId="a" fill="#eab308" name="VI (Vodafone Idea)" />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             ) : (
//                 /* DSP SECTION */
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     <ReportList title="Trackwise Revenue" icon={<Music size={18}/>} data={SONGS.map(s => ({label: s.title, val: s.revenue}))} />
//                     <ReportList title="Artistwise Revenue" icon={<User size={18}/>} data={[{label: 'Primary Artist', val: '₹14.2L'}, {label: 'Featured', val: '₹2.1L'}]} />
//                     <ReportList title="Albumwise Revenue" icon={<Disc size={18}/>} data={[{label: 'Studio Album Vol 1', val: '₹8.4L'}, {label: 'Singles 2024', val: '₹5.1L'}]} />
//                 </div>
//             )}
//         </div>
//     );
// };
//
// const ReportList = ({ title, icon, data }: any) => (
//     <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-full">
//         <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3 text-white">
//                 {icon}
//                 <h4 className="font-black text-sm uppercase tracking-tighter">{title}</h4>
//             </div>
//             <button className="text-zinc-600 hover:text-white transition-colors"><FileSpreadsheet size={18}/></button>
//         </div>
//         <div className="space-y-4 flex-grow">
//             {data.map((item: any, i: number) => (
//                 <div key={i} className="flex justify-between items-center p-4 bg-white/[0.02] rounded-2xl border border-white/5">
//                     <span className="text-zinc-400 text-xs font-bold truncate w-2/3">{item.label}</span>
//                     <span className="text-white font-black text-xs">{item.val}</span>
//                 </div>
//             ))}
//         </div>
//         <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-zinc-500 uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//             Export {title.split(' ')[0]}
//         </button>
//     </div>
// );