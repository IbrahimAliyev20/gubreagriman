import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { queryKeys } from "@/lib/query-keys";
import getMetaTags from "./api";

const useMetaTags = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.metaTags.metaTags(locale),
        queryFn: () => getMetaTags(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });

};
export default useMetaTags;