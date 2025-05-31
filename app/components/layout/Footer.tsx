import Link from "next/link";
import Logo from "../ui/Logo";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { HeaderNavsData } from "@/data/HeaderData";
import Image from "next/image";
import BackgroundOverlay from "../../../public/grid.png";
import Button from "../ui/Button";
import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="section">
        <div className="max-w-p w-full flex flex-col px-5 ">
          <div
            className="rounded-2xl relative flex-col gap-10 flex justify-center px-10 items-center py-20 text-white"
            style={{
              backgroundImage: `radial-gradient(113.28% 100% at 50% 0%, #000, #0000 69.79%), linear-gradient(180deg, #000, #5b21b6 100%, #7c3aed, #a78bfa)`,
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-center max-w-[680px] font-semibold">
              Unlock the Power of{" "}
              <span className=" bg-clip-text bg-gradient-to-b from-violet-400 to-purple-main text-transparent">
                {" "}
                AI Voice Assistants
              </span>{" "}
              for Your Business
            </h2>
            <Link href={"/"} className="z-10">
              <Button className="!px-5 !h-12">
                {" "}
                <Rocket size={18} strokeWidth={1.4} /> Ready to begin?
              </Button>
            </Link>
            <Image
              src={BackgroundOverlay}
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60 mix-blend-overlay lg:opacity-100"
              alt="Footer banner"
              layout="fill"
            />
          </div>
          <div className="w-full flex justify-between flex-wrap gap-x-10 pt-10 pb-5 border-b border-border-main mt-10">
            <div className="max-w-[384px]">
              <Logo
                mode="dark"
                className="!text-[32px]"
                lclassName="!max-w-[46px] mr-2"
              />
              <p className="app-body-4 mb-[1.5rem] mt-[12px] text-gray-600/70">
                Stay ahead with the latest in AI technology and business
                solutions.
              </p>
            </div>
            <ul className={`flex items-center gap-8 flex-wrap gap-y-2`}>
              {HeaderNavsData.map((nav, index) => (
                <React.Fragment key={nav.link || `nav-${index}`}>
                  <li
                    className={` hover:text-violet-500 transition-all text-black/90 font-medium text-lg`}
                  >
                    <Link href={nav.link}>{nav.name}</Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center gap-5 justify-between py-5 flex-wrap">
            <p>&copy; 2025 Dialleads. All rights reserved</p>
            <nav className="flex items-center gap-5 flex-wrap">
              <Link
                className="text-nowrap font-geist text-[14px] font-[300] leading-[22.4px] text-black"
                href={`/terms-conditions`}
              >
                Terms & Conditions
              </Link>
              <Link
                className="text-nowrap font-geist text-[14px] font-[300] leading-[22.4px] text-black"
                href={`/privacy-policy`}
              >
                Privacy Policy
              </Link>
            </nav>
            <ul className="flex items-center gap-5 flex-wrap">
              {SocialLinks.map((social, index) => (
                <Link href={social.href} key={`social-${index}`}>
                  <social.icon size={22} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const SocialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: RiInstagramFill,
    href: "https://instagram.com/yourprofile",
  },
  {
    name: "Facebook",
    icon: FaSquareFacebook,
    href: "https://facebook.com/yourprofile",
  },
  {
    name: "WhatsApp",
    icon: IoLogoWhatsapp,
    href: "https://wa.me/1234567890",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com/yourchannel",
  },
  {
    name: "Email",
    icon: TbMailFilled,
    href: "mailto:your@email.com",
  },
];
