import { CircleOff, PersonStanding, ThumbsUp } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { cn } from "@/lib/utils";
import HumanImg from "../../../public/human.png";
import AiImg from "../../../public/ai.png";
import Image from "next/image";

const Comparision = () => {
  return (
    <>
      <section className="section pb-20">
        <div className="max-w-[1100px] gap-5 flex justify-center w-full flex-col px-5 items-center">
          <SectionLabel icon={<PersonStanding strokeWidth={1.2} />}>
            Human Vs AI
          </SectionLabel>
          <h3 className="!text-black text-4xl max-w-[774px] md:text-5xl mt-2 text-center font-semibold">
            Traditional sales & support teams are a thing of the past!
          </h3>
          <div className="flex flex-col sm:flex-row gap-y-20 w-full gap-10 pt-20">
            <ComparisonCard />
            <ComparisonCard isHuman={false} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Comparision;

export const ComparisonCard = ({
  className,
  isHuman = true,
}: {
  className?: string;
  isHuman?: boolean;
}) => {
  return (
    <>
      <div
        className={cn(
          "border  rounded-2xl flex flex-col relative items-center px-5 pb-10 w-full sm:w-6/12",
          `${
            isHuman
              ? `border-gray-400/70 bg-gray-100`
              : "border-purple-main bg-purple-main"
          }`,
          className
        )}
      >
        <Image
          src={isHuman ? HumanImg : AiImg}
          alt={"Comparison Image"}
          className={` absolute top-0 z-10  ${
            isHuman ? `-mt-10 w-20` : "-mt-20"
          }`}
        />
        <div>
          <h3
            className={`mx-auto mt-[5.5rem] w-full px-8 text-center font-geist text-[1.5rem] font-semibold tracking-[-0.7px]  lg:px-[2.75rem] lg:text-[2.25rem] lg:leading-tight lg:tracking-[0%] ${
              isHuman ? "text-gray-800" : "text-white"
            }`}
          >
            {isHuman
              ? "Traditional costly phone agents"
              : "Human-like Dialleads AI agents"}
          </h3>
          <ul className="px-6 md:px-10 pt-10">
            {(isHuman ? HumanFeaturesList : AIFeaturesList).map((fe, index) => (
              <li
                key={`fe-${index}`}
                className="flex items-center gap-3 mb-4 text-left"
              >
                {isHuman ? (
                  <CircleOff size={24} className="text-red-400  mt-1" />
                ) : (
                  <ThumbsUp size={24} className="text-sky-600 mt-1" />
                )}
                <span className={cn(isHuman ? "text-gray-800" : "text-white")}>
                  {fe}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
const AIFeaturesList: string[] = [
  "24/7/365 Availability",
  "Cost-Effective Solution",
  "Maximized Sales Opportunities",
  "Consistent, High-Quality Interactions",
];

const HumanFeaturesList: string[] = [
  "Lack of 24/7 Availability",
  "High Operational Costs",
  "Missed Sales Opportunities",
  "Inconsistent Customer Experience",
];
