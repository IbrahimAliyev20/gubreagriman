import { get } from "@/lib/api";
import { ApiResponse, ProductCategoryResponse } from "@/types/types";

const getProductCategories = async () => {
    const response = await get<ApiResponse<ProductCategoryResponse[]>>("/categories");
    return response;
};

export default getProductCategories;