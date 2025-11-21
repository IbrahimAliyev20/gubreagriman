"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductDetail } from "@/types/types";

interface ProductDetailProps {
  product: ProductDetail;
}

export default function ProductDetailComponent({ product }: ProductDetailProps) {
  return (
    <div className="w-full">
      {/* Product Image and Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-white rounded-xl p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-500">{`Kateqoriya: ${product.category}`}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>
          
          <button className="w-fit flex items-center gap-2 bg-[#8BC34A] hover:bg-[#7CB342] text-white px-6 py-3 rounded-full font-medium transition-colors">
            Submit a Quote
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Key Characteristics */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-4">Key characteristics</p>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 w-1/3">
                      Product Group
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {product.keyCharacteristics.productGroup}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50">
                      Active Ingredient
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {product.keyCharacteristics.activeIngredient}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50">
                      Formulation
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {product.keyCharacteristics.formulation}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="w-full mb-8">
        <div className="px-6 py-3 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-300 w-fit mb-4">
          Product Description
        </div>
        <div className="border-t-2 border-[#8BC34A] pt-6">
          <div className="space-y-4">
            {product.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Application Table Section */}
      {product.applicationTable && product.applicationTable.length > 0 && (
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
                  {product.applicationTable.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-b border-gray-200`}
                    >
                      <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                        {row.cropName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.pestOrganismName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.applicationDosage}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        {row.harvestInterval}
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

