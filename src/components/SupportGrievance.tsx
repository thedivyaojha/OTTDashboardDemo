import { ShieldAlert, LifeBuoy, FileText, Send } from 'lucide-react';

export const SupportGrievance = () => (
    <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                <ShieldAlert className="text-emerald-500 mb-4" />
                <h4 className="text-white font-bold text-sm">Copyright Issue</h4>
                <p className="text-zinc-500 text-[10px] mt-2">Report unauthorized re-uploads of your songs.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors">
                <LifeBuoy className="text-orange-500 mb-4" />
                <h4 className="text-white font-bold text-sm">Payout Dispute</h4>
                <p className="text-zinc-500 text-[10px] mt-2">Queries regarding quarterly royalty distributions.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <FileText className="text-purple-500 mb-4" />
                <h4 className="text-white font-bold text-sm">Metadata Update</h4>
                <p className="text-zinc-500 text-[10px] mt-2">Change credits, lyrics, or album artwork.</p>
            </div>
        </div>

        <div className="glass p-8 rounded-[3rem] border border-white/5">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6">File a New Grievance</h3>
            <div className="space-y-4">
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-emerald-500" placeholder="Subject of Issue" />
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-emerald-500 h-32" placeholder="Describe the problem in detail..." />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-black py-4 px-8 rounded-2xl w-full transition-transform active:scale-95 flex items-center justify-center gap-2">
                    <Send size={18} /> SUBMIT TICKET
                </button>
            </div>
        </div>
    </div>
);