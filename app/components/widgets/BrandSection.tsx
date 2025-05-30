import { BrandsData } from "@/data/BrandsData";
import Image from "next/image";

const BrandSection = () => {
  return (
    <>
      <section className="section">
        <div className="max-w-p flex flex-col w-full items-center py-10 px-5">
          <h2 className="mb-8 text-center font-geist text-lg font-semibold leading-[24px] md:leading-normal tracking-[0%] text-black md:text-2xl md:tracking-[-0.7px]">
            Dail Leads{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-main to-violet-400">
              Powers 10M+ ROI
            </span>
            -positive Customer Interactions per Month
          </h2>
          <div className="w-full flex flex-wrap gap-5 gap-y-10 items-center justify-between">
            {BrandsData.map((brand, index) => (
              <Image
                key={`brand-${index}`}
                width={170}
                className=" brightness-0 opacity-30 invert-0 hover:opacity-40 transition-all"
                src={brand.url}
                alt={brand.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
