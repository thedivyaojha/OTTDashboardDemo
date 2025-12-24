import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const DATA = [
    { name: 'YouTube Music', value: 45, color: '#FF0000' },
    { name: 'Spotify', value: 30, color: '#1DB954' },
    { name: 'Apple Music', value: 15, color: '#FA243C' },
    { name: 'JioSaavn', value: 10, color: '#00D8F5' },
];

export const PlatformChart = () => (
    <div className="glass p-8 rounded-[3rem] border border-white/5 h-[400px]">
        <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6">Platform Engagement</h3>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={DATA}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={8}
                    dataKey="value"
                >
                    {DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
        </ResponsiveContainer>
    </div>
);