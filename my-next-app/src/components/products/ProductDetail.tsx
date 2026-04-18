"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "../data/products";
import Loader from "@/components/ui/Loader";

interface ProductModalProps {
  product: Product;
  subcategoryProducts?: Product[];
  currentProductIndex?: number;
  setCurrentProductIndex?: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

export const ProductDetail: React.FC<ProductModalProps> = ({
  product,
  subcategoryProducts = [],
  currentProductIndex = 0,
  setCurrentProductIndex,
  isOpen,
  onClose,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevProduct = () => {
    if (setCurrentProductIndex && currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };

  const handleNextProduct = () => {
    if (
      setCurrentProductIndex &&
      currentProductIndex < subcategoryProducts.length - 1
    ) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  // Scroll to top on product change
  useEffect(() => {
    setIsLoading(true);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [product, currentProductIndex]);

  if (!isOpen) return null;
  const renderIngredient = () => {
    const ingredient = product.activeIngredient;

    // ARRAY CASE → (a), (b), (c)
    if (Array.isArray(ingredient)) {
      return ingredient.map((item, index) => (
        <span key={index} className="block text-gray-600 font-normal">
          ({String.fromCharCode(97 + index)}) {item}
        </span>
      ));
    }

    // OBJECT CASE
    if (typeof ingredient === "object" && ingredient !== null) {
      return (
        <span className="block text-gray-600 font-normal">
          {ingredient.name}
          {ingredient.concentration ? ` (${ingredient.concentration})` : ""}
        </span>
      );
    }

    // STRING CASE
    if (typeof ingredient === "string") {
      return (
        <span className="block text-gray-600 font-normal">{ingredient}</span>
      );
    }

    return null;
  };
  const renderDirectionForUse = () => {
    const dir = product.directionForUse;

    // STRING CASE
    if (typeof dir === "string") {
      return <span className="block text-gray-600 font-normal">{dir}</span>;
    }

    // OBJECT CASE
    if (typeof dir === "object" && dir !== null) {
      const labels: Record<string, string> = {
        dosage: "Dosage",
        seed_treatment: "Seed Treatment",
        seedling_dipping: "Seedling Dipping",
        sett_treatment: "Sett Treatment",
        soil_application: "Soil Application",
        tree_treatment: "Tree Treatment",
        specific_recommend: "Specific Recommendation",
        seedling_treatment: "Seedling Treatment",
        foliar_treatment: "Foliar Treatment",
      };

      return Object.entries(dir).map(([key, value]) => {
        if (!value) return null;

        return (
          <span key={key} className="block text-gray-600 font-normal mt-1">
            <span className="font-medium text-green-primary">
              {labels[key] ?? key}:
            </span>{" "}
            {value}
          </span>
        );
      });
    }

    return null;
  };

  const renderPacking = () => {
    const packing = product.packing;

    // STRING CASE
    if (typeof packing === "string") {
      return <span className="block text-gray-600 font-normal">{packing}</span>;
    }

    // OBJECT CASE
    if (typeof packing === "object" && packing !== null) {
      return Object.entries(packing).map(([key, value]) => (
        <span key={key} className="block font-normal">
          <span className="text-green-primary uppercase">{key}:</span>{" "}
          <span className="text-gray-600">{value}</span>
        </span>
      ));
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

  const renderSpectrum = () => {
    const spectrum = product.spectrum;

    // STRING
    if (typeof spectrum === "string") {
      return <span className="text-gray-600">{spectrum}</span>;
    }

    // ARRAY
    if (Array.isArray(spectrum)) {
      return spectrum.map((item, index) => {
        const [code, rest] = item.split(" : ");

        return (
          <span key={index} className="block text-gray-600">
            <span className="text-green-primary font-medium">{code}</span>
            {" : "}
            {rest}
          </span>
        );
      });
    }

    return null;
  };
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-12 px-2 bg-black/50">
      <div className="relative bg-white shadow-xl w-full max-w-3xl rounded-3xl mx-2 sm:mx-0 rounded-tr-none rounded-bl-none">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-black text-white rounded-full p-1 shadow hover:bg-gray-800 transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div
          ref={scrollContainerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="max-h-[82vh] overflow-y-auto px-4 sm:px-6 md:px-10 lg:px-36 custom-scroll relative"
        >
          {/* FULL MODAL LOADER */}
          {isLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white rounded-3xl pointer-events-none">
              <Loader />
            </div>
          )}

          {/* BANNER + BROCHURE WRAPPER */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            {/* BANNER */}
            <Image
              src={product.banner || "/default-banner.jpg"}
              alt={product.name || "Product Banner"}
              fill
              className="object-contain"
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>

          {/* PRODUCT NAME */}
            <div className="leading-tight">
            <h3 className="text-lg font-bold text-biotech-green italic">
              {product.name}
            </h3>

            <p className="text-[12px] font-semibold text-biotech-green italic">
              ({product.product})
            </p>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="mt-3 space-y-1 text-sm font-lato">
            {product.activeIngredient && (
              <p>
                <span className="font-bold text-biotech-green uppercase">
                  ACTIVE INGREDIENT:
                </span>{" "}
                {renderIngredient()}
              </p>
            )}

            {product.potency && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Potency:
                </strong>{" "}
                <span className="text-gray-600">{product.potency}</span>
              </p>
            )}
            {product.spectrum && (
              <p>
                <span className="font-bold text-biotech-green uppercase">
                  SPECTRUM :
                </span>{" "}
                {renderSpectrum()}
              </p>
            )}

            {product.screenshots?.spectrum && (
              <div className="mt-3 w-full rounded-2xl overflow-hidden">
                <Image
                  src={product.screenshots.spectrum}
                  alt={`${product.name} spectrum`}
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {product.modeOfAction && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Mode of Action:
                </strong>{" "}
                <span className="text-gray-600">
                  {product.modeOfAction || "N/A"}
                </span>
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
            {product.directionForUse && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Direction For Use:
                </strong>{" "}
                {renderDirectionForUse()}
              </p>
            )}
            {product.ecoSafety && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Eco Safety:
                </strong>{" "}
                <span className="text-gray-600">
                  {product.ecoSafety || "N/A"}
                </span>
              </p>
            )}
            {product.shelfLife && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Shelf Life and storage:
                </strong>{" "}
                <span className="text-gray-600">
                  {product.shelfLife || "N/A"}
                </span>
              </p>
            )}

            {product.packing && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Packing:
                </strong>{" "}
                {renderPacking()}
              </p>
            )}

            {product.furtherinformations && (
              <p>
                <strong className="text-biotech-green uppercase">
                  Further Informations:
                </strong>{" "}
                <span className="text-gray-600">
                  {product.furtherinformations}
                </span>
              </p>
            )}

            {Array.isArray(product.biotrapparts) &&
              product.biotrapparts.length > 0 && (
                <p>
                  <span className="font-bold text-biotech-green uppercase">
                    BIOTRAP IS MADE UP OF 3 PARTS:
                  </span>
                  {renderBiotrapParts()}
                </p>
              )}
          </div>

          {/* PRODUCT SCREENSHOT (SINGLE) */}
          {product.screenshots?.bottom && (
            <div className=" mt-4 w-full overflow-hidden">
              <Image
                src={product.screenshots.bottom}
                alt={`${product.name} screenshot`}
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* MOBILE FOOTER BUTTONS */}
          <div className="sm:hidden flex justify-between mt-8 pb-4">
            <button
              onClick={handlePrevProduct}
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            {/* <button
              onClick={handleNextProduct}
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              Next
              <ArrowRight size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
