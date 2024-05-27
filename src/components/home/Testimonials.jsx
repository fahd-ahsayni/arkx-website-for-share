import { feedback } from "../../constants";
import FeedbackCard from "../elements/FeedbackCard";
import Heading from "../elements/Heading";
import Section from "../global/Section";

export default function Example() {
  return (
    <Section className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <Heading title="Des Témoignages inspirants" />
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
}
