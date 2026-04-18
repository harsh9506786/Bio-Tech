"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
// Simple counter component for numbers
const Counter = ({
  from,
  to,
  duration = 2,
  suffix = ''





}: {from: number;to: number;duration?: number;suffix?: string;}) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);
  return (
    <span ref={nodeRef}>
      {count.toLocaleString()}
      {suffix}
    </span>);

};
export function MalariaContextSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-100px'
  });
  return (
    <section
      className="relative w-full py-24 bg-light-bg overflow-hidden"
      ref={containerRef}>

      {/* Africa Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.05] pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="text-forest">

          <path d="M52.5,15.5 C55,15 60,18 62,20 C65,22 70,20 72,22 C74,24 73,28 75,30 C78,32 80,35 78,40 C76,45 78,50 75,55 C72,60 70,65 65,70 C60,75 58,80 55,85 C52,80 50,75 48,70 C45,65 42,60 45,55 C48,50 45,45 42,40 C40,35 38,30 40,25 C42,20 45,18 48,16 C50,15 51,16 52.5,15.5 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column: Text */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            x: 0
          } :
          {
            opacity: 0,
            x: -30
          }
          }
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>

          <h2 className="font-poppins text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 border-l-4 border-forest pl-6">
            Global Malaria Context
          </h2>
          <p className="text-lg text-gray-700 font-body mb-8 leading-relaxed font-lato">
            Malaria remains one of the world's most persistent infectious
            diseases. In 2023 alone, the burden on global health systems was
            immense, disproportionately affecting vulnerable populations in
            specific regions.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
            <p className="text-gray-600 font-body mb-4 font-lato">
              Despite decades of progress, challenges such as insecticide
              resistance, funding gaps, climate variability, and post-pandemic
              health system disruptions threaten global gains.
            </p>
            <p className="text-xl font-heading font-semibold text-forest font-lato">
              Eradication is the only sustainable path forward.
            </p>
          </div>

          <p className="text-gray-600 font-body font-lato">
            At Biotech International Ltd., we align our biological vector
            control technologies with the global mission to reduce disease
            burden and accelerate elimination strategies.
          </p>
        </motion.div>

        {/* Right Column: Stats */}
        <div className="space-y-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {
              opacity: 0,
              y: 20
            }
            }
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-forest flex flex-col justify-center">

            <span className="text-5xl font-heading font-bold text-forest mb-2 font-poppins">
              <Counter from={0} to={263} suffix="M+" />
            </span>
            <span className="text-gray-600 font-semibold uppercase tracking-wide text-sm font-lato">
              Estimated cases worldwide
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {
              opacity: 0,
              y: 20
            }
            }
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-primary flex flex-col justify-center font-poppins">

            <span className="text-5xl font-heading font-bold text-green-primary mb-2">
              <Counter from={0} to={597} suffix=",000" />
            </span>
            <span className="text-green-primary font-semibold uppercase tracking-wide text-sm font-lato">
              Deaths globally
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {
              opacity: 0,
              y: 20
            }
            }
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-forest flex flex-col justify-center">

            <span className="text-5xl font-heading font-bold text-forest mb-2 font-poppins">
              <Counter from={0} to={94} suffix="%" />
            </span>
            <span className="text-gray-600 font-semibold uppercase tracking-wide text-sm font-lato">
              Of cases occurred in Africa
            </span>
          </motion.div>
        </div>
      </div>
    </section>
    
  
  );

}