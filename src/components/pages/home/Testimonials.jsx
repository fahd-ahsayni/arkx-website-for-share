import { feedback } from "../../../constants";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import FeedbackCard from "../../elements/FeedbackCard";

const Testimonials = () => {
  return (
    <Section className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-[90%]">
        <div className="md:text-center w-full lg:flex justify-center">
          <Heading title="Inspiring Testimonials" />
        </div>
        <div className="w-full flex items-center justify-center md:pl-8">
          <div className="mx-auto grid md:gap-2 lg:max-w-none lg:grid-cols-3 grid-cols-1">
            {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="flex mt-8 justify-center items-center space-x-8">
          <a
            target="_blank"
            href="/form/hire-talents"
            className="inline-flex items-center rounded px-4 py-2 shadow-sm focus:outline-none body-1 uppercase text-sm tracking-wide bg-gradient-to-br from-color-9 to-[#ff8000] border border-n-2/30"
          >
            Embark with us
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
