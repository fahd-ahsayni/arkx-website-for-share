import Heading from "../elements/Heading";
import SimpleButton from "../elements/SimpleButton";
import Section from "../global/Section";

export default function Cta() {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[.25rem]"
      customPaddings
      className="py-24 sm:py-32 -mt-16 relative"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <Heading
            title="Boost your productivity today."
            text="Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea."
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SimpleButton className="bg-white text-neutral-900" text="Get started" />
          </div>
        </div>
      </div>
    </Section>
  );
}
