function Footer() {
    return (
        <footer className="w-full bg-white text-text-secondary py-10 border-t border-slate-200/80">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-alert-crimson text-white">
                        <span className="material-symbols-outlined text-[16px]">shield</span>
                    </div>
                    <span className="font-bold text-text-primary text-sm">Raksha Thunai</span>
                    <span className="text-text-tertiary">|</span>
                    <span>© 2025 AI Emergency Intelligence. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                    <a className="hover:text-text-primary transition-colors" href="#live-simulator">Simulator</a>
                    <a className="hover:text-text-primary transition-colors" href="#multilingual-ai">Sarvam AI</a>
                    <a className="hover:text-text-primary transition-colors" href="#silent-tapad">Silent Tap-Pad</a>
                    <a className="hover:text-text-primary transition-colors" href="#system-architecture">Architecture</a>
                    <span className="text-status-safe font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-status-safe"></span>
                        Mesh Operational
                    </span>
                </div>
            </div>
        </footer>
    );
}
