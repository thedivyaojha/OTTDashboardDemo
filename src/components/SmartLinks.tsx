import React from 'react';
import { Music2, Youtube, PlayCircle, Radio, Mic2, ExternalLink } from 'lucide-react';
import { Song } from '../data/songs.ts'

interface SmartLinksProps {
    links: Song['links'];
    compact?: boolean;
}

export const SmartLinks = ({ links, compact = false }: SmartLinksProps) => {
    // Configuration for brand colors and icons
    const platforms = [
        { id: 'spotify', icon: Music2, color: '#1DB954', label: 'Spotify', url: links.spotify },
        { id: 'apple', icon: PlayCircle, color: '#FA243C', label: 'Apple Music', url: links.apple },
        { id: 'ytMusic', icon: Youtube, color: '#FF0000', label: 'YT Music', url: links.ytMusic },
        { id: 'amazon', icon: Mic2, color: '#00A8E1', label: 'Amazon', url: links.amazon },
        { id: 'jiosaavn', icon: Radio, color: '#2BC5B4', label: 'JioSaavn', url: links.jiosaavn },
    ];

    return (
        <div className={`flex items-center ${compact ? 'gap-2' : 'gap-4'}`}>
            {platforms.map((p) => (
                <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={p.label}
                    className={`
                        relative group flex items-center justify-center transition-all duration-300
                        ${compact
                        ? 'w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10'
                        : 'w-12 h-12 rounded-2xl glass border border-white/5 hover:border-white/20 hover:-translate-y-1 shadow-xl'
                    }
                    `}
                >
                    {/* Hover Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-20 blur-lg transition-opacity"
                        style={{ backgroundColor: p.color }}
                    />

                    {/* Icon */}
                    <p.icon
                        size={compact ? 14 : 20}
                        style={{ color: p.color }}
                        className="relative z-10 transition-transform group-hover:scale-110"
                    />

                    {!compact && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[8px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                            Listen on {p.label}
                        </div>
                    )}
                </a>
            ))}
        </div>
    );
};