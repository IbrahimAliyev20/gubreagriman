import PrivacyBanner from "@/components/legal/PrivacyBanner";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export default async function PrivacyPolicyPage({
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
          <PrivacyBanner />
          
          <div className="bg-white rounded-[20px] p-6 md:p-10 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Məxfilik Siyasəti
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    1. Giriş
                  </h3>
                  <p className="mb-4">
                    Agro Gubre şirkəti ("Biz", "Bizim") şəxsi məlumatlarınızın məxfiliyini və 
                    təhlükəsizliyini qorumaq üçün səy göstəririk. Bu Məxfilik Siyasəti sizə 
                    məlumatlarınızın necə toplandığını, istifadə olunduğunu və qorunduğunu izah edir.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    2. Toplanan Məlumatlar
                  </h3>
                  <p className="mb-4">
                    Biz aşağıdakı məlumatları toplaya bilərik:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Şəxsi məlumatlar: ad, soyad, email ünvanı, telefon nömrəsi</li>
                    <li>Texniki məlumatlar: IP ünvanı, brauzer növü, cihaz məlumatları</li>
                    <li>İstifadə məlumatları: səhifələrin ziyarəti, vaxt, istifadə edilən funksiyalar</li>
                    <li>Kuki məlumatları: səhifəmizin daha yaxşı işləməsi üçün</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    3. Məlumatların İstifadəsi
                  </h3>
                  <p className="mb-4">
                    Toplanan məlumatlar aşağıdakı məqsədlər üçün istifadə olunur:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Xidmətlərimizin təqdim edilməsi və təkmilləşdirilməsi</li>
                    <li>İstifadəçilərlə əlaqə saxlanması</li>
                    <li>Texniki dəstək və problemlərin həlli</li>
                    <li>Qanuni tələblərin yerinə yetirilməsi</li>
                    <li>Marketinq və reklam kampaniyaları (razılıqla)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    4. Məlumatların Paylaşılması
                  </h3>
                  <p className="mb-4">
                    Şəxsi məlumatlarınızı üçüncü tərəflərlə yalnız aşağıdakı hallarda paylaşırıq:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Qanuni tələblərlə</li>
                    <li>Xidmət təminatçılarımızla (məxfilik razılaşması ilə)</li>
                    <li>Biznes transferi və ya birləşmə hallarında</li>
                    <li>İstifadəçinin açıq razılığı ilə</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    5. Məlumatların Qorunması
                  </h3>
                  <p className="mb-4">
                    Məlumatlarınızın təhlükəsizliyini təmin etmək üçün müasir texnologiyalar və 
                    təhlükəsizlik tədbirlərindən istifadə edirik. Bunlara şifrələmə, təhlükəsiz 
                    serverlər və məhdud giriş daxildir.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    6. İstifadəçi Hüquqları
                  </h3>
                  <p className="mb-4">
                    Siz aşağıdakı hüquqlara maliksiniz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Şəxsi məlumatlarınıza daxil olmaq</li>
                    <li>Məlumatlarınızı düzəltmək və ya yeniləmək</li>
                    <li>Məlumatlarınızın silinməsini tələb etmək</li>
                    <li>Məlumatların emalına etiraz etmək</li>
                    <li>Məlumatların köçürülməsini tələb etmək</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    7. Kukilər
                  </h3>
                  <p className="mb-4">
                    Veb-saytımız səhifənin düzgün işləməsi və istifadəçi təcrübəsinin yaxşılaşdırılması 
                    üçün kukilərdən istifadə edir. Kukiləri brauzer parametrlərindən idarə edə bilərsiniz.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    8. Əlaqə
                  </h3>
                  <p className="mb-4">
                    Məxfilik Siyasəti ilə bağlı suallarınız və ya məlumatlarınızla bağlı sorğularınız varsa:
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

