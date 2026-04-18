"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// const partners = [
//   { name: "AgroCorp", logo: "/images/partners/org1.png" },
//   { name: "EuroAgro", logo: "/images/partners/org2.png" },
//   { name: "GlobalFarm", logo: "/images/partners/org3.png" },
//   { name: "BioHealth", logo: "/images/partners/org4.png" },
//   { name: "GreenTech", logo: "/images/partners/org5.png" },
//   { name: "AgriWorld", logo: "/images/partners/org6.png" },
// ];

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ================= SLIDER STATE =================
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Duplicate first slide for infinite loop
  // const sliderItems = [...partners, partners[0]];

  // ================= AUTO SLIDE =================
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ================= SEAMLESS RESET =================
  // useEffect(() => {
  //   if (activeIndex === partners.length) {
  //     const timeout = setTimeout(() => {
  //       setIsAnimating(false); // disable animation
  //       setActiveIndex(0);     // jump silently to first
  //     }, 600); // same as transition duration

  //     return () => clearTimeout(timeout);
  //   } else {
  //     setIsAnimating(true);
  //   }
  // }, [activeIndex]);

  return (
    <section ref={ref} className="py-18 pb-4 bg-[#f5fbfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-2xl sm:text-5xl font-bold text-gray-900 mb-2">
            Trusted by Global Clients and Partners
          </h2>
          <p className="font-inter text-2xl text-gray-600">
            Working with leading agricultural and public health organizations worldwide.
          </p>
        </motion.div>

        {/* ================= DESKTOP GRID ================= */}
        {/* <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-28 h-28 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div> */}
{/* 
        {/* ================= MOBILE INFINITE SLIDER ================= */}
        {/* <div className="sm:hidden overflow-hidden">
          <motion.div
            className="flex w-full"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={
              isAnimating
                ? { duration: 0.6, ease: "easeInOut" }
                : { duration: 0 }
            }
          >
            {sliderItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="w-32 h-32 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-md">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        // </div> */} 

      </div>
    </section>
  );
}
