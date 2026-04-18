'use client'

import React from 'react'
import { motion } from 'framer-motion'
interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'dark' | 'green'
  container?: boolean
}
export function Section({
  children,
  className = '',
  id,
  background = 'white',
  container = true,
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900',
    green: 'bg-biotech-green',
  }
  return (
    <section
      id={id}
      className={`py-16 md:py-24 relative overflow-hidden ${bgColors[background]} ${className}`}
    >
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
export const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      margin: '-100px',
    }}
    transition={{
      duration: 0.6,
      delay,
      ease: 'easeOut',
    }}
    className={className}
  >
    {children}
  </motion.div>
)
