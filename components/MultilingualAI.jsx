const LANGUAGES = {
    tamil: {
        name: 'Tamil (தமிழ்)',
        text: '"யாரோ என்னை பின்தொடர்ந்து வருகிறார்கள். கார் என்னை நோக்கி மெதுவாக வருகிறது."',
        trans: '"Someone is following me. A car is creeping slowly behind me."',
        tag: 'ta-IN (Tamil Native)'
    },
    hindi: {
        name: 'Hindi (हिंदी)',
        text: '"कोई मेरा पीछा कर रहा है। एक गाड़ी मेरे पीछे बहुत धीमी गति से आ रही है।"',
        trans: '"Someone is following me. A vehicle is trailing slowly behind me."',
        tag: 'hi-IN (Hindi Colloquial)'
    },
    telugu: {
        name: 'Telugu (తెలుగు)',
        text: '"నన్ను ఎవరో వెంబడిస్తున్నారు. ఒక కారు నా వెనుక నెమ్మదిగా వస్తోంది."',
        trans: '"Someone is following me. A car is creeping slowly behind me."',
        tag: 'te-IN (Telugu Native)'
    },
    kannada: {
        name: 'Kannada (ಕನ್ನಡ)',
        text: '"ಯಾರೋ ನನ್ನನ್ನು ಹಿಂಬಾಲಿಸುತ್ತಿದ್ದಾರೆ. ಒಂದು ಕಾರು ನನ್ನ ಹಿಂದೆ ನಿಧಾನವಾಗಿ ಬರುತ್ತಿದೆ."',
        trans: '"Someone is tailing me. A car is moving slowly behind me."',
        tag: 'kn-IN (Kannada Native)'
    },
    english: {
        name: 'English (Code-Mixed)',
        text: '"Someone has been trailing my steps for the last two blocks on 100ft road."',
        trans: '"Native English / Code-Mixed urban transit report."',
        tag: 'en-IN (Indian English Code-Mixed)'
    }
};

function MultilingualAI() {
    const [selectedLang, setSelectedLang] = React.useState('tamil');
    const currentData = LANGUAGES[selectedLang];

    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-surface-pearl border-b border-slate-200/80" id="multilingual-ai">
            <div className="max-w-[1440px] mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-status-safe font-label-caps text-xs uppercase tracking-widest font-bold">Dialect Resilience</span>
                        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight mt-1">Sarvam Indic Multilingual AI</h2>
                        <p className="text-sm text-text-secondary mt-1">Distress doesn't happen in corporate English. Switch language tabs to test live vernacular parsing:</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-status-safe text-xs font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">translate</span>
                        <span>5 Indic Models Active</span>
                    </div>
                </div>

                {/* Language Selector Tabs */}
                <div className="flex flex-wrap gap-2">
                    {Object.keys(LANGUAGES).map((key) => (
                        <button
                            key={key}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all ${
                                selectedLang === key
                                    ? "bg-alert-crimson text-white font-bold"
                                    : "bg-white border border-slate-200 text-text-secondary hover:text-text-primary"
                            }`}
                            onClick={() => setSelectedLang(key)}
                        >
                            {LANGUAGES[key].name}
                        </button>
                    ))}
                </div>

                {/* Dynamic Language Sample Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-6 space-y-3">
                        <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Raw Acoustic Audio Transcript</span>
                        <div className="p-4 rounded-xl bg-surface-pearl border border-slate-200 font-bold text-lg text-text-primary leading-snug">
                            {currentData.text}
                        </div>
                        <div className="text-xs text-text-secondary italic">
                            {currentData.trans}
                        </div>
                    </div>
                    <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900 text-slate-200 font-telemetry-sm text-xs space-y-2 shadow-inner">
                        <div className="text-slate-400 text-[11px]">// Sarvam AI Sub-word Token Extraction</div>
                        <div><span className="text-emerald-400">"dialect"</span>: <span className="text-cyan-300">"{currentData.tag}"</span></div>
                        <div><span className="text-emerald-400">"confidence"</span>: <span className="text-rose-400 font-bold">98.4%</span></div>
                        <div><span className="text-emerald-400">"threat_level"</span>: <span className="text-rose-400 font-bold">"HIGH_PURSUIT"</span></div>
                        <div><span className="text-emerald-400">"nearest_safe_haven"</span>: <span className="text-emerald-300">"Apollo 24/7 (210m Ahead)"</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
