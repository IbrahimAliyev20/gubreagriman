import AboutHome from "@/components/home/AboutHome";
import HeroBanner from "@/components/home/HeroBanner";
import OurProducts from "@/components/home/OurProducts";
import OurServices from "@/components/home/OurServices";
import CaruselLogo from "@/components/shared/carusel-logo";
import Container from "@/components/shared/container";
  
export default function Home() {
  return (
    <Container>
     <div className="flex flex-col gap-20">
     <HeroBanner /> 
     
      <AboutHome />

      <OurProducts />

      <OurServices />

      {/* <BlogSec /> */}

      <CaruselLogo />
     </div>
    </Container>
  );
}
