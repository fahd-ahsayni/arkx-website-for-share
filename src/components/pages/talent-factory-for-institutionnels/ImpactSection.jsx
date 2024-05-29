import { Link } from "react-router-dom";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import Stats from "../../global/Stats";

const ImpactSection = () => {
  return (
    <Section crosses>
      <div className="overflow-hidden z-2 relative">
        <div className="mx-auto container md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-5 lg:items-start">
            <div className="lg:pt-4 lg:pr-4 lg:col-span-3">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <Heading title="Emergence of Digital Morocco, talents at the heart of the challenges." />
                <p className="py-2 body-2 text-n-2 lg:-mt-12 -mt-6">
                  The training of 'job-ready' tech talents is at the heart of
                  Morocco's development as a Digital Nation, a consensus
                  observation. In this sector, which lies at the core of the 4.0
                  revolution (technological disruptions, changes in work
                  patterns, global competition...), how can Morocco 'stay in the
                  race,' or even excel? Our roundtable discusses the responses
                  provided by the ecosystem to this question, emphasizing the
                  agility, efficiency, and constant innovation of 'Bootcamps'
                  approaches.
                </p>
                <div className="mt-12">
                  <a
                    target="_blank"
                    href="/form/hire-talents"
                    className="inline-flex mt-8 body-2 rounded-md border border-transparent bg-gradient-to-br from-color-9 to-[#ff8000] bg-origin-border px-4 py-2 text-white uppercase"
                  >
                    Keep exploring
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-2 z-1 p-2 rounded-2xl bg-conic-gradien overflow-hidden">
              <video
                autoPlay
                loop
                muted
                className="w-full rounded-2xl scale-[1.7] md:scale-[1]"
              >
                <source
                  src="https://res.cloudinary.com/ddjikuikd/video/upload/v1716911596/find-my-dev_cusx1m.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="mt-12">
                <Stats index={1} justifyStart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ImpactSection;
