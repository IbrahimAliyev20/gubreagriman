import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { getAbout, getStatics } from "./api";
import { useLocale } from "next-intl";

const useStatics = () => {  
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.about.statics(locale),
        queryFn: () => getStatics(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};

const useAbout = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.about.about(locale),
        queryFn: () => getAbout(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};

export { useStatics, useAbout };