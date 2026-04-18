"use client";
import React, { Suspense } from "react";
import { HeroSection } from "@/components/publichealth/HeroSection";
import { MalariaContextSection } from "@/components/publichealth/MalariaContextSection";
import { StrategySection } from "@/components/publichealth/StrategySection";
import Productsection from "@/components/publichealth/Productsection";
import Loader from "@/components/ui/Loader";

export default function PublicHealthPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      }
    >
      <main className="w-full min-h-screen bg-white">
        <HeroSection />
        <Productsection />
        <MalariaContextSection />
        <StrategySection />
      </main>
    </Suspense>
  );
}
