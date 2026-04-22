// 'use client';

// import { motion } from 'framer-motion';
// import {
//   ArrowRight,
//   ChevronDown,
//   Zap,
//   Shield,
//   Users,
//   Award,
//   Clock,
//   HeartHandshake,
//   Star,
//   Rocket,
//   Globe,
//   Smartphone
// } from 'lucide-react';
// import { useState, useEffect } from 'react';

// const services = [
//   "# Custom Software Development",
//   "# Website Design & Development",
//   "# Mobile App Development",
//   "# E-Commerce Solutions",
//   "# Digital Marketing Services",
//   "# SEO Optimization",
//   "# Bulk SMS Marketing",
//   "# WhatsApp Marketing",
//   "# Election Campaign Solutions"
// ];

// const marqueeItems = [
//   { icon: Zap, label: 'Fast Delivery' },
//   { icon: Shield, label: 'Secure & Scalable' },
//   { icon: Users, label: 'Expert Team' },
//   { icon: Award, label: 'Quality First' },
//   { icon: Clock, label: '24/7 Support' },
//   { icon: HeartHandshake, label: 'Long-term Partner' },
//   { icon: Star, label: 'Award-Winning' },
//   { icon: Rocket, label: 'Fast Turnaround' },
//   { icon: Globe, label: 'Web Solutions' },
//   { icon: Smartphone, label: 'Mobile Apps' }
// ];

// export default function Hero() {
//   const [currentService, setCurrentService] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showScroll, setShowScroll] = useState(true);

//   useEffect(() => {
//     const current = services[currentService];
//     let timeout;

//     if (!isDeleting) {
//       if (displayText.length < current.length) {
//         timeout = setTimeout(() => {
//           setDisplayText(current.slice(0, displayText.length + 1));
//         }, 55);
//       } else {
//         timeout = setTimeout(() => setIsDeleting(true), 1800);
//       }
//     } else {
//       if (displayText.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayText(displayText.slice(0, -1));
//         }, 30);
//       } else {
//         setIsDeleting(false);
//         setCurrentService((prev) => (prev + 1) % services.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentService]);

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY < 60);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="min-h-screen pt-24 pb-10 flex flex-col items-center justify-center relative overflow-hidden">

//       <div className="max-w-5xl mx-auto px-6 text-center w-full">

//         {/* Typing Service Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="mb-8 inline-block px-4 py-2 
//           bg-white/10 backdrop-blur-md 
//           border border-white/20 
//           rounded-xl"
//         >
//           <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--teal)] bg-clip-text text-transparent">
//             {displayText}
//             <span className="animate-pulse text-[var(--teal)]">|</span>
//           </span>
//         </motion.div>

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           className="mb-8"
//         >
//           <h1 className="heading-font text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
//             <span className="text-slate-900">Building Digital Solutions For</span>
//             <br />
//             <span className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--green)] bg-clip-text text-transparent">
//               Growing Businesses
//             </span>
//           </h1>
//         </motion.div>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.22 }}
//           className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12"
//         >
//           We design and develop custom software, build modern websites, create mobile applications,
//           and deliver data-driven digital marketing solutions to help businesses grow faster and smarter.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.32 }}
//           className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14"
//         >
//           <a
//             href="#contact"
//             className="group px-8 py-4 rounded-xl bg-[var(--primary-blue)] text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3"
//           >
//             Get Free Consultation
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </a>

//           <a
//             href="#services"
//             className="px-8 py-4 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:border-gray-400 transition-all"
//           >
//             Explore Our Services
//           </a>
//         </motion.div>

//       </div>

//       {/* Scroll Indicator (FIXED, no layout spacing issue) */}
//       {showScroll && (
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-50"
//           onClick={() =>
//             document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <p className="text-xs tracking-[2px] text-gray-400 mb-1 font-medium">
//             SCROLL TO EXPLORE
//           </p>
//           <ChevronDown size={28} className="text-gray-400" />
//         </motion.div>
//       )}

//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  Users,
  Award,
  Clock,
  HeartHandshake,
  Star,
  Rocket,
  Globe,
  Smartphone
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  "# Custom Software Development",
  "# Website Design & Development",
  "# Mobile App Development",
  "# E-Commerce Solutions",
  "# Digital Marketing Services",
  "# SEO Optimization",
  "# Bulk SMS Marketing",
  "# WhatsApp Marketing",
  "# Election Campaign Solutions"
];

const marqueeItems = [
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Shield, label: 'Secure & Scalable' },
  { icon: Users, label: 'Expert Team' },
  { icon: Award, label: 'Quality First' },
  { icon: Clock, label: '24/7 Support' },
  { icon: HeartHandshake, label: 'Long-term Partner' },
  { icon: Star, label: 'Award-Winning' },
  { icon: Rocket, label: 'Fast Turnaround' },
  { icon: Globe, label: 'Web Solutions' },
  { icon: Smartphone, label: 'Mobile Apps' }
];

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  const heroRef = useRef(null);

  /* Typing Animation */
  useEffect(() => {
    const current = services[currentService];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentService((prev) => (prev + 1) % services.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentService]);

  /* Show Scroll Only in Hero */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScroll(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-24 pb-10 flex flex-col items-center justify-center relative overflow-hidden"
    >

      <div className="max-w-5xl mx-auto px-6 text-center w-full">

        {/* Typing Service Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 inline-block px-4 py-2 
          bg-white/10 backdrop-blur-md 
          border border-white/20 
          rounded-xl"
        >
          <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--teal)] bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse text-[var(--teal)]">|</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="heading-font text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-slate-900">Building Digital Solutions For</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--green)] bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          We design and develop custom software, build modern websites, create mobile applications,
          and deliver data-driven digital marketing solutions to help businesses grow faster and smarter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-[var(--primary-blue)] text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:border-gray-400 transition-all"
          >
            Explore Our Services
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() =>
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <p className="text-xs tracking-[2px] text-gray-400 mb-1 font-medium">
            SCROLL TO EXPLORE
          </p>
          <ChevronDown size={28} className="text-gray-400" />
        </motion.div>
      )}

    </section>
  );
}