import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { curve } from "../../../assets";
import { BottomLine, GradientOne, GradientTwo } from "../../design/Hero";
import Stats from "../../global/Stats";
import InitiativeSupportedBy from "./InitiativeSupportedBy";
import Section from "../../global/Section";
import { FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const videoCardRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(videoCardRef.current, {
      scrollTrigger: {
        scrub: 2,
        pin: true,
      },
      scale: 1.5,
    });
  });

  return (
    <Section
      className="pb-[1rem] md:-mt-[5.25rem] -mt-[8.25rem]"
      id="hero"
    >
      <GradientOne />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative pt-[3.5rem] z-1 max-w-6xl mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Accelerate{" "}
            <span className="inline-block relative">
              10.000
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
            Careers in tech For Young Moroccans By 2027
          </h1>
          <p className="body-1 max-w-2xl mx-auto mb-6 text-n-2 lg:mb-8">
            Activating Youth Potential through Tech Skills, Strategic Matches,
            and Career Management for National and Global Industry
            Contributions. Data&nbsp;( Insertion rate, Alumnis, partners)&nbsp;.
          </p>
          <Stats />
        </div>
        <div
          ref={videoCardRef}
          className="relative group z-[30] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
        >
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient overflow-hidden">
            <div
              onClick={() => setIsMuted(!isMuted)}
              className="w-16 h-16 flex justify-center items-center rounded-full bg-n-4/50 backdrop-blur-lg absolute z-[10] bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <span className="font-medium cursor-default text-gray-100 text-sm">
                {isMuted ? (
                  <FaVolumeOff className="w-5 h-5" />
                ) : (
                  <FaVolumeHigh className="w-5 h-5" />
                )}
              </span>
            </div>
            <div
              onClick={() => setIsMuted(!isMuted)}
              className="relative group overflow-hidden bg-neutral-950 rounded-[1rem]"
            >
              <video
                autoPlay
                loop
                muted={isMuted}
                className="w-full scale-[1.7] md:scale-[1]"
              >
                <source
                  src="https://res.cloudinary.com/ddjikuikd/video/upload/v1716911596/find-my-dev_cusx1m.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/**
             * @Background
             */}
          </div>
        </div>
        <InitiativeSupportedBy className="mt-6" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default HeroSection;
