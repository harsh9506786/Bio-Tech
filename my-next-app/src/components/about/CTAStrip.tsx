"use client";

import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function CTAStrip() {
  const router = useRouter();

  return (
    <section className="py-20 bg-biotech-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Join us in redefining the future of sustainable agriculture
          </h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto font-lato">
            Partner with Biotech International to bring advanced microbial
            solutions to your region.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/enquiry")}
            className="
    text-white
    font-semibold
    bg-linear-to-r
    from-[#8C6A1F]
    via-[#C9A24A]
    to-[#E6C978]
    hover:from-[#745718]
    hover:via-[#B08B34]
    hover:to-[#D4B45F]
    transition-all
    duration-300 cursor-pointer
  "
          >
            Become a Partner
          </Button>
        </motion.div>
      </div>

      {/* Gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background:
            "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
        }}
      ></div>
    </section>
  );
}
