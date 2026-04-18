"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean; // ✅ add this
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false, // ✅ default false
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-biotech-green text-white hover:bg-biotech-dark focus:ring-biotech-green shadow-md hover:shadow-lg",
    secondary:
      "bg-biotech-gold text-white hover:bg-yellow-600 focus:ring-biotech-gold shadow-md",
    outline:
      "border-2 border-biotech-green text-biotech-green hover:bg-biotech-green hover:text-white focus:ring-biotech-green",
    white:
      "bg-white text-biotech-green hover:bg-gray-100 focus:ring-white shadow-md",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {leftIcon && !isLoading && (
        <span className="mr-2 flex items-center">{leftIcon}</span>
      )}
      {isLoading ? "Loading..." : children}
      {rightIcon && !isLoading && (
        <span className="ml-2 flex items-center">{rightIcon}</span>
      )}
    </motion.button>
  );
}
