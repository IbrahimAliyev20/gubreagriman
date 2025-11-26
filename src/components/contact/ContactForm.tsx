"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useContactFormMutation } from "@/services/ContactForm/mutations";
import { toast } from "sonner";
import { ContactsResponse } from "@/types/types";

export default function ContactForm({ contacts }: { contacts: ContactsResponse }) {
  const t = useTranslations("buttons");
  const tMessages = useTranslations("messages");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    about: "",
    message: "",
  });

  const mutation = useContactFormMutation();

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

    mutation.mutate(formData, {
      onSuccess: () => {
        toast.success(tMessages("contactFormSuccess"));
        // Reset form
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          about: "",
          message: "",
        });
      },
      onError: () => {
        toast.error(tMessages("contactFormError"));
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-[#BDBDBD] p-12  gap-10 flex flex-col md:flex-row"
      style={{
        background: "linear-gradient(to right, #1E4300, #4CA900)",
      }}
    >
      <div className="flex-1 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-white text-sm md:text-base">Bizimlə əlaqə</p>
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            AGRO GÜBRƏ <br />
            ofisi və texniki işçiləri ilə <br />
            əlaqə saxlayın
          </h2>
          <p className="text-white text-lg md:text-xl">
            <a href={`tel:${contacts?.short_code}`} className="text-2xl md:text-4xl font-bold hover:opacity-80 transition-opacity cursor-pointer">{contacts?.short_code}</a> <br />
            E-poçt: <a href={`mailto:${contacts?.email}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity cursor-pointer">{contacts?.email}</a>
          </p>
        </div>

        <div className="mt-auto">
          <div className="w-full rounded-[20px] border border-white/70    p-4 md:p-6">
            <p className="text-white text-sm md:text-base">
              {contacts?.work_hours}
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
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Əlaqə nömrəsi"
          required
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <Input
          type="text"
          name="about"
          value={formData.about}
          onChange={handleInputChange}
          placeholder="Haqqında"
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

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={mutation.isPending}
            className=" bg-black text-white rounded-[18px] h-10 px-12 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Göndərilir..." : t("send")}
          </Button>
        </div>
      </div>
    </form>
  );
}
