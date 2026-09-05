const SCENARIOS = {
    1: {
        spoken: '"யாரோ என்னை 100 அடி சாலையில் பின்தொடர்ந்து வருகிறார்கள். நான் தெருவை கடந்த போது அவர்களும் கடந்தார்கள்."',
        trans: '"Someone has been following me on 100ft road. They crossed the street when I crossed."',
        cat: 'Stalking / Pursuit',
        score: '0.89 (High)',
        audio: 'Fast Footsteps',
        lang: 'Tamil (Indic)',
        haven: 'Apollo 24/7 (210m East)',
        eta: 'ETA: 2.1 MIN',
        patrol: 'PATROL PCR 04 (420m)',
        badge: 'CRITICAL SEVERITY',
        badgeColor: 'bg-alert-crimson',
        contact: 'Mom (SMS + Auto-Call)'
    },
    2: {
        spoken: '"कैब ड्राइवर ने अचानक रूट बदल दिया है और हाईवे की तरफ जा रहा है, दरवाजा लॉक कर दिया।"',
        trans: '"The cab driver suddenly changed the route towards the bypass highway and locked the doors."',
        cat: 'Cab Deviation / Abduction',
        score: '0.96 (Critical)',
        audio: 'High RPM Engine / Locks',
        lang: 'Hindi (Indic)',
        haven: 'Police Checkpoint (480m Ahead)',
        eta: 'ETA: 1.4 MIN',
        patrol: 'HIGHWAY PATROL 12 (310m)',
        badge: 'EMERGENCY CRITICAL',
        badgeColor: 'bg-rose-700',
        contact: 'Partner (Live Audio Stream Synced)'
    },
    3: {
        spoken: '"I had a bike skid on the dark bypass road, my knee is injured and I cannot stand up."',
        trans: '"Solitary transit fall, acute injury requiring medical intercept."',
        cat: 'Solo Medical Trauma',
        score: '0.82 (Urgent)',
        audio: 'Heavy Breathing / Impact',
        lang: 'English / Tanglish',
        haven: 'City Care Clinic (350m West)',
        eta: 'ETA: 3.2 MIN',
        patrol: 'AMBULANCE 108 UNIT (850m)',
        badge: 'URGENT DISPATCH',
        badgeColor: 'bg-amber-600',
        contact: 'Colleague + 108 Hotline'
    }
};

