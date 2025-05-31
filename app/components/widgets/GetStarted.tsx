import { ArrowUpRight, MousePointerClick } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { StepCards } from "@/data/StepsData";
import { GradientButton } from "../ui/Button";

const GetStarted = () => {
  return (
    <>
      <section className="section pb-20">
        <div className="max-w-p gap-5 flex justify-center w-full flex-col px-5 items-center">
          <SectionLabel icon={<MousePointerClick strokeWidth={1.2} />}>
            How To Get Started
          </SectionLabel>
          <h3 className="!text-black text-4xl md:text-5xl mt-2 text-center font-semibold">
            Getting started with our AI Voice Assistant
          </h3>
          <div className="grid grid-cols-12 w-full pt-5 gap-5">
            {StepCards.map((step, index) => (
              <div
                className="col-span-12 sm:col-span-6 flex flex-col justify-between lg:col-span-4 xl:col-span-3 p-8 border border-border-main rounded-xl"
                key={`steps-${index}`}
              >
                <label className="text-purple-main w-fit px-3 font-medium py-1 rounded-md border">
                  {step.step}
                </label>
                <div className="pt-8 space-y-3">
                  <h4 className="text-2xl font-semibold">{step.title}</h4>
                  <p className="text-gray-500/90 text-sm lg:text-lg">
                    {step.description}
                  </p>
                </div>
                <GradientButton
                  icon={
                    step.icon ? (
                      <step.icon strokeWidth={1.4} />
                    ) : (
                      <ArrowUpRight />
                    )
                  }
                  className="mt-5"
                >
                  {step.buttonText}
                </GradientButton>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
