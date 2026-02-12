"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section for About Us */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[100px] -z-10" />
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                            About Orbita Consultancy
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            We are your trusted partners in navigating the global landscape of opportunities. Whether it&apos;s finding your dream job abroad or pursuing higher education in top international universities, we are here to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-sky-500/20 rounded-full blur-[80px] -z-10" />
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[500px]">
                                <Image
                                    src="/about_team_1767532958040.png"
                                    alt="Our Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white font-medium italic">&quot;Connecting talent with opportunity, worldwide.&quot;</p>
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                            >
                                Why Choose Us?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 mb-6 leading-relaxed"
                            >
                                We don&apos;t just find jobs or book tours; we craft life-changing experiences. With a network spanning across 20+ countries and partnerships with top-tier companies, we ensure your journey is safe, rewarding, and seamless.
                            </motion.p>
                            <ul className="space-y-4 mb-8">
                                {['Government Approved', 'Transparent Processing', '24/7 Support', 'Best Price Guarantee', 'Experienced Counselors', 'Global Network'].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i + 0.3 }}
                                        className="flex items-center gap-3 text-white"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center text-black text-xs">✓</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <Link href="/#contact">
                                <button className="px-6 py-3 rounded-full bg-sky-500 text-black font-semibold hover:bg-sky-400 transition-colors">
                                    Contact Us Today
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section or Other Info */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Global Presence</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-4xl font-bold text-sky-400 mb-2">20+</h3>
                            <p className="text-slate-400">Countries</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-4xl font-bold text-sky-400 mb-2">500+</h3>
                            <p className="text-slate-400">Placements</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-4xl font-bold text-sky-400 mb-2">100%</h3>
                            <p className="text-slate-400">Success Rate</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-4xl font-bold text-sky-400 mb-2">24/7</h3>
                            <p className="text-slate-400">Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
