import AboutBanner from "@/components/about/AboutBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import ProductCategories from "@/components/about/ProductCategories";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getStatics, getAbout } from "@/services/About/server-api";
import { queryKeys } from "@/lib/query-keys";
import { StaticResponse, AboutResponse } from "@/types/types";
import { getBanners } from "@/services/Home/server-api";
import { Suspense } from "react";

export default async function AboutPage({
  params, 
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.about.statics(locale),
      queryFn: () => getStatics(locale),
    });
    await queryClient.prefetchQuery({
      queryKey: queryKeys.about.about(locale),
      queryFn: () => getAbout(locale),
    });
    await queryClient.prefetchQuery({
      queryKey: queryKeys.home.banners("about", locale),
      queryFn: () => getBanners("about", locale),
    });
  } catch (error) {
    console.error("Error prefetching about page data:", error);
  }

  const statisticsData = queryClient.getQueryData<{ data: StaticResponse[] }>(
    queryKeys.about.statics(locale)
  );

  const aboutData = queryClient.getQueryData<{ data: AboutResponse[] }>(
    queryKeys.about.about(locale)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div>
          <Suspense fallback={<div className="w-full h-[300px] bg-gray-200 rounded-[20px] animate-pulse"></div>}>
            <AboutBanner  />
          </Suspense>
          <WhoWeAre statistics={statisticsData?.data || []} about={aboutData?.data || []} />
          <ProductCategories />
          

              {/* Third item - index 2 */}
              {aboutData?.data[2] && (
                <div className="bg-[#F6F6F6] rounded-[20px] p-6 mt-6 md:mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex items-center">
                      <h2 className="text-3xl md:text-5xl font-bold text-black">
                        {aboutData.data[2].title}
                      </h2>
                    </div>
                    <div className="text-sm md:text-base text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutData.data[2].description || "" }} />
                  </div>
                </div>
              )}
        </div>
      </Container>
    </HydrationBoundary>
  );
}
