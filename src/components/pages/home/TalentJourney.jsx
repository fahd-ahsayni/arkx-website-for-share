import { talentJourney } from "../../../constants";
import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import Card from "../../elements/Card";

const TalentJourney = () => {
  return (
    <Section crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
      <div className="container relative z-2 pb-8">
        <div className="w-full flex items-start justify-center lg:pt-52 pt-16">
          <Heading
            className="md:max-w-md lg:max-w-2xl md:text-center"
            title="Talent Journey of Ark-x Talent Factory"
            text="The Talent Journey of Ark-x Talent Factory is a comprehensive program that supports young talents in entering the digital sector. It is structured around six stages."
          />
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {talentJourney.map(({ backgroundUrl, title, iconUrl, text, id }) => (
            <Card
              background={backgroundUrl}
              title={title}
              text={text}
              key={id}
              iconImg={iconUrl}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TalentJourney;
