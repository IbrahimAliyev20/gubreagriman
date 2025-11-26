import { get } from "@/lib/api";
import { AboutResponse, ApiResponse, StaticResponse } from "@/types/types";

const getStatics = async ( locale?: string ) => {
  const response = await get<ApiResponse<StaticResponse[]>>("/statistics", { locale });
  return response;
};

const getAbout = async ( locale?: string ) => {
  const response = await get<ApiResponse<AboutResponse[]>>("/about", { locale });
  return response;
};  
export { getStatics, getAbout };