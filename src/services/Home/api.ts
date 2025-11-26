import { get } from "@/lib/api";
import { ApiResponse, BannerResponse, CategoryResponse, HomeAboutResponse, PartnerResponse, ServiceResponse, SocialLinkResponse } from "@/types/types";

 const getServicesCards = async (locale?: string) => {
  const response = await get<ApiResponse<ServiceResponse[]>>("/service-cards", { locale });
  return response;
};
 const getCategoriesCards = async (locale?: string) => {
  const response = await get<ApiResponse<CategoryResponse[]>>("/category-cards", { locale });
  return response;
};
 const getBanners = async (slug: string, locale?: string) => {
  const response = await get<ApiResponse<BannerResponse>>(`/banner/${slug}`, { locale });
  return response;
};
 const getPartners = async (locale?: string) => {
  const response = await get<ApiResponse<PartnerResponse[]>>("/partners", { locale });
  return response;
};
 const getSocialLinks = async (locale?: string) => {
  const response = await get<ApiResponse<SocialLinkResponse[]>>("/social-links", { locale });
  return response;
};
const getHomeAbout = async (locale?: string) => {
  const response = await get<ApiResponse<HomeAboutResponse >>("/home-about", { locale });
  return response;
};

export { getServicesCards, getCategoriesCards, getBanners, getPartners, getSocialLinks, getHomeAbout };