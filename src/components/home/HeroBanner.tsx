"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useBanners } from "@/services/Home/queires";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroBanner() {
  const { data: banner } = useBanners("home");
  const bannerData = banner?.data;
  const t = useTranslations("buttons");

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat border border-[#BDBDBD]"
      style={{ backgroundImage: "url('/images/bgimagebanner.svg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 py-5 md:px-12 md:py-14">
        
        <div className="flex flex-col md:justify-between gap-4 md:gap-0">
          
          <p className="text-[#BCBCBC] text-xs md:text-2xl mb-1 md:mb-3">
            {bannerData?.sub_title}
          </p>

          <h1 className="text-xl md:text-5xl font-bold text-black mb-3 md:mb-20 leading-tight">
           {bannerData?.title}
          </h1>

          <Link href="/contact" className="inline-flex w-full md:w-fit items-center justify-center gap-2 bg-[#83B957] hover:bg-[#7CB342] text-white px-5 py-3 md:px-6 md:py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer mb-2 md:mb-4">
            {t("contactUs")}
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </Link>

          <p className="text-black text-xs md:text-base leading-relaxed">
          {bannerData?.description}
          </p>
        </div>

        {bannerData?.image && (
          <div className="flex items-center justify-center md:justify-end -mt-2 md:mt-0">
            <Image
              src={bannerData.image}
              alt="Agricultural Farm"
              width={948}
              height={632}
              className="object-contain rotate-355 w-full max-w-[280px] md:max-w-none" 
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}