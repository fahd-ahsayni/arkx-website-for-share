import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import Section from "../../global/Section";
import Heading from "../../elements/Heading";
import FeaturesSectionLayout from "../../layout/FeaturesSectionLayout";

const features = [
  {
    name: "Scalable",
    description:
      "The ability to train and integrate hundreds of interns simultaneously without compromising the quality of the experience or the intended results.",
    icon: CloudArrowUpIcon,
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
  {
    name: "Inclusive",
    description:
      "The ability to engage populations often distant from opportunities (unemployed graduates, people with disabilities, etc.).",
    icon: CloudArrowUpIcon,
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
  {
    name: "Efficient",
    description:
      "The ability to deliver an experience that meets the highest global standards while adapting to local budgetary realities.",
    icon: CloudArrowUpIcon,
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
];

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
