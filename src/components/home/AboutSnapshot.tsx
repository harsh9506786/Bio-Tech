"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSnapshot() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>

            <div className="w-20 h-1 bg-yellow-500 mb-8" />

            <p className="text-lg text-gray-600 mb-6">
              Biotech International Ltd. (BIL) has been a trusted biotechnology
              innovator since the 1990s.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Serving farmers and organizations across 50+ countries.
            </p>

            <button className="group inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
              About Biotech International
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-green-700/10 flex items-center justify-center">
              <p className="text-green-700/60">Lab Environment Image</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
