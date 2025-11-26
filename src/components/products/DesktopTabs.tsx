"use client";

import React, { useState, useEffect, useRef } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { ProductCategoryResponse } from "@/types/types";

interface DesktopTabsProps {
  categories: ProductCategoryResponse[];
  mainTab: string;
  subTab: string;
  onMainTabChange: (value: string) => void;
  onSubCategorySelect: (slug: string) => void;
}

export const DesktopTabs = ({
  categories,
  mainTab,
  subTab,
  onMainTabChange,
  onSubCategorySelect,
}: DesktopTabsProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string>("");
  const isManualToggleRef = useRef(false);
  const previousMainTabRef = useRef<string>(mainTab);

  // MƏNTİQ 1: MainTab dəyişəndə (başqa kateqoriyaya keçəndə) avtomatik AÇ
  useEffect(() => {
    // Əgər manual toggle edilibsə, avtomatik açma
    if (isManualToggleRef.current) {
      isManualToggleRef.current = false;
      return;
    }

    // Yalnız mainTab həqiqətən dəyişibsə işlə
    if (mainTab && mainTab !== previousMainTabRef.current) {
      previousMainTabRef.current = mainTab;
      const category = categories.find((cat) => cat.slug === mainTab);
      // Yalnız alt kateqoriyası olanları avtomatik açırıq
      if (category?.sub_categories && category.sub_categories.length > 0) {
        setExpandedCategory(mainTab);
      } else {
        setExpandedCategory("");
      }
    }
  }, [mainTab, categories]);

  // MƏNTİQ 2: Klikləmə funksiyası
  const handleCategoryClick = (categorySlug: string) => {
    // Əgər istifadəçi BAŞQA kateqoriyaya basırsa:
    if (mainTab !== categorySlug) {
      // 1. Sadəcə tabı dəyişirik. 
      // 2. Qalan işi yuxarıdakı `useEffect` görəcək (state-i o dəyişəcək).
      // 3. Biz burda setExpandedCategory etmirik ki, toqquşma olmasın.
      onMainTabChange(categorySlug);
    } 
    // Əgər istifadəçi HAZIRKI (AÇIQ) kateqoriyaya basırsa:
    else {
      // Manual toggle olduğunu qeyd edirik
      isManualToggleRef.current = true;
      // Deməli məqsədi onu bağlamaqdır (Toggle).
      setExpandedCategory((prev) => (prev === categorySlug ? "" : categorySlug));
    }
  };

  return (
    <div className="hidden lg:block col-span-2 bg-white rounded-xl border border-gray-200 sticky top-4 z-10">
      <TabsList className="flex flex-col h-full p-3 gap-1 bg-transparent rounded-xl max-h-[calc(100vh-2rem)] overflow-y-auto">
        {categories.map((category) => {
          const hasSubs =
            category.sub_categories && category.sub_categories.length > 0;
          const isExpanded = expandedCategory === category.slug;

          return (
            <div key={category.slug} className="w-full flex flex-col gap-2">
              <div className="relative w-full">
                <TabsTrigger
                  value={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className="w-full justify-between px-4 py-3.5 text-left rounded-lg font-semibold text-base data-[state=active]:bg-[#F9F9F9] data-[state=active]:text-black hover:bg-gray-100 transition-all flex items-center cursor-pointer"
                >
                  <span>{category.name.toUpperCase()}</span>
                  {hasSubs && (
                    <div className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                </TabsTrigger>
              </div>

              {hasSubs && isExpanded && category.sub_categories && (
                <div className="mt-2 space-y-1 pb-3 border-gray-200">
                  {category.sub_categories.map((sub) => (
                    <button
                      key={sub.slug}
                      onClick={() => onSubCategorySelect(sub.slug)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        subTab === sub.slug
                          ? "bg-[#8BC34A] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </TabsList>
    </div>
  );
};