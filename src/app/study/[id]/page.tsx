import Link from "next/link";
import { studyCountries } from "@/data/study";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return studyCountries.map((country) => ({
        id: country.id,
    }));
}

export default async function StudyDetailPage({ params }: PageProps) {
    const { id } = await params;
    const country = studyCountries.find((c) => c.id === id);

    if (!country) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover opacity-40 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="text-slate-300 font-medium uppercase tracking-widest text-xs">{country.name}</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase">
                        {country.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your professional journey in {country.name} with our expert guidance and guaranteed support.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Programs Section */}
                        {country.programs && (
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-sky-500 rounded-full" />
                                    Available Programs
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {country.programs.map((program, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/30 transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-slate-200 font-medium pt-2 group-hover:text-sky-400 transition-colors">
                                                {program}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Highlights Section */}
                        <section className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-sky-500 rounded-full" />
                                Key Highlights & Benefits
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                                {country.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="flex-shrink-0 text-sky-500 text-lg">✓</span>
                                        <span className="font-medium text-sm md:text-base">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar / CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 text-black shadow-2xl relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Ready to Start?</h3>
                                <p className="mb-8 relative z-10 text-white/90 font-medium">
                                    Our counselors are ready to help you with the admission process and visa assistance.
                                </p>
                                <Link
                                    href={`/contact?subject=Application for Study in ${country.name}`}
                                    className="block text-center py-4 rounded-2xl bg-black text-white font-bold hover:bg-slate-900 transition-all shadow-lg relative z-10"
                                >
                                    Apply for Admission
                                </Link>
                                <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-black/60 relative z-10">
                                    Limited Seats Available
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-white font-bold mb-6">Need Immediate Assistance?</h4>
                                <div className="space-y-4">
                                    <Link href="tel:+1234567890" className="flex items-center gap-4 text-slate-400 hover:text-sky-400 transition-colors">
                                        <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">📞</span>
                                        <span>Call Our Expert</span>
                                    </Link>
                                    <Link href="https://wa.me/1234567890" className="flex items-center gap-4 text-slate-400 hover:text-sky-400 transition-colors">
                                        <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">📱</span>
                                        <span>WhatsApp Us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
