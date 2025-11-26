import { useState, useEffect } from "react";
import { ProductDetail } from "@/types/types";
import { ProductCategoryResponse } from "@/types/types";
import { findMatchingCategory } from "@/utils/categoryMatcher";

interface UseProductTabsProps {
  categoriesData: { data: ProductCategoryResponse[] } | undefined;
  selectedProduct: ProductDetail | null;
  initialCategorySlug?: string;
}

export const useProductTabs = ({ categoriesData, selectedProduct, initialCategorySlug }: UseProductTabsProps) => {
  const [mainTab, setMainTab] = useState<string>("");
  const [subTab, setSubTab] = useState<string>("");
  const [showProductDetail, setShowProductDetail] = useState<boolean>(!!selectedProduct);

  // Kategoriler yüklendiğinde ve ürün seçildiğinde tab'ları ayarla
  useEffect(() => {
    if (!categoriesData?.data || categoriesData.data.length === 0) return;

    try {
      // Əgər seçili məhsul varsa, onun kateqoriyasını istifadə et
      if (selectedProduct) {
        const { category, subCategory } = findMatchingCategory(
          selectedProduct,
          categoriesData.data
        );

        setMainTab(category.slug);
        setShowProductDetail(true);

        if (subCategory) {
          setSubTab(subCategory.slug);
        } else if (category.sub_categories?.length) {
          setSubTab(category.sub_categories[0].slug);
        } else {
          setSubTab("");
        }
        return;
      }

      // Əgər URL-dən kateqoriya slug-u varsa, onu istifadə et
      if (initialCategorySlug) {
        const category = categoriesData.data.find(
          (cat) => cat.slug === initialCategorySlug
        );
        
        if (category) {
          setMainTab(category.slug);
          setShowProductDetail(false);
          // Əsas kateqoriya yüklənəndə alt kateqoriya avtomatik seçilməsin
          setSubTab("");
          return;
        }
      }

      // Əks halda ilk kateqoriyanı istifadə et
      const firstCategory = categoriesData.data[0];
      if (firstCategory) {
        setMainTab(firstCategory.slug);
        setShowProductDetail(false);
        // İlk kateqoriya yüklənəndə alt kateqoriya avtomatik seçilməsin
        setSubTab("");
      }
    } catch (error) {
      console.error("Error matching category:", error);
    }
  }, [categoriesData, selectedProduct, initialCategorySlug]);

  const handleMainTabChange = (value: string) => {
    setMainTab(value);
    setShowProductDetail(false);
    // Əsas kateqoriyaya klikləndikdə alt kateqoriya seçilməsin, əsas kateqoriyanın məhsulları göstərilsin
    setSubTab("");
  };

  const handleSubCategorySelect = (slug: string) => {
    setSubTab(slug);
    setShowProductDetail(false);
  };

  return {
    mainTab,
    subTab,
    showProductDetail,
    handleMainTabChange,
    handleSubCategorySelect,
  };
};

