import { ProductDetail, ProductCategoryResponse } from "@/types/types";

interface CategoryMatchResult {
  category: ProductCategoryResponse;
  subCategory: NonNullable<ProductCategoryResponse["sub_categories"]>[0] | null;
}

/**
 * Seçili ürün için eşleşen kategori ve alt kategoriyi bulur
 */
export const findMatchingCategory = (
  selectedProduct: ProductDetail | null,
  categories: ProductCategoryResponse[]
): CategoryMatchResult => {
  if (!categories || categories.length === 0) {
    throw new Error("Categories array is empty");
  }

  let targetCategory = categories[0];
  let targetSubCategory: NonNullable<ProductCategoryResponse["sub_categories"]>[0] | null = null;

  if (selectedProduct?.parent_category) {
    const matched = categories.find(
      (cat) => cat.name.toLowerCase() === selectedProduct.parent_category?.toLowerCase()
    );
    
    if (matched) {
      targetCategory = matched;
      targetSubCategory = findMatchingSubCategory(selectedProduct, matched);
    }
  }

  return {
    category: targetCategory,
    subCategory: targetSubCategory,
  };
};

/**
 * Ürünün attributes'larından alt kategoriyi bulur
 */
const findMatchingSubCategory = (
  selectedProduct: ProductDetail,
  category: ProductCategoryResponse
): NonNullable<ProductCategoryResponse["sub_categories"]>[0] | null => {
  if (!selectedProduct.attributes || selectedProduct.attributes.length === 0) {
    return null;
  }

  if (!category.sub_categories || category.sub_categories.length === 0) {
    return null;
  }

  const subCategories = category.sub_categories;

  // Önce spesifik attribute'ları kontrol et (Product Group, Kateqoriya, vb.)
  const productGroupAttr = selectedProduct.attributes.find((attr) => {
    const key = attr.attribute_key?.toLowerCase() || "";
    return (
      key.includes("product group") ||
      key.includes("kateqoriya") ||
      key === "category" ||
      key.includes("group")
    );
  });

  if (productGroupAttr?.attribute_value) {
    const matched = matchSubCategoryByValue(
      productGroupAttr.attribute_value,
      subCategories
    );
    if (matched) return matched;
  }

  // Eğer spesifik attribute bulunamazsa, tüm attribute değerlerini kontrol et
  for (const attr of selectedProduct.attributes) {
    if (attr.attribute_value) {
      const matched = matchSubCategoryByValue(
        attr.attribute_value,
        subCategories
      );
      if (matched) return matched;
    }
  }

  return null;
};

/**
 * Attribute değeri ile alt kategoriyi eşleştirir
 */
const matchSubCategoryByValue = (
  attributeValue: string,
  subCategories: NonNullable<ProductCategoryResponse["sub_categories"]>
): NonNullable<ProductCategoryResponse["sub_categories"]>[0] | null => {
  const attrValue = attributeValue.toLowerCase().trim();

  if (!subCategories || subCategories.length === 0) {
    return null;
  }

  return (
    subCategories.find((sub) => {
      const subName = sub.name.toLowerCase();
      const subSlug = sub.slug.toLowerCase();
      return (
        subName === attrValue ||
        subSlug === attrValue ||
        subName.includes(attrValue) ||
        attrValue.includes(subName)
      );
    }) || null
  );
};

