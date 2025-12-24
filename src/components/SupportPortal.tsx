import { LifeBuoy, AlertCircle, ShieldCheck, MessageSquare, Send } from 'lucide-react';

const SupportCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="glass p-6 rounded-[2rem] hover:bg-white/10 transition-all cursor-pointer border border-white/5 group">
        <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="text-indigo-400" size={24} />
        </div>
        <h4 className="text-white font-bold mb-1 tracking-tight">{title}</h4>
        <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
    </div>
);

export const SupportPortal = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: FAQ/Quick Links */}
                <div className="lg:col-span-1 space-y-4">
                    <SupportCard
                        icon={ShieldCheck}
                        title="Copyright Issues"
                        desc="Report unauthorized use of your tracks or profile impersonation."
                    />
                    <SupportCard
                        icon={AlertCircle}
                        title="Royalty Disputes"
                        desc="Missing payments or incorrect streaming calculations."
                    />
                    <SupportCard
                        icon={LifeBuoy}
                        title="Technical Help"
                        desc="Bugs in the portal, upload errors, or account access."
                    />
                </div>

                {/* Right Column: The Ticket Form */}
                <div className="lg:col-span-2 glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10" />

                    <div className="flex items-center gap-3 mb-8">
                        <MessageSquare className="text-indigo-500" />
                        <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Raise a Ticket</h3>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Subject</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Royalty Payment Delay"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Category</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 appearance-none">
                                    <option className="bg-zinc-900">Finance & Royalties</option>
                                    <option className="bg-zinc-900">Technical Support</option>
                                    <option className="bg-zinc-900">Content/Copyright</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Describe your issue in detail..."
                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                            />
                        </div>

                        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/20 transition-all active:scale-[0.98]">
                            <Send size={18} />
                            SUBMIT GRIEVANCE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};