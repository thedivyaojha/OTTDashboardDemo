import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'YouTube', value: 45, color: '#FF0000', glow: 'shadow-[0_0_15px_rgba(255,0,0,0.5)]' },
    { name: 'Spotify', value: 35, color: '#1DB954', glow: 'shadow-[0_0_15px_rgba(29,185,84,0.5)]' },
    { name: 'Apple', value: 20, color: '#FC3C44', glow: 'shadow-[0_0_15px_rgba(252,60,68,0.5)]' },
];

export const PlatformSplit = () => {
    return (
        <div className="relative group bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] overflow-hidden">
            {/* Decorative Neon Blur in background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 blur-[80px] rounded-full" />

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                        Live Distribution
                    </h3>
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">Live</span>
                    </div>
                </div>

                <div className="h-[250px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={90}
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        className="transition-all duration-500 hover:opacity-80 cursor-pointer"
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl">
                                                <p className="text-white font-bold text-sm">{payload[0].name}</p>
                                                <p className="text-zinc-400 text-xs">{payload[0].value}% of global rave</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text for the Donut */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Total</p>
                        <p className="text-2xl font-black text-white">100%</p>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                    {data.map((item) => (
                        <div key={item.name} className="flex flex-col items-center p-2 rounded-2xl bg-white/5 border border-white/5">
                            <div className={`w-2 h-2 rounded-full mb-1`} style={{ backgroundColor: item.color }} />
                            <span className="text-[10px] text-zinc-400 font-medium">{item.name}</span>
                            <span className="text-xs font-bold text-white">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};