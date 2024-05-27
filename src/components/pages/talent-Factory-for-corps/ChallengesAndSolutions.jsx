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
        text="Rapid technological advancements have created a disparity between the skills available and those required by the industry."
      />
      <FeaturesSectionLayout
        data={solutions}
        tag="solutions"
        title="Innovative Solutions to Empower the Next Generation of Tech Professionals"
        text="Rapid technological advancements have created a disparity between the skills available and those required by the industry."
      />
    </Section>
  );
};

export default ChallengesAndSolutions;
