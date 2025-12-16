"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ----------------------------
// Molecular Particles Canvas
// ----------------------------
function MolecularParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 162, 74, ${particle.opacity})`;
        ctx.fill();

        // Connect lines
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 122, 61, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
}

// ----------------------------
// HeroSection Component
// ----------------------------
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <Image
        src="/images/banner.png"
        alt="Hero Background"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Transparent Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,95,46,0.6) 0%, rgba(0,122,61,0.6) 50%, rgba(0,63,32,0.6) 100%)",
        }}
      ></div>

      {/* Molecular Particles */}
      <MolecularParticles />

      {/* Left Icon → Top-Left */}
      <div className="absolute top-32 left-28 w-48 h-48 opacity-70">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <Image
            src="icon1.svg"
            alt="Left Icon"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Right Icon → Bottom-Right */}
      <div className="absolute bottom-40 right-8 w-64 h-64 opacity-70">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <Image
            src="icon2.svg"
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glass Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="inline-block px-6 sm:px-8 lg:px-10 py-2 bg-white/10 backdrop-blur-sm rounded-full font-inter font-bold mb-6
  text-sm sm:text-base md:text-lg lg:text-xl leading-tight"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #C9A24A 0%, #F2D27A 50%, #B88A2E 100%)",
              }}
            >
              ADVANCED MICROBIAL TECHNOLOGY
            </span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
        >
          Innovative Biological
          <br />
          Solutions for
          <br />
          <span
            className="bg-clip-text text-transparent font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
            }}
          >
            Sustainable Agriculture
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            className="w-full sm:w-auto text-green-900 font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
              boxShadow: "0 10px 30px rgba(201,162,74,0.35)",
            }}
          >
            Explore Products
          </button>

          <button className="w-full sm:w-auto bg-transparent border border-white text-white font-poppins font-semibold px-14 py-4 rounded-full hover:bg-white hover:text-green-900 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
