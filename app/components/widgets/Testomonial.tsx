"use client";

import { Gem } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import Masonry from "react-masonry-css"; // ✅ Import Masonry
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Testomonial = () => {
  // ✅ Breakpoints for responsiveness
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="section pb-20">
      <div className="max-w-p flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center">
          <SectionLabel icon={<Gem strokeWidth={1.3} size={22} />}>
            Testimonials
          </SectionLabel>
          <h3 className="!text-black text-4xl px-5 md:text-5xl mt-2 text-center font-semibold">
            Trusted by Visionaries Worldwide
          </h3>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-full mt-10 gap-6"
          columnClassName="masonry-column space-y-6"
        >
          {Testimonials.map((t, idx) => (
            <Dialog key={idx}>
              <DialogTrigger>
                <div className="bg-white cursor-pointer border border-border-main rounded-2xl text-start p-5 flex flex-col break-inside-avoid">
                  <div>
                    <div className="flex items-center gap-5">
                      {t.icon && (
                        <Image
                          src={t.icon}
                          width={40}
                          className="rounded-full"
                          height={40}
                          alt={t.name}
                        />
                      )}
                      <div>
                        <h3 className="w-full truncate text-[16px] font-semibold leading-[120%]">
                          {t.name}
                        </h3>
                        <p className="text-[14px] font-light leading-[120%] text-[#737275] mt-1">
                          {t.company} • {t.title}
                        </p>
                      </div>
                    </div>
                    <p className="pt-[1.25rem] text-left text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]">
                      {t.testimonial}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent
                closeBtn="translate-y-5"
                className="rounded-2xl bg-white border border-border-main"
              >
                <DialogTitle></DialogTitle>
                <div className="-mt-5">
                  <div className="flex items-center gap-5">
                    {t.icon && (
                      <Image
                        src={t.icon}
                        width={40}
                        className="rounded-full"
                        height={40}
                        alt={t.name}
                      />
                    )}
                    <div>
                      <h3 className="w-full truncate text-[16px] font-semibold leading-[120%]">
                        {t.name}
                      </h3>
                      <p className="text-[14px] font-light leading-[120%] text-[#737275] mt-1">
                        {t.company} • {t.title}
                      </p>
                    </div>
                  </div>
                  <p className="pt-[1.25rem] text-left text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]">
                    {t.testimonial}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Testomonial;

type Testimonial = {
  name: string;
  company: string;
  title: string;
  testimonial: string;
  icon?: string;
};

const Testimonials: Testimonial[] = [
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/0a41b4908256ae33ebaec16d618b8d46729e071d-1333x2000.jpg?rect=90,21,1243,1279&w=320",
    name: "John Carter",
    company: "Elite Realty Solutions",
    title: "CEO",
    testimonial:
      "Dialleads has transformed the way we engage with potential homebuyers. Their AI voice assistant handles inquiries, schedules viewings, and follows up, saving us hours of manual work every day!",
  },
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/5bcec5f68836dd097bb3920ccbea1247f60e527a-2000x1333.jpg?rect=556,0,920,920&w=320",
    name: "Dr. Emily Foster",
    company: "Bright Smile Dental",
    title: "Lead Dentist",
    testimonial:
      "Dialleads has made appointment scheduling a breeze for our practice. Patients can book or reschedule 24/7 without needing to wait for office hours. It’s a game-changer.",
  },
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/cce7339ce52a8671fa319844b074b64a60b8628b-4016x6016.jpg?rect=498,753,3020,3019&w=320",
    name: "Sarah Mitchell",
    company: "TrendyCart",
    title: "E-commerce Manager",
    testimonial:
      "Our customer support efficiency has skyrocketed since integrating Dialleads. The AI assistant handles product inquiries, order tracking, and returns, providing a seamless shopping experience for our customers.",
  },
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/268fa77e9f65e2fb9562fcd521108b1131f1b33d-2000x3000.jpg?rect=421,225,1564,1618&w=320",
    name: "Michael Johnson",
    company: "SwiftCart",
    title: "Operations Manager",
    testimonial:
      "Dialleads has been a game-changer for our e-commerce business. The AI assistant handles customer inquiries, tracks orders, and even suggests products, improving our conversion rates significantly!",
  },
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/f398aaaad5cdb6ae1597a1b5c678505999a53c63-8256x5504.jpg?rect=1343,45,4996,5383&w=320",
    name: "David Reynolds",
    company: "QuickFix Home Services",
    title: "Founder",
    testimonial:
      "Thanks to Dialleads, our booking rates have doubled! The AI voice assistant schedules appointments instantly and even follows up with customers, ensuring we never miss an opportunity.",
  },
  {
    icon: "https://cdn.sanity.io/images/zhic6sia/production/e2d2b851a0c688b7d5619c08cc6357875125405a-6570x4380.jpg?rect=2979,0,3195,3370&w=320",
    name: "David Chang",
    company: "TechGears Online",
    title: "Founder",
    testimonial:
      "I’ve used Synthflow extensively since first engaging with voice AI tech about three months ago. I like their platform and how easy it is to set a voice agent and get it working. I was able to create an inbound agent that answers calls at a law firm, sets appointments, and live-transfers calls upon request.",
  },
];
