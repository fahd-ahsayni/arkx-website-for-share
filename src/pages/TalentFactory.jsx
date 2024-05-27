import Footer from "../components/global/Footer";
import Testimonials from "../components/pages/home/Testimonials";
import ArkxSection from "../components/pages/talent-Factory-for-corps/AboutUsSection";
import ChallengesAndSolutions from "../components/pages/talent-Factory-for-corps/ChallengesAndSolutions";
import HeroSection from "../components/pages/talent-Factory-for-corps/HeroSection";
import Outcomes from "../components/pages/talent-Factory-for-corps/Outcomes";

function TalentFactory() {
  return (
    <>
      <HeroSection />
      <ArkxSection />
      <ChallengesAndSolutions />
      <Outcomes />
      <Testimonials />
      <Footer />
    </>
  );
}

export default TalentFactory;
