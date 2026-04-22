'use client';

import { motion } from 'framer-motion';
import {
  Code2, Globe, Smartphone,
  ShoppingCart, BarChart3, MessageSquare, Sparkles
} from 'lucide-react';

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Custom Software",
    desc: "Secure, scalable software solutions tailored to your exact business needs and workflows.",
    color: "bg-blue-500",
    accent: "#2563eb",
    lightBg: "bg-blue-50",
    tag: "Enterprise",
  },
  {
    icon: <Globe size={24} />,
    title: "Website Development",
    desc: "Modern, responsive, SEO-friendly websites built to convert visitors into customers.",
    color: "bg-cyan-500",
    accent: "#0891b2",
    lightBg: "bg-cyan-50",
    tag: "Popular",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    desc: "High-performance Android & iOS apps with seamless UX and robust architecture.",
    color: "bg-emerald-500",
    accent: "#059669",
    lightBg: "bg-emerald-50",
    tag: "iOS & Android",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce Solutions",
    desc: "Complete online stores with secure payments, inventory management and analytics.",
    color: "bg-indigo-500",
    accent: "#4f46e5",
    lightBg: "bg-indigo-50",
    tag: "Full Stack",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Digital Marketing",
    desc: "Data-driven SEO, social media and paid marketing strategies that drive real growth.",
    color: "bg-rose-500",
    accent: "#e11d48",
    lightBg: "bg-rose-50",
    tag: "Growth",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Bulk SMS & WhatsApp",
    desc: "Automated bulk messaging, campaigns and real-time notifications at scale.",
    color: "bg-violet-500",
    accent: "#7c3aed",
    lightBg: "bg-violet-50",
    tag: "Automation",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">

            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
              className="text-blue-600"
            >
              <Sparkles size={14} />
            </motion.div>

            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              What We Offer
            </span>
          </div>

          <h2 className="heading-font text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-4 leading-[1.1]">
            Our Core{' '}
            <span className="bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-slate-500 text-[17px] max-w-lg mx-auto leading-relaxed">
            Powerful digital solutions that help your business grow faster and smarter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >

              <div className="flex items-start justify-between mb-5">

                <motion.div 
                whileHover={{ rotate: 6 }}
                className={`w-11 h-11 rounded-xl ${service.color} text-white flex items-center justify-center shadow-sm`}
                >
                  {service.icon}
                </motion.div>

                <span 
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${service.lightBg} tracking-wide`}
                  style={{ color: service.accent }}
                >
                  {service.tag}
                </span>

              </div>

              <h3 className="text-[16px] font-semibold text-slate-900 mb-2 leading-snug">
                {service.title}
              </h3>

              <div 
                className="w-8 h-[2px] rounded-full mb-3 transition-all duration-300 group-hover:w-14"
                style={{ background: service.accent, opacity: 0.4 }}
              />

              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-1">
                {service.desc}
              </p>

            

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}