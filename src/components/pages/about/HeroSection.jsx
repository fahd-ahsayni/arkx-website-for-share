import { GradientOne, GradientTwo } from "../../design/Hero";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";
import Stats from "../../global/Stats";

export default function HeroSection() {
  return (
    <Section className="pt-16 sm:pt-32 md:px-28 px-4">
      <GradientOne />
      <div className="grid md:mt-24 grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none mx-auto">
            <img
              src="/planet-06.webp"
              alt=""
              className="aspect-square rotate-3 rounded-2xl object-cover md:scale-75"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <Heading title="Ark-x Talent Factory: Catalyst of the Digital Ecosystem and Champion of Inclusive Excellence." />
          <div className="my-6 space-y-7 mb-24 body-2 text-n-2">
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                Catalyst of the Digital Ecosystem
              </h2>
              <p>
                Ark-x Talent Factory is more than just a training center; it is
                a complete journey centered on talent, from awareness to
                placement, including guidance, training, and evaluation. Our
                mission is to enable the massive development of the Moroccan
                digital economy by providing a large pool of “job-ready” digital
                talents. We offer specialized training programs in various
                technological fields, from web development to project
                management, including Salesforce and many others.
              </p>
            </div>
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                Capability Academy
              </h2>
              <p>
                Our holistic approach goes beyond technical education. Our
                mission is to unlock the potential of each of our trainees and
                transform it into advanced digital skills. We train individuals
                not just for jobs, but to navigate a highly technological VUCA
                world. In our Bootcamps, each trainee is immersed in a hands-on
                learning experience, led by seasoned industry professionals.
              </p>
            </div>
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                National Champion for a Digital Nation
              </h2>
              <p>
                Our commitment to “inclusive excellence” drives us to
                relentlessly innovate and offer world-class programs, made in
                Morocco. Our E-learning Innovation Lab located at Technopark
                produces international-quality content and programs accessible
                to the Moroccan context. This effort positions ARK-X today as a
                key player in building a generation of digital talents ready to
                face the challenges of the future.
              </p>
            </div>
          </div>
          <Stats />
        </div>
      </div>
      <GradientTwo />
    </Section>
  );
}
