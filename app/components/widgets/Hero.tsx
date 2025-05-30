import Image from "next/image";
import H2 from "../ui/H2";
import BackgroundOverlay from "../../../public/grid.png";
import TextParagraph from "../ui/TextParagraph";
import LabelHighlighted from "../ui/LabelHighlighted";
import { CircleCheck, Mail } from "lucide-react";
import ShinyButton from "../ui/ShinyButton";
import VideoModal from "../ui/VideoModal";
import VideoThumbnail from "../../../public/videoThumb.png";
import VideoThumbnailMobile from "../../../public/videThumbMobile.png";

const Hero = () => {
  return (
    <>
      <section className="flex justify-center p-3">
        <div className="flex relative w-full flex-col  rounded-xl overflow-hidden bg-black pt-48 justify-center items-center">
          <div className="px-6 z-20 gap-8 flex flex-col items-center">
            <LabelHighlighted
              icon={
                <CircleCheck
                  strokeWidth={1.5}
                  size={18}
                  className="text-violet-500"
                />
              }
            >
              AI can now make & take calls on your behalf!
            </LabelHighlighted>
            <H2 className="text-center">
              Effortless Human-Like <br className="sm:block hidden" />
              <span className="bg-clip-text bg-transparent bg-gradient-to-r from-purple-800 to-purple-300 text-transparent">
                AI Phone Calls
              </span>
            </H2>
            <TextParagraph>
              Boost conversions with AI-powered voice agents and never miss a
              lead again.
            </TextParagraph>
            <ShinyButton className="max-[350px]:px-5">
              <Mail size={20} /> Contact Sales
            </ShinyButton>
          </div>

          <div
            style={{
              backgroundImage: `
      radial-gradient(ellipse 55% 90% at center 95%, #b188f0, #7130d6e6 30%, #183bf14d 60%, #070313),
      radial-gradient(ellipse 85% 90% at center 95%, #4c1d95b3, #4706d1b3 30%, #070313)
    `,
            }}
            className="w-full mb-3 scale-110 relative"
          >
            <div className="h-[280px] min-[350px]:h-[300px] min-[450px]:h-[380px] sm:h-[390px] md:h-[320px] lg:h-[400px]" />
            <Image
              alt="Background Overlay"
              layout="fill"
              className="z-10 pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-overlay"
              src={BackgroundOverlay}
            />
          </div>

          <VideoModal
            mobileThumb={VideoThumbnailMobile}
            thumb={VideoThumbnail}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
