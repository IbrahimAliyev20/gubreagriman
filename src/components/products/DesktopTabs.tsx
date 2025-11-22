import React from "react";
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
  return (
    <div className="hidden lg:block col-span-2 bg-white rounded-xl border border-gray-200 sticky top-4 z-10">
      <TabsList className="flex flex-col h-full p-3 gap-1 bg-transparent rounded-xl max-h-[calc(100vh-2rem)] overflow-y-auto">
        {categories.map((category) => {
          const hasSubs = category.sub_categories && category.sub_categories.length > 0;
          const isActive = mainTab === category.slug;

          return (
            <div key={category.slug} className="w-full">
              <TabsTrigger
                value={category.slug}
                className="w-full justify-between px-4 py-3.5 text-left rounded-lg font-semibold text-base data-[state=active]:bg-[#F9F9F9] data-[state=active]:text-black hover:bg-gray-100 transition-all"
              >
                <span>{category.name.toUpperCase()}</span>
                {hasSubs && (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                )}
              </TabsTrigger>

              {hasSubs && isActive && category.sub_categories && (
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

