import { LeftLine, RightLine } from "../../design/LeftAndRightLine";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import { outcomes } from "./data";
import outcomesImage from "./assets/image01.webp";

const Outcomes = () => {
  return (
    <Section crosses>
      <div className="overflow-x-hidden">
        <div className="mx-auto relative container sm:px-0">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-950 to-neutral-900/50 border border-n-2/10 py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <Heading title="Proven Outcomes that Drive Success and Economic Growth" />
              </div>
              <img
                src={outcomesImage}
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-2 lg:max-w-md">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {outcomes.map((feature) => (
                    <div key={feature.name} className="flex flex-row justify-start items-start">
                      <div className="rounded-full pt-1.5 mr-2.5 flex justify-center items-center bg-dimBlue">
                        <div
                          className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-color-9 to-[#ff8000] rounded-full"
                        >
                          <feature.icon
                            className="h-6 w-6 text-neutral-900"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col ml-3">
                        <h4 className="body-1 text-gray-200">{feature.name}</h4>
                        <p className="body-2 text-n-2">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <RightLine />
          <LeftLine />
        </div>
      </div>
    </Section>
  );
};

export default Outcomes;
