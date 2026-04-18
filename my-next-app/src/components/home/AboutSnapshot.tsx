"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function AboutSnapshot() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <section id="about" className="py-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <span className="inline-block px-3 py-1 bg-green-light text-green-primary font-inter text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gold-accent mb-8" />
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
              Biotech International Ltd. (BIL) has been a trusted biotechnology
              innovator since the 1990s. We produce biopesticides,
              biofertilizers, and microbial products certified for organic
              farming and global public health use.
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
              Our commitment to research-driven innovation has positioned us as
              a leader in sustainable agricultural solutions, serving farmers
              and organizations across 50+ countries.
            </p>

            {/* Button with Link */}
            <Link href="/about">
              <button className="group inline-flex items-center gap-2 bg-green-primary text-white font-inter font-medium px-6 py-3 rounded-full hover:bg-green-dark transition-colors duration-300 cursor-pointer">
                About Biotech International
                <ArrowRightIcon
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="/images/homeintro.webp"
                alt="Biotech Lab Environment"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-green-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
