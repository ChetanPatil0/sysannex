'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We deep dive into your business goals, users, and technical requirements.",
    bg: "bg-blue-500/15",
    border: "border-blue-400/30",
    dot: "bg-blue-500",
    points: [
      "Business Requirements",
      "User Research",
      "Technical Planning",
      "Timeline & Scope"
    ]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    desc: "Creating beautiful UI/UX designs and interactive prototypes.",
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/30",
    dot: "bg-cyan-500",
    points: [
      "Wireframes",
      "UI Design",
      "Interactive Prototype",
      "Client Approval"
    ]
  },
  {
    number: "03",
    title: "Development",
    desc: "Agile development with clean code and testing.",
    bg: "bg-emerald-500/15",
    border: "border-emerald-400/30",
    dot: "bg-emerald-500",
    points: [
      "Frontend Development",
      "Backend Integration",
      "Testing & QA",
      "Performance Optimization"
    ]
  },
  {
    number: "04",
    title: "Launch & Growth",
    desc: "Smooth deployment and scaling support.",
    bg: "bg-red-500/15",
    border: "border-red-400/30",
    dot: "bg-red-500",
    points: [
      "Deployment",
      "Training",
      "Monitoring",
      "Ongoing Support"
    ]
  }
];

export default function Process() {

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Our Proven Process
          </h2>

          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Simple, transparent, and efficient from idea to launch
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-14 hidden md:block">

          {/* Base line */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200" />

          {/* Progress line */}
          <motion.div
            className="absolute top-6 left-0 h-[2px] bg-blue-500"
            animate={{
              width: `${((activeStep + 1) / steps.length) * 100}%`
            }}
            transition={{ duration: 0.8 }}
          />

          {/* Circles */}
          <div className="grid grid-cols-4 relative">

            {steps.map((step, index) => {

              const isActive = activeStep === index;
              const isCompleted = activeStep > index;

              return (
                <div key={index} className="flex justify-center">

                  <motion.div
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    className={`
                      w-11 h-11 rounded-full
                      flex items-center justify-center
                      text-white font-semibold shadow-md
                      transition-all duration-300
                      ${isCompleted
                        ? step.dot
                        : isActive
                        ? step.dot
                        : 'bg-gray-300 text-gray-600'}
                    `}
                  >

                    {/* Number or Check */}
                    {isCompleted ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      step.number
                    )}

                  </motion.div>

                </div>
              );

            })}

          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((step, index) => {

            const isActive = activeStep === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`
                  ${step.bg}
                  ${step.border}
                  border
                  backdrop-blur-md
                  rounded-3xl
                  p-7
                  transition-all duration-300
                  ${isActive ? 'shadow-xl scale-[1.03]' : 'hover:shadow-lg'}
                `}
              >

                {/* Title */}
                <h3 className="font-semibold text-xl mb-3 text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4">
                  {step.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2">

                  {step.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      {point}
                    </li>
                  ))}

                </ul>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}