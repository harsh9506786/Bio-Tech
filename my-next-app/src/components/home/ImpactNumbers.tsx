"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarIcon, GlobeIcon, PackageIcon, LeafIcon } from "lucide-react";

type StatItem = {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
};

const stats: StatItem[] = [
  {
    icon: <CalendarIcon size={32} />,
    value: 30,
    suffix: "+",
    label: "Years of Innovation",
  },
  {
    icon: <GlobeIcon size={32} />,
    value: 20,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: <PackageIcon size={32} />,
    value: 50,
    suffix: "+",
    label: "Biological Products",
  },
  {
    icon: <LeafIcon size={32} />,
    value: 1,
    suffix: "M+",
    label: "Acres Treated Organically",
  },
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-primary">
      {count}
      {suffix}
    </span>
  );
};

export const ImpactNumbers: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 bg-[#e5f5eb]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-gold-accent mb-4 shadow-sm">
                {stat.icon}
              </div>
              <div className="mb-2 text-green-700">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="font-inter text-gray-600 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
