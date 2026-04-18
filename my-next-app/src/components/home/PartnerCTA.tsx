"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HandshakeIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function PartnerCTA() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="py-12 bg-green-700 relative overflow-hidden">
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
          {/* Handshake Icon with Circular Border */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-accent/20 flex items-center justify-center">
            <HandshakeIcon className="text-gold-accent" size={32} />
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Partner with{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Biotech International
            </span>
          </h2>

          <p className="font-inter text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Bring sustainable biotechnology to your region. Join our global
            network of distributors and partners making a difference in
            agriculture and public health.
          </p>

          <Link href="/enquiry">
            <button
              className="group inline-flex items-center gap-2 text-black font-poppins font-semibold px-8 py-4 rounded-full transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
              }}
            >
              Connect with us
              <ArrowRightIcon
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
