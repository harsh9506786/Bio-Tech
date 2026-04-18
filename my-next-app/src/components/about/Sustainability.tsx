"use client";

import React from "react";
import { Leaf, Recycle, Droplets, Sun } from "lucide-react";
import { FadeIn, Section } from "../ui/Section";
import Button from "../ui/Button";
export function Sustainability() {
  return (
    <Section background="green" className="text-white lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Our Commitment to Sustainability
          </h2>
          <p className="text-biotech-light text-lg mb-6 leading-relaxed font-lato">
            At Biotech International, sustainability defines every action — from
            raw material sourcing and zero-waste fermentation to recyclable
            packaging. Our goal is to protect both productivity and the planet.
          </p>
          <Button variant="white">See How We're Making a Difference</Button>
        </FadeIn>

        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Sun, label: "Renewable Energy" },
            { icon: Droplets, label: "Water Recycling Process" },
            { icon: Leaf, label: "Eco-Lab Process & Manufacturing" },
            { icon: Recycle, label: "Zero Waste Production System" },
          ].map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div
                className="
          flex flex-col items-center justify-center text-center
          bg-white/10 backdrop-blur-sm
          rounded-xl border border-white/20
          hover:bg-white/20 transition-colors
          p-5
          min-h-35
          md:aspect-square md:min-h-0
        "
              >
                <item.icon className="w-10 h-10 text-biotech-gold mb-3 shrink-0" />
                <p className="font-medium text-white leading-snug line-clamp-2">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
