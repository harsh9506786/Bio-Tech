'use client'

import React from 'react'
import { Lightbulb, Globe, CheckCircle2 } from 'lucide-react'
import { FadeIn, Section } from '../ui/Section'
import { motion } from 'framer-motion'
export function VisionMission() {
  return (
    <Section background="light" id='strength'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <FadeIn>
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-biotech-green h-full"
          >
            <div className="w-16 h-16 bg-biotech-light rounded-full flex items-center justify-center mb-6 text-biotech-green">
              <Lightbulb size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-lato">
              To revolutionize agriculture and public health through biological
              innovation that creates a sustainable, chemical-free future for
              generations to come.
            </p>
          </motion.div>
        </FadeIn>

        {/* Mission Card */}
        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-biotech-gold h-full"
          >
            <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 text-biotech-gold">
              <Globe size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-4">
              {[
                'Deliver eco-friendly, high-performing biological inputs.',
                'Maintain top-tier quality through advanced R&D.',
                'Strengthen global partnerships for sustainable growth.',
                'Protect the environment through green manufacturing.',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-biotech-green mt-1 mr-3 shrink-0" />
                  <span className="text-gray-600 font-lato">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </FadeIn>
      </div>
    </Section>
  )
}
