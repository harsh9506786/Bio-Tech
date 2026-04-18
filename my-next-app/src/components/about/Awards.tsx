"use client";

import React from "react";
import { FadeIn, Section } from "../ui/Section";
export function Awards() {
  return (
    <Section background="white">
      <div className="text-center mb-10">
        <FadeIn>
          <h2 className="text-2xl font-bold text-gray-900 font-poppins">
            Recognized for Excellence
          </h2>
          <div className="w-16 h-1 bg-biotech-gold mx-auto mt-4"></div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div
          className="flex
    overflow-x-auto
    flex-nowrap
    gap-4
    md:gap-12
    px-4
    snap-x snap-mandatory md:justify-center 
    opacity-60 grayscale hover:grayscale-0
    transition-all duration-500
    scrollbar-hide"
        >
          {/* Placeholder Logos for Awards */}
          {[
            "AgriTech Award",
            "Global Bio Excellence",
            "Sustainable Future",
            "Innovation 2023",
          ].map((award, i) => (
            <div
              key={i}
              className=" shrink-0
    snap-start
    w-[calc(100%/3)]
    md:w-auto
    flex
    flex-col
    items-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-gray-50 mb-2">
                <span className="text-xs text-gray-900 font-bold text-center px-2 font-poppins">
                  {award}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
