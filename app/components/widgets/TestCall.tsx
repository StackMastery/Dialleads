import { Mail, PhoneCall, Star, UserRound } from "lucide-react";
import TestCallBg from "../../../public/testCallbg.png";
import H2 from "../ui/H2";
import TextParagraph from "../ui/TextParagraph";
import Input, { PhoneInput } from "../ui/Input";
import Button from "../ui/Button";

const TestCall = () => {
  return (
    <>
      <section className="section pb-20 pt-10">
        <div className="max-w-p w-full px-5">
          <div
            style={{
              backgroundImage: `linear-gradient(98deg,#200b46,#1a0939)`,
            }}
            className=" w-full rounded-4xl overflow-hidden"
          >
            <div
              className="w-full px-10 space-y-5 py-10 bg-cover"
              style={{ backgroundImage: `url(${TestCallBg.src})` }}
            >
              <div className="flex items-center gap-2 px-5 py-[6px] rounded-full overflow-hidden bg-white/40 text-white border border-violet-600/50 w-fit">
                <Star className="text-violet-700/60" size={18} /> Try Our Agent
              </div>
              <H2 className="!text-5xl !font-semibold">
                Try A{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-violet-400">
                  Free Test Call
                </span>
              </H2>
              <TextParagraph className="text-start max-w-full leading-5 -mt-1">
                For businesses needing top performance, scalability, and
                support.
              </TextParagraph>
              <form className=" gap-5 w-full pt-3 grid grid-cols-12">
                <Input icon={<UserRound size={22} />} placeholder="Your name" />
                <Input icon={<Mail size={20} />} placeholder="Your email" />
                <PhoneInput
                  icon={<UserRound />}
                  defaultValue={"1"}
                  placeholder="Your phone number"
                />
                <Button className="w-full col-span-12 lg:col-span-3 h-14 text-xl">
                  <PhoneCall /> Call me now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestCall;
