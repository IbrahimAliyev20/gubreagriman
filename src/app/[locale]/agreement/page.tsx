import AgreementBanner from "@/components/legal/AgreementBanner";
import Container from "@/components/shared/container";
import { getTerms } from "@/services/Terms/api";
import { getLocale } from "next-intl/server";
import { MetaTagsResponse } from "@/types/types";
import getMetaTags from "@/services/Meta-tags/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<MetaTagsResponse> {
  const { locale } = await params;
  const metaTagsData = await getMetaTags("agreement", locale);

  return {
    title: metaTagsData?.data?.title,
    meta_title: metaTagsData?.data?.meta_title,
    meta_description: metaTagsData?.data?.meta_description,
    meta_keywords: metaTagsData?.data?.meta_keywords,
  };
}

export default async function AgreementPage() {
  const locale = await getLocale();
  const terms = await getTerms("agreement", locale);
  return (
      <Container>
        <div className="flex flex-col gap-10 py-6 md:py-10">
          <AgreementBanner />
          
          <div className="bg-white rounded-[20px] p-6 md:p-10 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                {terms?.data?.title}
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: terms?.data?.description ?? "" }} />
            </div>
          </div>
        </div>
          </div>
      </Container>
  );
}

