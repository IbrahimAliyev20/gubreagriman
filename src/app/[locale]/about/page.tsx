import AboutBanner from "@/components/about/AboutBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import ProductCategories from "@/components/about/ProductCategories";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export default async function AboutPage({
}: Record<string, never>) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div>
          <AboutBanner />
          <WhoWeAre />
          <ProductCategories />
          <div className="bg-[#F6F6F6] rounded-[20px]  p-6 mt-6 md:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
              {/* Left side - Title */}
              <div className="flex items-center   ">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  Niyə Biz?
                </h2>
              </div>

              {/* Right side - Three paragraphs */}
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-sm md:text-base text-black leading-relaxed">
                  AGRO GÜBRƏ fərqi — sistem yanaşmasındadır. Layihələrimiz fərdi
                  həllər əsasında qurulur və sahənin potensialını maksimum
                  dərəcədə üzə çıxarır.
                </p>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  Komandamızda aqronomlar, mühəndislər, kimyaçılar, xəritəçilər və
                  layihə rəhbərləri çalışır. 
                </p>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  250-dən çox uğurlu layihə və artan beynəlxalq əməkdaşlıqlar AGRO
                  GÜBRƏ -nin bu sahədəki mövqeyini təsdiqləyir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HydrationBoundary>
  );
}
