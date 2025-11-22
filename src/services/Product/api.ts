// api.ts
import { get } from "@/lib/api";
import {
  ApiResponse,
  CategoryProducts,
  PaginatedResponse,
  ProductDetail,
  ProductCategoryResponse,
} from "@/types/types";

const getProductCategories = async (locale?: string) => {
  const response = await get<ApiResponse<ProductCategoryResponse[]>>(
    "/categories",
    { locale }
  );
  return response;
};

const getCategoryProducts = async (category_slug: string, locale?: string) => {
  const response = await get<ApiResponse<PaginatedResponse<CategoryProducts>>>(
    `/category-products/${category_slug}`,
    { locale }
  );
  return response;
};

const getProductDetail = async (slug: string, locale?: string) => {
  const response = await get<ApiResponse<ProductDetail>>(`/product/${slug}`, { locale });
  return response;
};

const getRelatedProducts = async (slug: string, locale?: string) => {
  const response = await get<ApiResponse<CategoryProducts[]>>(
    `/related-products/${slug}`,
    { locale }
  );
  return response;
};

export {
  getProductCategories,
  getCategoryProducts,
  getProductDetail,
  getRelatedProducts,
};
