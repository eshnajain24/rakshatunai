function CTA() {
    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-alert-crimson text-xs font-bold uppercase tracking-wider">
                    Enterprise &amp; Campus Deployments
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-2xl mx-auto">
                    Ready to deploy institutional safety for your citizens and workforce?
                </h2>
                <p className="text-sm text-text-secondary max-w-xl mx-auto">
                    Deploy Raksha Thunai's zero-friction AI protection across your state, campus, or corporate fleets today.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button className="px-6 py-3.5 rounded-xl bg-alert-crimson hover:bg-alert-crimson-hover text-white font-bold text-sm shadow-lg shadow-alert-crimson/25 transition-all hover:scale-105 active:scale-95">
                        Request Deployment Access
                    </button>
                    <a className="px-5 py-3.5 rounded-xl bg-surface-pearl border border-slate-200 hover:bg-slate-100 text-text-primary font-semibold text-sm transition-all shadow-xs" href="#live-simulator">
                        Re-run Interactive Demo
                    </a>
                </div>
                <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-text-secondary font-semibold">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-status-safe">verified</span> ISO 27001 Certified</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-status-safe">lock</span> End-to-End Encrypted</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-status-safe">bolt</span> Sub-3s Police 112 Sync</span>
                </div>
            </div>
        </section>
    );
}
