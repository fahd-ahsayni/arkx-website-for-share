import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import { uniqueSellingProposition } from "./data";

const AboutUsSection = () => {
  return (
    <Section crosses customPaddings className="py-24 relative sm:py-24">
      <div className="mx-auto relative container px-6 lg:px-8 lg:mt-12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Exclusive access to a pool of performance based vetted tech freelancers"
            />
          </div>
          <div>
            <div className="text-base leading-7 lg:max-w-3xl lg:mt-0 -mt-16">
              <div className="max-w-2xl lg:pl-32">
                <p className="mt-4 body-2 text-n-2">
                  At Ark-x Talent Solutions, we bridge the gap between
                  exceptional tech talent and companies looking for innovative
                  solutions. Our mission is to create a seamless experience for
                  both freelancers and recruiters by providing top-notch
                  vetting, continuous follow-up, and upskilling opportunities
                  for our freelancers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {uniqueSellingProposition.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl p-6 ring-1 ring-inset ring-white/10 bg-gradient-to-br from-neutral-950 to-neutral-900/50"
              >
                <card.icon
                  className="h-7 w-5 flex-none text-color-9"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="body-1 text-gray-200">{card.name}</h3>
                  <p className="body-2 mt-1.5 text-n-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsSection;
