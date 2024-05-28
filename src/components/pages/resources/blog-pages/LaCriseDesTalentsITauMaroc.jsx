import Heading from "../../../elements/Heading";
import Footer from "../../../global/Footer";
import Section from "../../../global/Section";
import image01 from "../assets/images/image01.png";

const LaCriseDesTalentsITauMaroc = () => {
  return (
    <>
      <Section>
        <div className="relative overflow-hidden py-16">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <span>
                <span className="block font-mono text-center text-lg text-color-9">
                  Blog
                </span>
                <Heading
                  title="La crise des talents IT au Maroc : Comment la tragédie des biens communs permet de mieux comprendre ?"
                  className="text-center"
                />
              </span>
            </div>
            <div className="prose body-2 prose-lg prose-neutral text-n-2 mx-auto mt-6">
              <h2 className="text-gray-100">
                Qu'est-ce que la Tragédie des Bien Communs ?
              </h2>
              <figure>
                <img
                  class="w-full rounded-lg"
                  src={image01}
                  alt=""
                  width="1310"
                  height="873"
                />
                <figcaption>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <p>
                <blockquote className="text-n-2">
                  La Tragédie des Bien Communs est un concept introduit par
                  Garrett Hardin en 1968. Il illustre la surutilisation
                  destructrice de ressources partagées utilisées
                  individuellement sans régulation. 😉 Ça ne vous rappelle rien
                  ? Les Talents IT !
                </blockquote>
              </p>
              <p>
                Ce phénomène s'applique également au marché du travail, où le
                talent, en tant que ressource, risque d'être mal géré sans une
                stratégie de collaboration efficace. Le secteur des technologies
                de l'information au Maroc est en pleine expansion, reflétant une
                tendance mondiale vers la digitalisation. Avec une croissance
                annuelle de plus de 10% dans le secteur des technologies de
                l'information et de la communication (TIC), le Maroc se
                positionne comme un hub technologique clé en Afrique. Cependant,
                cette croissance rapide présente des défis uniques en matière de
                gestion des talents.
              </p>

              <h2 className="text-gray-100">
                Adaptation des Principes d'Elinor Ostrom au Marché des Talents
                IT au Maroc
              </h2>

              <h3 className="text-gray-200">
                Frontières clairement définies 📏
              </h3>
              <p>
                Il est crucial d'identifier et de sélectionner les talents en
                fonction des besoins spécifiques de l'industrie IT marocaine,
                qui devrait employer plus de 100 000 spécialistes d'ici 2025.
              </p>

              <h3 className="text-gray-200">
                Adéquation avec les conditions locales 🔄
              </h3>
              <p>
                Il est nécessaire de personnaliser les formations pour répondre
                aux demandes spécifiques des entreprises locales, tout en
                considérant que le secteur des TIC au Maroc représente environ
                7% du PIB national.
              </p>

              <h3 className="text-gray-200">Participation collective 🤝</h3>
              <p>
                Les acteurs du secteur doivent être impliqués dans la création
                de programmes adaptés. Actuellement, plus de 50% des entreprises
                IT au Maroc expriment des difficultés à trouver des candidats
                avec les compétences adéquates.
              </p>

              <h3 className="text-gray-200">
                Surveillance et responsabilité 👀
              </h3>
              <p>
                Il est important de suivre l'intégration des talents formés pour
                mesurer l'efficacité des programmes de formation, notamment dans
                un contexte où 30% des diplômés en TIC peinent à trouver un
                emploi dans leur domaine dans l'année suivant leur diplomation.
              </p>

              <h3 className="text-gray-200">Résolution de conflits 🕊️</h3>
              <p>
                Établir des processus rapides pour ajuster la formation et
                l'intégration des talents en réponse aux retours des entreprises
                est essentiel. Les entreprises réclament une meilleure
                adéquation des compétences avec les besoins du marché.
              </p>

              <h3 className="text-gray-200">
                Reconnaissance des droits organisationnels ✊
              </h3>
              <p>
                Soutenir les initiatives de formation internes des entreprises,
                encouragées par des politiques publiques visant à renforcer
                l'innovation et la compétitivité dans le secteur IT.
              </p>

              <h3 className="text-gray-200">Gestion multi-niveaux 🌐</h3>
              <p>
                Aligner les efforts locaux avec des objectifs globaux pour
                maximiser l'impact des talents marocains sur la scène
                internationale est crucial. Actuellement, les exportations de
                services IT représentent 10% des exportations totales de
                services du Maroc.
              </p>

              <p>
                En adoptant une approche basée sur la collaboration et
                l'échange, nous pouvons transformer la gestion des talents IT au
                Maroc pour mieux répondre aux défis de la digitalisation tout en
                évitant la "tragédie des biens communs". Cette nouvelle méthode
                de gestion des talents promet non seulement de combler les
                lacunes en compétences mais aussi de propulser le secteur IT
                marocain vers une croissance durable et inclusive. Ce sont ces
                principes qui animent la construction de Ark-x en tant que
                catalyseur de l'écosystème technologique, en collaboration
                étroite avec{" "}
                <a
                  className="text-color-8"
                  href="https://www.linkedin.com/company/jobintechacademy"
                >
                  Jobintech
                </a>
                , un projet porté par{" "}
                <a
                  className="text-color-8"
                  href="https://www.linkedin.com/company/cdg-invest/"
                >
                  CDG Invest
                </a>{" "}
                en association avec{" "}
                <a
                  className="text-color-8"
                  href="https://www.linkedin.com/in/maroc-numeric-cluster-926b134b/"
                >
                  Maroc Numeric Cluster
                </a>
                ,{" "}
                <a
                  className="text-color-8"
                  href="https://www.linkedin.com/company/reformeadministration/"
                >
                  le Ministère de la Transition Numérique
                </a>{" "}
                et de la Réforme de l'Administration, et le Ministère de
                l'Enseignement Supérieur, de la Recherche Scientifique et de
                l'Innovation - Maroc.
              </p>

              <p>Et vous, quels sont vos pronostics ?</p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default LaCriseDesTalentsITauMaroc;
