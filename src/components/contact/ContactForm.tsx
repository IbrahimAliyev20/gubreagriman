"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("buttons");
  return (
    <div
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
            ofisi və texniki işçiləri ilə əlaqə saxlayın
          </h2>
          <p className="text-white text-lg md:text-xl">
            <span className="text-2xl md:text-4xl font-bold">*8899</span> <br />
            E-poçt: info@agrogubre.com
          </p>
        </div>

        <div className="mt-auto">
          <div className="w-full rounded-[20px] border border-white/70    p-4 md:p-6">
            <p className="text-white text-sm md:text-base">
              İş saatları: Həftəiçi 09:00-18:00
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Ad"
            className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
          />
          <Input
            type="text"
            placeholder="Soyad"
            className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
          />
        </div>

        <Input
          type="email"
          placeholder="E-Poçt"
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <Input
          type="tel"
          placeholder="Əlaqə nömrəsi"
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <Input
          type="text"
          placeholder="Haqqında"
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-12 px-4 border border-gray-200 focus:border-gray-300"
        />

        <textarea
          placeholder="Mesaj"
          className="bg-gray-50 text-black placeholder:text-gray-500 rounded-[20px] h-32 px-4 py-3 border border-gray-200 focus:border-gray-300 resize-none focus:outline-none"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className=" bg-black text-white rounded-[18px] h-10 px-12 border-0"
          >
            {t("send")}
          </Button>
        </div>
      </div>
    </div>
  );
}
