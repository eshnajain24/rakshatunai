function App() {
    return (
        <div className="bg-surface-pearl font-body-md text-text-primary antialiased selection:bg-alert-crimson selection:text-white min-h-screen">
            <Header />
            <main className="w-full pt-20 bg-surface-pearl min-h-screen">
                <div className="flex flex-col w-full">
                    <Hero />
                    <Simulator />
                    <TapPadAndCancelShield />
                    <Comparison />
                    <MultilingualAI />
                    <RescueOperation />
                    <Architecture />
                    <CTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
