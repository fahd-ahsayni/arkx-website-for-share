import { curve } from "../../assets";
import Section from "../global/Section";
import { BottomLine } from "../design/Hero";
import { useEffect, useRef, useState } from "react";
import CompanyLogos from "./CompanyLogos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "../elements/Stats";

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
    <Section className="pb-[1rem] md:-mt-[5.25rem] -mt-[8.25rem]" id="hero">
      <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff4200" />
              <stop offset={1} stopColor="#ffaa00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container relative" ref={parallaxRef}>
        <div className="relative pt-[3.5rem] z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Accompagnement, Pragmatisme, Exigence : &nbsp;Le&nbsp;Chemin Vers{" "}
            <span className="inline-block relative">
              l'Excellence{" "}
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
            Nous voulons voir notre jeunesse devenir des contributeurs actifs de
            l'industrie technologique au niveau national et international.
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
        <CompanyLogos className="mt-6" />
      </div>
      <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(60%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff4200" />
              <stop offset={1} stopColor="#ffaa00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <BottomLine />
    </Section>
  );
};

export default HeroSection;
