"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  // Generate random particles for the background
  const router = useRouter();

  const particles = Array.from({
    length: 15,
  }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
  }));
  return (
    <section className="relative min-h-[80vh]  flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-[#E6F2EC] to-white pt-36 md:pt-0">
      {/* Molecular Background Animation */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full border-2 border-biotech-green/20 bg-biotech-green/5"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#007A3D"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-biotech-green/10 text-biotech-green text-sm font-semibold tracking-wide mb-6 border border-biotech-green/20">
            ESTABLISHED 1992
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            About{" "}
            <span className="text-biotech-green">Biotech International</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2 font-light">
            Innovating Biotechnology for a Sustainable Future
          </p>

          <div className="w-24 h-1 bg-biotech-gold mx-auto my-8"></div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            For over three decades, Biotech International Ltd. has been
            transforming agriculture and public health through cutting-edge
            biological technologies and microbial innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push("/products")}
            >
              Explore Our Products
            </Button>

            <button
              onClick={() => router.push("/contact")}
              className="
    inline-flex items-center justify-center
    font-medium
    transition-all duration-300
    rounded-md
    focus:outline-none focus:ring-2 focus:ring-offset-2
    border-2 border-[#007A3D]
    text-[#007A3D]
    hover:bg-[#007A3D] hover:text-white
    focus:ring-[#007A3D]
    px-8 py-4 text-lg 
    cursor-pointer
  "
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
