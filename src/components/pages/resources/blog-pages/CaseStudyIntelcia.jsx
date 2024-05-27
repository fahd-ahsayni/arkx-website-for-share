import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { ScrollParallax } from "react-just-parallax";
import img01 from "../assets/images/case-study-intelcia/img-01.png";
import img02 from "../assets/images/case-study-intelcia/img-02.png";
import dIntelcia from "../assets/images/case-study-intelcia/di.png";
import Section from "../../../global/Section";
import Heading from "../../../elements/Heading";
import { GradientThree } from "../../../design/Hero";
import Footer from "../../../global/Footer";

const CaseStudyIntelcia = () => {
  return (
    <>
      <Section className="">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
            aria-hidden="true"
          >
            <GradientThree className="from-fuchsia-600 to-violet-800" />
          </div>
          <div className="mx-auto container px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-lg font-semibold font-mono leading-8 tracking-wider text-color-9">
                CASE STUDY{" "}
              </p>
              <Heading title="Accelerated Onboarding: Transforming Future Talents in Just 6 Weeks!" />
              <p className="body-1 text-gray-200">
                Intelcia is a Moroccancompany that specializes inbusinessprocess
                outsourcing(BPO) andcustomer relationshipmanagement (CRM)
                services. Itoffers a rangeof services, includingcustomer
                support, technical support, sales, andotherback-office
                functions, to businesses andorganizations lookingtooutsource
                theseoperations.
              </p>
            </div>
            <div className="mx-auto prose mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
              <div className="relative lg:order-last lg:col-span-5">
                <ScrollParallax>
                  <figure className="px-8 py-4 bg-gradient-to-br from-neutral-950 to-neutral-900/50 backdrop-blur-sm border border-n-2/20 rounded-3xl">
                    <p className="body-2 text-n-2 pt-4">
                      “In a very competitive IT sector, you have to be
                      innovative to have the right skills. The 'onboarding
                      accelerator' program allowed us to Upskill and support our
                      talents so that they are operational and productive as
                      soon as they are integrated into client projects. And it
                      is a real alternative to classic sourcing solutions for
                      specialized profiles.”
                    </p>
                    <figcaption className="mt-8 flex gap-x-4">
                      <img
                        src={dIntelcia}
                        alt=""
                        className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <div className="body-1 text-gray-100">
                          Ghali Moussaoui
                        </div>
                        <div className="text-color-9">
                          Directeur SI Telecom, INTELCIA ITS
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </ScrollParallax>
              </div>
              <div className="max-w-xl body-2 leading-7 text-n-2 lg:col-span-7">
                <h2 className="text-gray-200">Challenge</h2>
                <p>
                  Intelcia ITS required an accelerated onboarding solution for a
                  cohort of Full-Stack Angular & JAVA Engineers to make them
                  job-ready in just 6 weeks, a significant reduction from the
                  traditional onboarding timeline.
                </p>
                <h2 className="text-gray-200">Solutions</h2>
                <p>
                  Ark-x Talent Factory, in collaboration with Intelcia ITS,
                  designed a highly innovative 6-week bootcamp program tailored
                  to their unique needs.
                </p>
                <h2 className="text-gray-200">Our Solutions</h2>

                <ul
                  role="list"
                  className="mt-8 max-w-xl space-y-8 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-color-9"
                      aria-hidden="true"
                    />
                    <span className="body-2 text-n-2">
                      <strong className="text-gray-200">
                        Customized Real-World Project:
                      </strong>{" "}
                      Participants were immersed in a real-world project led by
                      a senior team lead. This practical experience allowed them
                      to apply their skills and gain confidence.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-color-9"
                      aria-hidden="true"
                    />
                    <span className="body-2 text-n-2">
                      <strong className="text-gray-200">
                        Power Skills and AGILE Methodologies:
                      </strong>{" "}
                      In addition to technical knowledge, the program included
                      sequences on power skills and AGILE methodologies.
                      Participants developed a holistic skill set.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-color-9"
                      aria-hidden="true"
                    />
                    <span className="body-2 text-n-2">
                      <strong className="text-gray-200">
                        Ark-x Talent Factory’s Secret Sauce:
                      </strong>{" "}
                      Leveraging ARK-X's unique approach, participants were
                      nurtured to become wellrounded professionals ready to
                      excel in their roles.
                    </span>
                  </li>
                </ul>
                <h2 className="text-gray-200">Outcome</h2>
                <p>
                  The dedicated participants put in 50 hours of hard work each
                  week and successfully completed the program. Most of them
                  seamlessly transitioned into their consulting roles,
                  showcasing their capabilities and readiness.
                </p>
                <h2 className="text-gray-200">Continued Success</h2>
                <p>
                  The Onboarding Accelerator Bootcamp model developed in
                  collaboration with Intelcia ITS is now available to all ARK-X
                  partners, covering various tech stacks. The program is running
                  its second cohort, promising to revolutionize onboarding for
                  future tech talents.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto md:pb-72 pt-20 md:gap-x-52 gap-y-20 md:h-96  grid md:grid-cols-2 grid-cols-1">
            <img
              src={img01}
              alt=""
              className="h-full w-full rotate-3 rounded-3xl shadow-2xl"
            />
            <img
              src={img02}
              alt=""
              className="h-full w-full -rotate-3 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default CaseStudyIntelcia;
