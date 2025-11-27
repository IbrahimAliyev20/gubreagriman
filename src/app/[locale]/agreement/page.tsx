import AgreementBanner from "@/components/legal/AgreementBanner";
import Container from "@/components/shared/container";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export default async function AgreementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // Destructure if needed in future
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <div className="flex flex-col gap-10 py-6 md:py-10">
          <AgreementBanner />
          
          <div className="bg-white rounded-[20px] p-6 md:p-10 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Razılaşma
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    1. Razılaşmanın Məzmunu
                  </h3>
                  <p className="mb-4">
                    Bu Razılaşma Agro Gubre şirkəti ilə platformamızın istifadəçiləri arasında 
                    bağlanır. Platformamızdan istifadə etməklə siz bu razılaşmanın bütün şərtlərini 
                    qəbul etmiş sayılırsınız.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    2. Tərəflərin Hüquq və Məsuliyyətləri
                  </h3>
                  <p className="mb-4">
                    <strong>Agro Gubre şirkəti:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Xidmətlərin keyfiyyətli təqdim edilməsini təmin edir</li>
                    <li>İstifadəçi məlumatlarının məxfilik və təhlükəsizliyini qoruyur</li>
                    <li>Texniki dəstək xidməti göstərir</li>
                    <li>Platformanın davamlı işləməsini təmin edir</li>
                  </ul>
                  <p className="mb-4">
                    <strong>İstifadəçi:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Düzgün və dəqiq məlumatlar təqdim edir</li>
                    <li>Platformanın qaydalarına riayət edir</li>
                    <li>Qanunsuz fəaliyyətlərdən çəkinir</li>
                    <li>Digər istifadəçilərin hüquqlarına hörmət edir</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    3. Xidmətlərin Təqdim Edilməsi
                  </h3>
                  <p className="mb-4">
                    Biz platformamızda kənd təsərrüfatı məhsulları, gübrələr və əlaqəli məlumatlar 
                    təqdim edirik. Xidmətlərimiz &quot;olduğu kimi&quot; təqdim olunur və biz onların 
                    mükəmməl olmasını zəmanət vermirik. Platformada texniki problemlər və ya 
                    fasilələr ola bilər.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    4. Məzmun və Məlumatlar
                  </h3>
                  <p className="mb-4">
                    Platformamızda yerləşdirilən məlumatlar ümumi məlumat məqsədi daşıyır və 
                    peşəkar məsləhət kimi qəbul edilməməlidir. Kənd təsərrüfatı məhsullarının 
                    istifadəsi ilə bağlı qərar qəbul etməzdən əvvəl mütəxəssislərlə məsləhətləşin.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    5. Məsuliyyətin Məhdudlaşdırılması
                  </h3>
                  <p className="mb-4">
                    Agro Gubre şirkəti platformamızdan istifadə nəticəsində yaranan bilavasitə, 
                    dolayı, təsadüfi və ya nəticə zərərlərinə görə məsuliyyət daşımır. 
                    Platformamızda yerləşdirilən məlumatların dəqiqliyinə görə zəmanət vermirik.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    6. Mülkiyyət Hüquqları
                  </h3>
                  <p className="mb-4">
                    Platformamızın bütün məzmunu, dizaynı, loqosu və digər elementləri Agro Gubre 
                    şirkətinin mülkiyyətidir və müəllif hüquqları ilə qorunur. İzinsiz istifadə, 
                    kopyalama və ya paylaşma qadağandır.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    7. Razılaşmanın Ləğv Edilməsi
                  </h3>
                  <p className="mb-4">
                    Biz istənilən vaxt istifadəçinin razılaşmanın şərtlərinə riayət etməməsi 
                    halında platformadan istifadəni dayandıra və ya ləğv edə bilərik. 
                    İstifadəçi də istənilən vaxt platformadan istifadəni dayandıra bilər.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    8. Mübahisələrin Həlli
                  </h3>
                  <p className="mb-4">
                    Bu razılaşma ilə bağlı yaranan mübahisələr Azərbaycan Respublikasının qanunlarına 
                    uyğun olaraq həll ediləcəkdir. Mübahisələrin həlli üçün ilkin olaraq danışıqlar 
                    yolu seçilməlidir.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    9. Dəyişikliklər
                  </h3>
                  <p className="mb-4">
                    Biz bu Razılaşmanı istənilən vaxt yeniləyə və ya dəyişdirə bilərik. 
                    Dəyişikliklər platformamızda dərc olunacaq və istifadəyə davam etməklə 
                    yeni şərtləri qəbul etmiş sayılırsınız.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                    10. Əlaqə
                  </h3>
                  <p className="mb-4">
                    Razılaşma ilə bağlı suallarınız varsa:
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

