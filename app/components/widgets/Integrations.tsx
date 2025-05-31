import { ArrowUpRight, GitFork } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import Link from "next/link";
import Button from "../ui/Button";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Integrations = () => {
  return (
    <>
      <section className="section pb-20">
        <div className="max-w-p w-full flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-between px-5 -space-y-10 md:space-y-0 gap-x-10">
            <div className="space-y-5 md:max-w-[537px]">
              <SectionLabel icon={<GitFork strokeWidth={1.4} />}>
                Integrations
              </SectionLabel>
              <h3 className="!text-black text-3xl md:text-4xl mt-2 font-semibold">
                Connect to Your Tech Stack and CRM
              </h3>
            </div>
            <div className="max-w-[690px] space-y-5 pt-16 text-gray-600">
              <p className="text-xl">
                Seamlessly connect to your current tools and simplify client
                management, follow-ups, and lead conversion. Boost your
                productivity, save time, and close more deals effortlessly!
              </p>
              <Link href={"/"}>
                <Button className="rounded-md">
                  Get Started <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
          <Marquee className="pt-10 overflow-hidden max-w-[1220px] w-full">
            {IntegrationsImg.map((logo, index) => (
              <div key={`in-${index}`} className="mx-10">
                <Image
                  width={200}
                  height={70}
                  className="w-full max-h-[80px]"
                  src={logo}
                  alt="Integrations logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Integrations;

const IntegrationsImg: string[] = [
  "https://cdn.sanity.io/images/zhic6sia/production/afdb18ac1bf366382ca8e1ae377a7187253b5cbe-153x41.png?w=153",
  "https://cdn.sanity.io/images/zhic6sia/production/e7e74a72c12d16cd3e894ced6df161f2c3f70621-160x41.png?w=160",
  "https://cdn.sanity.io/images/zhic6sia/production/1363576bf1c21356bfc41c6eaf9b757827bd7b03-179x41.png?w=179",
  "https://cdn.sanity.io/images/zhic6sia/production/f22bae8af7d9ee596d7aa5d8ac078a06cd413dfd-151x41.png?w=151",
  "https://cdn.sanity.io/images/zhic6sia/production/163cde55a92ced4705321897682a6176faf16461-178x41.png?w=178",
  "https://cdn.sanity.io/images/zhic6sia/production/549d60918a0afd0ebb03253456cc7149b8ffcf3a-182x41.png?w=182",
];
