'use client';

import React from "react";

const logos = [
  "/clients/logo.png",
  "/clients/logo.png",
  "/clients/logo.png",
  "/clients/logo.png",
  "/clients/logo.png",
  "/clients/logo.png",
];

const tripled = [...logos, ...logos, ...logos];

export default function ClientSlider() {
  return (
    <section className="bg-black py-16 overflow-hidden">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Awesome Clients
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Track */}
        <div className="flex items-center gap-28 w-max px-10 animate-marquee">
          {tripled.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo}
                alt={`Client ${(i % logos.length) + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
}