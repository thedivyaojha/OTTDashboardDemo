import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DATA = [
    { name: 'YouTube Music', value: 45, color: '#FF0000' },
    { name: 'Spotify', value: 30, color: '#1DB954' },
    { name: 'Apple Music', value: 15, color: '#FA243C' },
    { name: 'JioSaavn', value: 10, color: '#00D8F5' },
];

export const PlatformChart = () => (
    <div className="glass p-8 rounded-[3rem] border border-white/5 h-[480px] relative flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-white font-black uppercase tracking-widest text-xs">Platform Engagement</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter mt-1 italic">Market Share 2025</p>
            </div>
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Global Data</span>
            </div>
        </div>

        <div className="flex-1 relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={DATA}
                        innerRadius={85}
                        outerRadius={115}
                        paddingAngle={10}
                        dataKey="value"
                        stroke="none"
                    >
                        {DATA.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                className="outline-none hover:opacity-80 transition-opacity cursor-pointer"
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="glass bg-black/90 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                                            <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">
                                                {payload[0].name}
                                            </p>
                                        </div>
                                        <p className="text-white font-black text-2xl italic leading-none">
                                            {/* PERCENTAGE SIGN ADDED HERE */}
                                            {payload[0].value}%
                                        </p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>

            {/* Center Label (Donut Hole) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-1">Total</p>
                <p className="text-3xl font-black text-white italic leading-none">100%</p>
            </div>
        </div>

        {/* Custom Legend Section */}
        <div className="grid grid-cols-2 gap-3 mt-4">
            {DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter truncate w-20">
                            {item.name}
                        </span>
                    </div>
                    <span className="text-xs font-black text-white italic">{item.value}%</span>
                </div>
            ))}
        </div>
    </div>
);