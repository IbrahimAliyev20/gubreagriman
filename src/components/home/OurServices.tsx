"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useServices } from "@/services/Service/queries";

function OurServices() {
  const { data: services } = useServices();

  // Xidmətlərin adlarını slug-larla uyğunlaşdırmaq
  const getServiceSlug = (serviceTitle: string): string | null => {
    if (!services?.data) return null;
    const service = services.data.find(
      (s) => s.title.toLowerCase() === serviceTitle.toLowerCase()
    );
    return service?.slug || null;
  };

  const torpaqSlug = getServiceSlug("Torpaq Alqı-Satqısı");
  const konsaltinqSlug = getServiceSlug("Konsaltinq");
  const suvarmaSlug = getServiceSlug("Suvarma");
  const laborotoriyaSlug = getServiceSlug("Laborotoriya");

  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-9 md:grid-rows-6 gap-3 md:gap-4 h-auto md:h-[600px]">
        <div className="md:col-span-3 md:row-span-4 p-4 md:p-10 flex flex-col justify-start md:justify-between gap-3 md:gap-4">
          <div>
            <p className="font-medium text-sm md:text-[16px] text-[#69B159]">
              Uğurunuz üçün müasir kənd təsərrüfatı xidmətləri
            </p>
            <h2 className="text-[#1E4300] text-2xl md:text-[36px] font-extrabold">
              Xidmətlərimiz
            </h2>
          </div>
          <p className="text-sm md:text-base">
            AGRO GÜBRƏ fermerlərə əkinçilik səmərəliliyini artırmağa, resurslara
            qənaət etməyə və ardıcıl nəticələr əldə etməyə kömək edən geniş
            peşəkar xidmətlər təklif edir.
          </p>
          <Link
            href="/services"
            className="flex gap-2 font-bold bg-[#F6F6F6] w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
          >
            Xidmətlərimiz <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        <div className="md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-5 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">
            Torpaq Alqı-Satqısı
          </p>
          {torpaqSlug ? (
            <Link
              href={`/services?slug=${torpaqSlug}`}
              className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </Link>
          ) : (
            <div className="flex gap-2 font-bold bg-gray-300 w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base text-gray-500 cursor-not-allowed">
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </div>
          )}
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-4 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Konsaltinq</p>
          {konsaltinqSlug ? (
            <Link
              href={`/services?slug=${konsaltinqSlug}`}
              className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </Link>
          ) : (
            <div className="flex gap-2 font-bold bg-gray-300 w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base text-gray-500 cursor-not-allowed">
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </div>
          )}
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-6 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Suvarma</p>
          {suvarmaSlug ? (
            <Link
              href={`/services?slug=${suvarmaSlug}`}
              className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </Link>
          ) : (
            <div className="flex gap-2 font-bold bg-gray-300 w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base text-gray-500 cursor-not-allowed">
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </div>
          )}
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-8 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Laborotoriya</p>
          {laborotoriyaSlug ? (
            <Link
              href={`/services?slug=${laborotoriyaSlug}`}
              className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </Link>
          ) : (
            <div className="flex gap-2 font-bold bg-gray-300 w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base text-gray-500 cursor-not-allowed">
              Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
