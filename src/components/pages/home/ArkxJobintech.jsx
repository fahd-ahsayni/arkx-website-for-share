import { Link } from "react-router-dom";
import { img01, img02, img03, img04, img05 } from "../../../assets";
import { GradientThree } from "../../design/Hero";
import Heading from "../../elements/Heading";
import SimpleButton from "../../elements/SimpleButton";
import Section from "../../global/Section";

const ArkxJobintech = () => {
  return (
    <Section crosses>
      <div className="relative isolate">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <GradientThree className="from-green-500 to-green-600" />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <Heading
                  className="md:max-w-md lg:max-w-2xl"
                  title="We are participating in the national reskilling effort"
                />
                <p className="mt-6 body-2 text-n-2">
                  JobInTech, supported by the CDG in partnership with Maroc
                  Numeric Cluster, the Ministry of Higher Education, Scientific
                  Research and Innovation, and the Ministry of Digital
                  Transition and Administrative Reform, is a strategic
                  initiative for the development of the IT sector in Morocco.
                </p>
                <p className="mt-3 body-2 text-n-2">
                  This initiative aims to significantly enhance Morocco's
                  digital competitiveness by introducing a large pool of
                  immediately employable talents to the market through proven
                  methods of reskilling and upskilling.
                </p>
                <p className="mt-3 body-2 text-n-2">
                  In doing so, JobInTech offers a unique opportunity for
                  thousands of young people to develop their employability and
                  build high-potential careers.
                </p>

                <Link
                  to="/talent-factory-for-institutionnels"
                  className="inline-flex mt-8 body-2 rounded-md border border-transparent bg-gradient-to-br from-green-700 to-lime-500 bg-origin-border px-4 py-2 text-white uppercase"
                >
                  Keep exploring
                </Link>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src={img01}
                      alt=""
                      className="aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src={img02}
                      alt=""
                      className="aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={img03}
                      alt=""
                      className="aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src={img04}
                      alt=""
                      className="aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={img05}
                      alt=""
                      className="aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ArkxJobintech;
