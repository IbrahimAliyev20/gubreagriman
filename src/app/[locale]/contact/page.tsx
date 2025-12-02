import ContactBanner from '@/components/contact/ContactBanner'
import ContactForm from '@/components/contact/ContactForm'
import CaruselLogo from '@/components/shared/carusel-logo'
import Container from '@/components/shared/container'
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getBanners, getPartners } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";
import { getContacts } from '@/services/Contacts/server-api';
import { Suspense } from 'react';
import { MetaTagsResponse } from "@/types/types";
import getMetaTags from "@/services/Meta-tags/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<MetaTagsResponse> {
  const { locale } = await params;
  const metaTagsData = await getMetaTags("contact", locale);

  return {
    title: metaTagsData?.data?.title,
    meta_title: metaTagsData?.data?.meta_title,
    meta_description: metaTagsData?.data?.meta_description,
    meta_keywords: metaTagsData?.data?.meta_keywords,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  let contacts = null;

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.contacts.contacts(locale),
        queryFn: () => getContacts(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.banners("contact", locale),
        queryFn: () => getBanners("contact", locale),
      }),
    ]);

    const contactsResponse = await getContacts(locale);
    contacts = contactsResponse;
  } catch (error) {
    console.error("Error prefetching contact page data:", error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className='flex flex-col gap-10'>
          <Suspense fallback={<div className="w-full h-[300px] bg-gray-200 rounded-[20px] animate-pulse"></div>}>
            <ContactBanner />
          </Suspense>

          {contacts && <ContactForm contacts={contacts} />}
          <div className="w-full rounded-[20px] overflow-hidden border border-[#BDBDBD] ">
            {contacts?.location ? (
              <div dangerouslySetInnerHTML={{ __html: contacts.location }} className='[&>iframe]:h-96 [&>iframe]:w-full' />
            ) : (
              <div className="h-96 bg-gray-100 flex items-center justify-center text-gray-500 rounded-[20px]">
                Xəritə tapılmadı
              </div>
            )}
          </div>
          <CaruselLogo />
        </div>
      </Container>
    </HydrationBoundary>
  )
}
