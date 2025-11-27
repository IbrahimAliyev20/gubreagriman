import { get } from "@/lib/api";
import { ApiResponse, TermsResponse } from "@/types/types";

export const getTerms = async (slug: string, locale?: string) => {
  const response = await get<ApiResponse<TermsResponse>>(`/terms/${slug}`, { locale });
  return response;
};