"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { useProductCategories } from "@/services/Product/queries";
import { ProductDetail } from "@/types/types";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { useProductTabs } from "@/hooks/useProductTabs";
import { DesktopTabs } from "./DesktopTabs";
import { MobileSelects } from "./MobileSelects";
import { ProductContent } from "./ProductContent";

interface ProductTabsSecProps {
  selectedProduct?: ProductDetail | null;
}

const ProductTabsSec = ({ selectedProduct = null }: ProductTabsSecProps) => {
  const { data: categoriesData } = useProductCategories();
  const isMobile = useMobileDetection();
  
  const {
    mainTab,
    subTab,
    showProductDetail,
    handleMainTabChange,
    handleSubCategorySelect,
  } = useProductTabs({
    categoriesData,
    selectedProduct,
  });

  if (!categoriesData?.data || categoriesData.data.length === 0) return null;

  return (
    <Tabs value={mainTab} onValueChange={handleMainTabChange} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 lg:gap-8 items-start">
        <DesktopTabs
          categories={categoriesData.data}
          mainTab={mainTab}
          subTab={subTab}
          onMainTabChange={handleMainTabChange}
          onSubCategorySelect={handleSubCategorySelect}
        />

        <div className="col-span-1 lg:col-span-6 min-h-screen">
          {isMobile && (
            <MobileSelects
              categories={categoriesData.data}
              mainTab={mainTab}
              subTab={subTab}
              onMainTabChange={handleMainTabChange}
              onSubCategorySelect={handleSubCategorySelect}
            />
          )}

          <ProductContent
            showProductDetail={showProductDetail}
            selectedProduct={selectedProduct}
            mainTab={mainTab}
            subTab={subTab}
          />
        </div>
      </div>
    </Tabs>
  );
};

export default ProductTabsSec;