'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FadeIn, Section } from '../ui/Section'
export function GlobalPresence() {
  const locations = [
    {
      x: 70,
      y: 40,
      name: 'India (HQ)',
    },
    {
      x: 25,
      y: 35,
      name: 'USA',
    },
    {
      x: 32,
      y: 70,
      name: 'Brazil',
    },
    {
      x: 52,
      y: 30,
      name: 'Europe',
    },
    {
      x: 60,
      y: 55,
      name: 'Africa',
    },
    {
      x: 85,
      y: 65,
      name: 'Australia',
    }, // Australia
  ]
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Global Presence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-lato">
            With clients and distribution partners across more than 50
            countries, Biotech International continues to expand its impact on
            global agriculture and health.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-white rounded-2xl shadow-inner border border-gray-200 overflow-hidden">
          {/* Abstract World Map Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat grayscale"></div>

          {/* Pins */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${loc.x}%`,
                top: `${loc.y}%`,
              }}
            >
              <motion.div
                className="relative flex items-center justify-center"
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.1 + 0.5,
                  type: 'spring',
                }}
              >
                <div className="w-4 h-4 bg-biotech-gold rounded-full shadow-lg z-10 relative"></div>
                <div className="absolute w-4 h-4 bg-biotech-gold rounded-full animate-ping opacity-75"></div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {loc.name}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
