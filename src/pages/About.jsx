import HeroSection from "../components/about/HeroSection";
import Team from "../components/about/Team";
import { Faqs } from "../components/about/Faqs";
import Footer from "../components/global/Footer";
import Cta from "../components/about/Cta";
// import  from "@/images/portrait.jpg";

export default function About() {
  return (
    <>
      <HeroSection />
      <Cta />
      <Team />
      <Faqs />
      <Footer />
    </>
  );
}
