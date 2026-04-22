'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Why Us', href: '/#why' },
    { name: 'Careers', href: '/careers' },
    // { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="sysAnnex Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-gray-700">
            sys<span className="text-gray-900">Annex</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--primary-blue)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden md:block px-6 py-3 bg-[var(--primary-blue)] text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 px-6 py-8 flex flex-col gap-6 text-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--primary-blue)]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-4 px-6 py-4 bg-[var(--primary-blue)] text-white rounded-2xl text-center font-medium"
          >
            Contact Us
          </Link>
        </motion.div>
      )}
    </nav>
  );
}