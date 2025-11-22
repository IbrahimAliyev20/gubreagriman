"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useServices } from "@/services/Service/queries";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export function ServiceTabsSec() {
  const { data: services } = useServices();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);

  const getActiveTabFromSlug = () => {
    if (!services?.data || services.data.length === 0) return null;

    const slug = searchParams.get("slug");

    if (slug) {
      const foundService = services.data.find(
        (service) => service.slug === slug
      );
      if (foundService) {
        return foundService.title;
      }
    }

    return null;
  };

  useEffect(() => {
    if (!services?.data || services.data.length === 0) return;

    const tabFromSlug = getActiveTabFromSlug();

    if (tabFromSlug) {
      setActiveTab(tabFromSlug);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else if (!activeTab && services.data[0]) {
      setActiveTab(services.data[0].title);
    }
  }, [services?.data, searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const service = services?.data.find((s) => s.title === value);
    if (service && typeof window !== "undefined") {
      const newUrl = `/services?slug=${service.slug}`;
      window.history.replaceState({}, "", newUrl);

      // Scroll et
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  if (!services?.data || services.data.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="services-tabs" className="py-6 md:py-16">
      <Tabs
        value={activeTab || services.data[0]?.title || "tab1"}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="w-full h-auto px-3 py-4 md:px-4 md:py-8 bg-white rounded-xl border border-[#CCCCCC] flex justify-start md:justify-center overflow-x-auto gap-2">
          {services?.data.map((service) => (
            <TabsTrigger
              key={service.title}
              value={service.title}
              className="flex items-center justify-start py-1.5 px-3 md:py-2 md:px-5 text-sm md:text-[18px] font-bold rounded-lg whitespace-nowrap border border-gray-300 bg-white text-gray-600 data-[state=active]:bg-[#80C34A] data-[state=active]:text-white data-[state=active]:border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-gray-400 data-[state=active]:hover:bg-[#7CB342]"
            >
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {services?.data.map((service) => {
          return (
            <TabsContent
              key={service.title}
              value={service.title}
              className="mt-6 md:mt-10 transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="div1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div>
                    {service.div_1 && <div dangerouslySetInnerHTML={{ __html: service.div_1 }} />}
                  </div>

                  <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden order-1 md:order-2">
                    <Image
                      src={
                        service.image_1 ||
                        service.thumb_image_1 ||
                        "/placeholder.jpg"
                      }
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="div2 p-8 w-full bg-gray-100 rounded-xl">
                  {service.div_2 && <div dangerouslySetInnerHTML={{ __html: service.div_2 }} />}
                </div>
                <div className="div3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden ">
                    <Image
                      src={
                        service.image_2 ||
                        service.thumb_image_2 ||
                        "/placeholder.jpg"
                      }
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    {service.div_3 && <div dangerouslySetInnerHTML={{ __html: service.div_3 }} />}
                  </div>
                </div>
                <div className="div4 p-8 w-full bg-gray-100 rounded-xl">
                  {service.div_4 && <div dangerouslySetInnerHTML={{ __html: service.div_4 }} />}
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
