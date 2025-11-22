// queries.ts
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import {
  getCategoryProducts,
  getProductCategories,
  getProductDetail,
  getRelatedProducts,
} from "./api";
import { queryKeys } from "@/lib/query-keys";

export const useProductCategories = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.categories(locale),
    queryFn: () => getProductCategories(locale),
    // Product categories don't change frequently, cache for 10 minutes
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useCategoryProducts = (category_slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.categoryProducts(category_slug, locale),
    queryFn: () => getCategoryProducts(category_slug, locale),
    enabled: !!category_slug,
    // Category products don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useProductDetail = (slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.detail(slug, locale),
    queryFn: () => getProductDetail(slug, locale),
    enabled: !!slug,
    // Product details don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useRelatedProducts = (slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.related(slug, locale),
    queryFn: () => getRelatedProducts(slug, locale),
    enabled: !!slug,
    // Related products don't change frequently, cache for 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};
