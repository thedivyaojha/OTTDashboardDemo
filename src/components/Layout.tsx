import React, { useState } from 'react';
import {
    LayoutDashboard, Music, CreditCard, MessageCircle, LogOut,
    Search, CheckCircle2, Upload, FileBarChart, ChevronDown, FileText
} from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    setView: (view: string) => void;
    currentView: string;
    onLogout: () => void;
}

export const Layout = ({ children, setView, currentView, onLogout }: LayoutProps) => {
    const [isReportsOpen, setIsReportsOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            {/* SIDEBAR */}
            <aside className="w-72 border-r border-white/5 p-8 flex flex-col fixed h-full bg-[#050505] z-50">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                        <Music size={22} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-lg tracking-tighter leading-none uppercase">OTT <span className="text-indigo-500">MUSIC</span></span>
                        <span className="text-[9px] font-black text-zinc-600 tracking-[0.2em] mt-1">ONLINE PORTAL</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
                    <SidebarItem icon={LayoutDashboard} label="OVERVIEW" active={currentView === 'OVERVIEW'} onClick={() => setView('OVERVIEW')} />
                    <SidebarItem icon={Music} label="REPERTOIRE" active={currentView === 'SONGS'} onClick={() => setView('SONGS')} />
                    <SidebarItem icon={Upload} label="WORKSPACE" active={currentView === 'WORKSPACE'} onClick={() => setView('WORKSPACE')} />

                    {/* NEW RESOURCES ITEM */}
                    <SidebarItem icon={FileText} label="RESOURCES" active={currentView === 'RESOURCES'} onClick={() => setView('RESOURCES')} />

                    <SidebarItem icon={CreditCard} label="REVENUE" active={currentView === 'REVENUE'} onClick={() => setView('REVENUE')} />

                    {/* REPORTS DROPDOWN SECTION */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setIsReportsOpen(!isReportsOpen)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${currentView.includes('REPORTS') ? 'text-white bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <div className="flex items-center gap-4">
                                <FileBarChart size={20} />
                                <span className="text-[10px] font-black tracking-[0.2em]">REPORTS</span>
                            </div>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isReportsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isReportsOpen && (
                            <div className="ml-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                                <button
                                    onClick={() => setView('REPORTS_CRBT')}
                                    className={`w-full text-left px-10 py-3 rounded-xl text-[9px] font-black tracking-widest transition-all ${currentView === 'REPORTS_CRBT' ? 'text-indigo-500 bg-indigo-500/10' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    • CALLER TUNE (CRBT)
                                </button>
                                <button
                                    onClick={() => setView('REPORTS_DSP')}
                                    className={`w-full text-left px-10 py-3 rounded-xl text-[9px] font-black tracking-widest transition-all ${currentView === 'REPORTS_DSP' ? 'text-indigo-500 bg-indigo-500/10' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    • DSP REPORTS
                                </button>
                            </div>
                        )}
                    </div>

                    <SidebarItem icon={MessageCircle} label="SUPPORT" active={currentView === 'SUPPORT'} onClick={() => setView('SUPPORT')} />
                </nav>

                <div className="pt-8 border-t border-white/5 space-y-6">
                    <div className="px-6 opacity-20 hover:opacity-100 transition-opacity">
                        <p className="text-[7px] font-black text-zinc-500 tracking-[0.4em] uppercase">Build-D v2.0</p>
                    </div>
                    <SidebarItem icon={LogOut} label="LOGOUT" onClick={onLogout} />
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 ml-72 p-12 max-w-7xl mx-auto w-full relative">
                <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />

                <header className="flex justify-between items-center mb-12 glass p-8 rounded-[3rem] border border-white/5">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30"></div>
                            <div className="relative w-20 h-20 rounded-full bg-zinc-800 border-4 border-zinc-950 shadow-2xl flex items-center justify-center overflow-hidden">
                                {currentView === 'RESOURCES' ? (
                                    <FileText className="text-indigo-500" size={32} />
                                ) : (
                                    <Music className="text-zinc-700" size={32} />
                                )}
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1 border-2 border-zinc-950">
                                <CheckCircle2 size={12} className="text-white fill-current" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase">
                                {currentView.includes('REPORTS') ? 'Analytics & Recovery' :
                                    currentView === 'RESOURCES' ? 'Vault & Assets' : 'Artist-Info'}
                            </h2>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase mt-1">
                                {currentView === 'OVERVIEW' ? 'Music Label /Artist' :
                                    currentView === 'REPORTS_CRBT' ? 'CRBT Analytics' :
                                        currentView === 'REPORTS_DSP' ? 'DSP Performance' :
                                            currentView === 'RESOURCES' ? 'Artist Resources' :
                                                currentView === 'SONGS' ? 'Song Catalog' :
                                                    currentView.replace('_', ' ')}
                            </h1>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="glass hidden lg:flex items-center px-6 py-3 rounded-2xl border border-white/5 focus-within:border-indigo-500">
                            <Search size={18} className="text-zinc-500 mr-3" />
                            <input
                                placeholder={currentView === 'RESOURCES' ? "Search Vault..." : "Search Reports..."}
                                className="bg-transparent border-none outline-none text-sm font-bold w-48 text-white"
                            />
                        </div>
                        <div className="text-right ml-4">
                            <p className="text-zinc-500 text-[9px] font-black tracking-widest uppercase mb-1 italic">Build v2.0</p>
                            <div className="flex items-center gap-2 justify-end">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-emerald-500 text-[10px] font-black tracking-widest uppercase">Live</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="animate-in fade-in duration-700">{children}</div>
            </main>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
    <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
        <Icon size={20} />
        <span className="text-[10px] font-black tracking-[0.2em]">{label}</span>
    </button>
);