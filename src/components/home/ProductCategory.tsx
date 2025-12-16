'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SproutIcon, ShieldIcon, ArrowRightIcon } from 'lucide-react'

type Category = {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  cta: string
}

const categories: Category[] = [
  {
    icon: <SproutIcon size={40} />,
    title: 'Agriculture Solutions',
    description:
      'Biopesticides, biofertilizers, and microbial inputs for sustainable crop protection and soil health.',
    image: 'Crop & Leaf Visuals',
    cta: 'View Products',
  },
  {
    icon: <ShieldIcon size={40} />,
    title: 'Public Health Solutions',
    description:
      'Biological vector control products for urban and rural public health applications.',
    image: 'Urban Vector Control Visuals',
    cta: 'View Products',
  },
]

export const ProductCategories: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-light text-green-primary font-inter text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-4">
            Explore Our Key Product Categories
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Precision biological solutions for sustainable farming and health.
          </p>
        </motion.div>

        {/* Category Tiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-green-primary/10 to-green-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-green-primary/20 flex items-center justify-center text-green-primary">
                      {category.icon}
                    </div>
                    <p className="font-inter text-green-primary/60 text-sm">
                      {category.image}
                    </p>
                  </div>
                </div>
                {/* Green glow on hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-primary/30 rounded-3xl transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <button className="inline-flex items-center gap-2 text-green-primary font-inter font-semibold group-hover:text-gold-accent transition-colors duration-300">
                  {category.cta}
                  <ArrowRightIcon
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
