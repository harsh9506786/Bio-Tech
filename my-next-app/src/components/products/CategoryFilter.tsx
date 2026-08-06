'use client'

import React, { useEffect, useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
interface CategoryFilterProps {
  activeCategory: 'Agriculture' | 'Public Health'
  onCategoryChange: (category: 'Agriculture' | 'Public Health') => void
}
export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${isSticky ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-lg">
            {(['Agriculture', 'Public Health'] as const).map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  relative px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer
                  ${activeCategory === category ? 'text-biotech-green' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-md shadow-sm"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{category} Solutions</span>
              </button>
            ))}
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-biotech-green/20 focus:border-biotech-green transition-all"
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
