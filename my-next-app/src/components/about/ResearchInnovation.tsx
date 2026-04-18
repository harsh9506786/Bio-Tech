"use client";

import React from "react";
import { Dna, Microscope, FlaskConical } from "lucide-react";
import { FadeIn, Section } from "../ui/Section";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export function ResearchInnovation() {
  const router = useRouter();

  return (
    <Section background="light" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Research & Innovation
              </h2>
              <div className="w-20 h-1 bg-biotech-gold mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-lato">
                Our GLP-certified R&D laboratory drives constant innovation
                through microbial strain improvement, formulation optimization,
                and performance trials.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-lato">
                We collaborate with research institutes and universities
                globally to create next-generation biological inputs that
                enhance soil biodiversity and plant resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Microscope className="w-8 h-8 text-biotech-green mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900 font-poppins">
                    Strain Improvement
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-lato">
                    Enhancing microbial efficacy for better yield.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Dna className="w-8 h-8 text-biotech-green mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900 font-poppins">
                    Genetic Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-lato">
                    Molecular characterization of beneficial microbes.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="primary" onClick={() => router.push("/contact")}>Connect with us</Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative overflow-visible will-change-transform group">
            {/* Decorative Backgrounds */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-biotech-green/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-biotech-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Image Card */}
            <div
              className="
        relative rounded-2xl overflow-hidden
        border-4 border-white
        shadow-2xl
        transition-all duration-500 ease-out
        group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]
      "
            >
              {/* Image */}
              <img
                src="/images/photos/19.jpg"
                alt="Scientist working with DNA model"
                className="
          w-full h-auto block
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-biotech-green">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider font-lato">
                      Lab Certification
                    </p>
                    <p className="text-xl font-bold text-gray-900 font-lato">
                      GLP Certified Facility
                    </p>
                  </div>
                  <FlaskConical className="w-10 h-10 text-biotech-gold" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
