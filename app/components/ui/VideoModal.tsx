"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

const VideoModal = ({
  thumb,
  mobileThumb,
  customTriger,
  className,
}: {
  thumb: StaticImageData | string;
  mobileThumb: StaticImageData | string;
  customTriger?: React.ReactNode;
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Dialog>
      {customTriger ? (
        customTriger
      ) : (
        <div className="absolute bottom-0 w-full flex justify-center">
          <div
            className={`px-5 w-fit flex flex-col items-center justify-center ${className}`}
          >
            <DialogTrigger asChild>
              <div className="flex size-28 items-center justify-center rounded-full absolute cursor-pointer scale-90 md:scale-100 hover:scale-110 transition-all bg-purple-main/20 backdrop-blur-md">
                <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-purple-main/30 to-purple-main shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                    style={{
                      filter:
                        "drop-shadow(rgba(0, 0, 0, 0.07) 0px 4px 3px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 2px 2px)",
                    }}
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>
            </DialogTrigger>
            <Image
              placeholder="blur"
              className="max-w"
              src={isMobile ? mobileThumb : thumb}
              alt="Video Thumbnail"
              width={isMobile ? 500 : 1200}
              height={isMobile ? 300 : 500}
            />
          </div>
        </div>
      )}

      <DialogContent className="p-0 w-full max-w-[85vw] px-5 sm:max-w-5xl bg-transparent border-0 shadow-none">
        <DialogTitle className="hidden" />
        <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden bg-white border border-white">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pTk5D6U4ADU?si=FI3ypSVqLG0CQH3w&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
