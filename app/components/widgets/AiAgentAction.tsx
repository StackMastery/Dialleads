import Image from "next/image";
import BackgroundOverlay from "../../../public/grid.png";
import { PhoneCall } from "lucide-react";
import AudioPlayer from "../ui/AudioVisualizer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AudioItems } from "@/data/AudiosData";

const AiAgentAction = () => {
  return (
    <>
      <section className="section px-5 pb-20">
        <div className="w-full rounded-3xl relative bg-real-world-gradient">
          <Image
            alt="Background Overlay"
            layout="fill"
            className="z-10 pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-overlay"
            src={BackgroundOverlay}
          />
          <div className="w-full py-20 px-5 sm:px-10 justify-center flex items-center flex-col z-30 relative">
            <label className="bg-gradient-to-r from-purple-main flex items-center gap-2 to-violet-400 px-5 py-2 rounded-full text-white">
              <PhoneCall size={20} strokeWidth={1.2} /> AI Agents In Action
            </label>
            <h3 className="mt-6 text-center font-geist text-white text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]">
              Experience AI Voice Assistants Across Industries
            </h3>
            <p className="mb-8 mt-3 max-w-[850px] px-10 text-center text-[1rem] font-normal text-white lg:mb-[3.13rem] lg:px-0 lg:text-[1.125rem]">
              Listen to how our AI Voice Assistants transform customer
              interactions for various industries
            </p>
            <Carousel className="w-full max-w-p flex justify-center">
              <CarouselContent className="w-full max-w-full">
                {AudioItems.map((audio, index) => (
                  <CarouselItem
                    className="basis-4/5 sm:basis-2/4 flex  md:basis-2/5 lg:basis-1/4"
                    key={`audi-player-${index}`}
                  >
                    <div className="bg-gradient-to-b  max-w-[300px] from-violet-600 to-purple-main rounded-3xl p-[1px]">
                      <div className=" rounded-3xl flex  h-full flex-col gap-5 pb-14 p-5 from-violet-950 bg-gradient-to-b to-[#673da9]">
                        <Image
                          width={300}
                          height={300}
                          placeholder="blur"
                          className="rounded-2xl"
                          src={audio.image}
                          alt={audio.name}
                        />
                        <div className="text-center text-white">
                          <h3 className="text-xl lg:text-2xl font-medium">
                            {audio.name}
                          </h3>
                          <p className="font-light">{audio.label}</p>
                        </div>
                        <div className="px-3">
                          <AudioPlayer src={audio.audioUrl} />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem></CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="z-30 h-3 w-12 rounded-full bg-[#8B5CF6] translate-y-10"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiAgentAction;
