import React from 'react';
import { IndianRupee, Download, ArrowUpRight, Globe, TrendingUp } from 'lucide-react';
import { RevenueChart } from './RevenueChart';
import { PlatformChart } from './PlatformChart';

const PAYOUT_HISTORY = [
    { id: 'TXN-9021', date: 'Dec 01, 2025', amount: '₹1,12,400', status: 'Settled', method: 'Direct Deposit' },
    { id: 'TXN-8842', date: 'Sep 01, 2025', amount: '₹1,08,900', status: 'Settled', method: 'Direct Deposit' },
    { id: 'TXN-8710', date: 'Jun 01, 2025', amount: '₹1,24,300', status: 'Settled', method: 'Direct Deposit' },
];

export const RevenuePortal = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">

            {/* TOP ROW: TREND & PLATFORM SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div className="flex flex-col gap-8">
                    <PlatformChart />
                    {/* QUICK STAT CARD */}
                    <div className="glass p-8 rounded-[3rem] border border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent">
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Next Payout</p>
                        <h2 className="text-3xl font-black text-white tracking-tighter italic">₹1,18,240.00</h2>
                        <div className="flex items-center gap-2 mt-4 text-emerald-500 text-[10px] font-bold">
                            <ArrowUpRight size={14} />
                            <span>ESTIMATED FOR MAR 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: GEOGRAPHICS & PAYOUT LEDGER */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                {/* REGIONAL PERFORMANCE */}
                <div className="lg:col-span-2 glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-white tracking-tighter uppercase">Geo-Revenue</h3>
                            <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-1">Top Earning Regions</p>
                        </div>
                        <Globe className="text-zinc-700" size={24} />
                    </div>

                    <div className="space-y-6">
                        <RegionBar label="Kolkata, WB" percent={88} amount="₹9.2L" />
                        <RegionBar label="Dhaka, BD" percent={65} amount="₹3.1L" />
                        <RegionBar label="Mumbai, MH" percent={42} amount="₹1.4L" />
                        <RegionBar label="London, UK" percent={22} amount="₹0.5L" />
                    </div>
                </div>

                {/* PAYOUT HISTORY LEDGER */}
                <div className="lg:col-span-3 glass p-10 rounded-[3rem] border border-white/5">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">Payout History</h3>
                        <p className="text-[7px] text-zinc-600 font-black tracking-[0.5em] uppercase">Auth: D.Ojha Systems</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                            <tr className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/5">
                                <th className="pb-4 px-4">Ref ID</th>
                                <th className="pb-4 px-4">Release Date</th>
                                <th className="pb-4 px-4 text-right">Net Amount</th>
                                <th className="pb-4 px-4 text-center">Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                            {PAYOUT_HISTORY.map((payout) => (
                                <tr key={payout.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-4 font-bold text-zinc-400 group-hover:text-white">{payout.id}</td>
                                    <td className="py-5 px-4 text-zinc-500">{payout.date}</td>
                                    <td className="py-5 px-4 text-right font-black text-white">{payout.amount}</td>
                                    <td className="py-5 px-4">
                                        <div className="flex justify-center">
                                                <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black px-3 py-1 rounded-full uppercase border border-emerald-500/20">
                                                    {payout.status}
                                                </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-zinc-400 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                        <Download size={14} /> DOWNLOAD FULL TAX INVOICE (PDF)
                    </button>
                </div>

            </div>
        </div>
    );
};

// Internal Helper for Regional Bars
const RegionBar = ({ label, percent, amount }: { label: string, percent: number, amount: string }) => (
    <div className="group cursor-default">
        <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
            <span className="text-white font-bold text-xs">{amount}</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 transition-all duration-1000"
                style={{ width: `${percent}%` }}
            />
        </div>
    </div>
);