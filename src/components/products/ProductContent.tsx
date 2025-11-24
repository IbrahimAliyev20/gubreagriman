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
  categories,
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

  // Əgər main category var amma subcategory yoxdursa
  if (mainTab) {
    const currentCategory = categories?.find((cat) => cat.slug === mainTab);
    const hasSubCategories = currentCategory?.sub_categories && currentCategory.sub_categories.length > 0;

    // Əgər main category-də subcategory yoxdursa, birbaşa main category-dən məhsulları göstər
    if (!hasSubCategories) {
      return (
        <TabsContent value={mainTab} className="mt-0">
          <ProductList categorySlug={mainTab} />
        </TabsContent>
      );
    }

    // Əgər subcategory-lər varsa amma heç biri seçilməyibsə, "Alt kateqoriya seçin" mesajını göstər
    return (
      <div className="flex items-center justify-center py-32">
        <p className="text-xl text-gray-500 font-medium">Alt kateqoriya seçin</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-32">
      <p className="text-xl text-gray-500 font-medium">Alt kateqoriya seçin</p>
    </div>
  );
};

