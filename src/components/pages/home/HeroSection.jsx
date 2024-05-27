import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { curve } from "../../../assets";
import { BottomLine, GradientOne, GradientTwo } from "../../design/Hero";
import Stats from "../../global/Stats";
import InitiativeSupportedBy from "./InitiativeSupportedBy";
import Section from "../../global/Section";

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const cursorRef = useRef(null);
  const videoCardRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.x - 480,
        y: e.y + 60,
        duration: 1,
        ease: "back.out",
      });
    };

    document.documentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.documentElement.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

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
      className="pb-[1rem] pt-24 md:-mt-[5.25rem] -mt-[8.25rem]"
      id="hero"
    >
      <GradientOne />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative pt-[3.5rem] z-1 max-w-6xl mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Guidance, Pragmatism, Discipline &nbsp;The&nbsp; Path to{" "}
            <span className="inline-block relative">
              Excellence
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We want to see our youth become active contributors to the tech
            industry at both national and international levels.
          </p>
          <Stats />
        </div>
        <div
          ref={videoCardRef}
          className="relative z-[30] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
        >
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient overflow-hidden">
            <div
              ref={cursorRef}
              onClick={() => setIsMuted(!isMuted)}
              className="w-16 h-16 flex justify-center items-center rounded-full bg-n-4/50 backdrop-blur-lg absolute -top-1/2 z-[10]"
            >
              <span className="font-medium cursor-default text-gray-100 text-sm">
                {isMuted ? "Muted" : "Sound"}
              </span>
            </div>
            <div
              onClick={() => setIsMuted(!isMuted)}
              className="relative overflow-hidden bg-neutral-950 rounded-[1rem]"
            >
              <video
                autoPlay
                loop
                muted={isMuted}
                className="w-full scale-[1.7] md:scale-[1]"
              >
                <source
                  src="https://dl.dropboxusercontent.com/scl/fi/yp9s1t1xvzizrrwediofh/0516-1.mp4?rlkey=muftbt8yvkjjb3z479k83ma9a&st=6y5gqna9&dl=0"
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
      <GradientTwo />
      <BottomLine />
    </Section>
  );
};

export default HeroSection;
