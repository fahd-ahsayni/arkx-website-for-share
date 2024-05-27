import React from "react";
import { challenges, solutions } from "./data";
import FeaturesSectionLayout from "../../layout/FeaturesSectionLayout";
import Section from "../../global/Section";
import { GradientOne, GradientTwo } from "../../design/Hero";

const ChallengesAndSolutions = () => {
  return (
    <Section crosses>
      <GradientOne />
      <FeaturesSectionLayout
        data={challenges}
        tag="challenges"
        title="The Tech Industry's Pain Points"
        text="Rapid technological advancements have created a disparity between the skills available and those required by the industry."
      />
      <FeaturesSectionLayout
        data={solutions}
        tag="Solutions"
        title="Our Innovative Approach to Bridging the Gap"
        text="Rapid technological advancements have created a disparity between the skills available and those required by the industry."
      />
      <GradientTwo />
    </Section>
  );
};

export default ChallengesAndSolutions;
