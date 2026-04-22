
'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, HealthNova",
    initials: "PS",
    text: "sysAnnex delivered our telemedicine platform in record time. The quality and attention to detail exceeded our expectations.",
    rating: 5,
    accent: "#2563eb",
    accentBg: "#eff6ff",
  },
  {
    name: "Rahul Mehta",
    role: "CEO, FinTrack",
    initials: "RM",
    text: "Working with sysAnnex was a game changer for our fintech product. Their expertise in both development and marketing is unmatched.",
    rating: 5,
    accent: "#14b8a6",
    accentBg: "#f0fdfa",
  },
  {
    name: "Ananya Desai",
    role: "Marketing Head, EduSphere",
    initials: "AD",
    text: "The digital marketing campaign they ran for us increased our leads by 340% in just 3 months. Highly recommended!",
    rating: 5,
    accent: "#22c55e",
    accentBg: "#f0fdf4",
  },
  {
    name: "Rahul Mehta",
    role: "CEO, FinTrack",
    initials: "RM",
    text: "Their development speed and quality is top-notch. We scaled our product faster than expected.",
    rating: 5,
    accent: "#14b8a6",
    accentBg: "#f0fdfa",
  },
  {
    name: "Ananya Desai",
    role: "Marketing Head, EduSphere",
    initials: "AD",
    text: "Super smooth experience. They understood our vision perfectly and executed flawlessly.",
    rating: 5,
    accent: "#22c55e",
    accentBg: "#f0fdf4",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header (SMOOTH TEXT ONLY) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-blue-600"
            >
              <Sparkles size={14} />
            </motion.div>

            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.1] mb-4"
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-[17px] max-w-md mx-auto leading-relaxed"
          >
            Real feedback from businesses we've helped grow and scale.
          </motion.p>

        </motion.div>

        {/* SWIPER (SMOOTHER + SLOWER) */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="cursor-grab active:cursor-grabbing"
        >

          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                {/* Quote */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: t.accentBg }}
                >
                  <Quote size={18} style={{ color: t.accent }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[15px] leading-relaxed text-slate-600 mb-7 flex-1">
                  "{t.text}"
                </p>

                <div className="w-full h-px bg-slate-100 mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{ background: t.accentBg, color: t.accent }}
                  >
                    {t.initials}
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

