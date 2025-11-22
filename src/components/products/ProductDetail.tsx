"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductDetail } from "@/types/types";
import { useTranslations } from "next-intl";

interface ProductDetailProps {
  product: ProductDetail;
}

export default function ProductDetailComponent({ product }: ProductDetailProps) {
  const t = useTranslations("buttons");
  
  // Validate image URL
  const isValidImageUrl = (url: string | undefined | null): boolean => {
    if (!url || typeof url !== 'string') return false;
    const trimmed = url.trim();
    if (trimmed === '' || trimmed === 'null' || trimmed === 'undefined') return false;
    return trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://');
  };

  const imageSrc = isValidImageUrl(product.image) 
    ? product.image!.trim()
    : isValidImageUrl(product.thumb_image)
    ? product.thumb_image!.trim()
    : "/images/product.png";

  return (
    <div className="w-full">
      {/* Product Image and Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-white rounded-xl p-6">
          {isValidImageUrl(product.image) || isValidImageUrl(product.thumb_image) ? (
            <Image
              src={imageSrc}
              alt={product.name}
              width={400}
              height={500}
              className="w-auto h-auto max-w-[300px] max-h-[400px] object-contain"
            />
          ) : (
            <div className="w-full max-w-[300px] min-h-[300px] bg-gray-100 flex items-center justify-center rounded-xl">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          {product.parent_category && (
            <p className="text-sm text-gray-500">{`Kateqoriya: ${product.parent_category}`}</p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>
          
          <button className="w-fit flex items-center gap-2 bg-[#8BC34A] hover:bg-[#7CB342] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer">
            {t("submitQuote")}
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Attributes */}
          {product.attributes && product.attributes.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-4">Key characteristics</p>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.attributes.map((attr, index) => (
                      <tr
                        key={index}
                        className={index < product.attributes.length - 1 ? "border-b border-gray-200" : ""}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 w-1/3">
                          {attr.attribute_key}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {attr.attribute_value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Description Section */}
      {product.description && (
        <div className="w-full mb-8">
          <div className="px-6 py-3 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-300 w-fit mb-4">
            Product Description
          </div>
          <div className="border-t-2 border-[#8BC34A] pt-6">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </div>
      )}

      {/* Usage Table Section */}
      {product.usage && product.usage.length > 0 && (
        <div className="w-full">
          <div className="px-6 py-3 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-300 w-fit mb-4">
            İstifadə Cədvəli
          </div>
          <div className="border-t-2 border-[#8BC34A] pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#8BC34A] text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">
                      Bitki adı
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">
                      Pest Organism Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">
                      Application Dosage
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold border border-white">
                      Time Between Last Application and Harvest
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.usage.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-b border-gray-200`}
                    >
                      <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                        {row.plant_name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.pest_name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.dosage}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.pre_harvest_interval}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

