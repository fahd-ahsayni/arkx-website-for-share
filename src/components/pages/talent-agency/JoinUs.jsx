import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import { CheckIcon } from "@heroicons/react/24/solid";
import { joinUs } from "./data";

const JoinUs = () => {
  return (
    <Section crosses>
      <div className="relative overflow-hidden pb-80">
        <div className="relative mx-auto max-w-7xl px-6 md:text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl flex md:justify-center">
            <Heading
              title="Join Us"
              text="Why Wait? Unlock your potential and drive your success. Join our community today and take the first step towards a brighter future."
            />
          </div>
        </div>
      </div>
      <div className="flow-root">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
              {joinUs.map((item, key) => (
                <div
                  key={key}
                  className="flex flex-col rounded-3xl bg-gradient-to-br from-neutral-950 to-neutral-900/50 shadow-xl ring-1 ring-n-2/20 hover:ring-n-2/40 transition-all duration-150"
                >
                  <div className="p-8 sm:p-10">
                    <h3 className="h4">{item.name}</h3>
                    <p className="mt-6 body-2 text-n-2">{item.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-neutral-900 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-[#ff8000]"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 body-2 text-gray-200">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href={item.href}
                          className="inline-block w-full rounded-lg bg-gradient-to-br from-color-9 to-[#ff8000] px-4 py-2.5 text-center body-2 uppercase leading-5 text-white shadow-md hover:bg-indigo-700"
                        >
                          Join the Waitlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default JoinUs;
