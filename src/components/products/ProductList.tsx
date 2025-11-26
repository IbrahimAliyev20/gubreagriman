"use client";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useCategoryProductsInfinite } from "@/services/Product/queries";
import { CategoryProducts } from "@/types/types";
import { Loader2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ProductListProps {
  categorySlug: string;
}

export default function ProductList({ categorySlug }: ProductListProps) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCategoryProductsInfinite(categorySlug);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "400px",
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const products: CategoryProducts[] = 
    data?.pages
      .flatMap((page) => {
        if (page?.data?.data && Array.isArray(page.data.data)) {
          return page.data.data;
        }
        if (Array.isArray(page?.data)) {
          return page.data;
        }
        return [];
      })
      .filter((product): product is CategoryProducts => product != null) ?? [];

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
        {isError && (
          <p className="text-red-500 text-sm mt-4">
            Xəta: {error instanceof Error ? error.message : error ? String(error) : "Naməlum xəta"}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {products.map((product) => {
          if (!product) return null;
          
          const image = product?.image || product?.thumb_image || "/placeholder-product.jpg";

          return (
            <ProductCard
              key={product.slug}
              product={{
                name: product.name,
                category: product.category,
                image,
                slug: product.slug,
              }}
            />
          );
        })}
      </div>

      {hasNextPage && (
        <div ref={ref} className="flex justify-center py-12">
          {isFetchingNextPage ? (
            <Loader2 className="w-8 h-8 animate-spin text-[#8BC34A]" />
          ) : (
            <div className="h-10" />
          )}
        </div>
      )}

      {!hasNextPage && products.length > 9 && (
        <div className="text-center py-8 text-gray-500 font-medium">
          Bütün məhsullar yükləndi
        </div>
      )}
    </>
  );
}