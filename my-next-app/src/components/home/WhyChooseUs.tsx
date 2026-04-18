"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  BeakerIcon,
  MicroscopeIcon,
  CheckCircleIcon,
  GlobeIcon,
  ArrowRightIcon,
} from "lucide-react";

const features = [
  {
    icon: <BeakerIcon size={28} />,
    title: "Certified Quality",
    description:
      "ISO, cGMP, and GLP verified manufacturing processes ensuring highest standards.",
    bgImage: "/images/whychoose1.jpg",
  },

  {
    icon: <MicroscopeIcon size={28} />,
    title: "Advanced R&D",
    description:
      "GLP labs with automated fermentation systems for cutting-edge research.",
    bgImage: "/images/whychoose5.jpg",
  },
  {
    icon: <CheckCircleIcon size={28} />,
    title: "Proven Results",
    description:
      "Field-tested solutions across diverse crops and climatic conditions.",
    bgImage: "/images/photos/crop.jpeg",
  },
  {
    icon: <GlobeIcon size={28} />,
    title: "Global Network",
    description:
      "Serving agriculture and health sectors in 50+ countries worldwide.",
    bgImage: "/images/whychoose3.jpg",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  return (
    <section ref={ref} className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-light text-green-primary font-inter text-sm font-medium rounded-full mb-4">
            Our Strengths
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Biotech International
          </h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto" />
        </motion.div>

        {/* Feature Cards */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-green-primary/20 transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none z-0"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                }}
              />
              {/* Gold accent */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gold-accent rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <div className="relative z-30">
                <div className="w-14 h-14 rounded-xl bg-green-light text-green-primary flex items-center justify-center mb-6 group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>

                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="font-inter text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
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
            className="group inline-flex items-center gap-2 bg-green-primary text-white font-inter font-medium px-6 py-3 rounded-full hover:bg-green-dark transition-colors duration-300 cursor-pointer"
            onClick={() => router.push("/about#strength")}
          >
            Know Our Strengths
            <ArrowRightIcon
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
