// services/Product/queries.ts
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
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
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

// INFINITE SCROLL – ƏSAS YENİLİK BURADADIR
export const useCategoryProductsInfinite = (category_slug: string) => {
  const locale = useLocale();

  return useInfiniteQuery({
    queryKey: queryKeys.products.categoryProductsInfinite(category_slug, locale),
    queryFn: async ({ pageParam }) => {
      // Əgər pageParam URL-dirsə (string), birbaşa o URL-dən fetch et
      if (typeof pageParam === "string") {
        const res = await fetch(pageParam, {
          headers: {
            "Accept-Language": locale || "az",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch next page");
        return await res.json();
      }

      // Əgər pageParam 1-dirsə və ya undefined-dirsə, ilk səhifəni yüklə
      const response = await getCategoryProducts(category_slug, locale);
      return response;
    },
    initialPageParam: 1 as number | string,
    getNextPageParam: (lastPage) => {
      // Next URL-ni birbaşa qaytar (string kimi)
      const nextUrl = lastPage?.data?.links?.next;
      return nextUrl || undefined;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

// Köhnə query (istəyən istifadə edə bilər, məsələn pagination düymələri üçün)
export const useCategoryProducts = (category_slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.categoryProducts(category_slug, locale),
    queryFn: () => getCategoryProducts(category_slug, locale),
    enabled: !!category_slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useProductDetail = (slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.detail(slug, locale),
    queryFn: () => getProductDetail(slug, locale),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useRelatedProducts = (slug: string) => {
  const locale = useLocale();
  return useQuery({
    queryKey: queryKeys.products.related(slug, locale),
    queryFn: () => getRelatedProducts(slug, locale),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};