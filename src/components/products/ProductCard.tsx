"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  slug?: string;
}

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const t = useTranslations("buttons");
  const categoryTextColor = "text-gray-400"; 
  const productNameColor = "text-black"; 
  const viewButtonBg = "bg-[#8BC34A]"; 
  const viewButtonHoverBg = "hover:bg-[#7CB342]";
  const viewButtonActiveBg = "active:bg-[#689F38]";

  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="relative flex items-center justify-center  bg-white min-h-[180px]">
        <Image
          src={product.image}
          alt={product.name}
          width={1200} 
          height={1200} 
          className="w-full h-full max-w-[500px] object-cover"
        />
    <div className="absolute bg-white bottom-0 left-0 right-0 mx-0.5 px-5  py-2 rounded-t-2xl   flex flex-col flex-grow">
        <p className={`text-sm ${categoryTextColor} mb-2 font-normal leading-relaxed`}>
          {product.category}
        </p>

        <h3 className={`text-xl font-bold ${productNameColor} flex-grow leading-tight`}>
          {product.name}
        </h3>

    
      </div>
      </div>

  
      {product.slug ? (
        <Link
          href={`/products/${product.slug}`}
          className={` w-full flex items-center justify-between gap-2 rounded-full  ${viewButtonBg} ${viewButtonHoverBg} ${viewButtonActiveBg} text-white px-4 py-2  text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer`}
        >
          {t("viewProduct")}
          <ArrowRight className="h-6 w-6" />
        </Link>
      ) : (
        <button
          disabled
          className={` w-full flex items-center justify-between gap-2 rounded-full bg-gray-400 text-white px-4 py-2  text-sm font-medium cursor-not-allowed`}
        >
          {t("viewProduct")}
          <ArrowRight className="h-6 w-6" />
        </button>
      )} 
    </div>
  );
}