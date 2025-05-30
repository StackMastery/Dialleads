"use client";

import { HeaderNavsData } from "@/data/HeaderData";
import Logo from "../ui/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [windowScrolled, setWindowScrolled] = useState(false);
  const [scrollingBack, setScrollingBack] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navOpened, setnavOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;

      setWindowScrolled(currentScrollY > 0);
      setScrollingBack(!scrollDown);

      const bottomReached =
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 2;
      if (bottomReached) {
        setScrollingBack(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`section w-full fixed top-0 p-5 transition-all duration-300 ${
        windowScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-p flex w-full justify-between items-center">
        <Logo mode={windowScrolled ? "dark" : "light"} />
        <HeaderNavs navOpened={navOpened} windowScrolled={windowScrolled} />
        <div className="flex items-center gap-2">
          <HeaderContactBtn className="lg:block hidden" />
          <span className="lg:hidden">
            <Hamburger
              color={windowScrolled ? "black" : "white"}
              rounded={true}
              onToggle={(toggled) => {
                if (toggled) {
                  setnavOpened(true);
                } else {
                  setnavOpened(false);
                }
              }}
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

const HeaderNavs = ({
  windowScrolled,
  navOpened,
}: {
  windowScrolled: boolean;
  navOpened: boolean;
}) => {
  return (
    <nav
      className={`absolute w-full lg:w-fit lg:static left-0 top-15  lg:block ${
        !windowScrolled && "px-5 mt-5 lg:mt-0"
      } ${navOpened ? "block" : "hidden"}`}
    >
      <ul
        className={`flex flex-col justify-start items-start gap-5 lg:items-center lg:gap-10 bg-white p-8 ${
          windowScrolled ? "rounded-none" : "rounded-xl "
        } lg:bg-transparent lg:flex-row lg:p-0`}
      >
        {HeaderNavsData.map((nav, index) => (
          <React.Fragment key={nav.link || `nav-${index}`}>
            <li
              className={` hover:text-violet-500 transition-all text-black/90  ${
                windowScrolled ? "text-black/80" : "lg:text-white/80"
              }`}
            >
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          </React.Fragment>
        ))}
        <HeaderContactBtn className="lg:hidden" />
      </ul>
    </nav>
  );
};

export const HeaderContactBtn = ({ className = "" }) => {
  return (
    <Link className={className} href={"/contact"}>
      <Button>Contact us</Button>
    </Link>
  );
};
