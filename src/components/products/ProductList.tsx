"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useCategoryProducts } from "@/services/Product/queries";
import { CategoryProducts } from "@/types/types";

interface ProductListProps {
  categorySlug: string;
}

export default function ProductList({ categorySlug }: ProductListProps) {
  const { data: productsData, isLoading, isError, error } = useCategoryProducts(categorySlug);

  // Debug: API response'unu kontrol et
  console.log("ProductList - categorySlug:", categorySlug);
  console.log("ProductList - productsData:", productsData);
  console.log("ProductList - isError:", isError);
  console.log("ProductList - error:", error);

  if (isLoading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-gray-500">Yüklənir...</p>
      </div>
    );
  }

  // API response yapısını kontrol et - farklı formatlar olabilir
  let products: CategoryProducts[] = [];
  
  if (productsData) {
    // Format 1: ApiResponse<PaginatedResponse<CategoryProducts>>
    if (productsData.data?.data && Array.isArray(productsData.data.data)) {
      products = productsData.data.data;
    }
    // Format 2: Direkt PaginatedResponse<CategoryProducts>
    else if (productsData.data && Array.isArray(productsData.data)) {
      products = productsData.data;
    }
    // Format 3: Direkt array
    else if (Array.isArray(productsData)) {
      products = productsData;
    }
  }

  if (isError || products.length === 0) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-gray-500">Məhsul tapılmadı</p>
        {isError && error && (
          <p className="text-red-500 text-sm mt-2">Xəta: {String(error)}</p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
      {products.map((product: CategoryProducts, index: number) => {
        // Validate image URL - check if it's a valid non-empty string
        const isValidImageUrl = (url: string | undefined | null): boolean => {
          if (!url || typeof url !== 'string') return false;
          const trimmed = url.trim();
          if (trimmed === '' || trimmed === 'null' || trimmed === 'undefined') return false;
          return trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://');
        };

        // Try image first, then thumb_image, then fallback
        const imageUrl = isValidImageUrl(product.image) 
          ? product.image 
          : isValidImageUrl(product.thumb_image)
          ? product.thumb_image
          : undefined; // Let ProductCard handle the fallback
        
        return (
          <ProductCard
            key={product.slug || index}
            product={{
              id: index,
              name: product.name,
              category: product.category,
              image: imageUrl,
              slug: product.slug,
            }}
          />
        );
      })}
    </div>
  );
}

