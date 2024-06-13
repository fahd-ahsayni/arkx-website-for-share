import Section from "../../global/Section";
import FeaturesSectionLayout from "../../layout/FeaturesSectionLayout";
import { features } from "./data";

export default function ArkxJobintech() {
  return (
    <Section crosses className="py-24 sm:py-32">
      <FeaturesSectionLayout
        data={features}
        title="Ark-x, a major partner of Jobintech since 2019"
        text="We have supported the Jobintech project since its pilot phase in 2019 and during its scaling up in 2023-2024. Through this program, we have trained over 450 young people with an insertion rate exceeding 85%."
      />
    </Section>
  );
}
