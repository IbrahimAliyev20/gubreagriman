import TermsBanner from "@/components/legal/TermsBanner";
import Container from "@/components/shared/container";
import { getTerms } from "@/services/Terms/api";
import { getLocale } from "next-intl/server";

export default async function TermsConditionsPage() {

  const locale = await getLocale();
  const terms = await getTerms("terms-and-conditions", locale);

  return (
      <Container>
        <div className="flex flex-col gap-10 py-6 md:py-10">
          <TermsBanner />
          
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