function Simulator() {
    const [activeScenarioId, setActiveScenarioId] = React.useState(1);
    const scenario = SCENARIOS[activeScenarioId];

    return (
        <React.Fragment>
            {/* Live Sentinel Banner */}
            <section className="w-full py-12 px-6 lg:px-12 bg-surface-pearl border-b border-slate-200/80">
                <div className="max-w-[1440px] mx-auto">
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg relative overflow-hidden ring-1 ring-slate-100 max-w-4xl mx-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-alert-crimson animate-pulse"></span>
                                <span className="font-telemetry-sm text-xs font-bold text-alert-crimson uppercase tracking-wider">
                                    Active Sentinel Mode • Live Responder Telemetry
                                </span>
                            </div>
                            <span className="font-telemetry-sm text-xs text-text-tertiary">NODE: RT-LIVE-409</span>
                        </div>
                        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between h-14 px-4">
                            <div className="flex items-center gap-1.5 h-full">
                                <span className="w-1.5 bg-alert-crimson rounded-full wave-anim-1"></span>
                                <span className="w-1.5 bg-alert-crimson rounded-full wave-anim-2"></span>
                                <span className="w-1.5 bg-status-safe rounded-full wave-anim-3"></span>
                                <span className="w-1.5 bg-status-safe rounded-full wave-anim-4"></span>
                                <span className="w-1.5 bg-alert-crimson rounded-full wave-anim-5"></span>
                                <span className="w-1.5 bg-alert-crimson rounded-full wave-anim-2"></span>
                                <span className="w-1.5 bg-status-safe rounded-full wave-anim-1"></span>
                                <span className="w-1.5 bg-alert-crimson rounded-full wave-anim-3"></span>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-bold text-status-safe uppercase tracking-wider block">
                                    Sarvam AI Acoustic Lock
                                </span>
                                <span className="text-xs text-text-secondary font-mono">Indic Dialect Ingestion</span>
                            </div>
                        </div>
                        <div className="mt-3 p-3 rounded-xl bg-rose-50/80 border border-rose-200/80 text-xs font-medium text-slate-900">
                            <span className="text-alert-crimson font-bold uppercase">Spoken:</span> "யாரோ என்னை பின்தொடர்ந்து வருகிறார்கள்..." <span className="text-text-secondary">(Someone is following me)</span>
                        </div>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-surface-pearl border border-slate-200">
                                <span className="text-[10px] font-bold text-text-tertiary uppercase">Threat Severity</span>
                                <div className="text-alert-crimson font-bold text-sm mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">warning</span> HIGH (0.89)
                                </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-surface-pearl border border-slate-200">
                                <span className="text-[10px] font-bold text-text-tertiary uppercase">Nearest Responder</span>
                                <div className="text-status-safe font-bold text-sm mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">local_police</span> PCR 04 (2 min ETA)
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 p-3 rounded-xl bg-slate-900 text-slate-200 font-telemetry-sm text-[11px] leading-relaxed shadow-inner">
                            <div><span className="text-emerald-400">"threat"</span>: <span className="text-rose-400 font-bold">"PURSUIT_PEDESTRIAN"</span>, <span className="text-emerald-400">"speed"</span>: <span className="text-cyan-300">"5.4 km/h"</span></div>
                            <div><span className="text-emerald-400">"safe_haven"</span>: <span className="text-emerald-300">"Apollo 24/7 (210m Ahead)"</span>, <span className="text-emerald-400">"circle_alert"</span>: <span className="text-white">"3 Guardians Synced"</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Emergency Simulator */}
            <section className="w-full py-16 px-6 lg:px-12 bg-white border-b border-slate-200/80" id="live-simulator">
                <div className="max-w-[1440px] mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-alert-crimson text-xs font-bold uppercase tracking-wider mb-2">
                                <span className="material-symbols-outlined text-[16px]">play_circle</span>
                                Click &amp; Test Real-Time AI
                            </div>
                            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Interactive Emergency Simulator</h2>
                            <p className="text-sm text-text-secondary mt-1">Switch scenarios below to see speech parsing, threat detection, and responder routing update instantly.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-text-tertiary">Active Pipeline:</span>
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-status-safe font-mono text-xs font-bold border border-emerald-200">Sarvam Indic Speech Core</span>
                        </div>
                    </div>

                    {/* Scenario Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button
                            className={`p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                activeScenarioId === 1
                                    ? "border-2 border-alert-crimson bg-rose-50/50 shadow-sm"
                                    : "border border-slate-200 bg-white hover:border-slate-300 shadow-sm"
                            }`}
                            onClick={() => setActiveScenarioId(1)}
                        >
                            <div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeScenarioId === 1 ? "text-alert-crimson" : "text-text-tertiary"}`}>
                                    Scenario 01
                                </span>
                                <span className="text-sm font-bold text-text-primary">Night Stalking / Pursuit</span>
                            </div>
                            <span className={`material-symbols-outlined ${activeScenarioId === 1 ? "text-alert-crimson" : "text-text-secondary"}`}>
                                directions_walk
                            </span>
                        </button>

                        <button
                            className={`p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                activeScenarioId === 2
                                    ? "border-2 border-alert-crimson bg-rose-50/50 shadow-sm"
                                    : "border border-slate-200 bg-white hover:border-slate-300 shadow-sm"
                            }`}
                            onClick={() => setActiveScenarioId(2)}
                        >
                            <div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeScenarioId === 2 ? "text-alert-crimson" : "text-text-tertiary"}`}>
                                    Scenario 02
                                </span>
                                <span className="text-sm font-bold text-text-primary">Cab Route Deviation</span>
                            </div>
                            <span className={`material-symbols-outlined ${activeScenarioId === 2 ? "text-alert-crimson" : "text-text-secondary"}`}>
                                local_taxi
                            </span>
                        </button>

                        <button
                            className={`p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                                activeScenarioId === 3
                                    ? "border-2 border-alert-crimson bg-rose-50/50 shadow-sm"
                                    : "border border-slate-200 bg-white hover:border-slate-300 shadow-sm"
                            }`}
                            onClick={() => setActiveScenarioId(3)}
                        >
                            <div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeScenarioId === 3 ? "text-alert-crimson" : "text-text-tertiary"}`}>
                                    Scenario 03
                                </span>
                                <span className="text-sm font-bold text-text-primary">Medical / Solitary Trauma</span>
                            </div>
                            <span className={`material-symbols-outlined ${activeScenarioId === 3 ? "text-alert-crimson" : "text-text-secondary"}`}>
                                emergency
                            </span>
                        </button>
                    </div>

                    {/* Simulator Dynamic Interactive Canvas */}
                    <div className="p-6 rounded-2xl bg-surface-pearl border border-slate-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Acoustic Feed &amp; Indic Speech Stream</span>
                                <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${scenario.badgeColor}`}>
                                    {scenario.badge}
                                </span>
                            </div>

                            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1 h-8">
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-1"></span>
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-3"></span>
                                    <span className="w-1.5 bg-status-safe rounded wave-anim-2"></span>
                                    <span className="w-1.5 bg-status-safe rounded wave-anim-4"></span>
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-5"></span>
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-1"></span>
                                    <span className="w-1.5 bg-status-safe rounded wave-anim-2"></span>
                                    <span className="w-1.5 bg-status-safe rounded wave-anim-3"></span>
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-4"></span>
                                    <span className="w-1.5 bg-alert-crimson rounded wave-anim-5"></span>
                                </div>
                                <div className="text-right font-telemetry-sm text-[11px] text-text-secondary">
                                    <span className="text-status-safe font-bold">16kHz STREAM ACTIVE</span> • Latency: 138ms
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                                <div className="text-[10px] font-bold text-text-tertiary uppercase">Spoken Utterance (Transcribed in real-time)</div>
                                <div className="text-base font-semibold text-text-primary italic">{scenario.spoken}</div>
                                <div className="text-xs text-text-secondary">{scenario.trans}</div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                                    <span className="text-[10px] text-text-tertiary uppercase block">Category</span>
                                    <span className="font-bold text-text-primary">{scenario.cat}</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                                    <span className="text-[10px] text-text-tertiary uppercase block">Threat Score</span>
                                    <span className="font-bold text-alert-crimson">{scenario.score}</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                                    <span className="text-[10px] text-text-tertiary uppercase block">Acoustic Audio</span>
                                    <span className="font-bold text-text-primary">{scenario.audio}</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                                    <span className="text-[10px] text-text-tertiary uppercase block">Language ID</span>
                                    <span className="font-bold text-status-safe">{scenario.lang}</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Dynamic Vector &amp; Safe Haven</span>
                                <span className="text-xs font-mono text-status-safe font-bold">1.4m GPS LOCK</span>
                            </div>

                            <div className="h-44 rounded-xl bg-slate-900 border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden text-white font-telemetry-sm text-xs shadow-inner">
                                <div className="flex justify-between items-start z-10">
                                    <div className="px-2 py-1 rounded bg-alert-crimson text-white font-bold flex items-center gap-1 text-[11px] shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                        <span>VICTIM VECTOR</span>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        <span>{scenario.patrol}</span>
                                    </div>
                                </div>

                                <svg className="absolute inset-0 w-full h-full text-alert-crimson" fill="none" stroke="currentColor" viewBox="0 0 320 180">
                                    <path d="M 40 140 Q 140 130 180 80 T 280 30" stroke="currentColor" strokeDasharray="6,6" strokeWidth="3"></path>
                                    <circle cx="280" cy="30" fill="#059669" r="6"></circle>
                                    <circle cx="180" cy="80" fill="#E11D48" r="5"></circle>
                                </svg>

                                <div className="z-10 bg-slate-950/80 backdrop-blur p-2 rounded-lg border border-slate-800 flex items-center justify-between text-[11px]">
                                    <span className="text-slate-200">{scenario.haven}</span>
                                    <span className="text-emerald-400 font-bold">{scenario.eta}</span>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                                <div className="text-[10px] font-bold text-text-tertiary uppercase">Dispatched Alerts (Multi-Channel)</div>
                                <div className="flex items-center justify-between text-text-primary">
                                    <span className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-alert-crimson text-[16px]">notifications_active</span>
                                        <strong>{scenario.contact}</strong>
                                    </span>
                                    <span className="text-status-safe font-bold">SMS + Auto-Call Delivered</span>
                                </div>
                                <div className="flex items-center justify-between text-text-primary">
                                    <span className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-blue-600 text-[16px]">local_police</span>
                                        <span>City Police 112 Desk</span>
                                    </span>
                                    <span className="text-blue-700 font-bold">Packet Ingested</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
