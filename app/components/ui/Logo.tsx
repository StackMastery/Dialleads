import Image from "next/image";
import Link from "next/link";
import LogoUri from "../../../public/logo.png";

type LogoProps = {
  mode?: "light" | "dark";
  className?: string;
};

const Logo = ({ mode = "light", className = "", ...props }: LogoProps) => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image width={35} height={35} src={LogoUri} alt="Dialleads" {...props} />
      <span
        className={`text-[1.4rem] font-medium ${
          mode === "dark" ? "text-black" : "text-white"
        } ${className}`}
      >
        Dialleads
      </span>
    </Link>
  );
};

export default Logo;
