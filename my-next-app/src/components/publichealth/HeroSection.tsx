"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { div } from "framer-motion/client";
import Button from "../../components/ui/Button";
export function HeroSection() {
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-br from-white via-[#E6F2EC] to-white pt-36 lg:pt-16 pb-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007A3D_1px,transparent_1px)] [bg-size:[20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-biotech-green/10 text-biotech-green text-sm font-semibold mb-6">
              Sustainable Biotechnology
            </span>

            <div className="bg-white/30 backdrop-blur-md -ml-5 rounded-2xl mb-6 px-6 pb-3 font-poppins">
              <h1 className="text-4xl lg:text-4xl text-gray-900 leading-tight mb-6">
                <span className="font-semibold">Advancing</span>
                <span className="text-biotech-gold font-bold">
                  {" "}
                  Public Health
                </span>
                <br />
                <span className="font-semibold">through</span>
                <span className="text-biotech-green font-bold">
                  {" "}
                  Sustainable
                </span>
                <br />
                <span className="text-biotech-green font-bold">
                  {" "}
                  Biological
                </span>
                <span className="font-semibold"> Vector Control</span>
              </h1>

              <p className="text-md text-gray-600 mb-4 max-w-xl font-lato">
                Scientifically driven microbial technologies designed to reduce
                malaria transmission, combat insecticide resistance, and support
                global eradication efforts.
              </p>
              <p className="text-md text-gray-600 max-w-xl font-lato">
                Aligned with international public health priorities, our
                biological solutions enablesafe, scalable, and environmentally
                responsible vector management.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open("/pdfs/brochure.pdf", "_blank")}
              >
                Product Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            <div className="relative z-10 bg-linear-to-tr from-green-50 to-white rounded-3xl p-6 shadow-2xl border border-white/50 backdrop-blur-sm">
              <img
                src="./images/photos/10.jpg"
                alt="Biotech Lab"
                className="rounded-2xl shadow-inner w-full h-auto object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-biotech-green/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
