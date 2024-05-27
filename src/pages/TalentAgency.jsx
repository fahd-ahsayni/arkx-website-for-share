import Footer from "../components/global/Footer";
import AboutUsSection from "../components/pages/talent-agency/AboutUsSection";
import ChallengesAndSolutions from "../components/pages/talent-agency/ChallengesAndSolutions";
import ContactUs from "../components/pages/talent-agency/ContactUs";
import HeroSection from "../components/pages/talent-agency/HeroSection";
import HowItWorks from "../components/pages/talent-agency/HowItWorks";
import JoinUs from "../components/pages/talent-agency/JoinUs";

const TalentAgency = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ChallengesAndSolutions />
      <HowItWorks />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default TalentAgency;
