import { Sparkles } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import React from "react";

const Dialleads = () => {
  return (
    <section className="section pb-20">
      <div className="max-w-p gap-5 flex justify-center w-full flex-col px-5 items-center">
        <SectionLabel icon={<Sparkles strokeWidth={1.2} />}>
          Why Dialleads
        </SectionLabel>
        <h3 className="!text-black text-4xl md:text-5xl mt-2 text-center font-semibold">
          Why Choose Dialleads
        </h3>
        <div className="grid grid-cols-12 w-full pt-10 gap-5">
          {DialleadsData.map((dia, index) => (
            <div
              className="col-span-12 sm:col-span-6  lg:col-span-4 flex items-center p-5 border border-border-main rounded-xl"
              key={`dialleads-${index}`}
            >
              <div className="w-40">
                {dia.image && (
                  <Image
                    width={65}
                    height={65}
                    src={dia.image}
                    alt={
                      typeof dia.content === "string"
                        ? dia.content
                        : "Dialleads"
                    }
                  />
                )}
              </div>
              <div className="space-y-3">
                <p className="text-sm lg:text-lg">{dia.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dialleads;

const DialleadsData: { image?: string; content?: React.ReactNode }[] = [
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/fabee91026fc08f50efb0ad3ca7eb2f2040ced21-54x54.png?w=1600",
    content: (
      <>
        Provide instant property assistance{" "}
        <span className="text-[#5B6779]">for real estate agencies.</span>
      </>
    ),
  },
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/e9737c808fa76d70bc09267c4c1ac3c32fcb5e2e-54x54.png?w=1600",
    content: (
      <>
        Personalize marketing campaigns{" "}
        <span className="text-[#5B6779]">for your marketing agency.</span>
      </>
    ),
  },
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/3a510fd63c3002f440f2ea52609886dcaf089828-54x54.png?w=1600",
    content: (
      <>
        Automate appointments{" "}
        <span className="text-[#5B6779]">for medical clinics.</span>
      </>
    ),
  },
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/a7cc9a8e33c14e2f4f10dc58acf9b18d33ad5241-54x54.png?w=1600",
    content: (
      <>
        Streamline customer support{" "}
        <span className="text-[#5B6779]">for ecommerce stores.</span>
      </>
    ),
  },
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/f30a5b79895690bbee34aa3e6a36311e0044762d-54x54.png?w=1600",
    content: (
      <>
        Efficiently handle customer inquiries{" "}
        <span className="text-[#5B6779]">for customer centers.</span>
      </>
    ),
  },
  {
    image:
      "https://cdn.sanity.io/images/zhic6sia/production/f90aa3c0f5797323f20bcf16749d4efa4bd864bb-54x54.png?w=1600",
    content: (
      <>
        Boost sales effectiveness{" "}
        <span className="text-[#5B6779]">for small businesses with AI.</span>
      </>
    ),
  },
];
