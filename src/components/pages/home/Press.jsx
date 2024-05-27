import { LeftLine, RightLine } from "../../design/LeftAndRightLine";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import PressCard from "./PressCard";

const Press = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative justify-center lg:flex">
          <Heading
            className="md:text-center "
            title="You may have seen us in"
          />
        </div>

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
