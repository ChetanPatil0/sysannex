'use client';
import { useScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', setProgress);
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary-blue)] via-[var(--teal)] to-[var(--green)] z-50 origin-left"
      style={{ scaleX: progress }}
    />
  );
}