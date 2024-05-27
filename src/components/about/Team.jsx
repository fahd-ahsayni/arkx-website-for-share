import { team } from "../../constants";
import Heading from "../elements/Heading";
import Section from "../global/Section";

export default function Team() {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      className="py-24 sm:py-32 -mt-16 relative"
    >
      
      <div className="mx-auto max-w-7xl py-12 px-4 text-center lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <Heading
              className="md:text-center text-start"
              title="Meet Our People"
              text="Risus velit condimentum vitae tincidunt tincidunt. Mauris
              ridiculus fusce amet urna nunc. Ut nisl ornare diam in."
            />
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full object-cover lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div>
                      <h3 className="body-2 text-n-1">{person.name}</h3>
                      <p className={`body-2 text-n-2`}>{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </Section>
  );
}
