import getServices from "./api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { queryKeys } from "@/lib/query-keys";

const useServices = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.services.list(locale),
        queryFn: () => getServices(locale),
        // Services data doesn't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};

export { useServices };