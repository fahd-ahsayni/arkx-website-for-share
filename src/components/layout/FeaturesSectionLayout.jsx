import FeatureCard from "../elements/FeatureCard";
import Heading from "../elements/Heading";

const FeaturesSectionLayout = ({ data, title, text, children, tag }) => (
  <section>
    <div className="container mx-auto flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-start items-start max-w-7xl mx-auto flex-col">
        <p className="body-1 font-semibold text-color-9 capitalize">{tag}</p>
        <Heading title={title} />
        <p className="body-2 text-n-2 md:pr-8 md:-mt-12 -mt-4">{text}</p>
        {children}
      </div>

      <div className="flex-1 rounded-3xl flex md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        {data.map(({ name, description, icon, iconBackground }, index) => (
          <FeatureCard
            key={index}
            name={name}
            description={description}
            iconBackground={iconBackground}
            Icon={icon}
            index={index}
            length={data.length}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSectionLayout;
