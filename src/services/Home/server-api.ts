import { serverGet } from "@/lib/api/server";
import { ApiResponse, BannerResponse, CategoryResponse, PartnerResponse, ServiceResponse } from "@/types/types";

export const getServicesCards = async (locale?: string) => {
  const response = await serverGet<ApiResponse<ServiceResponse[]>>("/service-cards", locale);
  return response;
};

export const getCategoriesCards = async (locale?: string) => {
  const response = await serverGet<ApiResponse<CategoryResponse[]>>("/category-cards", locale);
  return response;
};

export const getBanners = async (slug: string, locale?: string) => {
  const response = await serverGet<ApiResponse<BannerResponse>>(`/banner/${slug}`, locale);
  return response;
};

export const getPartners = async (locale?: string) => {
  const response = await serverGet<ApiResponse<PartnerResponse[]>>("/partners", locale);
  return response;
};

