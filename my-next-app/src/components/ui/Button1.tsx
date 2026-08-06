"use client"

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

export function Button1({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary: "bg-[#0B3D2E] text-white hover:bg-[#082a20] focus:ring-[#0B3D2E]",

    secondary:
      "bg-[#1B5E9E] text-white hover:bg-[#144a7e] focus:ring-[#1B5E9E]",

    // ✅ FIXED: no hard-coded hover text color
    outline:
      "border-2 border-[#0B3D2E] text-current hover:bg-[#0B3D2E] focus:ring-[#0B3D2E]",

    white: "bg-white text-[#0B3D2E] hover:bg-gray-100 focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}

      {icon && (
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </button>
  );
}