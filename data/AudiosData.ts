import { StaticImageData } from "next/image";
import A1 from "../public/audios/1.png";
import A2 from "../public/audios/2.png";
import A3 from "../public/audios/3.png";
import A4 from "../public/audios/4.png";

type AudioItem = {
  image: StaticImageData;
  name: string;
  label: string;
  audioUrl: string;
};

export const AudioItems: AudioItem[] = [
  {
    image: A1,
    name: "Lead Generation",
    label: "Sophie, AI Assistant",
    audioUrl: "https://ik.imagekit.io/1xu2irsp6/1.mp3?updatedAt=1748675013418",
  },
  {
    image: A2,
    name: "Appointment Booking",
    label: "Shipon, AI Assistant",
    audioUrl: "https://ik.imagekit.io/1xu2irsp6/3.mp3?updatedAt=1748675013408",
  },
  {
    image: A3,
    name: "Receiving Order",
    label: "Roji, AI Assistant",
    audioUrl: "https://ik.imagekit.io/1xu2irsp6/2.mp3?updatedAt=1748675013248",
  },
  {
    image: A4,
    name: "Customer Support",
    label: "Lisa, AI Assistant",
    audioUrl: "https://ik.imagekit.io/1xu2irsp6/2.mp3?updatedAt=1748675013248",
  },
];
