import Section from "../global/Section";
import { smallSphere, stars } from "../../assets";
import Heading from "../elements/Heading";
import { LeftLine, RightLine } from "../design/Pricing";
import PressCard from "./PressCard";

const Press = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          {/* <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          /> */}
        </div>

        <Heading
          className="md:text-center "
          title="Vous nous avez peut-être aperçus dans"
        />

        <div className="relative">
          <PressCard />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Press;
