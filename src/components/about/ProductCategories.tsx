import React from "react";
import Image from "next/image";

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    id: 1,
    title: "Bitki mühafizə vasitələri",
    description:
      "Bitki mühafizə vasitələri xəstəliklərin və zərərvericilərin qarşısını alaraq məhsulun sağlam inkişafını təmin edir. Tarlalarda itkiləri minimuma endirir və məhsuldarlığı artırır.",
    image: "/images/bitki.png",
  },
  {
    id: 2,
    title: "Gübrələr",
    description:
      "Gübrələr bitkilərin sürətli və sağlam böyüməsi üçün vacib qida maddələrini təmin edir. Torpağın keyfiyyətini yaxşılaşdırır və məhsuldarlığın əhəmiyyətli dərəcədə artmasına kömək edir.",
    image: "/images/gubre.png",
  },
  {
    id: 3,
    title: "Bitki stimulyatorları",
    description:
      "Bitki stimulyatorları bitkilərin metabolik proseslərini aktivləşdirərək kök inkişafını və ümumi müqaviməti gücləndirir. Stress şəraitində bitkilərin uyğunlaşmasını asanlaşdırır və daha güclü inkişaf təmin edir.",
    image: "/images/simulator.png",
  },
  {
    id: 4,
    title: "Toxumlar",
    description:
      "Keyfiyyətli toxumlar yüksək məhsulun əsasını təşkil edir. Onlar yüksək cücərmə qabiliyyətinə, xəstəliklərə davamlılığa malikdir və bərabər, güclü inkişaf yaradır.",
    image: "/images/toxumlar.png",
  },
  {
    id: 5,
    title: "Dezinfeksiya",
    description:
      "Dezinfeksiya torpaq, istixana və avadanlıqlarda xəstəliklərin və patogenlərin yayılmasının qarşısını alır. Bitkilərin sağlam yetişməsi üçün təhlükəsiz mühit yaradan vacib mərhələdir.",
    image: "/images/dezinfeksya.png",
  },
  {
    id: 6,
    title: "Feromonlar",
    description:
      "Feromon tələləri zərərvericiləri kimyəvi maddələrsiz izləmək və idarə etmək üçün istifadə olunur. Onlar insektlərin sayını azaltmağa və ekoloji cəhətdən təhlükəsiz bitki mühafizəsi təmin etməyə kömək edir.",
    image: "/images/fermonlar.png",
  },
];

export default function ProductCategories() {
  return (
    <div className="mt-6 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full aspect-square ">
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>

            <div className="flex flex-col flex-grow bg-[#F4F4F4] p-4 md:p-6 rounded-[20px] mt-2">
              <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed flex-grow">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
