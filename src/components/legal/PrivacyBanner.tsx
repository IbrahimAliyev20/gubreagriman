import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getBanners } from "@/services/Home/server-api";

export default async function PrivacyBanner() {
  const locale = await getLocale();
  const banner = await getBanners("privacy-policy", locale);
  const bannerData = banner?.data;
  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative w-full bg-white rounded-[40px] overflow-hidden border border-[#E0E0E0] min-h-[450px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2 shadow-sm">
        <div className="flex flex-col justify-center px-6 py-10 md:px-16 md:py-0 z-10 order-2 md:order-1">
          <p className="text-[#BCBCBC] text-sm md:text-lg font-medium mb-4 tracking-wide">
            {bannerData?.sub_title}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-[1.2] tracking-tight">
            {bannerData?.title}
          </h1>

          <p className="text-gray-600 text-sm md:text-lg mb-8 max-w-md leading-relaxed">
            {bannerData?.description}
          </p>
        </div>

        <div className="relative w-full h-[350px] md:h-full order-1 md:order-2">
          <Image
            src={bannerData?.image}
            alt="Məxfilik Siyasəti - Şəxsi məlumatların qorunması və təhlükəsizlik"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

