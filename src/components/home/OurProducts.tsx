import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function OurProducts() {
  return (
    <div className=" py-3 px-3 md:py-4 md:px-0">
      {/* Header Section */}
      <div className=" bg-[#f6f6f6] mb-6 md:mb-8 p-4 md:p-10 rounded-[20px] border-[#BDBDBD] border-2">
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
          təqdim edirik.{" "}
        </p>
        <Link
          href="#"
          className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
        >
          Məhsullarımız <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
        </Link>
      </div>

      {/* Products Grid - 2x3 layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-10">
        {/* Card 1: Bitki mühafizə vasitələri */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Bitki mühafizə vasitələri xəstəliklərin və zərərvericilərin
            qarşısını alaraq məhsulun sağlam inkişafını təmin edir. Tarlalarda
            itkiləri minimuma endirir və məhsuldarlığı artırır.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">
            Bitki mühafizə vasitələri
          </p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Card 2: Bitki stimulyatorları */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Bitki stimulyatorları bitkilərin metabolik proseslərini
            aktivləşdirərək kök inkişafını və ümumi müqaviməti gücləndirir.
            Stress şəraitində bitkilərin uyğunlaşmasını asanlaşdırır və daha
            güclü inkişaf təmin edir.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">
            Bitki stimulyatorları
          </p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Card 3: Dezinfeksiya */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Dezinfeksiya torpaq, istixana və avadanlıqlarda xəstəliklərin və
            patogenlərin yayılmasının qarşısını alır. Bitkilərin sağlam
            yetişməsi üçün təhlükəsiz mühit yaradan vacib mərhələdir.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">
            Dezinfeksiya
          </p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Card 4: Feromonlar */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Feromon tələləri zərərvericiləri kimyəvi maddələrsiz izləmək və
            idarə etmək üçün istifadə olunur. Onlar insektlərin sayını azaltmağa
            və ekoloji cəhətdən təhlükəsiz bitki mühafizəsi təmin etməyə kömək
            edir.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">Feromonlar</p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Card 5: Gübrələr */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Gübrələr bitkilərin sürətli və sağlam böyüməsi üçün vacib qida
            maddələrini təmin edir. Torpağın keyfiyyətini yaxşılaşdırır və
            məhsuldarlığın əhəmiyyətli dərəcədə artmasına kömək edir.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">Gübrələr</p>
          <Link
            href="#"
            className="flex gap-2 font-bold bg-white w-full md:w-fit justify-center px-4 py-1.5 md:px-6 md:py-1 rounded-2xl text-sm md:text-base"
          >
            Ətraflı <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Card 6: Toxumlar */}
        <div className="bg-[#F6F6F6] p-4 md:p-10 flex flex-col justify-between rounded-[20px] gap-3 md:gap-4 border-[#BDBDBD] border-2">
          <span className="text-sm md:text-base">
            Keyfiyyətli toxumlar yüksək məhsulun əsasını təşkil edir. Onlar
            yüksək cücərmə qabiliyyətinə, xəstəliklərə davamlılığa malikdir və
            bərabər, güclü inkişaf yaradır.
          </span>
          <p className="text-base md:text-[18px] font-extrabold">Toxumlar</p>
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

export default OurProducts;
