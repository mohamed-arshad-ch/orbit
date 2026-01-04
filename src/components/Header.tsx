"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                    Orbit Consultancy
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium hover:text-sky-400 transition-colors">Home</Link>
                    <Link href="#jobs" className="text-sm font-medium hover:text-sky-400 transition-colors">Abroad Jobs</Link>
                    <Link href="#tours" className="text-sm font-medium hover:text-sky-400 transition-colors">Tour Packages</Link>
                    <Link href="#about" className="text-sm font-medium hover:text-sky-400 transition-colors">About Us</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm transition-all shadow-lg shadow-sky-500/20"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10 absolute w-full left-0 top-full">
                    <div className="flex flex-col p-6 space-y-4">
                        <Link href="/" className="text-lg hover:text-sky-400" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#jobs" className="text-lg hover:text-sky-400" onClick={() => setIsOpen(false)}>Abroad Jobs</Link>
                        <Link href="#tours" className="text-lg hover:text-sky-400" onClick={() => setIsOpen(false)}>Tour Packages</Link>
                        <Link href="#about" className="text-lg hover:text-sky-400" onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link href="#contact" className="text-sky-400 font-semibold" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
