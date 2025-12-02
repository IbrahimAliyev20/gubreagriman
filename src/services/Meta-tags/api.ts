import { get } from "@/lib/api";
import { ApiResponse, MetaTagsResponse } from "@/types/types";


const getMetaTags = async (slug?: string, locale?: string) => {
    const response = await get<ApiResponse<MetaTagsResponse>>(`/meta-tags/${slug}`, { locale });
    return response;
  };

  export default getMetaTags;