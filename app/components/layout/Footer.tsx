import Link from "next/link";
import Logo from "../ui/Logo";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { HeaderNavsData } from "@/data/HeaderData";

const Footer = () => {
  return (
    <>
      <footer className="section">
        <div className="max-w-p w-full flex flex-col px-5 ">
          <div className="w-full flex justify-between flex-wrap gap-x-10 pt-10 pb-5 border-b border-border-main">
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
