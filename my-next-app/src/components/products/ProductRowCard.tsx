"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { products, Product } from "../data/products";
import { ProductDetail } from "../products/ProductDetail";
import Image from "next/image";

interface ProductRowCardProps {
  product: Product;
  activeSubCategory?: string;
  parentSubCategory?: string; // ✅ added for ALL view
  onEnquiryClick?: () => void;
  setIsProductsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  checkProductScroll?: () => void;
}

export function ProductRowCard({
  product,
  activeSubCategory,
  parentSubCategory,
  onEnquiryClick,
  setIsProductsLoading,
  checkProductScroll,
}: ProductRowCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Filter products of same subcategory
  const subcategoryProducts = products.filter((p) => {
    if (
      activeSubCategory === "seed dressing" ||
      parentSubCategory === "seed dressing"
    ) {
      const excludedSeedDressingProducts = [
        "biopotash/potash-cure",
        "sugar-plus",
        "armour",
      ];

      const productName = p.name?.toLowerCase().trim();

      return (
        ["biofertilizers", "biofungicides"].includes(p.subCategory ?? "") &&
        p.applications?.includes("Seed Dressing") &&
        !excludedSeedDressingProducts.includes(productName)
      );
    }

    return p.subCategory === product.subCategory;
  });

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const renderIngredient = () => {
    const ingredient = product.activeIngredient;

    if (Array.isArray(ingredient)) {
      return ingredient.map((item, index) => (
        <span key={index} className="block">
          ({String.fromCharCode(97 + index)}) {item}
        </span>
      ));
    }

    if (typeof ingredient === "object" && ingredient !== null) {
      return (
        <span>
          {ingredient.name}{" "}
          <span className="text-gray-600">({ingredient.concentration})</span>
        </span>
      );
    }

    if (typeof ingredient === "string") {
      return <span>{ingredient}</span>;
    }

    return null;
  };

  const renderBiotrapParts = () => {
    const parts = product.biotrapparts;

    if (!Array.isArray(parts) || parts.length === 0) return null;

    return parts.map((item, index) => (
      <span key={index} className="block text-gray-600 font-normal">
        ({String.fromCharCode(97 + index)}) {item}
      </span>
    ));
  };

  return (
    <>
      <div className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
        {/* SUBCATEGORY TAG */}
        {product.subCategory && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-biotech-green/10 text-biotech-green text-[10px] font-semibold rounded-full uppercase z-10">
            {activeSubCategory === "seed dressing" ||
            parentSubCategory === "seed dressing"
              ? `Seed Dressing (${product.subCategory})`
              : product.subCategory}
          </span>
        )}

        {/* IMAGE */}
        <div className="w-full h-64 bg-white rounded-xl overflow-hidden flex items-center justify-center p-4">
          <Image
            loading="eager"
            src={product.image || "/placeholder.png"}
            width={120}
            height={120}
            alt={product.name || "Product Image"}
            className="max-h-full max-w-full object-contain"
            onLoad={() => {
              setIsProductsLoading?.(false);
              checkProductScroll?.();
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="grow space-y-2 pb-2">
          <div className="leading-tight">
            <h3 className="text-2xl font-bold text-biotech-green italic">
              {product.name}
            </h3>

            <p className="text-[12px] font-semibold text-biotech-green italic">
              ({product.product})
            </p>
          </div>

          <div className="text-[12px] space-y-1 text-gray-600">
            {product.activeIngredient && (
              <p>
                <span className="font-bold text-biotech-green uppercase">
                  ACTIVE INGREDIENT:
                </span>{" "}
                {renderIngredient()}
              </p>
            )}

            {typeof product.formulation === "string" &&
              product.formulation.trim().length > 0 && (
                <p>
                  <strong className="text-biotech-green uppercase">
                    Formulation:
                  </strong>{" "}
                  <span className="text-gray-600">{product.formulation}</span>
                </p>
              )}

            {product.spectrum && (
              <p className="line-clamp-4">
                <span className="font-bold text-biotech-green uppercase">
                  SPECTRUM:
                </span>{" "}
                {Array.isArray(product.spectrum)
                  ? product.spectrum.map((item, index) => (
                      <span key={index} className="block">
                        {item}
                      </span>
                    ))
                  : product.spectrum}
              </p>
            )}

            {Array.isArray(product.biotrapparts) &&
              product.biotrapparts.length > 0 && (
                <p className="line-clamp-4">
                  <span className="font-bold text-biotech-green uppercase">
                    BIOTRAP IS MADE UP OF 3 PARTS:
                  </span>
                  {renderBiotrapParts()}
                </p>
              )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={onEnquiryClick}
            className="flex-1 text-[15px] py-2 border-biotech-green text-biotech-green hover:bg-biotech-dark"
          >
            Request
          </Button>

          <Button
            onClick={() => {
              setCurrentProductIndex(
                subcategoryProducts.findIndex((p) => p.id === product.id),
              );
              setIsOpen(true);
            }}
            className="flex-1 text-[15px] py-2 bg-biotech-green text-white flex items-center justify-center gap-1"
          >
            View Details <ArrowRight size={12} />
          </Button>
        </div>
      </div>

      {/* PRODUCT MODAL */}
      <ProductDetail
        product={subcategoryProducts[currentProductIndex]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        subcategoryProducts={subcategoryProducts}
        currentProductIndex={currentProductIndex}
        setCurrentProductIndex={setCurrentProductIndex}
      />
    </>
  );
}
