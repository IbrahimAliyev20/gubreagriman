import { useQuery } from "@tanstack/react-query";
import { getBanners, getCategoriesCards, getPartners, getServicesCards } from "./api";

const useServicesCards = () => {
    return useQuery({
        queryKey: ['services-cards'],
        queryFn: getServicesCards,
        // Services cards don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });

};

const useCategoriesCards = () => {
    return useQuery({
        queryKey: ['categories-cards'],
        queryFn: getCategoriesCards,
        // Categories cards don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};

const useBanners = (slug: string) => {
    return useQuery({
        queryKey: ['banners', slug],
        queryFn: () => getBanners(slug),
        // Banners don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};
const usePartners = () => {
    return useQuery({
        queryKey: ['partners'],
        queryFn: getPartners,
        // Partners don't change frequently, cache for 10 minutes
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};  
export { useServicesCards, useCategoriesCards, useBanners, usePartners };