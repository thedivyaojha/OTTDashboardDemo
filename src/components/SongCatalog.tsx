import { Play, TrendingUp, DollarSign, Calendar, ExternalLink, Music2, Youtube } from 'lucide-react';
import { SONGS } from '../data/songs';

export const SongCatalog = () => {
    return (
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex justify-between items-center mb-8 px-4">
                <div>
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Songs Catalog</h3>
                    <p className="text-zinc-500 text-xs font-black tracking-[0.2em] uppercase mt-1">Global Performance & Assets</p>
                </div>
                <button className="glass px-6 py-2 rounded-full text-xs font-black text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all border border-indigo-500/20">
                    VIEW ALL RELEASES
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {SONGS.map((song) => (
                    <div
                        key={song.id}
                        className="glass group flex flex-col xl:flex-row items-center justify-between p-6 rounded-[2.5rem] hover:bg-white/[0.07] transition-all cursor-default relative overflow-hidden border border-white/5"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute -left-10 top-0 w-32 h-full bg-indigo-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Song Title & Status Section */}
                        <div className="flex items-center gap-6 w-full xl:w-1/4">
                            <div className="w-14 h-14 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500 font-black group-hover:text-white group-hover:from-indigo-600 group-hover:to-purple-600 transition-all shadow-2xl">
                                {song.id < 10 ? `0${song.id}` : song.id}
                            </div>
                            <div>
                                <h4 className="text-white font-black text-xl tracking-tight group-hover:text-indigo-300 transition-colors uppercase">{song.title}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${song.trendColor} px-2 py-0.5 bg-white/5 rounded-md`}>
                                        {song.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Performance Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-3 flex-1 w-full mt-8 xl:mt-0 px-4 gap-8">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                                    <Play size={12} className="text-indigo-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Total Streams</span>
                                </div>
                                <span className="text-white font-black text-lg">{song.streams}</span>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                                    <DollarSign size={12} className="text-emerald-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Net Revenue</span>
                                </div>
                                <span className="text-emerald-400 font-black text-lg">{song.revenue}</span>
                            </div>

                            <div className="hidden md:flex flex-col">
                                <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                                    <Calendar size={12} className="text-zinc-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Release Date</span>
                                </div>
                                <span className="text-zinc-300 font-bold text-sm">{song.date}</span>
                            </div>
                        </div>

                        {/* PLATFORM LINKS SECTION - THE "LIVE" NAVIGATOR */}
                        <div className="flex items-center gap-3 mt-8 xl:mt-0 w-full xl:w-auto justify-end">
                            <div className="flex items-center gap-2 bg-black/40 p-2 rounded-2xl border border-white/5">
                                <a href={song.links.spotify} target="_blank" rel="noreferrer" title="Spotify" className="p-2 hover:bg-[#1DB954]/20 rounded-xl transition-all group/icon">
                                    <Music2 size={18} className="text-zinc-500 group-hover/icon:text-[#1DB954]" />
                                </a>
                                <a href={song.links.youtube} target="_blank" rel="noreferrer" title="YouTube" className="p-2 hover:bg-[#FF0000]/20 rounded-xl transition-all group/icon">
                                    <Youtube size={18} className="text-zinc-500 group-hover/icon:text-[#FF0000]" />
                                </a>
                                <a href={song.links.apple} target="_blank" rel="noreferrer" title="Apple Music" className="p-2 hover:bg-[#FC3C44]/20 rounded-xl transition-all group/icon">
                                    <ExternalLink size={18} className="text-zinc-500 group-hover/icon:text-[#FC3C44]" />
                                </a>
                                <a href={song.links.jiosaavn} target="_blank" rel="noreferrer" title="JioSaavn" className="p-2 hover:bg-indigo-500/20 rounded-xl transition-all group/icon">
                                    <Music2 size={18} className="text-zinc-500 group-hover/icon:text-indigo-400" />
                                </a>
                            </div>

                            <button className="p-4 rounded-2xl bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all group/btn shadow-lg">
                                <TrendingUp size={20} className="group-hover/btn:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};