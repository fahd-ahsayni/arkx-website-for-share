import { leaders } from "../../../constants";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";

const Team = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[.25rem]"
      customPaddings
      className="pb-4 pt-24"
    >
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl flex justify-center">
            <Heading
              title="Meet our leadership"
              text="Our leadership team brings together a wealth of experience and expertise, dedicated to guiding our company towards success with a clear vision and strategic direction."
            />
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {leaders.map((person, key) => (
              <li key={key}>
                <div className="space-y-6">
                  <div className="mx-auto overflow-hidden p-4 border border-n-2/20 bg-neutral-950 h-40 w-40 rounded-full xl:h-56 xl:w-56">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={person.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1 body-1">
                      <h3>{person.name}</h3>
                      <p className="body-2 text-n-2">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      {/**
                       * @social_media
                       */}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Team;
