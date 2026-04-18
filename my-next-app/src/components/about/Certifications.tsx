"use client";

import React from "react";
import { Award, CheckCircle, Shield, FileCheck, Globe } from "lucide-react";
import { FadeIn, Section } from "../ui/Section";

const certifications = [
  {
    name: "ISO 9001",
    icon: Award,
    desc: "Quality Management",
  },
  {
    name: "ISO 14001",
    icon: Globe,
    desc: "Environmental Mgmt",
  },
  {
    name: "cGMP",
    icon: Shield,
    desc: "Good Manufacturing",
  },
  {
    name: "GLP",
    icon: FileCheck,
    desc: "Good Laboratory Practice",
  },
  {
    name: "IMO",
    icon: CheckCircle,
    desc: "Organic Standard",
  },
];

export function Certifications() {
  return (
    <Section background="white" id="certificate">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Global Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-lato">
            Certified by international authorities for quality, safety, and
            environmental sustainability.
          </p>
        </FadeIn>
      </div>

      {/* CERTIFICATION LIST */}
      <div
        className="
          flex gap-6
          overflow-x-auto scrollbar-hide
          px-4
          md:grid md:grid-cols-3
          lg:grid-cols-5
          md:overflow-visible
        "
      >
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              className="
                group shrink-0 md:shrink
                min-w-55
                flex flex-col items-center justify-center
                p-8
                bg-gray-50 rounded-xl
                hover:bg-white hover:shadow-xl
                transition-all duration-300
                border border-transparent
                hover:border-biotech-gold/30
                cursor-default
              "
            >
              <cert.icon
                className="w-12 h-12 text-gray-400 group-hover:text-biotech-gold transition-colors duration-300 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-bold font-poppins text-gray-900 group-hover:text-biotech-green transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs font-lato text-gray-500 mt-1 text-center">
                {cert.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
