const USERS = [
    { id: 1, name: 'Rahul', img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Sanya', img: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Arjun', img: 'https://i.pravatar.cc/150?u=3' },
];

export const LiveRave = () => {
    return (
        <div className="mt-8 bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-12 h-12 border-4 border-indigo-500 rounded-full animate-spin-slow" />
            </div>

            <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Active Rave Rooms</h4>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                        {USERS.map(u => (
                            <img key={u.id} src={u.img} className="w-10 h-10 rounded-full border-2 border-zinc-950" alt={u.name} />
                        ))}
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold">
                            +42
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
                        JOIN
                    </button>
                </div>
                <p className="text-xs text-zinc-400 font-medium italic">"Listening to Kesariya (8D Audio)"</p>
            </div>
        </div>
    );
};