import HeroSection from "../components/pages/about/HeroSection";
import Team from "../components/pages/about/Team";
import Faqs from "../components/pages/about/Faqs";
import Footer from "../components/global/Footer";
import Cta from "../components/pages/about/Cta";

export default function About() {
  return (
    <>
      <HeroSection />
      <Team />
      {/* <WordFromCEO /> */}
      <Cta />
      <Faqs />
      <Footer />
    </>
  );
}
