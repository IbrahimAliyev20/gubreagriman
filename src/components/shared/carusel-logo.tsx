"use client";

import { useEffect, useState } from "react";
import LogoLoop from "../LogoLoop";


const imageLogos = [
  { src: "/carusellogo/AGC.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/carusellogo/AGRIMAN.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/carusellogo/agro.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/carusellogo/GUBRE.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/carusellogo/Logo.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/carusellogo/logos.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/carusellogo/LOTYPE.png", alt: "Company 3", href: "https://company3.com" },
];

export default function CaruselLogo() {
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