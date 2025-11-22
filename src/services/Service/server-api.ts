import { serverGet } from "@/lib/api/server";
import { Services } from "@/types/types";

export const getServices = async (locale?: string): Promise<{ data: Services[] }> => {
  const response = await serverGet<{ data: Services[] } | Services[]>("/services", locale);
  
  if (Array.isArray(response)) {
    return { data: response };
  }
  
  return response as { data: Services[] };
};

