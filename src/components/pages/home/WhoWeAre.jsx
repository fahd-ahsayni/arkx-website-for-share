import { Suspense } from "react";
import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import CardOne from "../../../experience/Histoire/CardOne";
import CardTwo from "../../../experience/Histoire/CardTwo";
import CardThree from "../../../experience/Histoire/CardThree";

const WhoWeAre = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="w-full flex justify-center">
          <Heading
            className="md:text-center"
            title="Who Are We?"
            text="Discover Ark-x, a team dedicated to nurturing young talents in Africa and the Arab world by opening the doors to world-class technology careers."
          />
        </div>
        <div className="relative">
          <div className="relative bg-gradient-to-b from-n-8/0 to-n-8/90 z-5 flex items-center h-full" />
          <div className="relative bg-gradient-to-b from-n-8/20 to-n-8/90 z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[30rem]">
            <div className="absolute top-0 left-0 h-1/2 md:h-full pointer-events-none md:w-1/2 w-full z-1">
              <Suspense fallback={null}>
                <CardTwo />
              </Suspense>
            </div>

            <div className="relative z-2 max-w-[25rem] md:ml-auto mt-auto">
              <h4 className="h3 mb-4">The Ark-X Team</h4>
              <p className="body-2 text-n-2">
                Our team is made up of passionate professionals, experts in
                their respective fields, united by a common vision. Each
                Arkadian brings complementary expertise, essential to the
                realization of the Talent Journey.
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute w-full h-1/2 z-5">
                <Suspense fallback={null}>
                  <CardOne />
                </Suspense>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h3 mb-4">Our Story</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Ark-x was born from the intention to unlock the potential of
                  Moroccan youth. This intention found its echo in the
                  opportunities offered by careers in new technologies.
                </p>
              </div>
            </div>

            <div className="p-4 border border-n-1/10  bg-neutral-950/80 rounded-3xl overflow-hidden lg:min-h-[46rem] flex flex-col justify-between">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h3 mb-4">Our Vision & Mission</h4>
                <p className="body-2 mb-[0.75rem] text-n-3">
                  Our mission is to unlock the potential of African and Arab
                  youth by facilitating their access to world-class careers in
                  new technologies.
                </p>
                <p className="body-2 mb-[2rem] text-n-3">
                  Our vision is to be a global hub of talent for technological
                  innovation.
                </p>
              </div>

              <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                <Suspense fallback={null}>
                  <CardThree />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoWeAre;
