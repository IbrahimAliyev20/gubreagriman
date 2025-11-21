"use client";

import { User, Search, ShoppingCart, ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "../shared/language-selector";
import Container from "../shared/container";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MobileMenu } from "./mobile-menu";
import { useTranslations } from "next-intl";
import { navigationItems } from "@/utils/static";
import { useServices } from "@/services/Service/queries";

export function Header() {
  const t = useTranslations("navigation");
  const { data: servicesData } = useServices();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpenChange = (label: string, open: boolean) => {
    setOpenDropdown(open ? label : null);
  };

  const handleMouseEnter = (label: string) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="py-8">
      <Container>
        <div className="flex items-center justify-between rounded-full bg-white px-4 md:px-8 py-3 border border-[#D9D9D9]">
          
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Agro Gubre Logo"
                width={180}
                height={45}
                priority
                className="w-[120px] h-auto md:w-[180px]"
              />
            </Link>
            
         
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {navigationItems.map((item) => {
                // Services dropdown üçün API-dən gələn datadan istifadə et
                if (item.label === "services" && item.hasDropdown && servicesData?.data) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <DropdownMenu
                      key={item.label}
                      open={isOpen}
                      onOpenChange={(open) => handleOpenChange(item.label, open)}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          className="flex items-center gap-1.5 text-base text-black hover:text-primary cursor-pointer"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {t(item.label)}
                          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        sideOffset={8}
                        align="start"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {servicesData.data.map((service) => (
                          <DropdownMenuItem asChild key={service.slug}>
                            <Link href={`/services?slug=${service.slug}`}>{service.title}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                // Digər dropdown-lar üçün statik datadan istifadə et
                if (item.hasDropdown && item.dropdownItems) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <DropdownMenu
                      key={item.label}
                      open={isOpen}
                      onOpenChange={(open) => handleOpenChange(item.label, open)}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          className="flex items-center gap-1.5 text-base text-black hover:text-primary cursor-pointer"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {t(item.label)}
                          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        sideOffset={8}
                        align="start"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdownItems.map((dropdown) => (
                          <DropdownMenuItem asChild key={dropdown.href}>
                            <Link href={dropdown.href}>{dropdown.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base text-black hover:text-primary cursor-pointer"
                  >
                    {t(item.label)}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="relative flex items-center gap-2.5 rounded-full bg-[#84CC16] py-2 px-8 text-base text-white hover:bg-[#65A30D] cursor-pointer transition-colors"
              >
                {t("contact")}
              </Link>
              <button className="relative -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white cursor-pointer transition-colors z-10">
                <Image src="/images/AIcon.svg" alt="phone" width={20} height={20} />
              </button>
            </div>

            <div className="flex items-center gap-2.5 rounded-full bg-[#F4F4F4] py-1 px-4">
              <button className="p-1.5 text-[#BCBCBC] hover:text-primary cursor-pointer">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/login" className="p-1.5 text-[#84CC16] hover:text-[#65A30D] cursor-pointer">
                <User className="h-5 w-5 stroke-2" />
              </Link>
              <div className="mx-1 h-6 w-px bg-gray-300" />
              <LanguageSelector />
            </div>
          </div>
          
          <div className="flex md:hidden items-center gap-2.5">
            <div className="flex items-center gap-1 rounded-full bg-[#F4F4F4] px-2 py-1">
              <button className="p-1 text-[#BCBCBC] hover:text-primary cursor-pointer">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/login" className="p-1 text-[#84CC16] hover:text-[#65A30D]">
                <User className="h-5 w-5 stroke-2" />
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <LanguageSelector />
            </div>
            
            <MobileMenu />
          </div>

        </div>
      </Container>
    </header>
  );
}