"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  Search,
  User,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navigationItems } from "@/utils/static";
import Image from "next/image";
import LanguageSelector from "../shared/language-selector";
import { useServices } from "@/services/Service/queries";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const { data: servicesData } = useServices();

  // Services dropdown üçün API-dən gələn datadan istifadə et
  const dynamicNavigationItems = navigationItems.map((item) => {
    if (item.label === "services" && item.hasDropdown && servicesData?.data) {
      return {
        ...item,
        dropdownItems: servicesData.data.map((service) => ({
          label: service.title,
          href: `/services?slug=${service.slug}`,
        })),
      };
    }
    return item;
  });

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-black hover:text-primary"
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full bg-white border-l border-[#2C2C2E] overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#2C2C2E]">
            <Image
              src="/images/logo.svg"
              alt="Company Logo"
              width={150}
              height={50}
              className="w-20 h-12"
            />
           
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {dynamicNavigationItems.map((item) => (
                <li key={item.href}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedKey((prev) =>
                            prev === item.href ? null : item.href
                          )
                        }
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-lg transition-colors ${
                          (
                            expandedKey
                              ? expandedKey === item.href
                              : pathname.startsWith(item.href)
                          )
                            ? "bg-[#EEF3F5] text-black font-medium"
                            : "text-gray-500 font-normal hover:bg-[#EEF3F5] hover:text-black"
                        }`}
                        aria-expanded={
                          expandedKey
                            ? expandedKey === item.href
                            : pathname.startsWith(item.href)
                        }
                        aria-controls={`section-${item.href}`}
                      >
                        <span>{t(item.label)}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            (
                              expandedKey
                                ? expandedKey === item.href
                                : pathname.startsWith(item.href)
                            )
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                      {(expandedKey
                        ? expandedKey === item.href
                        : pathname.startsWith(item.href)) && (
                        <div id={`section-${item.href}`} className="space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => {
                            const isActive = pathname === dropdownItem.href || 
                              (pathname === "/services" && typeof window !== "undefined" && 
                               new URL(dropdownItem.href, window.location.origin).searchParams.get("slug") === 
                               new URL(window.location.href).searchParams.get("slug"));
                            return (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => setOpen(false)}
                                className={`block px-6 py-2 rounded-lg transition-colors ${
                                  isActive
                                    ? "bg-[#EEF3F5] text-black font-medium"
                                    : "text-gray-500 font-normal hover:bg-[#EEF3F5] hover:text-black"
                                }`}
                              >
                                {dropdownItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "bg-[#EEF3F5] text-black font-medium"
                          : "text-gray-500 font-normal hover:bg-[#EEF3F5] hover:text-black"
                      }`}
                    >
                      {t(item.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* DƏYİŞİKLİK: İKON BLOKU (Menyunun ən altında) */}
          <div className="p-4 border-t border-[#2C2C2E]">
            <div className="flex items-center justify-center gap-2.5 rounded-full bg-gray-100 py-1 px-4">
              <button className="p-1.5 text-[#BCBCBC] hover:text-primary cursor-pointer">
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/login"
                className="p-1.5 text-[#BCBCBC] hover:text-primary"
              >
                <User className="h-5 w-5" />
              </Link>
              <button className="p-1.5 text-[#BCBCBC] hover:text-primary cursor-pointer">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-gray-300" />
              <LanguageSelector />
            </div>
          </div>

          {/* Footer (Yalnız Contact) */}
          <div className="p-4 border-t border-[#2C2C2E] space-y-3">
            <Link
              href="/contact"
              className="text-black font-medium transition-colors"
            >
              <Button
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {t("contact")}
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}