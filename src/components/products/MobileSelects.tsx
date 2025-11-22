import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductCategoryResponse } from "@/types/types";

interface MobileSelectsProps {
  categories: ProductCategoryResponse[];
  mainTab: string;
  subTab: string;
  onMainTabChange: (value: string) => void;
  onSubCategorySelect: (slug: string) => void;
}

export const MobileSelects = ({
  categories,
  mainTab,
  subTab,
  onMainTabChange,
  onSubCategorySelect,
}: MobileSelectsProps) => {
  const currentCategory = categories.find((cat) => cat.slug === mainTab);
  const subCategories = currentCategory?.sub_categories || [];

  return (
    <div className="mb-6 space-y-4">
      <Select value={mainTab} onValueChange={onMainTabChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Ana kateqoriya seçin" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.slug} value={category.slug}>
              {category.name.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {mainTab && subCategories.length > 0 && (
        <Select value={subTab} onValueChange={onSubCategorySelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Alt kateqoriya seçin" />
          </SelectTrigger>
          <SelectContent>
            {subCategories.map((sub) => (
              <SelectItem key={sub.slug} value={sub.slug}>
                {sub.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

