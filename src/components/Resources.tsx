import React from 'react';
import { FileText, Download, Search, Filter, ShieldCheck, FileType } from 'lucide-react';

const RESOURCES_DATA = [
    { id: 1, title: "Industry Meet 2025 Invite", type: "PDF", size: "2.4 MB", date: "Dec 20, 2025", category: "Events" },
    { id: 2, title: "Global Licensing Policy v4", type: "PDF", size: "1.2 MB", date: "Dec 22, 2025", category: "Legal" },
    { id: 3, title: "International Tour Guidelines", type: "PDF", size: "3.1 MB", date: "Dec 24, 2025", category: "Distribution" },
    { id: 4, title: "Revenue Sharing Annexure", type: "DOCX", size: "850 KB", date: "Dec 28, 2025", category: "Finance" },
];

export const Resources = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-10 pb-20">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 px-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-indigo-500"></div>
                        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase">Artist Knowledge Base</span>
                    </div>
                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                        Resource <span className="text-zinc-700">Vault</span>
                    </h2>
                </div>

                <div className="flex gap-4 w-full lg:w-auto">
                    <div className="glass flex items-center px-6 py-4 rounded-2xl border border-white/5 focus-within:border-indigo-500 flex-1 lg:w-64">
                        <Search size={16} className="text-zinc-500 mr-3" />
                        <input placeholder="Search documents..." className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-full text-white placeholder:text-zinc-700" />
                    </div>
                </div>
            </div>

            {/* Featured Notice */}
            <div className="glass p-8 rounded-[3rem] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 to-transparent flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-600/20 shrink-0">
                    <ShieldCheck size={32} className="text-white" />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-tighter text-lg italic">Compliance & Security</h4>
                    <p className="text-zinc-500 text-xs font-medium max-w-2xl leading-relaxed">
                        All documents in this vault are proprietary to OTT Solutions. Distribution of these assets without prior written consent is strictly prohibited under the 2025 Global Licensing Agreement.
                    </p>
                </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {RESOURCES_DATA.map((file) => (
                    <div key={file.id} className="glass p-8 rounded-[3rem] border border-white/5 group hover:border-indigo-500/40 transition-all duration-500 flex flex-col justify-between h-[320px] relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-colors" />

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                                    <FileType size={28} />
                                </div>
                                <span className="text-[8px] font-black px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-400 uppercase tracking-widest group-hover:border-indigo-500/30">
                                    {file.category}
                                </span>
                            </div>

                            <h4 className="text-white font-black text-lg mb-2 leading-tight uppercase tracking-tighter italic group-hover:text-indigo-400 transition-colors">
                                {file.title}
                            </h4>
                            <div className="flex gap-3 text-[9px] text-zinc-600 font-black uppercase tracking-widest">
                                <span>{file.type}</span>
                                <span>•</span>
                                <span>{file.size}</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-[8px] text-zinc-700 font-black uppercase mb-4 tracking-widest">Added: {file.date}</p>
                            <button className="w-full py-4 bg-white/5 hover:bg-white hover:text-black rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                                <Download size={14} /> DOWNLOAD
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};