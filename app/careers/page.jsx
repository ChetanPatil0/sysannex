'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Globe,
  Code2,
  BarChart3,
  Users,
  TrendingUp,
  Lightbulb,
  Rocket,
  Shield,
  Heart,
  Palette
} from 'lucide-react';

import ApplicationModal from '@/components/ApplicationModal';

const openings = [
  {
    title: 'Digital Marketing Executive',
    type: 'Remote/On-site',
    roleType: 'Full Time',
    experience: '0–2 Years',
    description:
      'Plan and execute SEO, paid campaigns and social media growth strategies.',
    skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
    icon: <BarChart3 size={20} />
  },
  {
  title: 'Graphic Designer',
  type: 'Remote/On-site',
  roleType: 'Full Time',
  experience: '0–2 Years',
  description:
    'Create visually appealing designs for websites, social media, branding and marketing materials.',
  skills: ['Photoshop', 'Illustrator', 'Figma', 'Canva'],
  icon: <Palette size={20} />
},
  {
    title: 'Full Stack Developer',
    type: 'Remote/On-site',
    roleType: 'Full Time',
    experience: '0 – 2 Years',
    description:
      'Develop scalable applications using MongoDB, React, Node and Next.js.',
    skills: ['MongoDB', 'React', 'Node', 'Next.js'],
    icon: <Code2 size={20} />
  }
];

const whyJoin = [
  {
    title: 'Growth Opportunities',
    desc: 'Accelerate your career with real-world projects and mentorship.',
    color: 'bg-blue-50 text-blue-600',
    icon: <TrendingUp size={20} />
  },
  {
    title: 'Collaborative Culture',
    desc: 'Work with passionate designers, developers and strategists.',
    color: 'bg-emerald-50 text-emerald-600',
    icon: <Users size={20} />
  },
  {
    title: 'Innovation Driven',
    desc: 'Build cutting-edge digital solutions and modern platforms.',
    color: 'bg-purple-50 text-purple-600',
    icon: <Lightbulb size={20} />
  },
  {
    title: 'Fast Growing Team',
    desc: 'Join a rapidly growing digital solutions company.',
    color: 'bg-amber-50 text-amber-600',
    icon: <Rocket size={20} />
  },
  {
    title: 'Work Life Balance',
    desc: 'Flexible environment focused on productivity and well-being.',
    color: 'bg-rose-50 text-rose-600',
    icon: <Heart size={20} />
  },
  {
    title: 'Secure & Stable',
    desc: 'Long term career opportunities with stable growth.',
    color: 'bg-cyan-50 text-cyan-600',
    icon: <Shield size={20} />
  }
];

export default function Careers() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const gradientText =
    'bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] bg-clip-text text-transparent';

  const scrollToOpenings = () => {
    document
      .getElementById('openings')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-22 pb-24">

      {/* HERO */}
      <section className="relative py-32 mb-28 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/career-hero-bg.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-white">
            Build Your Career With{' '}
            <span className={gradientText}>
              SysAnnex
            </span>
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg mb-8">
            Join our growing team and build impactful digital solutions
            while accelerating your professional growth.
          </p>

          <button
            onClick={scrollToOpenings}
            className="px-8 py-4 border border-white/30 text-white rounded-2xl font-medium hover:bg-white hover:text-black transition"
          >
            See Openings
          </button>

        </div>
      </section>

      {/* WHY JOIN */}
      <section className="max-w-7xl mx-auto px-6 mb-32">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-semibold mb-4">
            Why Join <span className={gradientText}>Us</span>
          </h2>

          <p className="text-slate-500">
            We create an environment where innovation, growth and people come first.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {whyJoin.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition"
            >

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* OPENINGS */}
      <section id="openings" className="max-w-7xl mx-auto px-6 mb-28">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-semibold mb-4">
            Current <span className={gradientText}>Openings</span>
          </h2>

          <p className="text-slate-500">
            Explore opportunities with our growing team
          </p>

        </div>

      <div className="grid md:grid-cols-3 gap-6">

  {openings.map((job, index) => (

    <motion.div
      key={index}
      whileHover={{ y: -6 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
    >

      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        {job.icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {job.title}
      </h3>

      <p className="text-sm text-slate-500 mb-4">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">

        <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-medium">
          {job.experience}
        </span>

        <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg font-medium">
          {job.type}
        </span>

        <span className="text-xs px-3 py-1 bg-purple-50 text-purple-600 rounded-lg font-medium">
          {job.roleType}
        </span>

      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 bg-slate-100 rounded-lg text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() => {
          setSelectedJob(job.title);
          setOpen(true);
        }}
        className="text-[var(--primary-blue)] font-medium hover:underline"
      >
        Apply Now →
      </button>

    </motion.div>

  ))}

</div>

      </section>

      {/* HR INFO */}
      <section className="max-w-4xl mx-auto px-6">

        <div className="border border-slate-200 rounded-2xl p-10 text-center bg-white shadow-sm">

          <h3 className="text-2xl font-semibold mb-3">
            Share Your Resume
          </h3>

          <p className="text-slate-500 mb-6">
            Share your detailed resume and we will get back to you when a suitable opportunity becomes available.
          </p>

          <div className="space-y-2 text-slate-600">

            <p>
              Email: <span className="font-medium">sysannex@gmail.com</span>
            </p>

            <p>
              WhatsApp: <span className="font-medium">+91 9021173776</span>
            </p>

          </div>

        </div>

      </section>

      <ApplicationModal
        open={open}
        onClose={() => setOpen(false)}
        jobTitle={selectedJob}
      />

    </div>
  );
}