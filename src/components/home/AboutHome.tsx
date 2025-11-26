"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useHomeAbout } from "@/services/Home/queries";

export default function AboutHome() {
  const t = useTranslations("buttons");
  const { data: homeAboutData, isLoading } = useHomeAbout();
  const homeAbout = homeAboutData?.data;

  if (isLoading || !homeAbout) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center animate-pulse">
        <div className="relative h-[250px] md:h-full order-first md:order-last">
          <div className="w-full h-full bg-gray-200 rounded-[20px]"></div>
        </div>
        <div className="space-y-3 md:space-y-6">
          <div className="flex flex-col pl-0 md:pl-12">
            <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 md:h-16 w-64 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-[#83B957] rounded-3xl p-4 md:p-12">
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="bg-[#F6F6F6] border border-gray-200 rounded-3xl p-4 md:p-12">
            <div className="space-y-2 mb-4 md:mb-6">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 w-32 bg-gray-200 rounded-[20px]"></div>
          </div>
        </div>
      </div>
    );
  }

  const imageUrl = homeAbout.image || homeAbout.thumb_image || "/images/homeimg2.png";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
      <div className="relative h-[250px] md:h-full order-first md:order-last">
        <Image
          src={imageUrl}
          alt={homeAbout.title || "Smart Agriculture Technology"}
          width={800}
          height={600}
          className="rounded-[20px] object-cover w-full h-full"
        />
      </div>

      <div className="space-y-3 md:space-y-6">
        <div className="flex flex-col pl-0 md:pl-12">
          <p className="text-[#69B159] text-sm md:text-lg mb-1.5 md:mb-2">
            AGRO GÜBRƏ haqqında
          </p>
          <h2 className="text-2xl md:text-[48px] font-bold text-[#1E4300] leading-tight">
            {homeAbout.title}
          </h2>
        </div>

        <div className="bg-[#83B957] rounded-3xl p-4 md:p-12">
          <p className="text-white text-sm md:text-base leading-relaxed">
            {homeAbout.description_1}
          </p>
        </div>

        <div className="bg-[#F6F6F6] border border-gray-200 rounded-3xl p-4 md:p-12">
          <p className="text-black text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            {homeAbout.description_2}
          </p>

          <Link href="/about" className="inline-flex bg-white py-2 px-4 rounded-[20px] cursor-pointer items-center gap-2 text-black text-sm md:text-base font-bold hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
            {t("aboutUs")}
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
