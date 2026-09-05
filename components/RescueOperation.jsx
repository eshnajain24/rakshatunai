function RescueOperation() {
    const steps = [
        { num: '01', title: 'One-Touch Trigger', desc: 'Hardware button or pocket tap.', border: 'hover:border-alert-crimson/50', color: 'text-alert-crimson' },
        { num: '02', title: 'Acoustic Audio', desc: 'Low-power continuous mic buffer.', border: 'hover:border-alert-crimson/50', color: 'text-alert-crimson' },
        { num: '03', title: 'Sarvam Parse', desc: 'Vernacular threat categorization.', border: 'hover:border-status-safe/50', color: 'text-status-safe' },
        { num: '04', title: 'Guardian Relay', desc: 'Instant SMS + bypass DND call.', border: 'hover:border-status-safe/50', color: 'text-status-safe' },
        { num: '05', title: 'Police 112 Sync', desc: 'Nearest PCR patrol vector lock.', border: 'hover:border-blue-500/50', color: 'text-blue-600' },
        { num: '06', title: 'Safe Stand Down', desc: 'Two-factor sanctuary verified.', border: 'hover:border-emerald-600/50', color: 'text-emerald-600' }
    ];

    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-white border-b border-slate-200/80">
            <div className="max-w-[1440px] mx-auto space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-1">
                    <span className="text-alert-crimson font-label-caps text-xs uppercase tracking-widest font-bold">Sub-3-Second Chain</span>
                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">The Closed-Loop Rescue Operation</h2>
                    <p className="text-sm text-text-secondary">Instantaneous progression from physical trigger to on-site police intercept.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {steps.map((step) => (
                        <div
                            key={step.num}
                            className={`p-4 rounded-xl bg-surface-pearl border border-slate-200/80 space-y-1 ${step.border} transition-all hover:shadow-md`}
                        >
                            <span className={`font-telemetry-lg text-lg font-bold ${step.color}`}>{step.num}</span>
                            <h4 className="font-bold text-xs text-text-primary">{step.title}</h4>
                            <p className="text-[11px] text-text-secondary">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
