"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  id?: number;
  name: string;
  category: string;
  image?: string;
  slug?: string;
}

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const t = useTranslations("buttons");

  // Rənglər
  const cardBgColor = "bg-[#F2F4F6]";
  const whiteBoxColor = "bg-white";
  const buttonBaseColor = "bg-[#84BD5A]";
  const buttonHoverColor = "hover:bg-[#76aa50]";
  
  const isValidImageUrl = (url: string | undefined | null): boolean => {
    if (!url || typeof url !== 'string') return false;
    const trimmed = url.trim();
    if (trimmed === '' || trimmed === 'null' || trimmed === 'undefined') return false;
    return trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://');
  };

  const imageSrc = isValidImageUrl(product.image) 
    ? product.image!.trim() 
    : "/images/product.png";

  return (
    // MAIN CARD: p-1 verildi (çərçivə nazikləşdi)
    <div className={`w-full h-full flex flex-col ${cardBgColor} rounded-[32px] p-1 group transition-all duration-300`}>
      
      {/* 1. Şəkil Hissəsi */}
      <div className="relative flex items-center justify-center h-64 w-full p-2">
        {isValidImageUrl(product.image) ? (
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-50">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* 2. Ağ Blok */}
      {/* overflow-hidden: Düymə kənarlardan çıxmasın deyə vacibdir */}
      {/* rounded-[20px]: Bir az azaldıldı */}
      <div className={`${whiteBoxColor} rounded-[20px] mt-auto flex flex-col shadow-sm overflow-hidden`}>
        
        {/* Yazı Hissəsi (Padding yalnız bura verilir) */}
        <div className="p-5 pb-3">
          <p className="text-gray-400 text-sm font-medium mb-1">
            {product.category}
          </p>
          <h3 className="text-black text-xl font-bold leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        {product.slug ? (
          <Link
            href={`/products/${product.slug}`}
            className={`w-full flex items-center justify-between rounded-full ${buttonBaseColor} ${buttonHoverColor} text-white py-2 px-5 text-sm font-semibold transition-all duration-200 hover:bg-opacity-90`}
          >
            <span>{t("viewProduct")}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        ) : (
          <button
            disabled
            className="w-full flex items-center justify-between rounded-full bg-gray-300 text-white py-2 px-5 text-sm font-semibold cursor-not-allowed"
          >
            <span>{t("viewProduct")}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
      
    </div>
  );
}