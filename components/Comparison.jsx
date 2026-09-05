function Comparison() {
    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-white border-b border-slate-200/80" id="comparison">
            <div className="max-w-[1440px] mx-auto space-y-8">
                <div className="max-w-3xl">
                    <span className="text-alert-crimson font-label-caps text-xs uppercase tracking-widest font-bold">Why Legacy Apps Fail</span>
                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight mt-1">Traditional SOS vs. Raksha Thunai</h2>
                    <p className="text-sm text-text-secondary mt-1">Comparing legacy single-shot alert mechanisms with Raksha Thunai's closed-loop AI defense.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Traditional Failure */}
                    <div className="p-6 rounded-2xl bg-surface-pearl border border-rose-200/70 space-y-4">
                        <div className="flex items-center gap-2.5 text-alert-crimson">
                            <span className="material-symbols-outlined text-[28px]">cancel</span>
                            <h3 className="font-bold text-lg text-text-primary">Legacy Panic Button Flaws</h3>
                        </div>
                        <p className="text-xs text-alert-crimson font-bold font-mono">"SOS. I need help." — Static, one-shot SMS coordinate snapshot.</p>
                        <ul className="space-y-2.5 text-xs text-text-secondary font-medium">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-alert-crimson text-[16px] mt-0.5">close</span>
                                <span><strong className="text-text-primary">Screen Unlock Dependency:</strong> Requires FaceID or passcode during extreme physical panic.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-alert-crimson text-[16px] mt-0.5">close</span>
                                <span><strong className="text-text-primary">Zero Context:</strong> Family doesn't know if it's an accident, medical distress, or stalker.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-alert-crimson text-[16px] mt-0.5">close</span>
                                <span><strong className="text-text-primary">Static GPS Lock:</strong> Leaves rescuers stranded if victim or perpetrator is moving.</span>
                            </li>
                        </ul>
                    </div>
                    {/* Raksha Thunai Solution */}
                    <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-md space-y-4">
                        <div className="flex items-center gap-2.5 text-status-safe">
                            <span className="material-symbols-outlined text-[28px]">check_circle</span>
                            <h3 className="font-bold text-lg text-text-primary">Raksha Thunai AI Resolution</h3>
                        </div>
                        <p className="text-xs text-status-safe font-bold font-mono">Continuous Evolving Situational Mesh &amp; Responder Relay</p>
                        <ul className="space-y-2.5 text-xs text-text-secondary font-medium">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-status-safe text-[16px] mt-0.5">check</span>
                                <span><strong className="text-text-primary">Zero-UI Activation:</strong> Hardware Action Button or pocket shake with no screen unlock.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-status-safe text-[16px] mt-0.5">check</span>
                                <span><strong className="text-text-primary">Acoustic &amp; Speech Extraction:</strong> Sarvam AI continuously logs vehicle noises, whispers, and threat.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-status-safe text-[16px] mt-0.5">check</span>
                                <span><strong className="text-text-primary">Dynamic Vector Breadcrumb:</strong> Live moving trajectory + nearest 24/7 safe haven navigation.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
