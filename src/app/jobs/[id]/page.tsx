import Link from "next/link";
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return jobs.map((job) => ({
        id: job.id,
    }));
}

export default async function JobDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const job = jobs.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    const whatsappMessage = `Hi, I am interested in the ${job.title} position at ${job.company} (${job.referenceCode}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Header />
            <main className="min-h-screen bg-black pt-24 pb-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/#jobs" className="text-slate-400 hover:text-sky-400 mb-8 inline-block transition-colors">
                        ← Back to Jobs
                    </Link>

                    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-white/10 pb-8">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl">{job.countryFlag}</span>
                                    <span className="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-sm font-semibold border border-sky-500/20">
                                        {job.type}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{job.title}</h1>
                                <p className="text-xl text-slate-400">{job.company} • {job.location}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-500 text-sm mb-1">Monthly Salary</p>
                                <p className="text-3xl font-bold text-sky-400">{job.salary}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">Job Description</h2>
                                    <p className="text-slate-300 leading-relaxed text-lg">{job.description}</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">Requirements</h2>
                                    <ul className="space-y-3">
                                        {job.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">Benefits</h2>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {job.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                                                <span className="text-sky-400">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="md:col-span-1">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-28">
                                    <h3 className="text-lg font-bold text-white mb-6">Job Overview</h3>

                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">Posted Date</p>
                                            <p className="text-white">{job.postedDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">Reference Code</p>
                                            <p className="text-white font-mono">{job.referenceCode}</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">Location</p>
                                            <p className="text-white">{job.location}</p>
                                        </div>
                                    </div>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center bg-[#25D366] hover:bg-[#20b857] text-white font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/20"
                                    >
                                        Apply via WhatsApp
                                    </a>
                                    <p className="text-slate-500 text-xs text-center mt-3">
                                        Clicking will open WhatsApp with specific job details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
