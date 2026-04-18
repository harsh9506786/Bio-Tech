"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CertificationBadge } from "../../components/products/CertificationBadge";

import {
  ShieldCheck,
  FlaskConical,
  TrendingUp,
  Building2,
  CheckCircle2,
} from "lucide-react";
const StrategyCard = ({
  icon: Icon,
  title,
  points,
  delay,
}: {
  icon: any;
  title: string;
  points: string[];
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 30,
            }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="w-14 h-14 bg-light-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-forest/10 transition-colors">
        <Icon className="w-7 h-7 text-green-primary" />
      </div>
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-gray-600 font-body text-sm leading-relaxed"
          >
            <CheckCircle2 className="w-4 h-4 text-green-primary mt-1 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
export function StrategySection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Public Health Strategy
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Our Public Health Division supports eradication-focused programs
            through:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StrategyCard
            icon={ShieldCheck}
            title="Expanding Access to Proven Tools"
            points={[
              "Deployment of biological larvicides",
              "Support for community-level mosquito control",
              "Integration into municipal vector management systems",
            ]}
            delay={0}
          />

          <StrategyCard
            icon={FlaskConical}
            title="Combating Resistance"
            points={[
              "Microbial-based larval control",
              "Reduced chemical dependency",
              "Support for resistance management strategies",
            ]}
            delay={0.2}
          />

          <StrategyCard
            icon={TrendingUp}
            title="Data-Driven Intervention Support"
            points={[
              "Field-evaluated formulations",
              "Application-specific deployment",
              "Environment-safe performance validation",
            ]}
            delay={0.4}
          />

          <StrategyCard
            icon={Building2}
            title="Supporting Institutional Programs"
            points={[
              "Collaboration with public health departments",
              "Government procurement compliance",
              "NGO & community health partnerships",
            ]}
            delay={0.6}
          />
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <section className=" pt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 uppercase mb-8">
            Certified by global authorities
          </p>
          <div
            className="
      flex gap-8 overflow-x-auto scrollbar-hide px-4 sm:justify-center sm:flex-wrap
    "
          >
            <div className="shrink-0">
              <CertificationBadge type="iso9001" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="iso14001" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="cgmp" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="glp" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="imo" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
