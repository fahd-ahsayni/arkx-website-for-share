import Section from "../../global/Section";
import FeaturesSectionLayout from "../../layout/FeaturesSectionLayout";
import { challenges, solutions } from "./data";

const ChallengesAndSolutions = () => {
  return (
    <Section crosses className="-mt-[5rem]">
      <FeaturesSectionLayout
        data={challenges}
        tag="challenges"
        title="Addressing the Skill Gap and Talent Shortage in the Tech Industry"
        text="The tech industry is evolving rapidly, and the demand for skilled professionals is at an all-time high. However, the gap between available skills and industry requirements continues to widen. At Ark-x Talent Factory, we focus on tackling these critical issues head-on to ensure a thriving digital ecosystem. Key challenges we address include:"
      />
      <FeaturesSectionLayout
        data={solutions}
        tag="solutions"
        title="Innovative Solutions to Empower the Next Generation of Tech Professionals"
        text="At Ark-x Talent Solutions, we believe in empowering the future leaders of the tech industry. Our innovative solutions are designed to bridge the gap between talent and opportunity, ensuring that our graduates are not only job-ready but also poised for long-term success. Our key initiatives include:"
      />
    </Section>
  );
};

export default ChallengesAndSolutions;
