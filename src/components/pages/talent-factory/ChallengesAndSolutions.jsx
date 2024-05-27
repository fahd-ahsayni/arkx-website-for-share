import Section from "../../global/Section";
import FeaturesSectionLayout from "../../layout/FeaturesSectionLayout";
import { challenges, solutions } from "./data";

const ChallengesAndSolutions = () => {
  return (
    <Section crosses className="-mt-[5rem]">
      <FeaturesSectionLayout
        data={challenges}
        tag="challenges"
        title="The Tech Industry's Pain Points"
        text="In today's fast-paced tech landscape, companies face several critical challenges that hinder their growth and innovation. These pain points create significant obstacles for both businesses and aspiring tech professionals. Key issues include:"
      />
      <FeaturesSectionLayout
        data={solutions}
        tag="solutions"
        title="Our Innovative Approach to Bridging the Gap"
        text="At ARK-X Talent Solutions, we are committed to addressing the industry's most pressing challenges with cutting-edge solutions. Our comprehensive approach ensures that both companies and tech professionals are well-equipped to succeed in a competitive market. Key aspects of our solutions include:"
      />
    </Section>
  );
};

export default ChallengesAndSolutions;
