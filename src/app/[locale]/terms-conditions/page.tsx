import TermsBanner from "@/components/legal/TermsBanner";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export default async function TermsConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className="flex flex-col gap-10 py-6 md:py-10">
          <TermsBanner />
          
          <div className="bg-white rounded-[20px] p-6 md:p-10 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                İstifadə Şərtləri
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    1. Ümumi Məlumat
                  </h3>
                  <p className="mb-4">
                    Bu İstifadə Şərtləri ("Şərtlər") Agro Gubre şirkətinin ("Biz", "Bizim") 
                    rəsmi veb-saytı və xidmətlərinin istifadəsi ilə bağlı qaydaları müəyyən edir. 
                    Platformamızdan istifadə etməklə siz bu şərtləri qəbul etmiş sayılırsınız.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    2. Xidmətlərdən İstifadə
                  </h3>
                  <p className="mb-4">
                    Platformamız kənd təsərrüfatı məhsulları və gübrələr haqqında məlumat təqdim edir. 
                    Xidmətlərimizdən istifadə zamanı düzgün və dəqiq məlumatlar təqdim etməyiniz 
                    tələb olunur. Hər hansı qanunsuz və ya qeyri-qanuni məqsədlər üçün platformamızdan 
                    istifadə etmək qadağandır.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    3. İstifadəçi Məsuliyyəti
                  </h3>
                  <p className="mb-4">
                    İstifadəçilər platformamızdan istifadə zamanı öz məsuliyyətlərini daşıyırlar. 
                    Hər hansı zərərli, təhqiredici və ya qanunsuz məzmunun paylaşılması qadağandır. 
                    Şəxsi məlumatlarınızın təhlükəsizliyini təmin etmək üçün lazımi tədbirləri görməlisiniz.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    4. Məxfilik
                  </h3>
                  <p className="mb-4">
                    Şəxsi məlumatlarınızın qorunması bizim üçün prioritetdir. Məxfilik Siyasətimiz 
                    haqqında ətraflı məlumat üçün Məxfilik Siyasəti səhifəsinə baxın.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    5. Məzmunun Mülkiyyəti
                  </h3>
                  <p className="mb-4">
                    Platformamızda yerləşdirilən bütün məzmun (mətnlər, şəkillər, loqolar və s.) 
                    Agro Gubre şirkətinin mülkiyyətidir və müəllif hüquqları ilə qorunur. 
                    Məzmunumuzdan izinsiz istifadə qadağandır.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    6. Dəyişikliklər
                  </h3>
                  <p className="mb-4">
                    Biz bu İstifadə Şərtlərini istənilən vaxt dəyişdirmək hüququnu özümüzdə saxlayırıq. 
                    Dəyişikliklər barədə məlumat platformamızda dərc olunacaq. Dəyişikliklərdən sonra 
                    platformamızdan istifadəyə davam etməklə yeni şərtləri qəbul etmiş sayılırsınız.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    7. Əlaqə
                  </h3>
                  <p className="mb-4">
                    İstifadə Şərtləri ilə bağlı suallarınız varsa, bizimlə əlaqə saxlayın:
                  </p>
                  <p className="text-gray-600">
                    Email: info@agrogubre.com<br />
                    Telefon: *8899
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Son yenilənmə: {new Date().toLocaleDateString('az-AZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HydrationBoundary>
  );
}

