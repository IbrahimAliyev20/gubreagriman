import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
      <div className="relative h-[250px] md:h-full order-first md:order-last">
        <Image
          src="/images/homeimg2.png"
          alt="Smart Agriculture Technology"
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
            Gələcəyinizi inkişaf etdiririk
          </h2>
        </div>

        <div className="bg-[#83B957] rounded-3xl p-4 md:p-12">
          <p className="text-white text-sm md:text-base leading-relaxed">
            Biz gübrələr, bitki mühafizəsi məhsulları və kənd təsərrüfatı
            xidmətləri təklif edən müasir kənd təsərrüfatı şirkətiyik.
            Məqsədimiz fermerlərə məhsuldarlığı artırmağa, xərcləri azaltmağa və
            təbii tarazlığı qorumağa kömək etməkdir.
          </p>
        </div>

        <div className="bg-[#F6F6F6] border border-gray-200 rounded-3xl p-4 md:p-12">
          <p className="text-black text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            AGRO GÜBRƏ davamlı kənd təsərrüfatı yaratmaq üçün təcrübə və
            innovasiyanı birləşdirir. Fermerlərə torpaqlarına qulluq etməyə və
            ardıcıl məhsul əldə etməyə kömək edən məhsullar və xidmətlər təklif
            edirik.
          </p>

          <button className="inline-flex bg-white py-2 px-4 rounded-[20px] cursor-pointer items-center gap-2 text-black text-sm md:text-base font-bold hover:text-[#8BC34A] transition-colors">
            About Us
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
