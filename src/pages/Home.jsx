import Footer from "../components/global/Footer";
import ArkxJobintech from "../components/pages/home/ArkxJobintech";
import Bootcamps from "../components/pages/home/Bootcamps";
import CompanyValue from "../components/pages/home/CompanyValue";
import HeroSection from "../components/pages/home/HeroSection";
import Press from "../components/pages/home/Press";
import TalentJourney from "../components/pages/home/TalentJourney";
import Testimonials from "../components/pages/home/Testimonials";
import WhoWeAre from "../components/pages/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HeroSection />
        <TalentJourney />
        <CompanyValue />
        <ArkxJobintech />
        <Bootcamps />
        <WhoWeAre />
        <Press />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
