import getServices from "./api";
import { useQuery } from "@tanstack/react-query";

const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: getServices,
        // Services data doesn't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};

export { useServices };