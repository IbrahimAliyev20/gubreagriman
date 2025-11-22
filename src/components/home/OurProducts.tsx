import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

function OurProducts() {
  // Kartların ortaq stili - Dəyişiklik burada edilib
  const cardClasses = " p-5 md:p-8 flex flex-col justify-between rounded-[20px] gap-4 border-[#BDBDBD] border-2 relative overflow-hidden min-h-[280px] md:min-h-[200px]";

  return (
    <div className="py-3 px-3 md:py-4 md:px-0">
      {/* Header Section */}
      <div className="bg-[#f6f6f6] mb-6 md:mb-8 p-4 md:p-10 rounded-[20px] border-[#BDBDBD] border-2">
        <span className="font-medium text-sm md:text-[16px] text-[#69B159]">
          Təbiətlə birlikdə məhsul yığmaq
        </span>
        <p className="text-[#1E4300] text-2xl md:text-[36px] font-bold mt-2">
          Məhsullarımız
        </p>
        <p className="text-sm md:text-base text-black mt-4 mb-6">
          AGRO GÜBRƏ gübrələrdən və toxumlardan tutmuş bitki mühafizəsi
          məhsullarına və böyümə stimulyatorlarına qədər bütün kənd təsərrüfatı
          məhsulları çeşidini təklif edir. Biz fermerlərə torpağın qorunmasına,
          məhsuldarlığın artırılmasına və məhsullarının keyfiyyətinin
          yaxşılaşdırılmasına kömək edən müasir və ekoloji cəhətdən təmiz həllər
          təqdim edirik.
        </p>
        <Link
          href="/products"
          className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          Məhsullarımız <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
        </Link>
      </div>

      {/* Products Grid - 2x3 layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-10">
        
        {/* Card 1: Bitki mühafizə vasitələri */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card1.png"
              alt="Bitki mühafizə vasitələri"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm font-medium text-black">
              Bitki mühafizə vasitələri xəstəliklərin və zərərvericilərin
              qarşısını alaraq məhsulun sağlam inkişafını təmin edir. Tarlalarda
              itkiləri minimuma endirir və məhsuldarlığı artırır.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Bitki mühafizə vasitələri
              </p>
              <Link
                href="/products"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2: Bitki stimulyatorları */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card2.png"
              alt="Bitki stimulyatorları"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm font-medium text-black">
              Bitki stimulyatorları bitkilərin metabolik proseslərini
              aktivləşdirərək kök inkişafını və ümumi müqaviməti gücləndirir.
              Stress şəraitində bitkilərin uyğunlaşmasını asanlaşdırır.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Bitki stimulyatorları
              </p>
              <Link
                href="/products"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3: Dezinfeksiya */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card3.png"
              alt="Dezinfeksiya"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm  font-medium text-black">
              Dezinfeksiya torpaq, istixana və avadanlıqlarda xəstəliklərin və
              patogenlərin yayılmasının qarşısını alır. Bitkilərin sağlam
              yetişməsi üçün təhlükəsiz mühit yaradır.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Dezinfeksiya
              </p>
              <Link
                href="#"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4: Feromonlar */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card4.png"
              alt="Feromonlar"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm font-medium text-black">
              Feromon tələləri zərərvericiləri kimyəvi maddələrsiz izləmək və
              idarə etmək üçün istifadə olunur. Ekoloji cəhətdən təhlükəsiz
              bitki mühafizəsi təmin etməyə kömək edir.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Feromonlar
              </p>
              <Link
                href="/products"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5: Gübrələr */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card5.png"
              alt="Gübrələr"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm font-medium text-black">
              Gübrələr bitkilərin sürətli və sağlam böyüməsi üçün vacib qida
              maddələrini təmin edir. Torpağın keyfiyyətini yaxşılaşdırır və
              məhsuldarlığı artırır.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Gübrələr
              </p>
              <Link
                href="#"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 6: Toxumlar */}
        <div className={cardClasses}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardimages/card6.png"
              alt="Toxumlar"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(232, 232, 232, 0.8) 40%, rgba(255, 255, 255, 0.4) 40%)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-end h-full ">
            <span className="text-sm font-medium text-black">
              Keyfiyyətli toxumlar yüksək məhsulun əsasını təşkil edir. Onlar
              yüksək cücərmə qabiliyyətinə, xəstəliklərə davamlılığa malikdir.
            </span>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xl md:text-[22px] font-bold leading-tight text-[#1E4300]">
                Toxumlar
              </p>
              <Link
                href="#"
                className="flex gap-2 items-center font-bold bg-white w-fit px-5 py-2 rounded-full text-sm hover:text-[#69B159] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Ətraflı <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;