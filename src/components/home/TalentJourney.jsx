import { benefits } from "../../constants";
import Heading from "../elements/Heading";
import Section from "../global/Section";
import ClipPath from "../../assets/svg/ClipPath";
import { motion } from "framer-motion";

const TalentJourney = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="features"
    >
      <div className="container relative z-2 pb-8">
        <div className="w-full flex items-start lg:pt-52 pt-16">
          <Heading
            className="md:max-w-md lg:max-w-2xl md:text-center"
            title="Talent journey d'Ark-x talent factory"
            text="La Talent Journey d'ARK-x Talent Factory est un programme complet qui accompagne les jeunes talents pour les insérer dans le secteur du numérique. Elle s'articule autour de six étapes."
          />
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.15,
              }}
              className="block cursor-pointer relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="absolute w-full h-full top-0 bottom-0">
                <img src={item.backgroundUrl} className="w-full h-full" alt="" />
              </div>
              <div className="relative z-2 flex flex-col md:min-h-[22rem] min-h-[15rem] p-[2.4rem] pointer-events-none">
                <div className="flex items-center mb-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
                <h5 className="h5 mt-6">{item.title}</h5>
                <p className="body-2 mt-5 text-n-3">{item.text}</p>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TalentJourney;
