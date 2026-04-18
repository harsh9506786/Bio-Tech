"use client"

import React from 'react';
interface CertificationCardProps {
  title: string;
  code: string;
  description: string;
}
export function CertificationCard({
  title,
  code,
  description
}: CertificationCardProps) {
  return (
    <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B3D2E] transition-colors duration-300">
        <svg
          className="w-8 h-8 text-[#0B3D2E] group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

        </svg>
      </div>
      <h3 className="text-lg font-bold text-black/90 mb-2">{title}</h3>
      <div className="text-sm font-mono text-green-dark mb-4 bg-green-light px-3 py-1 rounded-full">
        {code}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>);

}