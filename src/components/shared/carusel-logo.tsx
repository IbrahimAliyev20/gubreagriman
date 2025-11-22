"use client";

import LogoLoop from "../LogoLoop";
import { usePartners } from "@/services/Home/queries";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { AlertCircle } from "lucide-react";


export default function CaruselLogo() {
  const { data: partnersData, isLoading, isError, error } = usePartners();
  const imageLogos = partnersData?.data
    ?.filter((partner) => partner.image || partner.logo)
    .map((partner) => ({ 
      src: partner.image || partner.logo || '', 
      alt: partner.name, 
      href: partner.link 
    }))
    .filter((logo) => logo.src) as Array<{ src: string; alt?: string; href?: string }> || [];
  const isMobile = useMobileDetection();

  if (isLoading) {
    return (
      <div className="h-[60px] md:h-[100px] relative overflow-hidden">
        <div className="flex items-center gap-8 md:gap-16 h-full animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-20 md:w-32 h-12 md:h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[60px] md:h-[100px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-center px-4">
          <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          <p className="text-xs md:text-sm text-gray-600">
            Partner loqoları yüklənərkən xəta baş verdi.
          </p>
          {process.env.NODE_ENV === 'development' && error && (
            <p className="text-xs text-red-500 mt-1">
              {(error as Error)?.message || "Naməlum xəta"}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (!imageLogos || imageLogos.length === 0) {
    return null;
  }

  return (
    <div className="h-[60px] md:h-[100px] relative overflow-hidden">
      <LogoLoop
        logos={imageLogos}
        speed={80}
        direction="left"
        logoHeight={isMobile ? 28 : 42}
        gap={isMobile ? 40 : 80}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}