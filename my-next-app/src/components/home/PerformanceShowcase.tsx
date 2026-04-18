"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUpIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";


export function PerformanceShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();


  return (
    <section className=" bg-white" ref={ref}>
      <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-light to-green-primary/10">
              {/* Before / After Images */}
              <div className="absolute inset-0 flex">
                {/* Before */}
                <div className="relative w-1/2 border-r border-white/50 overflow-hidden">
                  <img
                    src="/images/badcrop.png"
                    alt="Before using biotech solutions"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 text-gray-700 text-xs font-inter px-4 py-1.5 rounded-full">
                      Before
                    </span>
                  </span>
                </div>

                {/* After */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src="/images/goodcrop.png"
                    alt="After using biotech solutions"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-green-primary/90 text-white text-xs font-inter px-4 py-1.5 rounded-full">
                      After
                    </span>
                  </span>
                </div>
              </div>

              {/* Stats Overlay */}
              <motion.div
                initial={{ y: 0 }}
                animate={isInView ? { y: [0, -20, 0] } : { y: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
                    <TrendingUpIcon className="text-green-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Text */}
                  <div>
                    {/* <p className="font-poppins text-xl sm:text-2xl font-bold text-green-primary">
                      +18%
                    </p> */}
                    <p className="font-inter text-xs sm:text-sm text-gray-600">
                      Average Yield Increase
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-accent/20 rounded-xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-green-light text-green-primary font-inter text-sm font-medium rounded-full mb-4">
              Proven Performance
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Results That Speak
            </h2>
            <div className="w-20 h-1 bg-gold-accent mb-8" />
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
              Our biopesticides and biofertilizers have consistently increased
              crop yield while restoring soil health — proving nature and
              science can grow together.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Reduced chemical dependency by up to 40%",
                "Improved soil microbial activity",
                "Enhanced crop resilience to stress",
                "Sustainable long-term productivity",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon
                    size={18}
                    strokeWidth={6}
                    className="text-green-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="font-inter text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-2 bg-green-primary text-white font-inter font-medium px-6 py-3 rounded-full hover:bg-green-dark transition-colors duration-300 cursor-pointer" onClick={() => router.push("/contact")}>
              Connect with us
              <ArrowRightIcon
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
