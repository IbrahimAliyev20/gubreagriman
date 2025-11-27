import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { queryKeys } from "@/lib/query-keys";
import { getTerms } from "./api";

const useTerms = (slug: string) => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.terms.terms(slug, locale),
        queryFn: () => getTerms(slug, locale),
        staleTime: 10 * 60 * 1000,  
        gcTime: 30 * 60 * 1000, 
    });
};
export default useTerms;