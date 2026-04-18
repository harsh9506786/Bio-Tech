"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FlaskConicalIcon,
  CpuIcon,
  DatabaseIcon,
  ArrowRightIcon,
} from "lucide-react";

export function ResearchHighlight() {
  const router = useRouter();

  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FlaskConicalIcon size={24} />,
      value: "15+",
      label: "Research Labs",
    },
    { icon: <CpuIcon size={24} />, value: "50+", label: "Scientists" },
    { icon: <DatabaseIcon size={24} />, value: "100+", label: "Patents Filed" },
  ];

  const dataPoints = [
    { top: "20%", left: "20%" },
    { top: "40%", left: "70%" },
    { top: "60%", left: "30%" },
    { top: "75%", left: "60%" },
  ];

  return (
    <section
      id="research"
      className="py-24 bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          >
            <span className="inline-block px-3 py-1 bg-gold-accent/20 text-gold-accent font-inter text-sm font-medium rounded-full mb-4">
              Innovation Hub
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Science That Drives Growth
            </h2>
            <div className="w-20 h-1 bg-gold-accent mb-6" />

            <div className="mb-8">
              <p className="font-inter text-lg text-gray-300 font-bold leading-relaxed mb-2">
                Where Innovation Meets Precision Manufacturing
              </p>

              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                Biotech International Limited operates a fully integrated
                biotech manufacturing and research facility. Our advanced
                cleanroom laboratory drives innovation and precision-led product
                development, supported by a passionate team dedicated to
                delivering reliable, high-quality biotechnology solutions.
              </p>
            </div>

            <button
              className="group inline-flex items-center gap-2 text-black font-inter font-medium px-6 py-3 rounded-full transition-colors duration-300 cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
              }}
              onClick={() => router.push("/contact")}
            >
              Connect with us
              <ArrowRightIcon
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/labimg4.jpg"
                alt="GLP Certified R&D Laboratory"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Ring */}
            <div className="absolute -inset-4 border border-green-900/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
