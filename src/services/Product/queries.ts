// queries.ts
import { useQuery } from "@tanstack/react-query";
import {
  getCategoryProducts,
  getProductCategories,
  getProductDetail,
  getRelatedProducts,
} from "./api";

export const useProductCategories = () => {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: getProductCategories,
    // Product categories don't change frequently, cache for 10 minutes
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useCategoryProducts = (category_slug: string) => {
  return useQuery({
    queryKey: ["category-products", category_slug],
    queryFn: () => getCategoryProducts(category_slug),
    enabled: !!category_slug,
    // Category products don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useProductDetail = (slug: string) => {
  return useQuery({
    queryKey: ["product-detail", slug],
    queryFn: () => getProductDetail(slug),
    enabled: !!slug,
    // Product details don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useRelatedProducts = (slug: string) => {
  return useQuery({
    queryKey: ["related-products", slug],
    queryFn: () => getRelatedProducts(slug),
    enabled: !!slug,
    // Related products don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};
