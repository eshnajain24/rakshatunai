function Hero() {
    return (
        <section className="relative w-full py-16 lg:py-20 px-6 lg:px-12 bg-gradient-to-b from-white via-surface-pearl to-slate-50 border-b border-slate-200/70 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 -right-32 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
                <div className="max-w-3xl space-y-6 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-alert-crimson text-xs font-bold uppercase tracking-wider shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-alert-crimson animate-pulse"></span>
                        Autonomous AI Situational Defense
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
                        We aren't reinventing the SOS button.<br />
                        <span className="text-alert-crimson">We reinvent what happens next.</span>
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed font-normal max-w-2xl">
                        When danger strikes, cognitive bandwidth drops to zero. Raksha Thunai transforms natural whispered speech into <strong className="text-text-primary">actionable tactical intelligence</strong> with instant responder dispatch in under 3 seconds.
                    </p>
                    <div className="pt-2 space-y-4 flex flex-col items-center">
                        <div className="space-y-1">
                            <div className="text-xs font-bold uppercase tracking-wider text-alert-crimson">Available now on iOS &amp; Android</div>
                            <p className="text-xs text-text-secondary font-medium">Instant Zero-UI Setup • Free for Citizens &amp; Students</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a href="#download-ios" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all hover:-translate-y-0.5 border border-slate-700">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.06 1.7-0.93 2.71 1 .08 2.03-.46 2.65-1.21z"></path>
                                </svg>
                                <div className="text-left leading-tight">
                                    <div className="text-[10px] tracking-wider uppercase font-medium text-slate-300">Download on the</div>
                                    <div className="text-sm font-bold text-white">App Store</div>
                                </div>
                            </a>
                            <a href="#download-android" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all hover:-translate-y-0.5 border border-slate-700">
                                <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.22-.986V2.8a2.38 2.38 0 0 1 .219-.986zm11.306 11.307l2.259 2.258-11.66 6.643 9.401-8.901zm2.259-2.242l-2.259 2.258L5.514 4.234l11.66 6.645zm1.185.673c.642.366 1.058 1.048 1.058 1.808 0 .76-.416 1.442-1.058 1.808l-1.884 1.073-2.63-2.63 2.63-2.63 1.884 1.071z"></path>
                                </svg>
                                <div className="text-left leading-tight">
                                    <div className="text-[10px] tracking-wider uppercase font-medium text-slate-300">GET IT ON</div>
                                    <div className="text-sm font-bold text-white">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
