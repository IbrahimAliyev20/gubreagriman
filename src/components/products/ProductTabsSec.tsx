"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import Funqisidler from "./Tabs/Funqisidler";
import Herbisidler from "./Tabs/Herbisidler";
import Insektisidler from "./Tabs/Insektisidler";
import Akarisidler from "./Tabs/Akarisidler";
import Mineral from "./Tabs/Mineral";
import DamlamaSuvarmaYarpaq from "./Tabs/DamlamaSuvarmaYarpaq";
import MikroGubreler from "./Tabs/MikroGubreler";
import ProductDetailComponent from "./ProductDetail";
import { ProductCategoryResponse, ProductDetail } from "@/types/types";
import useProductCategories from "@/services/Product/queries";

// Map sub-category slugs to their components
const subCategoryComponents: Record<string, React.ComponentType> = {
  "funqisidler": Funqisidler,
  "herbisit": Herbisidler,
  "insektisit": Insektisidler,
  "akarisit": Akarisidler,
  "insektisit-akarasit": Insektisidler,
  "insektisit-akarisit": Insektisidler,
  "fungisit": Funqisidler,
  "mineral": Mineral,
  "damlama-suvarma-ve-yarpaq": DamlamaSuvarmaYarpaq,
  "mikro-gubreler": MikroGubreler,
};

interface ProductTabsSecProps {
  selectedProduct?: ProductDetail | null;
}

const ProductTabsSec = ({ selectedProduct = null }: ProductTabsSecProps) => {
  const { data: categoriesData } = useProductCategories();
  console.log(categoriesData);
  const [mainTab, setMainTab] = useState<string>("");
  const [subTab, setSubTab] = useState<string>("");
  const [accordionStates, setAccordionStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (categoriesData?.data && categoriesData.data.length > 0) {
      const firstCategory = categoriesData.data[0];
      setMainTab(firstCategory.slug);
      setAccordionStates({ [firstCategory.slug]: true });
      
      if (firstCategory.sub_categories && firstCategory.sub_categories.length > 0) {
        setSubTab(firstCategory.sub_categories[0].slug);
      }
    }
  }, [categoriesData]);

  const handleMainTabChange = (value: string) => {
    setMainTab(value);
    const category = categoriesData?.data.find((cat) => cat.slug === value);
    if (category?.sub_categories && category.sub_categories.length > 0) {
      setSubTab(category.sub_categories[0].slug);
      setAccordionStates((prev) => ({ ...prev, [value]: true }));
    } else {
      setSubTab("");
      setAccordionStates((prev) => ({ ...prev, [value]: false }));
    }
  };

  const toggleAccordion = (categorySlug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setAccordionStates((prev) => ({
      ...prev,
      [categorySlug]: !prev[categorySlug],
    }));
  };

  if (!categoriesData?.data || categoriesData.data.length === 0) {
    return null;
  }

  return (
    <div className=" max-md:pb-20">
      <div>
        <Tabs
          value={mainTab}
          onValueChange={handleMainTabChange}
          orientation="vertical"
          className="w-full max-md:orientation-horizontal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-start">
            <div className="col-span-2 rounded-xl w-full  bg-white  max-md:fixed  border border-[#CCCCCC]">
              <TabsList className="w-full h-auto flex flex-col items-start justify-start p-4 rounded-xl bg-white max-md:flex-row max-md:items-center max-md:justify-between max-md:overflow-x-auto max-md:p-0 max-md:rounded-none max-md:border-t max-md:h-12 gap-1">
                {categoriesData.data.map((category) => {
                  const isAccordionOpen = accordionStates[category.slug] ?? (category.slug === mainTab);
                  const hasSubCategories = category.sub_categories && category.sub_categories.length > 0;
                  return (
                    <div key={category.slug} className="w-full">
                      <div className="relative">
                        <TabsTrigger
                          value={category.slug}
                          className="bg-white w-full justify-center md:justify-start items-center gap-3 px-4 py-3 text-base font-normal rounded-lg text-[#565355] data-[state=active]:bg-[#F9F9F9] data-[state=active]:text-black data-[state=active]:shadow-none transition-all duration-200 hover:bg-[#F2F4F8]/60 hover:text-gray-800 max-md:flex-1 max-md:whitespace-nowrap max-md:text-sm max-md:px-0 max-md:py-0 max-md:gap-2 cursor-pointer"
                        >
                          <span className="text-base font-bold flex items-center justify-between w-full">
                            {category.name.toUpperCase()}
                            {hasSubCategories && (
                              <ChevronDown
                                onClick={(e) => toggleAccordion(category.slug, e)}
                                className={`w-5 h-5 transition-transform duration-300 cursor-pointer ${
                                  isAccordionOpen ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </span>
                        </TabsTrigger>
                      </div>

                      {hasSubCategories && mainTab === category.slug && (
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isAccordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-4 mt-1 space-y-1 pb-1">
                            {category.sub_categories.map((subCategory) => (
                              <button
                                key={subCategory.slug}
                                onClick={() => setSubTab(subCategory.slug)}
                                className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95 ${
                                  subTab === subCategory.slug
                                    ? "bg-[#8BC34A] text-white font-medium"
                                    : "bg-transparent text-[#565355] hover:bg-gray-100"
                                }`}
                              >
                                {subCategory.name.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </TabsList>
            </div>

            <div className="col-span-6">
              {categoriesData.data.map((category) => {
                const isActiveTab = category.slug === mainTab;
                const currentCategory = categoriesData.data.find((cat) => cat.slug === mainTab);
                const isSubTabValid = currentCategory?.sub_categories?.some((sub) => sub.slug === subTab);
                const SubCategoryComponent = subTab && isSubTabValid ? subCategoryComponents[subTab] : null;
                
                return (
                  <TabsContent key={category.slug} value={category.slug}>
                    {selectedProduct ? (
                      <ProductDetailComponent product={selectedProduct} />
                    ) : (
                      isActiveTab && SubCategoryComponent && subTab && (
                        <SubCategoryComponent />
                      )
                    )}
                  </TabsContent>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabsSec;
