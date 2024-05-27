import Card from "../elements/Card";
import Heading from "../elements/Heading";
import Section from "./Section";

const Cards = ({ data, title }) => {
  return (
    <Section crosses className="py-2 sm:py-32 relative">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <Heading title={title} />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {data.map(
              ({ backgroundUrl, description, icon, iconBackground, name }) => (
                <Card
                  key={name}
                  title={name}
                  text={description}
                  Icon={icon}
                  background={backgroundUrl}
                  iconBackground={iconBackground}
                />
              )
            )}
          </dl>
        </div>
      </div>
    </Section>
  );
};

export default Cards;
