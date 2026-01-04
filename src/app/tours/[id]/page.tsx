import Link from "next/link";
import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return tours.map((tour) => ({
        id: tour.id,
    }));
}

export default async function TourDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const tour = tours.find((t) => t.id === id);

    if (!tour) {
        notFound();
    }

    const whatsappMessage = `Hi, I am interested in booking the "${tour.title}" tour package (${tour.duration}). Please provide availability and booking details.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Header />
            <main className="min-h-screen bg-black pt-24 pb-12">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link href="/#tours" className="text-slate-400 hover:text-sky-400 mb-8 inline-block transition-colors">
                        ← Back to Tour Packages
                    </Link>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Content - Main Info */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Hero Banner Style Card */}
                            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-slate-900 flex flex-col justify-end p-8">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="relative z-10">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold rounded-full uppercase tracking-wider mb-3 inline-block">
                                        {tour.duration}
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{tour.title}</h1>
                                    <p className="text-white/90 flex items-center gap-2">
                                        <span className="text-lg">📍</span> {tour.location}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">{tour.description}</p>
                            </section>

                            {/* Highlights */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Trip Highlights</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {tour.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                            <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-lg">★</div>
                                            <span className="text-slate-200 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Itinerary */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Detailed Itinerary</h2>
                                <div className="space-y-6 border-l-2 border-sky-500/20 ml-3 pl-8 relative">
                                    {tour.itinerary.map((item) => (
                                        <div key={item.day} className="relative">
                                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-black border-4 border-sky-500" />
                                            <h3 className="text-lg font-bold text-white mb-1">Day {item.day}: {item.title}</h3>
                                            <p className="text-slate-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Sidebar - Booking Card */}
                        <div className="md:col-span-1">
                            <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sticky top-28 backdrop-blur-sm">
                                <div className="mb-6">
                                    <p className="text-slate-400 text-sm mb-1">Package Price</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-sky-400">{tour.price}</span>
                                        <span className="text-slate-500 text-sm">/ person</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Inclusions</h4>
                                        <ul className="space-y-2">
                                            {tour.inclusions.map((inc, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <span className="text-sky-500">✓</span> {inc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b857] text-white font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/20 mb-4"
                                >
                                    <span>Book via WhatsApp</span>
                                </a>
                                <p className="text-slate-500 text-xs text-center">
                                    Secure your spot directly with our agents. No hidden fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
