"use client";

import { Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useCareerFormMutation } from "@/services/Career/mutations";
import { toast } from "sonner";

export default function CareerContactForm() {
  const t = useTranslations("buttons");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    profession: "",
    message: "",
  });

  const mutation = useCareerFormMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error("CV faylı yüklənməlidir");
      return;
    }

    mutation.mutate(
      {
        ...formData,
        cv: cvFile,
      },
      {
        onSuccess: (response) => {
          const successMessage = response.data?.message || response.message || "Müraciət uğurla göndərildi";
          toast.success(successMessage);
          // Reset form
          setFormData({
            name: "",
            surname: "",
            email: "",
            profession: "",
            message: "",
          });
          setCvFile(null);
          // Reset file input
          const fileInput = document.querySelector(
            'input[type="file"]'
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.value = "";
          }
        },
        onError: (error: Error) => {
          // Axios error-larından mesajı çıxar
          const axiosError = error as Error & {
            response?: {
              data?: {
                message?: string;
                data?: {
                  message?: string;
                };
              };
            };
          };
          const errorMessage = 
            axiosError?.response?.data?.message || 
            axiosError?.response?.data?.data?.message ||
            error?.message || 
            "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.";
          toast.error(errorMessage);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-[#BDBDBD] p-12  gap-10 flex flex-col md:flex-row"
      style={{
        background: "linear-gradient(to right, #85C553, #116E41)",
      }}
    >
      <div className="flex-1 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm md:text-base mb-2">Bizimlə əlaqə</p>
          
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            AGRO GÜBRƏ
          </h2>
          <p className="text-white text-2xl md:text-4xl font-bold">
            komandasında yerinizi tapın
          </p>
        </div>

        <div className="mt-auto">
          <div className="w-full rounded-[20px] border border-white/70    p-4 md:p-6">
            <p className="text-white text-sm md:text-base">
              Texniki sahələr, aqronomika, satış, layihələndirmə və daha çox
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ad"
            required
            className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
          />
          <Input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            placeholder="Soyad"
            required
            className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
          />
        </div>

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-Poçt"
          required
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <Input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          placeholder="Peşə"
          required
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Mesaj"
          required
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-32 px-4 py-3 border border-gray-200 focus:border-gray-300 resize-none focus:outline-none"
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <label className="flex-1">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-gray-100 rounded-[18px] h-12 px-12 border-0"
              asChild
            >
              <span className="flex items-center justify-center gap-2 cursor-pointer">
                <Paperclip className="h-5 w-5" />
                {cvFile ? cvFile.name : t("uploadCV")}
              </span>
            </Button>
          </label>

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="flex-1 bg-[#85C553] hover:bg-[#7CB342] text-white rounded-[20px] h-12 px-4 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Göndərilir..." : t("send")}
          </Button>
        </div>
      </div>
    </form>
  );
}
