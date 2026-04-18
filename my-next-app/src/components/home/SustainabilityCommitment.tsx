"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  LeafIcon,
  RecycleIcon,
  SunIcon,
  DropletIcon,
  ArrowRightIcon,
} from "lucide-react";

const ecoFeatures = [
  {
    icon: <LeafIcon size={28} />,
    title: "Zero-Waste Fermentation",
    description: "Sustainable production processes",
  },
  {
    icon: <RecycleIcon size={28} />,
    title: "Recyclable Packaging",
    description: "Eco-friendly materials",
  },
  {
    icon: <SunIcon size={28} />,
    title: "Renewable Energy",
    description: "Solar-powered facilities",
  },
  {
    icon: <DropletIcon size={28} />,
    title: "Water Conservation",
    description: "Efficient water management",
  },
];

export default function SustainabilityCommitment() {
  const ref = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sustainability"
      className="py-24 bg-green-primary relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="leaf-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path d="M10 0 Q15 5 10 10 Q5 5 10 0" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-white/20 text-white font-inter text-sm font-medium rounded-full mb-4">
            Our Commitment
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Committed to Sustainable Biotechnology
          </h2>
          <p className="font-inter text-lg text-white/80 max-w-3xl mx-auto">
            From zero-waste fermentation to recyclable packaging, sustainability
            defines every step of our process.
          </p>
        </motion.div>

        {/* Eco Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {ecoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 text-gold-accent flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-poppins text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-white/70 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            className="group inline-flex items-center gap-2 bg-white text-green-primary font-inter font-medium px-6 py-3 rounded-full transition-all duration-300 hover:[background:linear-gradient(90deg,#C9A24A_0%,#FFF1B8_50%,#B88A2E_100%)] hover:text-green-dark cursor-pointer"
            onClick={() => router.push("/about#certificate")}
          >
            Connect with us
            <ArrowRightIcon
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
