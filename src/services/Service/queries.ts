import getServices from "./api";
import { useQuery } from "@tanstack/react-query";

const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    });
};

export { useServices };