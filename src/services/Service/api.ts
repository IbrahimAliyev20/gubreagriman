  import { get } from "@/lib/api";
  import { Services } from "@/types/types";

  const getServices = async (): Promise<{ data: Services[] }> => {
    const response = await get<{ data: Services[] } | Services[]>("/services");
    console.log("API Response:", response);
    
    // Eğer direkt array geliyorsa, { data: [...] } formatına çevir
    if (Array.isArray(response)) {
      return { data: response };
    }
    
    // Eğer { data: [...] } formatında geliyorsa, direkt döndür
    return response as { data: Services[] };
  };

  export default getServices;
