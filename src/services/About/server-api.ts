import { serverGet } from "@/lib/api/server";
import { ApiResponse, StaticResponse, AboutResponse } from "@/types/types";

export const getStatics = async (locale?: string) => {
  const response = await serverGet<ApiResponse<StaticResponse[]>>(
    "/statistics",
    locale
  );
  return response;
};

export const getAbout = async (locale?: string) => {
  const response = await serverGet<ApiResponse<AboutResponse[]>>(
    "/about",
    locale
  );
  return response;
};

