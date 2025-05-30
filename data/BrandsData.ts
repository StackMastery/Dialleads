import { StaticImageData } from "next/image";
import Im1 from "../public/brands/1.png";
import Im2 from "../public/brands/2.png";
import Im3 from "../public/brands/3.png";
import Im4 from "../public/brands/4.png";

export const BrandsData: { name: string; url: StaticImageData }[] = [
  {
    name: "Tech Marvels",
    url: Im1,
  },
  {
    name: "Horizon",
    url: Im2,
  },
  {
    name: "Edistys",
    url: Im3,
  },
  {
    name: "Gt sales",
    url: Im4,
  },
];
