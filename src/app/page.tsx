"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { jobs, countries } from "@/data/jobs";
import { tours } from "@/data/tours";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Featured Jobs Section */}
      <section id="jobs" className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Foreign Vacancies</h2>
              <p className="text-slate-400">Discover premium opportunities across the globe.</p>
            </div>
            <Link href="/jobs" className="hidden md:block text-sky-400 font-semibold hover:text-sky-300 transition-colors">View All Vacancies →</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                      onError={(e) => {
                        // Fallback handling if needed, though Next.js Image is tricky with onError
                      }}
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
          <div className="mt-8 text-center md:hidden">
            <Link href="/jobs" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">View All Vacancies →</Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tours" className="py-20 relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[100px] -z-10 translate-y-1/2 opacity-50" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exclusive Tour Packages</h2>
            <p className="text-slate-400">Handpicked destinations for your next unrestricted adventure. Experience luxury and culture like never before.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Link href={`/tours/${tour.id}`} key={tour.id} className="block group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  className="h-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-sky-500/20 flex flex-col"
                >
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute top-4 right-4 z-10">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20">↗</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="px-3 py-1 bg-sky-500 text-black text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block shadow-lg">
                        {tour.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-white drop-shadow-md">{tour.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-4 mb-6 text-sm text-slate-400">
                      <span className="flex items-center gap-1">✈️ Flight</span>
                      <span className="flex items-center gap-1">🏨 Hotel</span>
                      <span className="flex items-center gap-1">🍽️ Meals</span>
                    </div>
                    <div className="mt-auto flex justify-between items-center pt-6 border-t border-white/5">
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Starting from</p>
                        <span className="text-xl font-bold text-sky-400">{tour.price}</span>
                      </div>
                      <span className="px-5 py-2 rounded-xl bg-white text-black text-sm font-bold group-hover:bg-sky-500 transition-colors">
                        View Deal
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
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
                  <p className="text-white font-medium italic">"Connecting talent with opportunity, worldwide."</p>
                </div>
              </div>
            </motion.div>
            <div className="order-1 md:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Why Choose Orbit Consultancy?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 mb-6 leading-relaxed"
              >
                We don't just find jobs or book tours; we craft life-changing experiences. With a network spanning across 20+ countries and partnerships with top-tier companies, we ensure your journey is safe, rewarding, and seamless.
              </motion.p>
              <ul className="space-y-4 mb-8">
                {['Government Approved', 'Transparent Processing', '24/7 Support', 'Best Price Guarantee'].map((item, i) => (
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
              <Link href="/about">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sky-400 font-semibold border-b border-sky-400 pb-0.5 hover:text-white hover:border-white transition-all"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
