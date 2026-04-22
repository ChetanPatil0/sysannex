// 'use client';
// import { motion } from 'framer-motion';

// export default function FloatingBackground() {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f0f9ff] to-[#ecfdf5]" />
      
//       <motion.div 
//         className="floating-shape absolute -top-40 -left-60 w-[600px] h-[600px] bg-[var(--primary-blue)] rounded-full"
//         animate={{ x: [0, 80, 0], y: [0, -70, 0] }}
//         transition={{ duration: 45, repeat: Infinity }}
//       />
//       <motion.div 
//         className="floating-shape absolute top-1/3 right-20 w-[500px] h-[500px] bg-[var(--teal)] rounded-full"
//         animate={{ x: [0, -90, 0], y: [0, 80, 0] }}
//         transition={{ duration: 38, repeat: Infinity }}
//       />
//       <motion.div 
//         className="floating-shape absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-[var(--green)] rounded-full"
//         animate={{ x: [0, 110, 0], y: [0, -60, 0] }}
//         transition={{ duration: 52, repeat: Infinity }}
//       />

//       <div className="tech-grid absolute inset-0 opacity-40" />
//     </div>
//   );
// }


'use client';

import { useEffect, useRef } from "react";

export default function FloatingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const GRID = 42;
    const COLORS = ['#2563eb', '#14b8a6', '#22c55e'];
    const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

    // nodes
    const COLS = Math.ceil(W / GRID) + 2;
    const ROWS = Math.ceil(H / GRID) + 2;
    const nodes = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if (Math.random() < 0.32) nodes.push({ x: c * GRID, y: r * GRID });

    // zigzag circuit traces
    const traces = [];
    nodes.forEach(n => {
      [[GRID,0],[0,GRID],[-GRID,0],[0,-GRID]].forEach(([dx, dy]) => {
        if (Math.random() < 0.38) {
          const steps = rnd(1, 4);
          const pts = [{ x: n.x, y: n.y }];
          let cx = n.x, cy = n.y;
          for (let i = 0; i < steps; i++) {
            if (Math.random() < 0.45 && i < steps - 1) {
              const p = dy === 0
                ? [0, GRID * (Math.random() < 0.5 ? 1 : -1)]
                : [GRID * (Math.random() < 0.5 ? 1 : -1), 0];
              cx += p[0]; cy += p[1];
              pts.push({ x: cx, y: cy });
            }
            cx += dx; cy += dy;
            pts.push({ x: cx, y: cy });
          }
          traces.push({ pts, color: COLORS[rnd(0, 2)] });
        }
      });
    });

    // pulses
    const pulses = [];
    const spawnPulse = () => {
      const t = traces[rnd(0, traces.length - 1)];
      if (t.pts.length < 2) return;
      pulses.push({ trace: t, progress: 0, speed: 0.003 + Math.random() * 0.005, color: t.color });
    };
    for (let i = 0; i < 22; i++) spawnPulse();

    const hexRgba = (hex, a) => {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      return `rgba(${r},${g},${b},${a})`;
    };

    const lerp = (pts, t) => {
      const tot = pts.length - 1;
      const seg = t * tot;
      const i = Math.min(Math.floor(seg), tot - 1);
      const f = seg - i;
      return { x: pts[i].x + (pts[i+1].x - pts[i].x) * f, y: pts[i].y + (pts[i+1].y - pts[i].y) * f };
    };

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      // static traces — very faint
      traces.forEach(t => {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(37,99,235,0.08)';
        ctx.lineWidth = 1;
        t.pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();
      });

      // junction nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20,184,166,0.13)';
        ctx.fill();
      });

      // flowing pulses
      pulses.forEach(p => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          if (Math.random() < 0.25) {
            p.trace = traces[rnd(0, traces.length - 1)];
            p.color = p.trace.color;
          }
        }
        const tail = 0.15;
        const start = Math.max(0, p.progress - tail);
        for (let s = 0; s < 10; s++) {
          const t0 = start + (p.progress - start) * (s / 10);
          const t1 = start + (p.progress - start) * ((s + 1) / 10);
          const pt0 = lerp(p.trace.pts, t0);
          const pt1 = lerp(p.trace.pts, t1);
          ctx.beginPath();
          ctx.moveTo(pt0.x, pt0.y);
          ctx.lineTo(pt1.x, pt1.y);
          ctx.strokeStyle = hexRgba(p.color, 0.06 + 0.45 * (s / 10));
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        // pulse head dot
        const head = lerp(p.trace.pts, p.progress);
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = hexRgba(p.color, 0.75);
        ctx.fill();
        // soft glow ring
        ctx.beginPath();
        ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = hexRgba(p.color, 0.12);
        ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f0f9ff] to-[#ecfdf5]" />
      {/* circuit canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
    </div>
  );
}