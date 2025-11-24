import ContactBanner from '@/components/contact/ContactBanner'
import ContactForm from '@/components/contact/ContactForm'
import CaruselLogo from '@/components/shared/carusel-logo'
import Container from '@/components/shared/container'
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getPartners } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";

export default async function ContactPage({
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
    console.error("Error prefetching contact page data:", error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className='flex flex-col gap-10'>
          <ContactBanner />

          <ContactForm />
          <div className="w-full rounded-[20px] overflow-hidden border border-[#BDBDBD]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490145!2d49.851370815355!3d40.377190979369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087dcd9c8c2b1%3A0xdf4767c369343a15!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <CaruselLogo />
        </div>
      </Container>
    </HydrationBoundary>
  )
}
