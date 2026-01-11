import Link from "next/link";
import { jobs } from "@/data/jobs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AllJobsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-black pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <Link href="/#jobs" className="text-slate-400 hover:text-sky-400 mb-4 inline-block transition-colors">
                                ← Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold text-white">All Vacancies</h1>
                            <p className="text-slate-400 mt-4 text-lg">Discover your next career move from our global network.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
                            <span className="text-sky-400 font-bold text-2xl">{jobs.length}</span>
                            <span className="text-slate-400 ml-2">Total Positions</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                            <Link href={`/jobs/${job.id}`} key={job.id} className="group">
                                <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-300 backdrop-blur-sm relative overflow-hidden flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-3xl border border-sky-500/20">
                                            {job.countryFlag}
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10 group-hover:border-sky-500/30 transition-colors">
                                            {job.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{job.title}</h3>
                                    <p className="text-slate-400 mb-8">{job.company} • {job.location}</p>
                                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Monthly Salary</p>
                                            <span className="text-xl font-bold text-sky-400">{job.salary}</span>
                                        </div>
                                        <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-black transition-all">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
