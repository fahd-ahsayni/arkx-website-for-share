import Footer from "../components/global/Footer";
import ArkxJobintech from "../components/pages/home/ArkxJobintech";
import Bootcamps from "../components/pages/home/Bootcamps";
import HeroSection from "../components/pages/home/HeroSection";
import Press from "../components/pages/home/Press";
import WhoWeAre from "../components/pages/home/WhoWeAre";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HeroSection />
        <ArkxJobintech />
        <Bootcamps />
        <WhoWeAre />
        <Press />
        <Footer />
      </div>
    </>
  );
};

export default Home;
