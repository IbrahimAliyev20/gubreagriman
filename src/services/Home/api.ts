import { get } from "@/lib/api";
import { ApiResponse, BannerResponse, CategoryResponse, PartnerResponse, ServiceResponse } from "@/types/types";

export const getServicesCards = async () => {
  const response = await get<ApiResponse<ServiceResponse[]>>("/service-cards");
  return response;
};
export const getCategoriesCards = async () => {
  const response = await get<ApiResponse<CategoryResponse[]>>("/category-cards");
  return response;
};
export const getBanners = async (slug: string) => {
  const response = await get<ApiResponse<BannerResponse>>(`/banner/${slug}`);
  return response;
};
export const getPartners = async () => {
  const response = await get<ApiResponse<PartnerResponse[]>>("/partners");
  return response;
};