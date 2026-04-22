'use client';

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-4">
                <img
            src="/logo.png"
            alt="sysAnnex Logo"
            className="h-10 w-auto"
          />
<span className="text-xl font-semibold text-gray-100">sysAnnex</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              We build modern digital products, scalable websites, and software solutions
              that help businesses grow faster.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-slate-400">

              <a href="#" className="hover:text-white transition">
                <FaFacebookF size={18} />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/919021173776"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaWhatsapp size={18} />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 9021173776</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>sysannex@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@sysannex.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} />
                <span>
                  18, Gajanan Chowk, Vijay Nagar,<br />
                  Sinnar, Nashik - 422103
                </span>
              </div>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>

            <ul className="space-y-3 text-sm">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software</li>
              <li>E-Commerce Solutions</li>
              <li>Digital Marketing</li>
              <li>WhatsApp & SMS Automation</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR (CLEANED) */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} sysannex. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}