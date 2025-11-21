"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { serviceTabsData } from "@/utils/servicetabsdata";
import Container from "./shared/container";

export function ServiceTabs() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Tabs defaultValue={serviceTabsData[0].slug} className="w-full">
          
          {/* 1. TAB DÜYMƏLƏRİ */}
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto md:h-14">
            {serviceTabsData.map((tab) => (
              <TabsTrigger
                key={tab.slug}
                value={tab.slug}
                className="py-3 px-4 text-base"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 2. TAB MƏZMUNLARI (CONTENT) */}
          {serviceTabsData.map((tab) => (
            <TabsContent
              key={tab.slug}
              value={tab.slug}
              className="mt-10" // Üst tərəfdən boşluq
            >
              <div className="flex flex-col gap-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Mətn */}
                  <div className="space-y-4 order-2 md:order-1"> {/* Mobildə şəkil yuxarıda */}
                    <h2 className="text-3xl font-bold text-gray-900">
                      {tab.content.div1.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {tab.content.div1.text}
                    </p>
                  </div>
                  {/* Şəkil */}
                  <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden order-1 md:order-2">
                    <Image
                      src={tab.content.div1.image}
                      alt={tab.content.div1.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {tab.content.div2.text}
                  </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={tab.content.div3.image}
                      alt={tab.content.div3.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {tab.content.div3.text}
                    </p>
                  </div>
                </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {tab.content.div4.text}
                  </p>

              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}