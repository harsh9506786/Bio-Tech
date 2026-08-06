'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Product } from '../data/products'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductSliderProps {
  products: Product[]
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const visibleSlides = 3 // Desktop view ke liye
  const totalSlides = products.length

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const slideWidth = 100 / visibleSlides

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex gap-6"
          animate={{ x: `-${currentIndex * slideWidth}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`shrink-0 w-[calc(100%/${visibleSlides}-1rem)]`}
            >
              {/* <ProductCard product={product} /> */}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Swipe */}
      <div
        className="md:hidden"
        onTouchStart={(e) => {
          const touchStartX = e.touches[0].clientX
          const handleTouchMove = (ev: TouchEvent) => {
            const touchEndX = ev.touches[0].clientX
            const diff = touchStartX - touchEndX
            if (diff > 50) nextSlide()
            if (diff < -50) prevSlide()
            window.removeEventListener('touchmove', handleTouchMove)
          }
          window.addEventListener('touchmove', handleTouchMove)
        }}
      />
    </div>
  )
}
