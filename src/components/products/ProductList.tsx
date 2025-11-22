"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useCategoryProducts } from "@/services/Product/queries";
import { CategoryProducts } from "@/types/types";
import { Loader2 } from "lucide-react";

interface ProductListProps {
  categorySlug: string;
}

export default function ProductList({ categorySlug }: ProductListProps) {
  const { data: response, isLoading, isError, error } = useCategoryProducts(categorySlug);

  // Normalize products from different possible API responses
  const getProducts = (): CategoryProducts[] => {
    if (!response) return [];

    // Handle nested data structure: { data: { data: [...] } }
    if (response.data?.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    // Handle { data: [...] }
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }
    // Handle direct array (rare)
    if (Array.isArray(response)) {
      return response;
    }
    return [];
  };

  const products = getProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <Loader2 className="w-10 h-10 animate-spin text-[#8BC34A]" />
        <p className="mt-4 text-gray-500 text-lg">Məhsullar yüklənir...</p>
      </div>
    );
  }

  if (isError || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="bg-gray-100 rounded-full p-6 mb-4">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <p className="text-xl font-medium text-gray-700">Məhsul tapılmadı</p>
        <p className="text-gray-500 mt-2">Bu kateqoriyada hələ məhsul əlavə edilməyib.</p>
        {isError && <p className="text-red-500 text-sm mt-4">Xəta: {(error as Error)?.message || "Naməlum xəta"}</p>}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
      {products.map((product) => {
        const validImage = (() => {
          if (!product.image || product.image.trim() === "") return product.thumb_image;
          if (!product.thumb_image || product.thumb_image.trim() === "") return product.image;
          return product.image;
        })();

        return (
          <ProductCard
            key={product.slug}
            product={{
              name: product.name,
              category: product.category,
              image: validImage || "/placeholder-product.jpg", // fallback image
              slug: product.slug,
            }}
          />
        );
      })}
    </div>
  );
}