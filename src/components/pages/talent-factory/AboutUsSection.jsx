import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import imgArkxSection from "./assets/img02.webp";
import imgJobintechSection from "./assets/img01.webp";

const AboutUsSection = () => {
  return (
    <Section crosses>
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:container lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0">
              <div>
                <div className="mt-6">
                  <Heading title="Ark-x: Catalyst for the Digital Ecosystem" />
                  <p className="body-2 text-n-2 md:-mt-12 -mt-6">
                    Ark-x Talent Factory is more than just a training center; it
                    is a comprehensive talent development pathway. From
                    awareness to placement, including orientation, training, and
                    assessment, Ark-x Talent Factory offers a full spectrum of
                    support centered on talent. Our upskilling and reskilling
                    programs target high-demand tech careers, aiming to unlock
                    the potential of Morocco's digital economy through the
                    extensive upgrading of "job-ready" IT talents.
                  </p>
                  {/* <div className="mt-6">
                    <SimpleButton text="Get Started" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 flex items-center lg:mt-0">
              <div className="w-full relative md:right-0 -right-6">
                <img
                  className="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5"
                  src={imgArkxSection}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="lg:mx-auto lg:grid lg:container lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none  lg:px-0">
              <div>
                <div className="mt-6">
                  <Heading title="Jobintech: Driving Digital Competitiveness in Morocco" />
                  <p className="body-2 text-n-2 md:-mt-12 -mt-6">
                    JOBINTECH, supported by CDG in partnership with Maroc
                    Numeric Cluster, the Ministry of Higher Education,
                    Scientific Research, and Innovation, and the Ministry of
                    Digital Transition and Administration Reform, is a strategic
                    initiative aimed at developing Morocco's IT sector. The
                    primary goal of this initiative is to enhance Morocco's
                    digital competitiveness by introducing a large pool of
                    immediately employable talents through proven reskilling and
                    upskilling methods. This initiative provides a unique
                    opportunity for thousands of young people to enhance their
                    employability and build high-potential careers.
                  </p>
                  {/* <div className="mt-6">
                    <SimpleButton text="Get Started" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="flex items-center relative lg:m-0 lg:h-full lg:px-0 md:left-0 -left-6">
                <img
                  className="w-full shadow-xl rounded-3xl ring-1 ring-black ring-opacity-5"
                  src={imgJobintechSection}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsSection;
