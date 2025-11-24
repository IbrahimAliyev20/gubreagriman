import { post } from "@/lib/api/client";
import { ApiResponse } from "@/types/types";

export interface CareerFormData {
  name: string;
  surname: string;
  email: string;
  profession: string;
  message: string;
  cv: File;
}

export interface CareerFormResponse {
  success: boolean;
  message?: string;
}

export const submitCareerForm = async (
  formData: FormData
): Promise<ApiResponse<CareerFormResponse>> => {
  const response = await post<ApiResponse<CareerFormResponse>>(
    "/career-form",
    formData
  );
  return response;
};
