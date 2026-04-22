// 'use client';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Clock, Users, Award, Sparkles, ArrowUpRight } from 'lucide-react';

// const features = [
//   {
//     icon: <Sparkles size={20} />,
//     title: "Tailor-made Solutions",
//     desc: "Custom-built solutions designed specifically for your business goals and workflows.",
//     color: "bg-blue-500",
//     accent: "#2563eb",
//   },
//   {
//     icon: <Users size={20} />,
//     title: "Experienced Team",
//     desc: "Senior developers & designers with deep product experience across industries.",
//     color: "bg-cyan-500",
//     accent: "#0891b2",
//   },
//   {
//     icon: <ShieldCheck size={20} />,
//     title: "Performance & Security",
//     desc: "Secure, scalable and performance-optimized applications built to last.",
//     color: "bg-emerald-500",
//     accent: "#059669",
//   },
//   {
//     icon: <Clock size={20} />,
//     title: "On-Time Delivery",
//     desc: "Clear milestones, transparent timelines and reliable project delivery.",
//     color: "bg-indigo-500",
//     accent: "#4f46e5",
//   },
//   {
//     icon: <Award size={20} />,
//     title: "Continuous Improvement",
//     desc: "We support and evolve your product long after launch with ongoing care.",
//     color: "bg-rose-500",
//     accent: "#e11d48",
//   },
//   {
//     icon: <Users size={20} />,
//     title: "Long-term Partnership",
//     desc: "We become your dedicated technology partner, not just a vendor.",
//     color: "bg-violet-500",
//     accent: "#7c3aed",
//   },
// ];

// const stats = [
//   { value: "50+", label: "Projects" },
//   { value: "98%", label: "Satisfaction" },
//   { value: "5+", label: "Years" },
// ];

// export default function WhyChoose() {
//   return (
//     <section id="why" className="py-32 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-20 items-start">

//           {/* Left */}
//           <div className="lg:w-5/12">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.5 }}
//               className="sticky top-28 space-y-8"
//             >
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
//                 </span>
//                 <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
//                   Why Businesses Trust Us
//                 </span>
//               </div>

//               {/* Heading */}
//               <div>
//                 <h2 className="heading-font text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
//                   Why Choose{' '}
//                   <span className="bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent">
//                     sysAnnex
//                   </span>
//                 </h2>
//                 <p className="text-[17px] text-slate-500 leading-relaxed max-w-sm">
//                   Modern digital solutions built with performance, reliability,
//                   and long-term scalability at the core.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="flex gap-0 divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm w-fit">
//                 {stats.map((s, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: 0.2 + i * 0.08 }}
//                     className="flex flex-col items-center px-7 py-4"
//                   >
//                     <span className="text-2xl font-bold text-slate-900 tracking-tight">{s.value}</span>
//                     <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">{s.label}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* CTA */}
//               <motion.a
//                 href="#contact"
//                 whileHover={{ x: 3 }}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors duration-200"
//               >
//                 Start a Project
//                 <ArrowUpRight size={15} />
//               </motion.a>
//             </motion.div>
//           </div>

//           {/* Right Cards */}
//           <div className="lg:w-7/12 w-full">
//             <div className="grid md:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: false, margin: "-80px" }}
//                   transition={{
//                     delay: index * 0.08,
//                     duration: 0.6,
//                     ease: "easeOut"
//                   }}
//                   whileHover={{ y: -4 }}
//                   className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
//                 >

//                   {/* Icon + Title row */}
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className={`w-10 h-10 rounded-xl ${feature.color} text-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
//                       {feature.icon}
//                     </div>
//                     <h3 className="text-[15px] font-semibold text-slate-900 leading-snug">
//                       {feature.title}
//                     </h3>
//                   </div>

//                   {/* Desc */}
//                   <p className="text-[13.5px] text-slate-500 leading-relaxed">
//                     {feature.desc}
//                   </p>

//                 </motion.div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Award, Sparkles, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={20} />,
    title: "Tailor-made Solutions",
    desc: "Custom-built solutions designed specifically for your business goals and workflows.",
    color: "bg-blue-500",
  },
  {
    icon: <Users size={20} />,
    title: "Experienced Team",
    desc: "Senior developers & designers with deep product experience across industries.",
    color: "bg-cyan-500",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Performance & Security",
    desc: "Secure, scalable and performance-optimized applications built to last.",
    color: "bg-emerald-500",
  },
  {
    icon: <Clock size={20} />,
    title: "On-Time Delivery",
    desc: "Clear milestones, transparent timelines and reliable project delivery.",
    color: "bg-indigo-500",
  },
  {
    icon: <Award size={20} />,
    title: "Continuous Improvement",
    desc: "We support and evolve your product long after launch with ongoing care.",
    color: "bg-rose-500",
  },
  {
    icon: <Users size={20} />,
    title: "Long-term Partnership",
    desc: "We become your dedicated technology partner, not just a vendor.",
    color: "bg-violet-500",
  },
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "5+", label: "Years" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChoose() {
  return (
    <section id="why" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* Left */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sticky top-28 space-y-8"
            >

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
                  Why Businesses Trust Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                <h2 className="heading-font text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
                  Why Choose{' '}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent inline-block"
                  >
                    sysAnnex
                  </motion.span>
                </h2>

                <p className="text-[17px] text-slate-500 leading-relaxed max-w-sm">
                  Modern digital solutions built with performance, reliability,
                  and long-term scalability at the core.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
                className="flex gap-0 divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm w-fit"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="flex flex-col items-center px-7 py-4"
                  >
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </motion.a>

            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="lg:w-7/12 w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${feature.color} text-white flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-[15px] font-semibold text-slate-900 leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-[13.5px] text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

