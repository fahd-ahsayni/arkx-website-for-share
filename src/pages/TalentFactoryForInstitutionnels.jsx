import React from "react";
import ImpactSection from "../components/pages/talent-factory-for-institutionnels/ImpactSection";
import HeroSection from "../components/pages/talent-factory-for-institutionnels/HeroSection";
import Footer from "../components/global/Footer";
import HowWeAre from "../components/pages/talent-factory-for-institutionnels/HowWeAre";
import CapabilityAcademy from "../components/pages/talent-factory-for-institutionnels/CapabilityAcademy";
import KeyPartenaires from "../components/pages/talent-factory-for-institutionnels/KeyPartenaires";
import Press from "../components/pages/home/Press";
import ArkxJobintech from "../components/pages/talent-factory-for-institutionnels/ArkxJobintech";

const TalentFactoryForInstitutionnels = () => {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <KeyPartenaires />
      <HowWeAre />
      <CapabilityAcademy />
      <ArkxJobintech />
      <Press />
      <Footer />
    </>
  );
};

export default TalentFactoryForInstitutionnels;
