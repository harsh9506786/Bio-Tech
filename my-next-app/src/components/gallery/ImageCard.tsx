"use client"

import React from 'react';
interface ImageCardProps {
  image: string;
  title?: string
  height?: string;
}
export function ImageCard({
  image,
  title,

  height = 'h-80'
}: ImageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-gray-100 ${height} w-full`}>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />


      {/* Gradient Overlay - Always visible but stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content 
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {category &&
        <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold tracking-wider text-white uppercase bg-biotech-green rounded-sm">
            {category}
          </span>
        }
        <h3 className="text-xl font-bold text-white mb-1 font-heading">
          {title}
        </h3>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0">
          {description}
        </p>
      </div> */}
    </div>);

}