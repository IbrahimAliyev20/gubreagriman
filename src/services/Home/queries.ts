import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { getBanners, getCategoriesCards, getPartners, getServicesCards } from "./api";
import { queryKeys } from "@/lib/query-keys";

const useServicesCards = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.servicesCards(locale),
        queryFn: () => getServicesCards(locale),
        // Services cards don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });

};

const useCategoriesCards = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.categoriesCards(locale),
        queryFn: () => getCategoriesCards(locale),
        // Categories cards don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};

const useBanners = (slug: string) => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.banners(slug, locale),
        queryFn: () => getBanners(slug, locale),
        // Banners don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};
const usePartners = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
        // Partners don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};  
export { useServicesCards, useCategoriesCards, useBanners, usePartners };