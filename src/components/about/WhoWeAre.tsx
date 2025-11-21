import React from "react";

export default function WhoWeAre() {
  const statistics = [
    {
      number: "100+",
      label: "işçilər",
    },
    {
      number: "200+",
      label: "Tamamlanmış layihələr",
    },
    {
      number: "25+",
      label: "Layihə mükafatları",
    },
    {
      number: "99%",
      label: "Məmnunluq",
    },
  ];

  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-[20px]  p-6 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
          {/* Left side - Title */}
          <div className="flex items-center   ">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Biz Kimik?
            </h2>
          </div>

          {/* Right side - Three paragraphs */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-base text-black leading-relaxed">
              AGRO GÜBRƏ - bu günün və gələcəyin kənd təsərrüfatı üçün elmi
              əsaslı, mühəndislik yönümlü və nəticəyə fokuslanmış yanaşma təqdim
              edən ixtisaslaşmış şirkətdir.
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed">
              2016-cı ildən etibarən biz fermerlərə, sahibkarlara və aqrar
              şirkətlərə texnologiya və dəqiq analizlər əsasında qurulmuş
              sistemli həllər təqdim edirik.
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed">
              Təsərrüfatlar inkişaf etməlidir - və biz bu inkişafın arxasında
              dayanan tərəfdaşıq.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#83B957] rounded-[20px] p-6 md:p-10 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8   ">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center   text-white"
            >
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base lg:text-lg text-center md:text-left">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F6F6F6] rounded-[20px]  p-6 mt-6     md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left side - Title */}
          <div className="flex items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Müasir Kənd Təsərrüfatı İlə
              <br />
              Gələcəyə Doğru
            </h2>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col gap-2 md:gap-4">
            {/* Opening paragraph */}
            <p className="text-sm md:text-base text-black leading-relaxed">
              Biz, AGRO GÜBRƏ komandası olaraq torpağı sevən, məhsuldarlığı önə
              çəkən və hər bir fermerin yanında olmağı özümüzə borc bilən bir
              ailəyik. İnanırıq ki, aqrar sahənin inkişafı ölkənin sabitliyi və
              rifahı üçün təməl rol oynayır.
            </p>

            {/* Sub-heading */}
            <p className="text-sm md:text-base font-bold text-black">
              Əkin sahəsindən süfrəyə gedən yolda:
            </p>

            {/* List of services/benefits */}
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base text-black leading-relaxed">
                Sizə düzgün planlama,
              </p>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Elmi əsaslı qərarlar,
              </p>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Dövlət dəstəklərindən faydalanmaq imkanları,
              </p>
              <p className="text-sm md:text-base text-black leading-relaxed">
                Və ən əsası - dayanıqlı gəlir modelini yaratmaqda kömək edirik.
              </p>
            </div>

            {/* Concluding bold statements */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm md:text-base font-bold text-black">
                Çünki biz sizin torpağınıza dəyər veririk.
              </p>
              <p className="text-sm md:text-base font-bold text-black">
                Çünki kənd varsa, sabah var.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
