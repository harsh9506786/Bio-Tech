"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle, Globe, Leaf } from "lucide-react";
import { motion } from "framer-motion";
interface CertificationBadgeProps {
  type: "iso9001" | "iso14001" | "cgmp" | "glp" | "imo";
}
export function CertificationBadge({ type }: CertificationBadgeProps) {
  const badges = {
    iso9001: {
      icon: ShieldCheck,
      label: "ISO 9001",
      sub: "Quality",
    },
    iso14001: {
      icon: Globe,
      label: "ISO 14001",
      sub: "Environment",
    },
    cgmp: {
      icon: Award,
      label: "cGMP",
      sub: "Manufacturing",
    },
    glp: {
      icon: CheckCircle,
      label: "GLP",
      sub: "Laboratory",
    },
    imo: {
      icon: Leaf,
      label: "IMO",
      sub: "Organic",
    },
  };
  const { icon: Icon, label, sub } = badges[type];
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg group cursor-default"
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
    >
      <div className="relative mb-3">
        <Icon
          className="w-12 h-12 text-gray-400 group-hover:text-biotech-gold transition-colors duration-300"
          strokeWidth={1.5}
        />
        <div className="absolute inset-0 bg-biotech-gold/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10" />
      </div>
      <span className="font-semibold font-lato text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
        {label}
      </span>
      <span className="text-xs font-lato text-gray-400 group-hover:text-biotech-gold transition-colors duration-300">
        {sub}
      </span>
    </motion.div>
  );
}
