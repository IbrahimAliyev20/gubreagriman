  import { get } from "@/lib/api";
  import { Services } from "@/types/types";

  const getServices = async (): Promise<{ data: Services[] }> => {
    const response = await get<{ data: Services[] } | Services[]>("/services");
    console.log("API Response:", response);
    
    if (Array.isArray(response)) {
      return { data: response };
    }
    
    return response as { data: Services[] };
  };

  export default getServices;
