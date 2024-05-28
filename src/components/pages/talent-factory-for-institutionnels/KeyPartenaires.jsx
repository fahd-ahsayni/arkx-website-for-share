import { LeftLine, RightLine } from "../../design/LeftAndRightLine";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import {
  partenaires01,
  partenaires02,
  partenaires03,
  partenaires04,
} from "./partenaires";

const KeyPartenaires = () => {
  return (
    <Section crosses>
      <div className="w-full overflow-hidden">
        <div className="">
          <div className="w-full flex items-center justify-center">
            <Heading title="institutional partners" className="text-center" />
          </div>
          <div className="mx-auto relative flex items-center justify-center container rounded-3xl">
            <img
              src={partenaires01}
              alt=""
              className="rounded-3xl ring-4 ring-color-9"
            />
            <RightLine />
            <LeftLine />
          </div>
        </div>
        <div className="mt-14">
          <div className="w-full flex items-center justify-center">
            <Heading
              title="ESN and Local Organizations"
              className="text-center"
            />
          </div>
          <div className="mx-auto relative flex items-center justify-center container rounded-3xl">
            <img
              src={partenaires02}
              alt=""
              className="rounded-3xl ring-4 ring-color-9"
            />
            <RightLine />
            <LeftLine />
          </div>
        </div>
        <div className="mt-14">
          <div className="w-full flex items-center justify-center">
            <Heading title="IT Multinationals" className="text-center" />
          </div>
          <div className="mx-auto relative flex items-center justify-center container rounded-3xl">
            <img
              src={partenaires03}
              alt=""
              className="rounded-3xl ring-4 ring-color-9"
            />
            <RightLine />
            <LeftLine />
          </div>
        </div>
        <div className="mt-14 pb-4">
          <div className="w-full flex items-center justify-center">
            <Heading title="Startups" className="text-center" />
          </div>
          <div className="mx-auto relative flex items-center justify-center container rounded-3xl">
            <img
              src={partenaires04}
              alt=""
              className="rounded-3xl ring-4 ring-color-9"
            />
            <RightLine />
            <LeftLine />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default KeyPartenaires;
