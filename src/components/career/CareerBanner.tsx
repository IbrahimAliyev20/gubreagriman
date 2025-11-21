import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CareerBanner() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat border border-[#BDBDBD]"
      style={{ backgroundImage: "url('/images/bgimagebanner.svg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
        
        <div className="col-span-2 flex flex-col md:justify-between px-4 py-5 md:py-20 md:px-8 gap-4 md:gap-0">
          
          <p className="text-[#BCBCBC] text-xs md:text-2xl mb-1 md:mb-3">
            Keyfiyyət. Ekologiya. Nəticələr.
          </p>

          <h1 className="text-xl md:text-4xl font-bold text-black mb-3 md:mb-20 leading-tight">
          Karyeranıza <br />
          AGRO GÜBRƏ ilə Başlayın
          </h1>

          <button className="inline-flex w-full md:w-fit items-center justify-center gap-2 bg-[#83B957] hover:bg-[#7CB342] text-white px-5 py-3 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold transition-colors mb-2 md:mb-4">
            Bizimlə əlaqə
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <p className="text-black text-xs md:text-base leading-relaxed">
          Ağıllı kənd təsərrüfatı həlləri ilə müasir kənd təsərrüfatına doğru.
          </p>
        </div>

        <div className="flex col-span-3 items-center justify-center md:justify-end -mt-2 md:mt-0">
          <Image
            src="/images/careerbanner.png"
            alt="Agricultural Farm"
            width={948}
            height={632}
            className="h-full w-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
}