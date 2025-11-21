import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function OurServices() {
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
            href="#"
            className="flex gap-2 font-bold bg-[#F6F6F6] w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Xidmətlərimiz <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        <div className="md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-5 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">
            Torpaq Alqı-Satqısı
          </p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-4 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Konsaltinq</p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-6 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Suvarma</p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        <div className="md:col-span-2 md:row-span-6 md:col-start-8 md:row-start-1 bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-end rounded-[20px] gap-3 md:gap-4">
          <p className="text-base md:text-[18px] font-extrabold">Laborotoriya</p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
