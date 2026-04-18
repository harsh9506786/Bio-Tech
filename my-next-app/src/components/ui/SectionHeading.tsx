"use client"


import React from 'react';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}
export function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  light = false
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>

      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${light ? 'text-white' : 'text-[#0B3D2E]'}`}>

        {title}
      </h2>
      {subtitle &&
      <div
        className={`h-1 w-20 mx-auto mb-6 ${light ? 'bg-gold-accent' : 'bg-gold-accent'} ${alignment === 'left' ? 'mx-0' : ''}`} />

      }
      {subtitle &&
      <p
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-200' : 'text-gray-600'} ${alignment === 'left' ? 'mx-0' : ''}`}>

          {subtitle}
        </p>
      }
    </div>);

}