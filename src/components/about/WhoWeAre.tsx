import React from "react";
import { StaticResponse, AboutResponse } from "@/types/types";


export default function WhoWeAre({ statistics, about }: { statistics: StaticResponse[], about: AboutResponse[] }) {

  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-[20px]  p-6 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
          <div className="flex items-center   ">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              {about[0].title}
            </h2>
          </div>

          <div className="flex flex-col " 
          dangerouslySetInnerHTML={{ __html: about[0].description }} />
     
        </div>
      </div>

      {statistics && statistics.length > 0 && (
        <div className="bg-[#83B957] rounded-[20px] p-6 md:p-10 mt-6 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8   ">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center   text-white"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base lg:text-lg text-center md:text-left">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-[#F6F6F6] rounded-[20px]  p-6 mt-6     md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
              {about[1].title}
            </h2>
          </div>

          <div className="flex flex-col " dangerouslySetInnerHTML={{ __html: about[1].description }} />
         
     

          </div>
        </div>
      </div>
  );
}
