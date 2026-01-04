
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 mb-10">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent mb-4">Orbit Consultancy</h3>
                        <p className="text-slate-500 max-w-xs">Your bridge to international success and unforgettable adventures. Licensed and trusted by thousands.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><Link href="/#jobs" className="hover:text-sky-400 transition-colors">Abroad Jobs</Link></li>
                            <li><Link href="/#tours" className="hover:text-sky-400 transition-colors">Tour Packages</Link></li>
                            <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                            <li><Link href="/#contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li>info@orbitconsultancy.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Business Avenue, City</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-slate-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Orbit Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
