import { Suspense } from "react";
import OurServices from '@/components/home/OurServices'
import ProductBanner from '@/components/products/ProductBanner'
import ProductTabsSec from '@/components/products/ProductTabsSec'
import Container from '@/components/shared/container'
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getProductCategories } from "@/services/Product/server-api";
import { getServices } from "@/services/Service/server-api";
import { queryKeys } from "@/lib/query-keys";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  try {
    // Prefetch all data needed for products page
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.products.categories(locale),
        queryFn: () => getProductCategories(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.services.list(locale),
        queryFn: () => getServices(locale),
      }),
    ]);
  } catch (error) {
    // Log error but don't block page rendering
    // Components will handle loading/error states
    console.error("Error prefetching products page data:", error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className='flex flex-col gap-16'>
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
            <ProductBanner />
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <ProductTabsSec />
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
        </div>
      </Container>
    </HydrationBoundary>
  )
}
