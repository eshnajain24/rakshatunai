function TapPadAndCancelShield() {
    // Tap Pad State
    const [tapSelection, setTapSelection] = React.useState('None (Click a tile above)');
    const [tapResponse, setTapResponse] = React.useState('Ready for covert trigger');

    // Countdown Timer State
    const [timeLeft, setTimeLeft] = React.useState(5.0);
    const [isTimerRunning, setIsTimerRunning] = React.useState(false);
    const [timerStatus, setTimerStatus] = React.useState('Press "Trigger Test SOS" below to test the 5-second slide-to-abort window.');
    const [isCancelled, setIsCancelled] = React.useState(false);
    
    const intervalRef = React.useRef(null);

    const handleTapPad = (title, severity, feedback) => {
        setTapSelection(`${title} [${severity}]`);
        setTapResponse(feedback);
    };

    const startCountdown = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeLeft(5.0);
        setIsTimerRunning(true);
        setIsCancelled(false);
        setTimerStatus("Escalating wrist vibration triggered... Click 'Abort' to safely stand down.");

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0.05) {
                    clearInterval(intervalRef.current);
                    setIsTimerRunning(false);
                    setTimerStatus("⚠️ EMERGENCY BROADCAST DISPATCHED TO GUARDIANS & POLICE 112!");
                    return 0;
                }
                return prev - 0.05;
            });
        }, 50);
    };

    const abortCountdown = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTimerRunning(false);
        setIsCancelled(true);
        setTimerStatus("✓ Accidental trigger aborted. No emergency broadcast was sent.");
    };

    React.useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-surface-pearl border-b border-slate-200/80" id="silent-tapad">
            <div className="max-w-[1440px] mx-auto space-y-10">
                <div className="max-w-3xl">
                    <span className="text-alert-crimson font-label-caps text-xs uppercase tracking-widest font-bold">Tactile Hardware Innovation</span>
                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight mt-1">Interactive Silent Tap-Pad &amp; 5-Sec Cancel Shield</h2>
                    <p className="text-sm text-text-secondary mt-1">When speaking is unsafe, silent oversized tap tiles categorize threats with zero sound. Try clicking a tile or holding the cancel shield.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Silent Tap Pad */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-base text-text-primary">Interactive Silent Tap-Pad</h3>
                                <p className="text-xs text-text-secondary">Click any tile to test instantaneous covert categorization:</p>
                            </div>
                            <span className="px-2 py-1 rounded bg-slate-100 text-[11px] font-mono font-bold text-text-secondary">COVERT MODE</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                className="p-4 rounded-xl border border-slate-200 bg-surface-pearl hover:border-alert-crimson hover:bg-rose-50 text-left transition-all group"
                                onClick={() => handleTapPad('Following Me', 'CRITICAL', 'Acoustic footsteps synced. Stalking alert relayed.')}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="material-symbols-outlined text-alert-crimson text-[24px]">directions_run</span>
                                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-alert-crimson transition-all"></span>
                                </div>
                                <span className="font-bold text-sm text-text-primary block mt-2">Following Me</span>
                                <span className="text-[11px] text-text-secondary">Pedestrian or vehicle tailing</span>
                            </button>

                            <button
                                className="p-4 rounded-xl border border-slate-200 bg-surface-pearl hover:border-alert-crimson hover:bg-rose-50 text-left transition-all group"
                                onClick={() => handleTapPad('Threatened', 'HIGH', 'Physical threat flagged. Guardian auto-dial dispatched.')}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="material-symbols-outlined text-alert-crimson text-[24px]">front_hand</span>
                                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-alert-crimson transition-all"></span>
                                </div>
                                <span className="font-bold text-sm text-text-primary block mt-2">Threatened</span>
                                <span className="text-[11px] text-text-secondary">Verbal or physical intimidation</span>
                            </button>

                            <button
                                className="p-4 rounded-xl border border-slate-200 bg-surface-pearl hover:border-alert-crimson hover:bg-rose-50 text-left transition-all group"
                                onClick={() => handleTapPad('Cab Deviation', 'ELEVATED', 'Route GPS mismatch detected. Live ride share triggered.')}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="material-symbols-outlined text-alert-crimson text-[24px]">wrong_location</span>
                                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-alert-crimson transition-all"></span>
                                </div>
                                <span className="font-bold text-sm text-text-primary block mt-2">Cab Deviation</span>
                                <span className="text-[11px] text-text-secondary">Driver off calculated route</span>
                            </button>

                            <button
                                className="p-4 rounded-xl border border-slate-200 bg-surface-pearl hover:border-alert-crimson hover:bg-rose-50 text-left transition-all group"
                                onClick={() => handleTapPad('Medical Panic', 'URGENT', 'Emergency 108 medical distress broadcasted with GPS coordinates.')}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="material-symbols-outlined text-alert-crimson text-[24px]">medical_services</span>
                                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-alert-crimson transition-all"></span>
                                </div>
                                <span className="font-bold text-sm text-text-primary block mt-2">Medical Panic</span>
                                <span className="text-[11px] text-text-secondary">Fall, trauma, or fainting</span>
                            </button>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-telemetry-sm text-xs space-y-1">
                            <span className="text-slate-400">// Tap-pad feedback monitor</span>
                            <div><span className="text-emerald-400">Selected Action:</span> <span className="text-white font-bold">{tapSelection}</span></div>
                            <div><span className="text-emerald-400">Status Response:</span> <span className="text-cyan-300">{tapResponse}</span></div>
                        </div>
                    </div>

                    {/* 5-Second Graceful Cancel */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-base text-text-primary">5-Second Graceful Abort Shield</h3>
                                <p className="text-xs text-text-secondary">Prevents false alarms via gentle haptic countdown:</p>
                            </div>
                            <span className="px-2 py-1 rounded bg-rose-50 text-alert-crimson font-mono text-[11px] font-bold border border-rose-200">ACCIDENTAL PROOF</span>
                        </div>

                        <div className="p-5 rounded-xl bg-surface-pearl border border-slate-200 text-center space-y-3">
                            <div className="text-xs font-bold text-text-tertiary uppercase">Simulated Dispatch Timer</div>
                            
                            <div className="font-telemetry-lg text-4xl font-extrabold text-alert-crimson tracking-tight">
                                {isCancelled ? "CANCELLED" : `00:0${timeLeft.toFixed(2)}`}
                            </div>

                            <div className="text-xs text-text-secondary">{timerStatus}</div>

                            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-100 ${isCancelled ? "bg-status-safe w-full" : "bg-alert-crimson"}`}
                                    style={{ width: isCancelled ? "100%" : `${(timeLeft / 5.0) * 100}%` }}
                                ></div>
                            </div>

                            <div className="flex items-center justify-center gap-3 pt-2">
                                <button
                                    className="px-4 py-2.5 rounded-xl bg-alert-crimson hover:bg-alert-crimson-hover text-white text-xs font-bold transition-all shadow-md shadow-alert-crimson/25"
                                    onClick={startCountdown}
                                >
                                    Trigger Test SOS
                                </button>
                                <button
                                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                        isTimerRunning
                                            ? "bg-alert-crimson text-white hover:bg-alert-crimson-hover shadow-md animate-pulse"
                                            : "bg-white border border-slate-300 text-text-primary disabled:opacity-40"
                                    }`}
                                    disabled={!isTimerRunning}
                                    onClick={abortCountdown}
                                >
                                    Click &amp; Hold to Abort (Cancel)
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                            <span className="material-symbols-outlined text-status-safe text-[18px]">verified</span>
                            <span>Requires no screen unlock to abort; subtle wrist vibration confirms cancellation.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
