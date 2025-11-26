import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { getBanners, getCategoriesCards, getHomeAbout, getPartners, getServicesCards, getSocialLinks } from "./api";
import { queryKeys } from "@/lib/query-keys";

const useServicesCards = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.servicesCards(locale),
        queryFn: () => getServicesCards(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });

};

const useCategoriesCards = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.categoriesCards(locale),
        queryFn: () => getCategoriesCards(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};

const useBanners = (slug: string) => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.banners(slug, locale),
        queryFn: () => getBanners(slug, locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};
const usePartners = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};  
const useSocialLinks = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.socialLinks(locale),
        queryFn: () => getSocialLinks(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};

const useHomeAbout = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: queryKeys.home.homeAbout(locale),
        queryFn: () => getHomeAbout(locale),
        staleTime: 10 * 60 * 1000, 
        gcTime: 30 * 60 * 1000, 
    });
};

export { useServicesCards, useCategoriesCards, useBanners, usePartners, useSocialLinks, useHomeAbout };