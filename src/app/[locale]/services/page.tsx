import React from "react";
import Container from "@/components/shared/container";
import ServiceBanner from "@/components/services/ServiceBanner";
import { ServiceTabsSec } from "@/components/services/ServiceTabsSec";
import CaruselLogo from "@/components/shared/carusel-logo";
import Image from "next/image";

function ServicesPage() {

  return (
    <Container>
      <div className="flex flex-col gap-10">
      
      <ServiceBanner />
      <ServiceTabsSec />
      <CaruselLogo />
      
      <Image
        src="/images/traktor.png"
        alt="Services Image"
        width={300}
        height={300}
        className="w-full h-[300px] object-cover rounded-[20px]"
      />
      </div>
    </Container>
  );
}

export default ServicesPage;
