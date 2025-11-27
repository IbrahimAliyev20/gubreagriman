import Image from "next/image";

export default function AgreementBanner() {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative w-full bg-white rounded-[40px] overflow-hidden border border-[#E0E0E0] min-h-[450px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2 shadow-sm">
        <div className="flex flex-col justify-center px-6 py-10 md:px-16 md:py-0 z-10 order-2 md:order-1">
          <p className="text-[#BCBCBC] text-sm md:text-lg font-medium mb-4 tracking-wide">
            Hüquqi Razılaşma
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-[1.2] tracking-tight">
            Razılaşma
          </h1>

          <p className="text-gray-600 text-sm md:text-lg mb-8 max-w-md leading-relaxed">
            Xidmətlərimizdən istifadə zamanı qəbul etdiyiniz şərtlər və razılaşmalar. 
            Platformamızla işləmək üçün lazımi məlumatlar.
          </p>
        </div>

        <div className="relative w-full h-[350px] md:h-full order-1 md:order-2">
          <Image
            src="/images/contact.png"
            alt="Razılaşma - Xidmətlərdən istifadə şərtləri və razılaşmalar"
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

