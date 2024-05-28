import Heading from "../../elements/Heading";
import Section from "../../global/Section";

const CapabilityAcademy = () => {
  return (
    <Section className="py-24 sm:py-32">
      <div className="mx-auto relative container px-6 lg:px-8 lg:mt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Ark-x: Shaping Tech Leaders of the Future"
            />
          </div>
          <div>
            <div className="text-base leading-7 lg:max-w-3xl">
              <div className="max-w-xl">
                <p className="mt-4 body-2 text-n-2">
                  Our talent development approach is holistic and goes well
                  beyond technical education. We accompany our talents not only
                  to seize immediate opportunities but above all to be able to
                  navigate in a highly technological, uncertain, and rapidly
                  changing future. This ambition has led us to contextualize
                  support approaches to global standards, integrating technology
                  as an essential component of our performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CapabilityAcademy;
