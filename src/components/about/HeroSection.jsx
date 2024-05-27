import Heading from "../elements/Heading";
import Stats from "../elements/Stats";
import Section from "../global/Section";

export default function HeroSection() {
  return (
    <Section className="pt-16 sm:pt-32 md:px-28 px-4">
      <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff4200" />
              <stop offset={1} stopColor="#ffaa00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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
          <Heading title="Ark-x Talent Factory : Catalyseur de l’Ecosystème Digital et Champion de l'Excellence Inclusive." />
          <div className="my-6 space-y-7 mb-24 body-2 text-n-2">
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                Catalyseur de l’Ecosystème Digital
              </h2>
              <p>
                Ark-x Talent Factory est bien plus qu'un centre de formation,
                c'est un parcours complet centré sur le talent, de la
                sensibilisatioon au placement en passant par l’orientation, la
                formation et l’évaluation.Notre mission est de permettre le
                développement massif de l’économie digitale marocaine par la
                mise à disposition massive de talents digitaux “job-ready”.Nous
                offrons des programmes de formation spécialisés dans une variété
                de domaines technologiques Développement web à la gestion de
                projet, en passant par Salesforce et bien d'autres.
              </p>
            </div>
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                Capability Academy
              </h2>
              <p>
                Notre approche holistique va au-delà de l'enseignement
                technique.Notre mission est de libérer le potentiel de chacun de
                nos stagiaires et de le transformer en compétences digitales
                pointues.Nous formons des individus non seulement pour des
                emplois, mais pour être capables de naviguer dans un monde VUCA
                hautement technologique.Au sein de nos Bootcamps, chaque
                stagiaire est immergé dans une expérience d'apprentissage
                pratique, sous le leadership de professionnels chevronnés du
                secteur.
              </p>
            </div>
            <div>
              <h2 className="mb-2.5 body-1 text-gray-200 font-medium tracking-wider">
                Champion National pour une Digital Nation
              </h2>
              <p>
                Notre engagement pour une “excellence inclusive” nous pousse à
                innover sans relâche pour proposer des programmes de niveau
                mondial, made in Morocco.Notre Lab d’innovation en E-learning
                situé au Technopark produit des contenus et des programmes de
                qualité internationale, accessibles au contexte marocain. Cet
                effort positionne aujourd’hui ARK-X comme un acteur clé dans la
                construction d'une génération de talents digitaux prêts à
                relever les défis de l'avenir.
              </p>
            </div>
          </div>
          <Stats />
        </div>
      </div>
      <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff4200" />
              <stop offset={1} stopColor="#ffaa00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
}
