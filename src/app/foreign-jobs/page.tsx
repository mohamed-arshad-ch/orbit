"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { countries } from "@/data/jobs";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ForeignJobs() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                            Foreign Vacancies
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Explore premium job opportunities across the globe. We connect you with top employers in various industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {countries.map((country, index) => (
                            <Link href={`/jobs/country/${country.id}`} key={country.id} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    className="h-full rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/50 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm relative overflow-hidden group"
                                >
                                    <div className="h-40 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
                                        <Image
                                            src={country.image}
                                            alt={country.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                        <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/10">
                                            {country.flag}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{country.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-sm">{country.vacancyCount} Vacancies</span>
                                            <span className="text-sky-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
