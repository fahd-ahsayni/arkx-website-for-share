import Footer from "../components/global/Footer";
import ArkxJobintech from "../components/home/ArkxJobintech";
import Bootcamps from "../components/home/Bootcamps";
import CompanyValue from "../components/home/CompanyValue";
import HeroSection from "../components/home/HeroSection";
import Press from "../components/home/Press";
import Services from "../components/home/Services";
import TalentJourney from "../components/home/TalentJourney";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HeroSection />
        <TalentJourney />
        <CompanyValue />
        <ArkxJobintech/>
        <Bootcamps />
        <Services />
        <Press/>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
