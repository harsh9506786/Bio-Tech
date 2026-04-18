"use client"

import React from 'react'
import { Factory, FlaskConical, ShieldCheck, Settings } from 'lucide-react'
import { FadeIn, Section } from '../ui/Section'
const facilities = [
  {
    icon: Factory,
    title: 'Fermentation Systems',
    desc: 'PLC-controlled fermentation tanks with 3000-liter capacity for large-scale microbial production.',
    image:
      '/images/photos/12.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'cGMP Certified',
    desc: 'Production facilities adhering to current Good Manufacturing Practices ensuring consistent quality.',
    image:
      '/images/photos/09.jpg',
  },
  {
    icon: Settings,
    title: 'Automated Control',
    desc: 'Fully automated process control systems maintaining a sterile environment for pure culture growth.',
    image:
      '/images/photos/18.jpg',
  },
  {
    icon: FlaskConical,
    title: 'Quality Management',
    desc: 'ISO-certified quality management protocols integrated into every step of the production line.',
    image:
      '/images/photos/16.jpg',
  },
]
export function Infrastructure() {
  return (
    <Section background="white">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lato">
            Advanced facilities designed for precision, safety, and innovation.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="group h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-biotech-green/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-biotech-light rounded-lg flex items-center justify-center text-biotech-green mb-4 group-hover:bg-biotech-green group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-lato">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
