import { Suspense } from "react";
import AboutHome from "@/components/home/AboutHome";
import HeroBanner from "@/components/home/HeroBanner";
import OurProducts from "@/components/home/OurProducts";
import OurServices from "@/components/home/OurServices";
import CaruselLogo from "@/components/shared/carusel-logo";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getBanners, getHomeAbout, getPartners } from "@/services/Home/server-api";
import { getServices } from "@/services/Service/server-api";
import { queryKeys } from "@/lib/query-keys";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.banners("home", locale),
        queryFn: () => getBanners("home", locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.services.list(locale),
        queryFn: () => getServices(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.homeAbout(locale),
        queryFn: () => getHomeAbout(locale),
      }),
    ]);
  } catch (error) {
    console.error("Error prefetching home page data:", error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className="flex flex-col gap-10 md:gap-20">
          <Suspense fallback={
            <div className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat border border-[#BDBDBD] min-h-[400px] animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 py-5 md:px-12 md:py-14">
                <div className="flex flex-col md:justify-between gap-4 md:gap-0">
                  <div className="h-6 w-32 bg-gray-200 rounded"></div>
                  <div className="h-12 w-48 md:w-64 bg-gray-200 rounded"></div>
                  <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="w-full max-w-[280px] md:max-w-none h-[300px] bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          }>
            <HeroBanner />
          </Suspense>

          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center animate-pulse">
              <div className="relative h-[250px] md:h-full order-first md:order-last">
                <div className="w-full h-full bg-gray-200 rounded-[20px]"></div>
              </div>
              <div className="space-y-3 md:space-y-6">
                <div className="flex flex-col pl-0 md:pl-12">
                  <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-12 md:h-16 w-64 bg-gray-200 rounded"></div>
                </div>
                <div className="bg-[#83B957] rounded-3xl p-4 md:p-12">
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="bg-[#F6F6F6] border border-gray-200 rounded-3xl p-4 md:p-12">
                  <div className="space-y-2 mb-4 md:mb-6">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-10 w-32 bg-gray-200 rounded-[20px]"></div>
                </div>
              </div>
            </div>
          }>
            <AboutHome />
          </Suspense>

          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-24">
              <div className="animate-pulse space-y-4 w-full">
                <div className="h-8 w-48 bg-gray-200 rounded mx-auto"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <OurProducts />
          </Suspense>

          <Suspense fallback={
            <div className="animate-pulse">
              <div className="flex flex-col md:grid md:grid-cols-9 md:grid-rows-6 gap-4 md:gap-4 h-auto md:h-[600px]">
                <div className="md:col-span-3 md:row-span-4 p-6 md:p-10 flex flex-col justify-start md:justify-between gap-4 md:gap-4 rounded-[20px]">
                  <div className="space-y-4">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-8 w-48 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-10 w-32 bg-gray-200 rounded-2xl"></div>
                </div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative overflow-hidden bg-[#F6F6F6] p-6 md:p-8 min-h-[220px] md:min-h-0 flex flex-col justify-end rounded-[20px] gap-4 md:gap-4 border-[#BDBDBD] border-2">
                    <div className="absolute inset-0 bg-gray-200"></div>
                    <div className="relative z-10 space-y-4">
                      <div className="h-6 w-40 bg-gray-300 rounded"></div>
                      <div className="h-10 w-24 bg-gray-300 rounded-2xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <OurServices />
          </Suspense>


          <Suspense fallback={
            <div className="h-[60px] md:h-[100px] relative overflow-hidden">
              <div className="flex items-center gap-8 md:gap-16 h-full animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-20 md:w-32 h-12 md:h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          }>
            <CaruselLogo />
          </Suspense>
        </div>
      </Container>
    </HydrationBoundary>
  );
}
