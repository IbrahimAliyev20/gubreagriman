import CareerBanner from '@/components/career/CareerBanner'
import CareerContactForm from '@/components/career/CareerContactForm'
import CaruselLogo from '@/components/shared/carusel-logo'
import Container from '@/components/shared/container'
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getPartners } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";

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
