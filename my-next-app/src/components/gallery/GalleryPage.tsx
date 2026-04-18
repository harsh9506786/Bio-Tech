"use client";

import React from "react";
import { Button1 } from "../ui/Button1";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImageCard } from "../gallery/ImageCard";
import { CertificationCard } from "../gallery/CirtificationCard";
import { galleryInfrastructureImages } from "../data/galleryInfrastructureImages";
const infrastructureItems = [
  "/images/gallery/img1.jpg",

  "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&q=80&w=800",

  "/images/gallery/img2.jpg",

  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",

  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",

  "/images/gallery/img3.jpg",
];

const certifications = [
  {
    title: "ISO 9001",
    code: "QMS",
    description:
      "Quality Management System certification for consistent product quality.",
  },
  {
    title: "ISO 14001",
    code: "EMS",
    description: "Environmental Management System for sustainable operations.",
  },
  {
    title: "cGMP",
    code: "Manufacturing",
    description: "Current Good Manufacturing Practice compliance.",
  },
  {
    title: "GLP",
    code: "Laboratory",
    description:
      "Good Laboratory Practice certification for non-clinical safety studies.",
  },
  {
    title: "IMO Approval",
    code: "Organic",
    description: "Certified for use in organic agriculture systems.",
  },
];

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F5]">
      {/* HERO */}
      <motion.section
        className="relative min-h-[70vh] w-full overflow-hidden bg-green-700
  py-24 pt-32 px-4 md:pt-12 lg:pb-12"
      >
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000"
            alt="Biotech Laboratory"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="relative h-full min-h-[70vh] max-w-7xl mx-auto
    px-4 sm:px-6 lg:px-8
    flex flex-col justify-center
    text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span
                className="inline-block px-6 sm:px-8 lg:px-10 py-2
          bg-white/10 backdrop-blur-sm rounded-full
          font-poppins font-bold mb-6
          text-sm sm:text-base md:text-lg lg:text-xl leading-tight"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #C9A24A 0%, #F2D27A 50%, #B88A2E 100%)",
                  }}
                >
                  BIOTECH INTERNATIONAL LTD.
                </span>
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Visual Insights into Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #C9A24A 0%, #F2D27A 50%, #B88A2E 100%)",
                }}
              >
                Biotechnology Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              A glimpse into our manufacturing facilities, research
              laboratories, field deployments, and global collaborations.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4
        items-center md:items-start justify-center md:justify-start"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button1
                  className="rounded-sm cursor-pointer w-full sm:w-auto"
                  variant="white"
                  size="lg"
                  icon
                >
                  Contact Our Team
                </Button1>
              </Link>
              {/* <Button1
                variant="outline"
                size="lg"
                className="w-full sm:w-auto
            text-white border-white cursor-pointer
            hover:bg-white rounded-sm hover:text-green-900"
              >
                Download Profile
              </Button1> */}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* INFRASTRUCTURE */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Advanced Manufacturing Infrastructure"
          subtitle="State-of-the-art fermentation and production facilities ensuring global quality standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryInfrastructureImages.map((item, i) => (
            <ImageCard key={i} image={item.image} />
          ))}
        </div>
      </motion.section>

      {/* R&D */}
      {/* <motion.section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research & Development Excellence"
            subtitle="Pioneering biological solutions through rigorous scientific inquiry and innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageCard
              image="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
              title="GLP-Certified Laboratory"
              description="Our central hub for microbial research and strain development."
              category="R&D Hub"
            />

            <ImageCard
              image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
              title="Microbial Culture"
              description="Advanced strain isolation techniques."
              category="R&D Hub"
            />

            <ImageCard
              image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
              title="Analytical Instruments"
              description="HPLC and GC analysis for metabolite profiling."
              category="R&D Hub"
            />
          </div>
        </div>
      </motion.section> */}

      {/* FIELD OPERATIONS */}
      {/* <motion.section className="py-20 bg-green-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Field Deployment & Community Impact"
            subtitle="Translating lab innovations into real-world agricultural and public health solutions."
            light
          />

          <div className="space-y-16">
            <div>
              <div className="flex items-center mb-6">
                <span className="h-px w-12 bg-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-green-300 uppercase tracking-widest">
                  Agriculture Field Trials
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {agriItems.map((item) => (
                  <ImageCard key={item.title} {...item} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <span className="h-px w-12 bg-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-blue-300 uppercase tracking-widest">
                  Public Health Operations
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {healthItems.map((item) => (
                  <ImageCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* EVENTS */}
      {/* <motion.section className="py-20 bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Global Presence & Industry Participation"
            subtitle="Connecting with partners and stakeholders at international forums."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventItems.map((item) => (
              <ImageCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* CERTIFICATIONS */}
      <motion.section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Recognized for Quality & Compliance"
            subtitle="Adhering to the highest international standards for safety and efficacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      {/* <motion.section className="py-24 bg-biotech-green text-white text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Partner with a Trusted Biotechnology Leader
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Explore our facilities, innovation capabilities, and global impact —
            and discover how we can collaborate to build a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button1
              className="rounded-sm cursor-pointer"
              variant="white"
              size="lg"
              icon
            >
              Request Partnership Details
            </Button1>
            <Button1
              variant="outline"
              size="lg"
              className="border-white rounded-sm cursor-pointer text-white hover:bg-white hover:text-black"
            >
              Download Company Profile
            </Button1>
          </div>
        </div>
      </motion.section> */}
    </div>
  );
}
