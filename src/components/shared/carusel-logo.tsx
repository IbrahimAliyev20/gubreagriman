"use client";

import { useEffect, useState } from "react";
import LogoLoop from "../LogoLoop";
import { usePartners } from "@/services/Home/queires";


export default function CaruselLogo() {
  const { data: partnersData } = usePartners();
  const imageLogos = partnersData?.data
    .filter((partner) => partner.image || partner.logo)
    .map((partner) => ({ 
      src: partner.image || partner.logo || '', 
      alt: partner.name, 
      href: partner.link 
    }))
    .filter((logo) => logo.src) as Array<{ src: string; alt?: string; href?: string }>;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[60px] md:h-[100px] relative overflow-hidden">
      <LogoLoop
        logos={imageLogos || []}
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