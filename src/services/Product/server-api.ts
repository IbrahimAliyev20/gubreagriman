import { serverGet } from "@/lib/api/server";
import {
  ApiResponse,
  CategoryProducts,
  PaginatedResponse,
  ProductDetail,
  ProductCategoryResponse,
} from "@/types/types";

export const getProductCategories = async (locale?: string) => {
  const response = await serverGet<ApiResponse<ProductCategoryResponse[]>>(
    "/categories",
    locale
  );
  return response;
};

export const getCategoryProducts = async (category_slug: string, locale?: string, page?: number) => {
  const response = await serverGet<ApiResponse<PaginatedResponse<CategoryProducts>>>(
    `/category-products/${category_slug}`,
    locale,
    page ? { params: { page } } : undefined
  );
  return response;
};

export const getProductDetail = async (slug: string, locale?: string) => {
  const response = await serverGet<ApiResponse<ProductDetail>>(`/product/${slug}`, locale);
  return response;
};

export const getRelatedProducts = async (slug: string, locale?: string) => {
  const response = await serverGet<ApiResponse<CategoryProducts[]>>(
    `/related-products/${slug}`,
    locale
  );
  return response;
};

