import React, { Suspense } from "react";
import Container from "@/components/shared/container";
import ServiceBanner from "@/components/services/ServiceBanner";
import { ServiceTabsSec } from "@/components/services/ServiceTabsSec";
import CaruselLogo from "@/components/shared/carusel-logo";
import Image from "next/image";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getBanners, getHomeAbout } from "@/services/Home/server-api";
import { getServices } from "@/services/Service/server-api";
import { queryKeys } from "@/lib/query-keys";
import { ApiResponse, HomeAboutResponse, MetaTagsResponse } from "@/types/types";
import getMetaTags from "@/services/Meta-tags/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<MetaTagsResponse> {
  const { locale } = await params;
  const metaTagsData = await getMetaTags("service", locale);

  return {
    title: metaTagsData?.data?.title,
    meta_title: metaTagsData?.data?.meta_title,
    meta_description: metaTagsData?.data?.meta_description,
    meta_keywords: metaTagsData?.data?.meta_keywords,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.banners("service", locale),
        queryFn: () => getBanners("service", locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.services.list(locale),
        queryFn: () => getServices(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.homeAbout(locale),
        queryFn: () => getHomeAbout(locale),
      }),
    ]);
  } catch (error) {
    console.error("Error prefetching services page data:", error);
  }

  const homeAboutData = queryClient.getQueryData<ApiResponse<HomeAboutResponse>>(
    queryKeys.home.homeAbout(locale)
  )?.data;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className="flex flex-col gap-10">
          <Suspense fallback={
            <div className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat border border-[#BDBDBD] animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="col-span-2 flex flex-col md:justify-between px-4 py-5 md:py-20 md:px-8 gap-4 md:gap-0">
                  <div className="h-6 w-32 bg-gray-200 rounded"></div>
                  <div className="h-12 w-48 md:w-64 bg-gray-200 rounded"></div>
                  <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-center md:justify-end -mt-2 md:mt-0">
                  <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          }>
            <ServiceBanner />
          </Suspense>

          <Suspense fallback={
            <div className="animate-pulse">
              <div className="flex flex-col gap-4">
                <div className="h-12 w-64 bg-gray-200 rounded"></div>
                <div className="flex gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-10 w-24 bg-gray-200 rounded"></div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <ServiceTabsSec />
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

          <Suspense fallback={
            <div className="w-full h-[300px] bg-gray-200 rounded-[20px] animate-pulse"></div>
          }>
            <Image
            src={homeAboutData?.service_image || "/images/traktor.png"}
            alt="Services Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-[20px]"
          />
          </Suspense>
        </div>
      </Container>
    </HydrationBoundary>
  );
}
