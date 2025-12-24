const REGIONS = [
    { state: 'West Bengal', density: 95, label: 'Kolkata Hub' },
    { state: 'Maharashtra', density: 70, label: 'Mumbai/Pune' },
    { state: 'Delhi NCR', density: 65, label: 'Northern Base' },
    { state: 'Karnataka', density: 40, label: 'Bangalore' },
    { state: 'Bangladesh', density: 85, label: 'International' },
];

export const IndiaHeatmap = () => (
    <div className="glass p-8 rounded-[3rem] border border-white/5">
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-white font-black uppercase tracking-widest text-xs">Listener Density (India & BD)</h3>
            <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full underline">Live Geo-Sync</span>
        </div>
        <div className="space-y-4">
            {REGIONS.map((reg) => (
                <div key={reg.state} className="group cursor-help">
                    <div className="flex justify-between text-[10px] mb-2">
                        <span className="text-zinc-400 font-bold uppercase">{reg.state}</span>
                        <span className="text-white">{reg.density}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-1000"
                            style={{ width: `${reg.density}%` }}
                        />
                    </div>
                    <p className="text-[9px] text-zinc-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{reg.label}</p>
                </div>
            ))}
        </div>
    </div>
);