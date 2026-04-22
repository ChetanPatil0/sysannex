'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';

const categories = ['All', 'Web App', 'Mobile App', 'E-Commerce', 'Dashboard', 'ERP'];

const projects = [
  {
    title: "FinTrack Pro",
    category: "Web App",
    desc: "Real-time financial dashboard with analytics, reporting and multi-account management.",
    image: "https://picsum.photos/id/1015/600/400",
    accent: "#2563eb",
    accentBg: "#eff6ff",
    tag: "Web App",
    year: "2024",
  },
  {
    title: "HealthFlow",
    category: "Mobile App",
    desc: "Patient management, appointment booking and teleconsultation for modern clinics.",
    image: "https://picsum.photos/id/106/600/400",
    accent: "#14b8a6",
    accentBg: "#f0fdfa",
    tag: "Mobile App",
    year: "2024",
  },
  {
    title: "ShopSphere",
    category: "E-Commerce",
    desc: "Full-featured online store with secure payments, inventory and order tracking.",
    image: "https://picsum.photos/id/201/600/400",
    accent: "#2563eb",
    accentBg: "#eff6ff",
    tag: "E-Commerce",
    year: "2023",
  },
  {
    title: "EduNova",
    category: "Dashboard",
    desc: "Learning management with live classes, progress tracking and certifications.",
    image: "https://picsum.photos/id/237/600/400",
    accent: "#22c55e",
    accentBg: "#f0fdf4",
    tag: "Dashboard",
    year: "2023",
  },
  {
    title: "LogiTrack ERP",
    category: "ERP",
    desc: "End-to-end fleet and delivery management with real-time GPS and analytics.",
    image: "https://picsum.photos/id/180/600/400",
    accent: "#f59e0b",
    accentBg: "#fffbeb",
    tag: "ERP",
    year: "2024",
  },
  {
    title: "PaySwift",
    category: "Web App",
    desc: "Seamless payment gateway integration with multi-currency support and fraud detection.",
    image: "https://picsum.photos/id/160/600/400",
    accent: "#2563eb",
    accentBg: "#eff6ff",
    tag: "Web App",
    year: "2024",
  },
  {
    title: "MediSync",
    category: "Mobile App",
    desc: "Doctor-patient communication app with prescriptions, lab reports and reminders.",
    image: "https://picsum.photos/id/119/600/400",
    accent: "#14b8a6",
    accentBg: "#f0fdfa",
    tag: "Mobile App",
    year: "2023",
  },
  {
    title: "StyleCart",
    category: "E-Commerce",
    desc: "Fashion e-commerce platform with AR try-on, wishlist and loyalty rewards.",
    image: "https://picsum.photos/id/177/600/400",
    accent: "#7c3aed",
    accentBg: "#f5f3ff",
    tag: "E-Commerce",
    year: "2024",
  },
  {
    title: "BuildDesk",
    category: "Dashboard",
    desc: "Construction project management dashboard with timelines, budgets and team tracking.",
    image: "https://picsum.photos/id/164/600/400",
    accent: "#f59e0b",
    accentBg: "#fffbeb",
    tag: "Dashboard",
    year: "2023",
  },
];

const PER_PAGE = 6;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              Work We've Done
            </span>
          </div>

          <h2 className="heading-font text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-4">
          Projects We’ve{' '}
            <span className="bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>
          <p className="text-slate-500 text-[17px] leading-relaxed max-w-md mx-auto">
            A glimpse into the projects we've built and shipped for our clients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className="px-5 py-2 rounded-full text-[13px] font-semibold border transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: '#0f172a', color: '#fff', borderColor: '#0f172a' }
                  : { background: '#fff', color: '#64748b', borderColor: '#e2e8f0' }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginated.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[190px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />

                  <span
                    className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ background: `${project.accent}dd` }}
                  >
                    {project.tag}
                  </span>

                  <span className="absolute top-3 right-3 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/90 text-slate-600">
                    {project.year}
                  </span>

                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-slate-900" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div
                    className="h-[2px] rounded-full mb-3 transition-all duration-300 group-hover:w-14 w-7"
                    style={{ background: project.accent }}
                  />
                  <h3 className="text-[16px] font-semibold text-slate-900 mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            {/* Prev */}
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Pages */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="w-9 h-9 rounded-xl border text-[13px] font-semibold transition-all duration-200"
                style={
                  page === p
                    ? { background: '#0f172a', color: '#fff', borderColor: '#0f172a' }
                    : { background: '#fff', color: '#64748b', borderColor: '#e2e8f0' }
                }
              >
                {p}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}