import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import { grid } from "../../../assets";
import { howItWorks } from "./data";
import { LeftLine, RightLine } from "../../design/LeftAndRightLine";

const HowItWorks = () => (
  <Section crosses>
    <div className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading title="What we’re working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 ">
          {howItWorks.map((item) => {
            return (
              <div
                className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-3xl ring-1 ring-n-2/20"
                key={item.id}
              >
                <div className="relative p-8 bg-gradient-to-br from-neutral-950 to-neutral-900/50 w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative flex flex-col z-1">
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-2">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <RightLine className="translate-y-6" />
          <LeftLine className="-translate-y-1/2" />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20"></div>
      </div>
    </div>
  </Section>
);

export default HowItWorks;
