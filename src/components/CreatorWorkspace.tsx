import React, { useState } from 'react';
import { FileText, Upload, Download, CheckCircle2, Clock, Music, Info, Send, UserCheck, PenTool } from 'lucide-react';

const RESOURCES = [
    { id: 1, title: "Industry Meet 2025 Invite", type: "PDF", size: "2.4 MB", date: "Dec 20, 2025" },
    { id: 2, title: "Global Licensing Policy - Jibonmukhi", type: "PDF", size: "1.2 MB", date: "Dec 22, 2025" },
    { id: 3, title: "UK & US Tour Schedule 2026", type: "PDF", size: "3.1 MB", date: "Dec 24, 2025" },
];

export const CreatorWorkspace = () => {
    const [submissions] = useState([
        { id: 101, title: "E Tumi Kemon Tumi", date: "Dec 22", status: "Published", color: "text-emerald-400" },
        { id: 102, title: "Tui Amar Hobi Na", date: "Dec 23", status: "Review", color: "text-amber-400" },
    ]);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">

            {/* SECTION 1: ARTIST RESOURCE VAULT */}
            <section>
                <div className="mb-6 px-4 flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">Artist Resource Vault</h3>
                        <p className="text-zinc-500 text-xs font-black tracking-widest uppercase mt-1">Official Industry Assets & Documentation</p>
                    </div>
                    {/* Subtle signature for Divya Ojha */}
                    <p className="text-[7px] text-zinc-700 font-black tracking-[0.4em] uppercase mb-1">Infrastructure: D.Ojha</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {RESOURCES.map((file) => (
                        <div key={file.id} className="glass p-6 rounded-[2.5rem] border border-white/5 group hover:border-indigo-500/50 transition-all duration-500">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-all duration-500 text-zinc-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-600/20">
                                <FileText size={24} />
                            </div>
                            <h4 className="text-white font-bold text-sm mb-1 leading-tight">{file.title}</h4>
                            <p className="text-[10px] text-zinc-500 font-black uppercase mb-4 tracking-tighter">{file.type} • {file.size} • {file.date}</p>
                            <button className="w-full py-3.5 bg-white/5 hover:bg-white hover:text-black rounded-2xl text-[10px] font-black tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
                                <Download size={14} /> DOWNLOAD DOCUMENT
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="border-white/5" />

            {/* SECTION 2: SONG SUBMISSION & STATUS */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Advanced Metadata Form */}
                <div className="lg:col-span-3 glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                        <Upload className="text-indigo-500" />
                        <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Song & Meta Submission</h3>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Song Title</label>
                            <input type="text" placeholder="e.g. Amar Mawte" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4 flex items-center gap-2">
                                    <PenTool size={10} className="text-indigo-400" /> Lyricist
                                </label>
                                <input type="text" placeholder="Lyricist name..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4 flex items-center gap-2">
                                    <UserCheck size={10} className="text-indigo-400" /> Composer
                                </label>
                                <input type="text" placeholder="Composer name..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all" />
                            </div>
                        </div>

                        <div className="p-10 border-2 border-dashed border-white/10 rounded-[2.5rem] text-center bg-white/[0.02] group cursor-pointer hover:border-indigo-500/50 transition-all duration-500">
                            <Music className="mx-auto text-zinc-600 mb-4 group-hover:text-indigo-500 transition-colors" size={32} />
                            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Upload Master MP3 / WAV</p>
                            <p className="text-[9px] text-zinc-600 mt-2 font-medium">Drag & Drop or Click to Browse Files</p>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-[0.98]">
                            <Send size={18} /> SUBMIT FOR ADMIN REVIEW
                        </button>
                    </form>
                </div>

                {/* Status Tracker */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="px-4">
                        <h3 className="text-xl font-black text-white tracking-tighter uppercase">Submission Status</h3>
                        <p className="text-zinc-500 text-[10px] font-black tracking-widest uppercase mt-1">Live Review Cycle</p>
                    </div>

                    <div className="space-y-4">
                        {submissions.map((sub) => (
                            <div key={sub.id} className="glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 ${sub.color}`}>
                                        {sub.status === 'Published' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-tight">{sub.title}</h4>
                                        <p className="text-[9px] text-zinc-500 font-medium uppercase tracking-tighter">Dated: {sub.date}</p>
                                    </div>
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-tighter px-3 py-1 rounded-full bg-white/5 ${sub.color} border border-white/5`}>
                                    {sub.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-[2rem]">
                        <div className="flex gap-4">
                            <Info className="text-indigo-400 shrink-0" size={20} />
                            <p className="text-[10px] text-indigo-300 font-medium leading-relaxed uppercase tracking-wide">
                                All metadata is verified by OTT Music Compliance before going live. Contact support for expedited publishing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};