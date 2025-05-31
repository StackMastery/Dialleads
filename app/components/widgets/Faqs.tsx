import { Info } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqsData } from "@/data/FaqsData";

const Faqs = () => {
  return (
    <>
      <section className="section pb-20">
        <div className="max-w-p w-full flex flex-col md:flex-row px-5 gap-10 gap-y-5">
          <div className="w-full md:w-5/12 flex items-center flex-col md:items-start">
            <SectionLabel icon={<Info />}>FAQ</SectionLabel>
            <h2 className="mt-6 text-center text-black mb-[1.5rem] md:text-left font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]">
              Everything You Need to Know
            </h2>
          </div>
          <div className="w-full md:w-7/12">
            <Accordion type="single" collapsible className="w-full space-y-5">
              {FaqsData.map((faq, index) => (
                <AccordionItem key={`according-${index}`} value={`a-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
