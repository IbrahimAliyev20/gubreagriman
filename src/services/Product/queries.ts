import getProductCategories from "./api";
import { useQuery } from "@tanstack/react-query";

const useProductCategories = () => {
    return useQuery({
        queryKey: ['product-categories'],
        queryFn: getProductCategories,
    });

};
export default useProductCategories;