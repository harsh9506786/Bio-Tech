"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "Since adopting Biotech's biofertilizers, our yields improved by 18% while reducing chemical dependency. A game-changer for sustainable farming.",
    author: "James Mwangi",
    role: "Operations Director",
    company: "AgroCorp Kenya",
  },
  {
    quote:
      "Reliable, eco-safe, and innovative biological inputs. Perfect for organic farmers looking to scale without compromising on quality.",
    author: "Maria Santos",
    role: "Head of Procurement",
    company: "EuroAgro Spain",
  },
  {
    quote:
      "Their public health solutions have been instrumental in our vector control programs. Effective and environmentally responsible.",
    author: "Dr. Anil Sharma",
    role: "Public Health Officer",
    company: "HealthFirst India",
  },
  {
    quote:
      "The technical support and product quality from Biotech International is unmatched. They truly understand agricultural challenges.",
    author: "Chen Wei",
    role: "Agricultural Consultant",
    company: "GreenTech Asia",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const visibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], index });
    }
    return items;
  };

  return (
    <section ref={ref} className="py-12 bg-white overflow-hidden">
      {/* overflow-hidden FIXES BLACK LINES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-light text-green-primary font-inter text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto" />
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.index}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#f5fbfb] rounded-2xl p-8 relative"
                >
                  <QuoteIcon
                    className="absolute top-6 right-6 text-green-primary/10"
                    size={48}
                  />
                  <p className="font-inter text-gray-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-poppins font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="font-inter text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile – NO INITIALS */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <QuoteIcon
                  className="absolute top-6 right-6 text-green-primary/10"
                  size={48}
                />
                <p className="font-inter text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Name section WITHOUT initials */}
                <div>
                  <p className="font-poppins font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="font-inter text-sm text-gray-500">
                    {testimonials[currentIndex].role},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-green-primary hover:text-green-primary transition"
            >
              <ChevronLeftIcon size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-green-primary"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-green-primary hover:text-green-primary transition"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
