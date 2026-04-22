
'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeSideLeft = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (TEXT ONLY ANIMATION) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="heading-font text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-4"
          >
            About{' '}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent"
            >
              sysAnnex
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-[17px] max-w-lg mx-auto"
          >
            Technology-driven company delivering reliable and scalable
            digital solutions since 2014.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE (NO ANIMATION + LAZY LOAD ONLY) */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/about_img1.jpg"
                alt="SysAnnex"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Static Badge (NO ANIMATION) */}
            <div className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-lg border border-blue-100 shadow-[0_8px_25px_rgba(37,99,235,0.12)] rounded-xl px-4 py-3 flex items-center gap-2">
              <div className="text-xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--teal)] bg-clip-text text-transparent">
                10+
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-slate-700">Years</p>
                <p className="text-[10px] text-slate-500">Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (TEXT ONLY SMOOTH ANIMATION) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-blue-50 rounded-3xl -z-10" />

            <div className="space-y-6 p-2">

              <motion.h3
                variants={fadeUp}
                className="heading-font text-3xl md:text-4xl font-semibold text-slate-900"
              >
                We turn ideas into powerful{' '}
                <span className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--teal)] bg-clip-text text-transparent">
                  digital experiences
                </span>
              </motion.h3>

              <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
                SysAnnex Softwares & Services is a technology-driven company
                based in Nashik, Maharashtra. Founded in 2014 we help businesses build reliable, scalable and modern digital solutions.
              </motion.p>

              <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
                With over 10+ years of experience, SysAnnex has worked with startups, small businesses and enterprises across multiple industries.
              </motion.p>

              <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
                We specialize in custom software development, web applications, automation and enterprise solutions.
              </motion.p>

              <motion.a
                href="#about"
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-black font-semibold"
              >
                More About Us
                <ArrowRight size={16} />
              </motion.a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

