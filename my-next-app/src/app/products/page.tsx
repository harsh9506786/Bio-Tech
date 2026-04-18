"use client";
import React, { Suspense } from "react";
import ProductsClient from "@/components/products/ProductsClient";
import Loader from "../../components/ui/Loader";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
