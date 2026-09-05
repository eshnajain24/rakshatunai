function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
                <div className="flex items-center justify-between w-full">
                    <a href="#" className="flex items-center gap-3">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKh6C5_jWBHKgngYOYg3XWTMxlVkLLtyTwDmGtyOx7P8w_bKoCZHBjZK2Nr1TO4ry9cNgLGosrOrHBMVBSE62Nu_zA8Hz9EPWKYgLB3MxftDsopQ2lkmoFMBrX76CXTEeDOQdYsJ-zC5cdmqYjQ-xRn4hH6lMtpiBpBGpMzMnwTG57wLfFpLjcEJLDmMQZE6ftHSHCgJfNFC4uYd0xYR31llwNcLkpkMfEXISyVeuBR-mTKYtYlOxgC29OHgvKYV4kkQ"
                            alt="Raksha Thunai Logo"
                            className="h-12 md:h-14 w-auto object-contain"
                        />
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-text-secondary">
                        <a href="#live-simulator" className="hover:text-alert-crimson transition-colors">Simulator</a>
                        <a href="#silent-tapad" className="hover:text-alert-crimson transition-colors">Silent Tap-Pad</a>
                        <a href="#comparison" className="hover:text-alert-crimson transition-colors">Why Raksha Thunai</a>
                        <a href="#multilingual-ai" className="hover:text-alert-crimson transition-colors">Sarvam AI</a>
                        <a href="#system-architecture" className="hover:text-alert-crimson transition-colors">Architecture</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
