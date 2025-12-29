import React, { useState } from 'react';
import {
    Upload, Music, Send, UserCheck, PenTool,
    Calendar, Hash, Mic2, CheckCircle2, Clock,
    Info, FileAudio, Sparkles
} from 'lucide-react';

export const CreatorWorkspace = () => {
    const [submissions] = useState([
        { id: 101, title: "Ke Jeno Dake", date: "Dec 22", status: "Published", color: "text-emerald-400" },
        { id: 102, title: "Tor Sathe Chole Jai", date: "Dec 23", status: "Review", color: "text-amber-400" },
    ]);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-20">

            {/* INTRO HEADER */}
            <div className="px-4 flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-indigo-500"></div>
                        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase">Artist Portal</span>
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                        Creator <span className="text-zinc-700">Workspace</span>
                    </h3>
                    <p className="text-zinc-500 text-xs font-black tracking-widest uppercase mt-4">
                        Asset Submission & Metadata Management
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[7px] text-zinc-700 font-black tracking-[0.4em] uppercase mb-1 italic">Secure Upload Uplink: active</p>
                    <div className="flex items-center gap-2 justify-end">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="text-indigo-500 text-[9px] font-black tracking-widest uppercase">Encrypted Session</span>
                    </div>
                </div>
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                {/* LEFT: SUBMISSION FORM (3 Cols) */}
                <div className="lg:col-span-3 glass p-10 rounded-[3.5rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles size={120} className="text-white" />
                    </div>

                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/20 text-white">
                            <Upload size={22} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Song & Meta Submission</h3>
                            <p className="text-zinc-500 text-[9px] font-black tracking-widest uppercase italic">Ensure all fields match official ID documentation</p>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Title & Singer Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">Song Title</label>
                                <input type="text" placeholder="e.g. Ke Jeno Dake" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-700 font-bold" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Mic2 size={12} className="text-indigo-400" /> Primary Singer
                                </label>
                                <input type="text" placeholder="Full legal name..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-700 font-bold" />
                            </div>
                        </div>

                        {/* Credits Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <PenTool size={12} className="text-indigo-400" /> Lyricist
                                </label>
                                <input type="text" placeholder="Lyricist name..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-700 font-bold" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <UserCheck size={12} className="text-indigo-400" /> Composer
                                </label>
                                <input type="text" placeholder="Composer name..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-700 font-bold" />
                            </div>
                        </div>

                        {/* Genre & Date Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Hash size={12} className="text-indigo-400" /> Musical Genre
                                </label>
                                <select className="w-full bg-[#0a0a0c] border border-white/10 rounded-2xl px-6 py-4 text-zinc-400 focus:border-indigo-500 outline-none transition-all appearance-none font-bold uppercase tracking-widest text-[10px]">
                                    <option>Select Genre</option>
                                    <option>Classical</option>
                                    <option>Folk</option>
                                    <option>Pop</option>
                                    <option>Indie</option>
                                    <option>Devotional</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Calendar size={12} className="text-indigo-400" /> Planned Release
                                </label>
                                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none transition-all [color-scheme:dark] font-bold" />
                            </div>
                        </div>

                        {/* File Upload Area */}
                        <div className="p-12 border-2 border-dashed border-white/10 rounded-[3rem] text-center bg-white/[0.01] group cursor-pointer hover:border-indigo-500/50 hover:bg-indigo-500/[0.02] transition-all duration-500 relative">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 text-zinc-600">
                                <FileAudio size={32} />
                            </div>
                            <p className="text-sm font-black text-white uppercase tracking-widest">Upload Master Audio</p>
                            <p className="text-[10px] text-zinc-600 mt-2 font-black uppercase tracking-[0.2em]">MP3 (320kbps) or WAV (24-bit) preferred</p>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 shadow-2xl shadow-indigo-600/20 transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs italic">
                            <Send size={18} className="italic" /> SUBMIT TO COMPLIANCE
                        </button>
                    </form>
                </div>

                {/* RIGHT: STATUS & INFO (2 Cols) */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="px-4">
                        <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">Recent Submissions</h3>
                        <p className="text-zinc-500 text-[10px] font-black tracking-widest uppercase mt-1">Real-time status tracking</p>
                    </div>

                    <div className="space-y-4">
                        {submissions.map((sub) => (
                            <div key={sub.id} className="glass p-6 rounded-[2rem] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-all border-l-4" style={{borderLeftColor: sub.status === 'Published' ? '#10b981' : '#f59e0b'}}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 ${sub.color} shadow-inner`}>
                                        {sub.status === 'Published' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm tracking-tight uppercase group-hover:text-indigo-400 transition-colors">{sub.title}</h4>
                                        <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1">System ID: #{sub.id} • {sub.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 ${sub.color} border border-white/5`}>
                                        {sub.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Card */}
                    <div className="p-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Info size={80} className="text-indigo-400" />
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <div className="p-2 bg-indigo-500/20 rounded-xl h-fit">
                                <Info className="text-indigo-400" size={18} />
                            </div>
                            <div className="space-y-3">
                                <p className="text-[11px] text-indigo-100 font-black uppercase tracking-widest italic">Compliance Note</p>
                                <p className="text-[10px] text-indigo-300/70 font-medium leading-relaxed uppercase tracking-wider">
                                    All audio and metadata is verified by OTT Music Compliance before distribution.
                                    Review usually takes <span className="text-indigo-400 font-black">24-48 hours</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};