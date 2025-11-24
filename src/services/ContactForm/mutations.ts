"use client";

import { useMutation } from "@tanstack/react-query";
import { submitContactForm, ContactFormData } from "./api";
import { ApiResponse } from "@/types/types";

interface ContactFormResponse {
  success: boolean;
  message?: string;
}

export const useContactFormMutation = () => {
  return useMutation<
    ApiResponse<ContactFormResponse>,
    Error,
    ContactFormData
  >({
    mutationFn: async (data: ContactFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("about", data.about);
      formData.append("message", data.message);

      return submitContactForm(formData);
    },
  });
};

