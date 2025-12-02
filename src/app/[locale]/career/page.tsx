import CareerBanner from '@/components/career/CareerBanner'
import CareerContactForm from '@/components/career/CareerContactForm'
import CaruselLogo from '@/components/shared/carusel-logo'
import Container from '@/components/shared/container'
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getPartners } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";
import { MetaTagsResponse } from "@/types/types";
import getMetaTags from "@/services/Meta-tags/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<MetaTagsResponse> {
  const { locale } = await params;
  const metaTagsData = await getMetaTags("career", locale);

  return {
    title: metaTagsData?.data?.title,
    meta_title: metaTagsData?.data?.meta_title,
    meta_description: metaTagsData?.data?.meta_description,
    meta_keywords: metaTagsData?.data?.meta_keywords,
  };
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
      }),
    ]);
  } catch (error) {
    console.error("Error prefetching career page data:", error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className='flex flex-col gap-10'>
          <CareerBanner />
          <CareerContactForm />
       
          <CaruselLogo />
        </div>
      </Container>
    </HydrationBoundary>
  )
}
