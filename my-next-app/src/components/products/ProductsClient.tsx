"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../components/data/products";
import { CertificationBadge } from "../../components/products/CertificationBadge";
import { EnquiryForm } from "../products/EnquiryForm";
import Button from "../../components/ui/Button";
import { ProductRowCard } from "../../components/products/ProductRowCard";
import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subcategoryFromURL = searchParams.get("subcategory");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeBiostimulantTab, setActiveBiostimulantTab] =
    useState("biostimulants");
  const checkProductScroll = () => {
    if (!productScrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = productScrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const [activeCategory, setActiveCategory] = useState<
    "Agriculture" | "Public Health"
  >("Agriculture");

  const [activeSubCategory, setActiveSubCategory] = useState<string>("all");
  const [seedDressTab, setSeedDressTab] = useState("biofertilizers");

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  /* -------------------------------------------------- */
  /* REFS */
  /* -------------------------------------------------- */

  const subCatScrollRef = useRef<HTMLUListElement | null>(null);
  const productScrollRef = useRef<HTMLDivElement | null>(null);

  const [mobileDropdownText, setMobileDropdownText] = useState(
    "Select Product Category",
  );

  /* -------------------------------------------------- */
  /* SUBCATEGORY LISTS */
  /* -------------------------------------------------- */

  const agricultureSubCategories = [
    "All",
    "Biopesticides",
    "Biofungicides",
    "Botanical Pesticides",
    "Seed Dressing",
    "Biofertilizers",
    "Biodecomposer",
    "Bioacaricides",
    "Pheromone Lures and Traps",
    "Bionematicides",
    "Biostimulants",
  ];

  const publicHealthSubCategories = ["Biolarvicides", "Bednet"];

  /* -------------------------------------------------- */
  /* URL → CATEGORY SYNC */
  /* -------------------------------------------------- */

  useEffect(() => {
    if (!subcategoryFromURL) {
      setActiveSubCategory("all");
      setActiveCategory("Agriculture");
      return;
    }

    const subLower = subcategoryFromURL.toLowerCase();
    setActiveSubCategory(subLower);

    if (agricultureSubCategories.some((s) => s.toLowerCase() === subLower)) {
      setActiveCategory("Agriculture");
    } else if (
      publicHealthSubCategories.some((s) => s.toLowerCase() === subLower)
    ) {
      setActiveCategory("Public Health");
    }
  }, [subcategoryFromURL]);

  /* -------------------------------------------------- */
  /* SCROLL FUNCTIONS (DESKTOP + MOBILE SAME) */
  /* -------------------------------------------------- */

  const scrollProducts = (direction: "left" | "right") => {
    if (!productScrollRef.current) return;

    productScrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  const scrollSubCategory = (direction: "left" | "right") => {
    if (!subCatScrollRef.current) return;

    subCatScrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  /* -------------------------------------------------- */
  /* SUBCATEGORY OVERFLOW CHECK */
  /* -------------------------------------------------- */

  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const checkOverflow = () => {
    if (!subCatScrollRef.current) return;
    const { scrollWidth, clientWidth } = subCatScrollRef.current;
    setShowScrollButtons(scrollWidth > clientWidth);
  };

  useEffect(() => {
    checkOverflow();
  }, [activeCategory]);

  /* -------------------------------------------------- */
  /* PRODUCTS FILTER */
  /* -------------------------------------------------- */

  const filteredProducts = products.filter((p) => {
    if (p.category !== activeCategory) return false;

    if (activeSubCategory === "seed dressing") {
      return (
        p.subCategory === seedDressTab &&
        p.applications?.includes("Seed Dressing")
      );
    }

    if (activeSubCategory === "biostimulants") {
      if (activeBiostimulantTab === "bio sea") {
        return false;
      }

      return p.subCategory?.toLowerCase() === "biostimulants";
    }

    if (activeSubCategory) {
      return p.subCategory?.toLowerCase() === activeSubCategory;
    }

    return true;
  });

  const groupedProducts: Record<string, typeof products> = {};

  if (activeSubCategory === "all") {
    agricultureSubCategories.forEach((sub) => {
      if (sub.toLowerCase() === "all") return;
      groupedProducts[sub] = products.filter(
        (p) =>
          p.category === "Agriculture" &&
          p.subCategory?.toLowerCase() === sub.toLowerCase(),
      );
    });
  }

  /* -------------------------------------------------- */
  /* LOADING DELAY */
  /* -------------------------------------------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProductsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-[#E6F2EC] to-white pt-36 lg:pt-16 pb-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007A3D_1px,transparent_1px)] [bg-size:[20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-biotech-green/10 text-biotech-green text-sm font-semibold mb-6">
              Sustainable Biotechnology
            </span>

            <div className="bg-white/30 backdrop-blur-md rounded-2xl mb-6 pb-3 -pl-5 font-poppins">
              <h1 className="text-4xl lg:text-4xl text-gray-900 leading-tight mb-6">
                <span className="font-semibold">Advanced</span>
                <span className="text-biotech-gold font-bold"> Biological</span>
                <span className="font-semibold"> Solutions</span>
                <br />
                <span className="font-semibold">for</span>
                <span className="text-biotech-green font-bold">
                  {" "}
                  Sustainable Agriculture
                </span>
              </h1>

              <p className="text-md text-gray-600 mb-4 max-w-xl font-lato">
                Scientifically engineered microbial technologies designed to
                enhance crop productivity, restore soil vitality, and deliver
                residue-free pest and disease management.
              </p>
              <p className="text-md text-gray-600 max-w-xl font-lato">
                Backed by 30+ years of microbial research, our biological
                agriculture portfoliointegrates innovation, performance, and
                environmental responsibility.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open("/pdfs/brochure.pdf", "_blank")}
              >
                Product Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            <div className="relative z-10 bg-linear-to-tr from-green-50 to-white rounded-3xl p-6 shadow-2xl border border-white/50 backdrop-blur-sm">
              <img
                src="./images/whychoose2.jpg"
                alt="Biotech Lab"
                className="rounded-2xl shadow-inner w-full h-auto object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-biotech-green/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* SUBCATEGORY BUTTONS – DESKTOP ONLY */}
      <div className="max-w-7xl mt-4 sm:mt-6 relative px-2 mx-auto sm:px-6">
        <ul
          ref={subCatScrollRef}
          className="hidden md:flex flex-wrap gap-2 sm:gap-2.5 mx-3 sm:mx-10 py-2"
          onScroll={checkOverflow}
        >
          {(activeCategory === "Agriculture"
            ? agricultureSubCategories
            : publicHealthSubCategories
          ).map((sub) => (
            <li key={sub} className="shrink-0">
              <button
                onClick={() => {
                  setIsProductsLoading(true);
                  setActiveSubCategory(sub.toLowerCase());

                  if (sub.toLowerCase() === "biostimulants") {
                    setActiveBiostimulantTab("biostimulants");
                  }
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-sm font-medium border whitespace-nowrap transition
            ${
              activeSubCategory === sub.toLowerCase()
                ? "bg-biotech-green text-white border-biotech-green"
                : "bg-white text-gray-600 border-gray-300 hover:border-biotech-green"
            }`}
              >
                {sub}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        {/* MOBILE SUBCATEGORY MENU */}
        <div className="md:hidden max-w-7xl mx-auto px-4 my-4">
          {/* Toggle Button */}
          <button
            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-left flex justify-between items-center font-medium"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span>{mobileDropdownText}</span>
            <span className="text-lg">{mobileMenuOpen ? "▲" : "▼"}</span>
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 bg-white rounded-lg shadow-md overflow-hidden"
              >
                {(activeCategory === "Agriculture"
                  ? agricultureSubCategories
                  : publicHealthSubCategories
                ).map((sub) => (
                  <li key={sub}>
                    <button
                      onClick={() => {
                        setActiveSubCategory(sub.toLowerCase());
                        setMobileDropdownText(sub);
                        setIsProductsLoading(true);
                        setMobileMenuOpen(false);

                        if (sub.toLowerCase() === "biostimulants") {
                          setActiveBiostimulantTab("biostimulants");
                        }
                      }}
                      className={`w-full text-left px-4 py-2 border-b last:border-b-0 transition
                ${
                  activeSubCategory === sub.toLowerCase()
                    ? "bg-biotech-green text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        {activeSubCategory === "biostimulants" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
            {/* desktop separator line */}
            <div className="hidden md:block border-t mt-8 pt-8 border-gray-200 mb-4"></div>

            <div className="flex gap-3 md:ml-10">
              <button
                onClick={() => setActiveBiostimulantTab("biostimulants")}
                className={`px-4 py-2 rounded-full border text-sm font-medium
        ${
          activeBiostimulantTab === "biostimulants"
            ? "bg-biotech-green text-white border-biotech-green"
            : "bg-white border-gray-300 text-gray-600"
        }`}
              >
                Biostimulants
              </button>

              <button
                onClick={() => setActiveBiostimulantTab("bio sea")}
                className={`px-4 py-2 rounded-full border text-sm font-medium
        ${
          activeBiostimulantTab === "bio sea"
            ? "bg-biotech-green text-white border-biotech-green"
            : "bg-white border-gray-300 text-gray-600"
        }`}
              >
                Bio Sea
              </button>
            </div>
          </div>
        )}

        {activeSubCategory === "seed dressing" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
            {/* separator */}
            <div className="hidden md:block border-t mt-8 pt-8 border-gray-200 mb-4"></div>

            <div className="flex gap-3 md:ml-10">
              <button
                onClick={() => setSeedDressTab("biofertilizers")}
                className={`px-4 py-2 rounded-full border text-sm font-medium
          ${
            seedDressTab === "biofertilizers"
              ? "bg-biotech-green text-white border-biotech-green"
              : "bg-white border-gray-300 text-gray-600"
          }`}
              >
                Biofertilizers
              </button>

              <button
                onClick={() => setSeedDressTab("biofungicides")}
                className={`px-4 py-2 rounded-full border text-sm font-medium
          ${
            seedDressTab === "biofungicides"
              ? "bg-biotech-green text-white border-biotech-green"
              : "bg-white border-gray-300 text-gray-600"
          }`}
              >
                Biofungicides
              </button>
            </div>
          </div>
        )}

        {/* PRODUCTS SCROLL */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            ref={productScrollRef}
            onScroll={checkProductScroll}
            className="flex flex-col gap-4 py-4 md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:flex-wrap"
          >
            {isProductsLoading ? (
              <div className="w-full flex justify-center py-20">
                <Loader />
              </div>
            ) : activeSubCategory === "all" ? (
              Object.entries(groupedProducts).map(
                ([subCategory, items], index) => {
                  const isSeedDressing =
                    subCategory.toLowerCase() === "seed dressing";
                  const isBiostimulants =
                    subCategory.toLowerCase() === "biostimulants";

                  let displayProducts = items;

                  // ✅ Seed Dressing logic (ALL only)
                  if (isSeedDressing) {
                    displayProducts = products.filter(
                      (p) =>
                        p.category === "Agriculture" &&
                        p.subCategory === seedDressTab &&
                        p.applications?.includes("Seed Dressing"),
                    );
                  }

                  // ✅ Biostimulants logic (ALL only)
                  if (isBiostimulants) {
                    if (activeBiostimulantTab === "bio sea") {
                      displayProducts = [];
                    } else {
                      displayProducts = products.filter(
                        (p) =>
                          p.category === "Agriculture" &&
                          p.subCategory?.toLowerCase() === "biostimulants",
                      );
                    }
                  }

                  return (
                    <div key={subCategory} className="w-full">
                      <h2 className="text-4xl font-semibold mt-10 mb-6 text-biotech-green">
                        {subCategory}
                      </h2>

                      {/* ✅ SUB-SUB BUTTONS */}
                      {isSeedDressing && (
                        <div className="flex gap-3 mb-6">
                          <button
                            onClick={() => setSeedDressTab("biofertilizers")}
                            className={`px-4 py-2 rounded-full border text-sm
                ${
                  seedDressTab === "biofertilizers"
                    ? "bg-biotech-green text-white"
                    : "bg-white text-gray-600"
                }`}
                          >
                            Biofertilizers
                          </button>

                          <button
                            onClick={() => setSeedDressTab("biofungicides")}
                            className={`px-4 py-2 rounded-full border text-sm
                ${
                  seedDressTab === "biofungicides"
                    ? "bg-biotech-green text-white"
                    : "bg-white text-gray-600"
                }`}
                          >
                            Biofungicides
                          </button>
                        </div>
                      )}

                      {isBiostimulants && (
                        <div className="flex gap-3 mb-6">
                          <button
                            onClick={() =>
                              setActiveBiostimulantTab("biostimulants")
                            }
                            className={`px-4 py-2 rounded-full border text-sm
                ${
                  activeBiostimulantTab === "biostimulants"
                    ? "bg-biotech-green text-white"
                    : "bg-white text-gray-600"
                }`}
                          >
                            Biostimulants
                          </button>

                          <button
                            onClick={() => setActiveBiostimulantTab("bio sea")}
                            className={`px-4 py-2 rounded-full border text-sm
                ${
                  activeBiostimulantTab === "bio sea"
                    ? "bg-biotech-green text-white"
                    : "bg-white text-gray-600"
                }`}
                          >
                            Bio Sea
                          </button>
                        </div>
                      )}

                      {/* ✅ PRODUCTS */}
                      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
                        {displayProducts.map((product) => (
                          <div
                            key={product.id}
                            className="w-full md:w-[calc((100%-2rem)/3)]"
                          >
                            <ProductRowCard
                              product={product}
                              activeSubCategory={activeSubCategory}
                              parentSubCategory={
                                isSeedDressing ? "seed dressing" : undefined
                              }
                              onEnquiryClick={() => setIsEnquiryOpen(true)}
                              setIsProductsLoading={setIsProductsLoading}
                              checkProductScroll={checkProductScroll}
                            />
                          </div>
                        ))}
                      </div>

                      {/* ✅ BIO SEA MESSAGE */}
                      {isBiostimulants &&
                        activeBiostimulantTab === "bio sea" && (
                          <div className="text-center py-10 bg-gray-50 rounded-2xl mt-4">
                            <p className="text-gray-500">
                              This product is not available right now. It will
                              be launched in the future.
                            </p>
                          </div>
                        )}

                      {/* ✅ SEPARATOR */}
                      {/* ✅ SEPARATOR */}
                      {index !== Object.entries(groupedProducts).length - 1 && (
                        <div className="w-20 h-1 bg-gold-accent mx-auto mt-20"></div>
                      )}
                    </div>
                  );
                },
              )
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-[calc((100%-2rem)/3)] md:shrink-0 md:snap-center"
                >
                  <ProductRowCard
                    product={product}
                    activeSubCategory={activeSubCategory}
                    onEnquiryClick={() => setIsEnquiryOpen(true)}
                    setIsProductsLoading={setIsProductsLoading}
                    checkProductScroll={checkProductScroll}
                  />
                </div>
              ))
            )}
          </div>

          {activeSubCategory !== "all" && filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl px-6">
              {activeSubCategory === "biostimulants" &&
              activeBiostimulantTab === "bio sea" ? (
                <>
                  <h3 className="text-xl font-semibold text-biotech-green mb-2">
                    Bio Sea Products
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Our Bio Sea range of marine-derived biostimulants will be
                    available soon. Stay tuned for innovative sea-based crop
                    solutions designed to enhance plant growth and soil health.
                  </p>
                </>
              ) : (
                <p className="text-gray-400">No product available.</p>
              )}
            </div>
          )}
        </div>
      </div>
      {/* MOBILE SCROLL ARROWS */}

      {/* CERTIFICATIONS */}
      <section className="pb-12 pt-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 uppercase mb-8">
            Certified by global authorities
          </p>
          <div className="flex gap-8 overflow-x-auto scrollbar-hide px-4 sm:justify-center sm:flex-wrap">
            <div className="shrink-0">
              <CertificationBadge type="iso9001" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="iso14001" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="cgmp" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="glp" />
            </div>
            <div className="shrink-0">
              <CertificationBadge type="imo" />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white" id="enquiry1">
        <div className="max-w-3xl mx-auto px-4">
          {/* ENQUIRY FORM MODAL */}
          {isEnquiryOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-12">
              <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 max-w-lg w-full relative">
                <button
                  className="absolute top-3 right-3 text-gray-500"
                  onClick={() => setIsEnquiryOpen(false)}
                >
                  ✕
                </button>
                <EnquiryForm />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
