"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useCategoryProducts } from "@/services/Product/queries";
import { CategoryProducts, PaginatedResponse } from "@/types/types";
import { Loader2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductListProps {
  categorySlug: string;
}

export default function ProductList({ categorySlug }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, error } = useCategoryProducts(
    categorySlug,
    currentPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug]);

  let paginatedData: PaginatedResponse<CategoryProducts> | null = null;

  if (data) {
    if ("meta" in data && "data" in data && "links" in data) {
      paginatedData = data as unknown as PaginatedResponse<CategoryProducts>;
    }
    else if (
      data.data &&
      typeof data.data === "object" &&
      "meta" in data.data &&
      "data" in data.data &&
      "links" in data.data
    ) {
      paginatedData =
        data.data as unknown as PaginatedResponse<CategoryProducts>;
    }
  }

  const products: CategoryProducts[] =
    paginatedData?.data && Array.isArray(paginatedData.data)
      ? paginatedData.data
      : [];

  const paginationMeta = paginatedData?.meta;

  const totalPages = paginationMeta?.last_page || 1;
  const currentPageNumber = paginationMeta?.current_page || 1;

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
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <p className="text-xl font-medium text-gray-700">Məhsul tapılmadı</p>
        <p className="text-gray-500 mt-2">
          Bu kateqoriyada hələ məhsul əlavə edilməyib.
        </p>
        {isError && (
          <p className="text-red-500 text-sm mt-4">
            Xəta:{" "}
            {error instanceof Error
              ? error.message
              : error
              ? String(error)
              : "Naməlum xəta"}
          </p>
        )}
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPaginationItems = () => {
    const items: React.ReactNode[] = [];
    const maxVisiblePages = 7;
    const sidePages = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={i === currentPageNumber}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
            isActive={1 === currentPageNumber}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      let startPage = Math.max(2, currentPageNumber - sidePages);
      let endPage = Math.min(totalPages - 1, currentPageNumber + sidePages);

      if (currentPageNumber <= sidePages + 1) {
        endPage = Math.min(maxVisiblePages - 1, totalPages - 1);
      }

      if (currentPageNumber >= totalPages - sidePages) {
        startPage = Math.max(2, totalPages - maxVisiblePages + 2);
      }

      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={i === currentPageNumber}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
            isActive={totalPages === currentPageNumber}
            className="cursor-pointer"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {products.map((product) => {
          if (!product) return null;

          const image =
            product?.image ||
            product?.thumb_image ||
            "/placeholder-product.jpg";

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

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPageNumber > 1) {
                      handlePageChange(currentPageNumber - 1);
                    }
                  }}
                  className={
                    currentPageNumber <= 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPageNumber < totalPages) {
                      handlePageChange(currentPageNumber + 1);
                    }
                  }}
                  className={
                    currentPageNumber >= totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}
