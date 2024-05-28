import { Suspense } from "react";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import Experience from "../../../experience/Experience";

const HowWeAre = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      className="py-24 sm:py-32"
    >
      <div className="w-1/2 h-full left-0 absolute -bottom-1/3 z-10 md:block hidden">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>
      <div className="mx-auto relative container px-6 lg:px-8 lg:mt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Exploring Ark-x: Revolutionizing Tech Talent in Morocco"
            />
          </div>
          <div>
            <div className="text-base leading-7 lg:max-w-3xl">
              <div className="max-w-xl">
                <p className="mt-4 body-2 text-n-2">
                  Ark-x Talent Solutions is a talent accelerator in new
                  technologies. We are a “100% made in Morocco” social
                  enterprise with a mission to support Moroccan youth and the
                  technology ecosystem in making the most of the 4.0 revolution.
                </p>
                <p className="mt-8 body-2 text-n-2">
                  Our services include reskilling, upskilling, matching, and
                  career management for both beginner and experienced profiles
                  across various technologies. Ark-x creates comprehensive
                  talent development programs, from awareness to placement,
                  including guidance, training, and 360° evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowWeAre;
