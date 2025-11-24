"use client";

import { useMutation } from "@tanstack/react-query";
import { submitCareerForm, CareerFormData } from "./api";
import { ApiResponse } from "@/types/types";

interface CareerFormResponse {
  success: boolean;
  message?: string;
}

export const useCareerFormMutation = () => {
  return useMutation<
    ApiResponse<CareerFormResponse>,
    Error,
    CareerFormData
  >({
    mutationFn: async (data: CareerFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("profession", data.profession);
      formData.append("message", data.message);
      formData.append("cv", data.cv);

      return submitCareerForm(formData);
    },
  });
};

