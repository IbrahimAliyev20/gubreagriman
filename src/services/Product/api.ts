// api.ts
import { get } from "@/lib/api";
import {
  ApiResponse,
  CategoryProducts,
  PaginatedResponse,
  ProductDetail,
  ProductCategoryResponse,
} from "@/types/types";

const getProductCategories = async () => {
  const response = await get<ApiResponse<ProductCategoryResponse[]>>(
    "/categories"
  );
  return response;
};

const getCategoryProducts = async (category_slug: string) => {
  console.log("API - getCategoryProducts called with slug:", category_slug);
  const response = await get<ApiResponse<PaginatedResponse<CategoryProducts>>>(
    `/category-products/${category_slug}`
  );
  console.log("API - getCategoryProducts response:", response);
  return response;
};

const getProductDetail = async (slug: string) => {
  const response = await get<ApiResponse<ProductDetail>>(`/product/${slug}`);
  return response;
};

const getRelatedProducts = async (slug: string) => {
  const response = await get<ApiResponse<CategoryProducts[]>>(
    `/related-products/${slug}`
  );
  return response;
};

export {
  getProductCategories,
  getCategoryProducts,
  getProductDetail,
  getRelatedProducts,
};
