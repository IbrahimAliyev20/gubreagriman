import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import ProductDetailComponent from "./ProductDetail";
import ProductList from "./ProductList";
import { ProductDetail, ProductCategoryResponse } from "@/types/types";

interface ProductContentProps {
  showProductDetail: boolean;
  selectedProduct: ProductDetail | null;
  mainTab: string;
  subTab: string;
  categories?: ProductCategoryResponse[];
}

export const ProductContent = ({
  showProductDetail,
  selectedProduct,
  mainTab,
  subTab,
}: ProductContentProps) => {
  if (showProductDetail && selectedProduct) {
    return <ProductDetailComponent product={selectedProduct} />;
  }

  // Əgər subcategory seçilibsə, onun məhsullarını göstər
  if (mainTab && subTab) {
    return (
      <TabsContent value={mainTab} className="mt-0">
        <ProductList categorySlug={subTab} />
      </TabsContent>
    );
  }

  // Əgər main category var amma subcategory yoxdursa, əsas kateqoriyanın məhsullarını göstər
  if (mainTab) {
    return (
      <TabsContent value={mainTab} className="mt-0">
        <ProductList categorySlug={mainTab} />
      </TabsContent>
    );
  }

  return (
    <div className="flex items-center justify-center py-32">
      <p className="text-xl text-gray-500 font-medium">Alt kateqoriya seçin</p>
    </div>
  );
};

