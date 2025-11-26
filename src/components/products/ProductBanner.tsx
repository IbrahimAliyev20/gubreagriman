import React from 'react'
import Image from 'next/image'
import { getLocale } from 'next-intl/server';
import { getBanners } from '@/services/Home/server-api';

export default async function ProductBanner() {
  const locale = await getLocale();
  const banner = await getBanners("product", locale);
  const bannerData = banner?.data;
  return (
    <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-t from-[#F1F1F1] to-[#FFFFFF] border border-[#BDBDBD]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
        
        <div className="col-span-2 flex flex-col justify-center px-4 py-5 md:py-20 md:px-8">
          <h1 className="text-xl md:text-4xl font-bold text-black leading-tight mb-2 md:mb-3">
            {bannerData?.title}
          </h1>
          <p className="text-xl md:text-4xl font-bold text-black leading-relaxed">
          </p>
        </div>

        <div className="h-[400px] col-span-3 flex items-center justify-center md:justify-end">
          <Image
            src={bannerData?.image}
            alt="Modern Agriculture"
            width={948}
            height={632}
            className="h-full w-full object-cover rounded-r-3xl"
            priority
          />
        </div>
      </div>
    </div>
  )
}
