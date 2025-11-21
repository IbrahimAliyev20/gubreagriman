import { useQuery } from "@tanstack/react-query";
import { getBanners, getCategoriesCards, getPartners, getServicesCards } from "./api";

const useServicesCards = () => {
    return useQuery({
        queryKey: ['services-cards'],
        queryFn: getServicesCards,

    });

};

const useCategoriesCards = () => {
    return useQuery({
        queryKey: ['categories-cards'],
        queryFn: getCategoriesCards,
    });
};

const useBanners = (slug: string) => {
    return useQuery({
        queryKey: ['banners', slug],
        queryFn: () => getBanners(slug),
    });
};
const usePartners = () => {
    return useQuery({
        queryKey: ['partners'],
        queryFn: getPartners,
    });
};  
export { useServicesCards, useCategoriesCards, useBanners, usePartners };