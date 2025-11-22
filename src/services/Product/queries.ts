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
  });
};

export const useCategoryProducts = (category_slug: string) => {
  return useQuery({
    queryKey: ["category-products", category_slug],
    queryFn: () => getCategoryProducts(category_slug),
    enabled: !!category_slug,
  });
};

export const useProductDetail = (slug: string) => {
  return useQuery({
    queryKey: ["product-detail", slug],
    queryFn: () => getProductDetail(slug),
    enabled: !!slug,
  });
};

export const useRelatedProducts = (slug: string) => {
  return useQuery({
    queryKey: ["related-products", slug],
    queryFn: () => getRelatedProducts(slug),
    enabled: !!slug,
  });
};
