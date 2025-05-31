"use client";

import { Building2, Sparkles } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { IndustryData } from "@/data/IndustryData";
import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Industry = () => {
  const [activeTab, setactiveTab] = useState<number>(0);

  return (
    <section className="section pb-20">
      <div className="max-w-p gap-5 flex justify-center w-full flex-col px-5 items-center">
        <SectionLabel icon={<Building2 strokeWidth={1.2} />}>
          Industry
        </SectionLabel>

        <h3 className="!text-black text-4xl md:text-5xl mt-2 text-center font-semibold">
          AI Voice Assistants Built for Your Business
        </h3>

        <div className="w-full flex flex-col lg:flex-row pt-6 overflow-hidden">
          <div className="w-full flex lg:hidden justify-center">
            <Carousel opts={{ dragFree: true }}>
              <CarouselContent className="w-full px-5 gap-0">
                {IndustryData.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <CarouselItem
                      className="basis-3/5  grow"
                      key={`industry-carousel-${index}`}
                    >
                      <button
                        onClick={() => setactiveTab(index)}
                        className={`px-2 p-1 flex text-lg min-w-[280px] -mx-14 font-medium items-center gap-3 cursor-pointer rounded-full border pr-10 ${
                          activeTab === index
                            ? "bg-purple-main text-white"
                            : "bg-transparent text-purple-main"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className="h-10 w-10 rounded-full scale-90 bg-purple-main/20 p-2"
                            strokeWidth={2}
                            size={20}
                          />
                        )}
                        {industry.name}
                      </button>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden lg:flex lg:w-3/12 flex-col gap-4 pr-4">
            {IndustryData.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <button
                  key={`industry-static-${index}`}
                  onClick={() => setactiveTab(index)}
                  className={`px-2 p-1 flex text-lg font-medium items-center gap-3 cursor-pointer rounded-full border pr-10 ${
                    activeTab === index
                      ? "bg-purple-main text-white"
                      : "bg-transparent text-purple-main"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className="h-10 w-10 rounded-full scale-90 bg-purple-main/20 p-2"
                      strokeWidth={2}
                    />
                  )}
                  {industry.name}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full pt-10 lg:pt-0 lg:w-9/12 lg:px-10 flex gap-10">
            <div>
              <h5 className="w-full text-black opacity-70 text-xl">
                {IndustryData[activeTab].title}
              </h5>
              <ul className="pt-5 flex flex-col gap-5">
                {IndustryData[activeTab].list?.map((feature, index) => (
                  <li
                    className="flex max-[250px]:flex-col gap-3"
                    key={`features-${index}`}
                  >
                    <span className="bg-purple-main/10 w-fit rounded-full p-2 h-fit">
                      <Sparkles
                        size={20}
                        className="text-purple-main/40  fill-purple-main/50"
                      />
                    </span>
                    <div>
                      <h6 className="text-black text-xl font-medium">
                        {feature.name}
                      </h6>
                      <p className="text-gray-600/80">{feature.des}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {IndustryData[activeTab].image && (
              <div className="w-full max-w-[300px] overflow-hidden relative rounded-2xl hidden md:block">
                <Image
                  fill
                  placeholder="blur"
                  src={IndustryData[activeTab].image}
                  alt={IndustryData[activeTab].name || "Industry image"}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
