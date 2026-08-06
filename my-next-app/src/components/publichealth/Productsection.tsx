"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { products } from "../../components/data/products";
import { ProductRowCard } from "../../components/products/ProductRowCard";
import Loader from "@/components/ui/Loader";

export default function ProductsClient() {
  /* -------------------------------------------------- */
  /* URL PARAM */
  /* -------------------------------------------------- */

  const searchParams = useSearchParams();
  const subcategoryFromURL = searchParams.get("subcategory");

  /* -------------------------------------------------- */
  /* STATES */
  /* -------------------------------------------------- */
  const [mobileDropdownText, setMobileDropdownText] = useState(
    "Select Product Category",
  );
  const [activeSubCategory, setActiveSubCategory] = useState<string>("all");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  /* -------------------------------------------------- */
  /* REFS */
  /* -------------------------------------------------- */

  const subCatScrollRef = useRef<HTMLUListElement | null>(null);
  const productScrollRef = useRef<HTMLDivElement | null>(null);

  /* -------------------------------------------------- */
  /* SUBCATEGORIES (PUBLIC HEALTH ONLY) */
  /* -------------------------------------------------- */

  const publicHealthSubCategories = ["All", "Biolarvicides", "Bednet"];

  /* -------------------------------------------------- */
  /* URL → SUBCATEGORY SYNC */
  /* -------------------------------------------------- */

  useEffect(() => {
    if (!subcategoryFromURL) return;

    const subLower = subcategoryFromURL.toLowerCase();

    if (
      subLower === "all" ||
      publicHealthSubCategories.some((s) => s.toLowerCase() === subLower)
    ) {
      setActiveSubCategory(subLower);
    }
  }, [subcategoryFromURL]);

  /* -------------------------------------------------- */
  /* PRODUCTS FILTER */
  /* -------------------------------------------------- */
  const filteredProducts =
    activeSubCategory === "all"
      ? products.filter((p) => p.category === "Public Health")
      : products.filter(
          (p) =>
            p.category === "Public Health" &&
            p.subCategory?.toLowerCase() === activeSubCategory,
        );

  /* -------------------------------------------------- */
  /* LOADING SIMULATION */
  /* -------------------------------------------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProductsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  /* -------------------------------------------------- */
  /* JSX */
  /* -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SUBCATEGORY BUTTONS – DESKTOP */}
      <div className="max-w-7xl mt-4 sm:mt-6 px-2 mx-auto sm:px-6">
        <ul
          ref={subCatScrollRef}
          className="hidden md:flex gap-2 mx-3 sm:mx-10 py-2"
        >
          {publicHealthSubCategories.map((sub) => (
            <li key={sub}>
              <button
                onClick={() => {
                  setIsProductsLoading(true);
                  setActiveSubCategory(sub.toLowerCase());
                  setMobileDropdownText(sub);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition cursor-pointer
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

      {/* MOBILE DROPDOWN */}
      <div className="md:hidden max-w-7xl mx-auto px-4 my-4">
        <button
          className="w-full bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center font-medium"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span>{mobileDropdownText}</span>
          <span>{mobileMenuOpen ? "▲" : "▼"}</span>
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 bg-white rounded-lg shadow-md overflow-hidden"
            >
              {publicHealthSubCategories.map((sub) => (
                <li key={sub}>
                  <button
                    onClick={() => {
                      setActiveSubCategory(sub.toLowerCase());
                      setMobileDropdownText(sub);
                      setIsProductsLoading(true);
                      setMobileMenuOpen(false);
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

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={productScrollRef}
          className="flex flex-col gap-4 py-4 md:flex-row md:flex-wrap"
        >
          {isProductsLoading ? (
            <div className="w-full flex justify-center py-20">
              <Loader />
            </div>
          ) : filteredProducts.length ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-[calc((100%-2rem)/3)]"
              >
                <ProductRowCard
                  product={product}
                  activeSubCategory={activeSubCategory}
                  onEnquiryClick={() => setIsEnquiryOpen(true)}
                />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-20 bg-gray-50 rounded-2xl">
              <p className="text-gray-400">No product available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
