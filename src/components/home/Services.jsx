import Section from "../global/Section";
import Heading from "../elements/Heading";
import CardOne from "../../experience/Histoire/CardOne";
import CardTwo from "../../experience/Histoire/CardTwo";
import { Suspense } from "react";
import CardThree from "../../experience/Histoire/CardThree";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          className="md:text-center"
          title="Qui Somme-nous ?"
          text="Découvrez ARK-X, une équipe dédiée à l'épanouissement des talents jeunes en Afrique et dans le monde arabe, en ouvrant les portes des carrières technologiques de classe mondiale."
        />

        <div className="relative">
          <div className="relative bg-gradient-to-b from-n-8/0 to-n-8/90 z-5 flex items-center h-full" />
          <div className="relative bg-gradient-to-b from-n-8/20 to-n-8/90 z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[30rem]">
            <div className="absolute top-0 left-0 h-1/2 md:h-full pointer-events-none md:w-1/2 w-full z-1">
              <Suspense fallback={null}>
                <CardTwo />
              </Suspense>
            </div>

            <div className="relative z-2 max-w-[25rem] md:ml-auto mt-auto">
              <h4 className="h3 mb-4">L'équipe ARK-X</h4>
              <p className="body-2 text-n-2">
                Notre équipe est composée de professionnels passionnés, experts
                dans leurs domaines respectifs, et unis par une vision commune.
                Chaque Arkadian apporte une expertise complémentaire,
                essentielle à la réalisation de la Talent Journey.{" "}
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
                <h4 className="h3 mb-4">Notre Histoire</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  ARK-X et née d'abord de l'intention de débloquer le potentiel
                  de la jeunesse marocaine. Cette intention a trouvé son écho
                  dans l'opportunité offerte par les carrières dans nouvelles
                  technologies.
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 border border-n-1/10  bg-neutral-950/80 rounded-3xl overflow-hidden lg:min-h-[46rem] flex flex-col justify-between">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h3 mb-4">Notre Vision & Mission</h4>
                <p className="body-2 mb-[0.75rem] text-n-3">
                  Notre mission c'est de débloquer le potentiel des jeunesses
                  africaines et arabes en leur facilitant l'accès à des
                  carrières de classe mondiales dans les nouvelles technologies.
                </p>
                <p className="body-2 mb-[2rem] text-n-3">
                  Notre Vision : être un hub mondial de talents pour
                  l'innovation technologique.
                </p>
              </div>

              <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                {/* <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                /> */}
                <Suspense fallback={null}>
                  <CardThree />
                </Suspense>
              </div>
            </div>
          </div>

          {/* <Gradient /> */}
        </div>
      </div>
    </Section>
  );
};

export default Services;
