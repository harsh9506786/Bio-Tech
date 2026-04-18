'use client'

import React from 'react'
import { FadeIn, Section } from '../ui/Section'
export function CompanyIntro() {
  return (
    <Section background="white" id='learnmore'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="relative pl-6 border-l-4 border-biotech-gold">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              About us
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-lato">
              <p>
                Founded in the early 1990s,{' '}
                <strong className="text-biotech-green">
                  Biotech International Ltd. (BIL)
                </strong>{' '}
                stands at the forefront of agricultural biotechnology,
                delivering microbial solutions that enhance soil health,
                increase yield, and reduce chemical dependency.
              </p>
              <p>
                Headquartered in New Delhi, India, with state-of-the-art
                manufacturing facilities, BIL produces a comprehensive range of
                biopesticides, biofertilizers, and biofungicides that meet
                rigorous international organic standards.
              </p>
              <p>
                Our commitment goes beyond production; we are dedicated to
                scientific excellence, ensuring every product is backed by
                extensive research and field trials.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-biotech-green/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
              src="/images/photos/21.jpg"
              alt="Biotech International R&D Facility"
              className="w-full h-500px object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 z-20">
              <p className="text-white font-medium">
                Advanced Bioreactor Facility
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
