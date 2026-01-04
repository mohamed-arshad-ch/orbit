
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/about_team_1767532958040.png"
                    alt="About Orbit Consultancy"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        We Are Orbit
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-2xl"
                    >
                        Connecting Ambitions with Global Opportunities Since 2015.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-2xl mb-6">🚀</div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-slate-400 leading-relaxed">
                                To empower individuals by providing transparent, reliable, and efficient pathways to international careers and travel experiences. We strive to bridge the gap between talent and opportunity across borders.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-6">👁️</div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-slate-400 leading-relaxed">
                                To be the world's most trusted consultancy for global mobility, recognized for our integrity, excellence in service, and commitment to client success in every journey we undertake.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact & Map Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                            <p className="text-slate-400 mb-12 text-lg">
                                Ready to start your journey? Visit our office or contact us through any of the channels below. We're here to help you 24/7.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xl border border-sky-500/30 mt-1">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Head Office</h3>
                                        <p className="text-slate-400">123 Business Avenue, Suite 400<br />Business District, City, Country 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xl border border-sky-500/30 mt-1">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Phone Support</h3>
                                        <p className="text-slate-400">+1 (555) 123-4567</p>
                                        <p className="text-slate-500 text-sm">Mon-Fri 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xl border border-sky-500/30 mt-1">
                                        ✉️
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                                        <p className="text-slate-400">info@orbitconsultancy.com</p>
                                        <p className="text-slate-400">support@orbitconsultancy.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[500px] w-full bg-slate-800 rounded-3xl overflow-hidden border border-white/10 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1626377717452!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                className="group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            {/* Map Overlay Button */}
                            <a
                                href="https://goo.gl/maps/example"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute bottom-6 right-6 bg-sky-500 text-black px-6 py-2 rounded-full font-bold shadow-lg hover:bg-sky-400 transition-colors"
                            >
                                Open in Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
