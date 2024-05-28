import Heading from "../../elements/Heading";
import SimpleButton from "../../elements/SimpleButton";
import Section from "../../global/Section";

const Cta = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[.25rem]"
      customPaddings
      className="py-24 sm:py-16 -mt-16 relative"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <div className="w-full flex justify-center">
            <Heading
              title="Join Our Community"
              text="Become part of our Guild where innovation meets opportunity. Connect, hire, learn, and grow with individuals passionate about tech."
            />
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <SimpleButton text="Ready to take the next step? Join us today!" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
