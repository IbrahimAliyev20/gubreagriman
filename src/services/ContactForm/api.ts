import { post } from "@/lib/api/client";
import { ApiResponse } from "@/types/types";

export interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  about: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
}

export const submitContactForm = async (
  formData: FormData
): Promise<ApiResponse<ContactFormResponse>> => {
  const response = await post<ApiResponse<ContactFormResponse>>(
    "/contact-form",
    formData
  );
  return response;
};

