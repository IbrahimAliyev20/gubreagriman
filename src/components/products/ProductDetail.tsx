"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductDetail, CategoryProducts } from "@/types/types";
import { useTranslations } from "next-intl";
import { useRelatedProducts } from "@/services/Product/queries";
import ProductCard from "./ProductCard";

interface ProductDetailProps {
  product: ProductDetail;
}

export default function ProductDetailComponent({ product }: ProductDetailProps) {
  const t = useTranslations("buttons");
  const tProduct = useTranslations("productDetail");
  const { data: relatedProductsData } = useRelatedProducts(product.slug);

  const grayBgColor = "bg-[#F2F4F6]";
  const brandGreen = "bg-[#84BD5A]";
  const brandGreenHover = "hover:bg-[#76aa50]";

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

  let relatedProducts: CategoryProducts[] = [];
  if (relatedProductsData) {
    if (relatedProductsData.data && Array.isArray(relatedProductsData.data)) {
      relatedProducts = relatedProductsData.data;
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">
        
        <div className={`lg:col-span-2 flex items-center justify-center ${grayBgColor} rounded-[20px] p-8 h-full min-h-[450px] relative`}>
          {isValidImageUrl(product.image) || isValidImageUrl(product.thumb_image) ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="w-full h-full object-contain  mix-blend-multiply hover:scale-105 transition-transform duration-500 rounded-[20px]"
            />
          ) : (
            <div className="flex items-center justify-center text-gray-400">
              <span className="text-xl">{tProduct("noImage")}</span>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 flex flex-col">
          {product.parent_category && (
            <p className="text-sm text-gray-400 uppercase tracking-wide font-medium mb-2">
              {`${tProduct("category")}: ${product.parent_category}`}
            </p>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            {product.name}
          </h1>
          
          <button className={`w-fit cursor-pointer flex items-center gap-2 ${brandGreen} ${brandGreenHover} text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md active:scale-95 mb-10`}>
            <span>{t("submitQuote")}</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          {product.attributes && product.attributes.length > 0 && (
            <div>
              <p className="text-gray-400 mb-3 text-lg">{tProduct("keyCharacteristics")}</p>
              
              <div className="border border-gray-200 w-full">
                <table className="w-full border-collapse">
                  <tbody>
                    {product.attributes.map((attr, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="border-r border-gray-200 px-4 py-3 text-gray-600 w-1/3 align-middle text-sm md:text-base">
                          {attr.attribute_key}
                        </td>
                        <td className="px-4 py-3 text-black font-bold align-middle text-sm md:text-base">
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

      {product.description && (
        <div className="w-full mb-10">
          <div className="inline-block px-6 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-600 mb-4">
          {tProduct("productDescription")}
          </div>
          <div className="border-t-4 border-[#8BC34A] pt-6">
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </div>
      )}

      {product.usage && product.usage.length > 0 && (
        <div className="w-full mb-12">
          <div className="inline-block px-6 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-600 mb-4">
            {tProduct("usageTable")}
          </div>
          <div className="border-t-4 border-[#8BC34A] pt-6">
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#8BC34A] text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-white/20 last:border-r-0">{tProduct("plantName")}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-white/20 last:border-r-0">{tProduct("pestName")}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-white/20 last:border-r-0">{tProduct("applicationDosage")}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{tProduct("preHarvestInterval")}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.usage.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100">{row.plant_name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{row.pest_name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{row.dosage}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.pre_harvest_interval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="w-full mt-16">
          <div className="mb-8">
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <h2 className="text-2xl font-bold text-black">{tProduct("relatedProducts")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct: CategoryProducts, index: number) => {
               const isValid = (url: string | undefined | null) => 
                 url && typeof url === 'string' && url.trim() !== '' && !url.includes('null');
               
               const imageUrl = isValid(relatedProduct.image) ? relatedProduct.image : 
                                isValid(relatedProduct.thumb_image) ? relatedProduct.thumb_image : undefined;

               return (
                <ProductCard
                  key={relatedProduct.slug || index}
                  product={{
                    id: index,
                    name: relatedProduct.name,
                    category: relatedProduct.category,
                    image: imageUrl,
                    slug: relatedProduct.slug,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}