import { Sparkles } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { FeaturesData } from "@/data/FeaturesData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="section pb-20">
        <div className="max-w-p gap-5 flex justify-center w-full flex-col px-5 items-center">
          <SectionLabel icon={<Sparkles strokeWidth={1.2} />}>
            Features
          </SectionLabel>
          <h3 className="!text-black text-4xl md:text-5xl mt-2 text-center font-semibold">
            Why Diallead{"'"}s AI Voice Assistants?
          </h3>
          <div className="grid grid-cols-12 w-full pt-5 gap-5">
            {FeaturesData.map((feature, index) => (
              <div
                className="col-span-12 min-[450px]:col-span-6 md:col-span-4 lg:col-span-3 p-5 border border-border-main rounded-xl"
                key={`features-${index}`}
              >
                <Image width={55} src={feature.icon} alt={feature.name || ""} />
                <div className="pt-4 space-y-3">
                  <h4 className="text-2xl font-semibold">{feature.name}</h4>
                  <p className="text-gray-500/90 text-sm lg:text-lg">
                    {feature.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
