import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/hero_bg_1767532750179.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md">
                    <span className="text-sky-400 text-sm font-semibold tracking-wide uppercase">
                        Your Trusted Global Partner
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                    Explore the World & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-200">
                        Build Your Career
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Orbit Consultancy connects you with premium abroad job opportunities and curates exclusive tour packages. We turn your global dreams into reality.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="#jobs"
                        className="group w-full md:w-auto px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-bold transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1 relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">Find Abroad Jobs <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                    </Link>
                    <Link
                        href="#tours"
                        className="w-full md:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-sky-400/50 hover:text-sky-400 bg-white/5 backdrop-blur-sm transition-all text-white font-semibold transform hover:-translate-y-1"
                    >
                        Explore Tour Packages
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl p-6">
                    <div className="space-y-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">500+</h3>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Jobs Secured</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">50+</h3>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Destinations</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">2k+</h3>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Happy Travelers</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">100%</h3>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
