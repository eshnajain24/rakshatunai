function Architecture() {
    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-surface-pearl border-b border-slate-200/80" id="system-architecture">
            <div className="max-w-[1440px] mx-auto space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-1">
                    <span className="text-status-safe font-label-caps text-xs uppercase tracking-widest font-bold">Zero Single Point of Failure</span>
                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Enterprise Defensive Architecture</h2>
                    <p className="text-sm text-text-secondary">Engineered to execute even in sub-way dead zones and device lockouts.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
                    {/* Tier 1 */}
                    <div className="space-y-2">
                        <div className="text-[10px] font-bold text-alert-crimson uppercase tracking-wider">TIER 01 • CLIENT HARDWARE &amp; CACHE LAYER</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">iOS AppIntent &amp; Action Button</div>
                                <div className="text-text-secondary mt-0.5">Locks background AVAudioEngine node.</div>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Android Broadcast Receiver</div>
                                <div className="text-text-secondary mt-0.5">Sticky wake-locks on power double-tap.</div>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Zero-Data Offline Cache</div>
                                <div className="text-text-secondary mt-0.5">Encrypted SQLite packet sync on reconnect.</div>
                            </div>
                        </div>
                    </div>

                    {/* Tier 2 */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">TIER 02 • SARVAM INDIC AI INGESTION MESH</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Speech-To-Meaning Indic Parser</div>
                                <div className="text-text-secondary mt-0.5">Whisper and panic categorization across Tamil, Hindi, Telugu, Kannada, and English.</div>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Acoustic Environmental Analysis</div>
                                <div className="text-text-secondary mt-0.5">Automotive engine signatures, door slams, scream transients.</div>
                            </div>
                        </div>
                    </div>

                    {/* Tier 3 */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-status-safe uppercase tracking-wider">TIER 03 • SECURE DISPATCH &amp; CONSUMERS</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Police 112 Control Desk</div>
                                <div className="text-text-secondary mt-0.5">Live streaming heading vector &amp; PCR routing.</div>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Zero-Install Guardian Console</div>
                                <div className="text-text-secondary mt-0.5">Cryptographic web link with real-time GPS feed.</div>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-pearl border border-slate-200">
                                <div className="font-bold text-text-primary">Safe Haven Beacon Mesh</div>
                                <div className="text-text-secondary mt-0.5">Automated routing to 24/7 pharmacies &amp; stations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
