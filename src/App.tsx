import React, { useState } from 'react';
import { Auth } from './components/Auth';
import { Layout } from './components/Layout';
import { StatsGrid } from './components/StatsGrid';
import { RevenueChart } from './components/RevenueChart';
import { PlatformChart } from './components/PlatformChart';
import { IndiaHeatmap } from './components/IndiaHeatmap';
import { SongCatalog } from './components/SongCatalog';
import { CreatorWorkspace } from './components/CreatorWorkspace';
import { SupportGrievance } from './components/SupportGrievance';
import { RevenuePortal } from "./components/RevenuePortal";
import {Reports} from "./components/Reports.tsx";
import {Resources} from "./components/Resources.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentView, setCurrentView] = useState('OVERVIEW');

    // Simple Authentication Guard
    if (!isAuthenticated) return <Auth onLogin={() => setIsAuthenticated(true)} />;

    const renderContent = () => {
        switch (currentView) {
            case 'OVERVIEW':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* High-level summary cards */}
                        <StatsGrid />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Line Graph */}
                            <div className="lg:col-span-2">
                                <RevenueChart />
                            </div>
                            {/* Platform Distribution Pie */}
                            <PlatformChart />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Geographical Listener Map */}
                            <IndiaHeatmap />

                            {/* Architect Credit Card */}
                            <div className="glass p-8 rounded-[3rem] flex flex-col justify-center items-center text-center border border-white/5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <p className="relative z-10 text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4"></p>
                                <p className="relative z-10 text-zinc-600 text-[10px] mt-4 max-w-xs uppercase font-bold tracking-widest leading-relaxed">
                                    Ensuring technical integrity and data accuracy for Music Label/Artist Official Portal
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'SONGS':
                return <SongCatalog />;

            case 'WORKSPACE':
                return <CreatorWorkspace />;

            case 'REVENUE':
                // This now renders the full dashboard with payout history and geo-stats
                return <RevenuePortal />;
            case 'REPORTS_CRBT': return <Reports type="CRBT" />; // Add this
            case 'REPORTS_DSP': return <Reports type="DSP" />;   // Add this
            case 'RESOURCES': return <Resources />;

            case 'SUPPORT':
                return <SupportGrievance />;

            default:
                return <div className="text-white p-10 text-center uppercase font-black tracking-widest opacity-20">View Not Found</div>;
        }
    };

    return (
        <Layout
            currentView={currentView}
            setView={setCurrentView}
            onLogout={() => setIsAuthenticated(false)}
        >
            <div className="pb-20">
                {renderContent()}
            </div>
        </Layout>
    );
}

export default App;