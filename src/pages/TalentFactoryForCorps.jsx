import Footer from "../components/global/Footer";
import Testimonials from "../components/pages/home/Testimonials";
import KeyPartenaires from "../components/pages/talent-factory-for-institutionnels/KeyPartenaires";
import ArkxSection from "../components/pages/talent-factory/AboutUsSection";
import ChallengesAndSolutions from "../components/pages/talent-factory/ChallengesAndSolutions";
import HeroSection from "../components/pages/talent-factory/HeroSection";
import Outcomes from "../components/pages/talent-factory/Outcomes";

const TalentFactoryForCorps = () => {
  return (
    <>
      <HeroSection />
      <ArkxSection />
      <KeyPartenaires />
      <ChallengesAndSolutions />
      <Outcomes />
      <Testimonials />
      <Footer />
    </>
  );
};

export default TalentFactoryForCorps;
