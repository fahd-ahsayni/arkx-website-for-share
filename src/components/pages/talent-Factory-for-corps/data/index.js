// Import necessary icons from Heroicons
import {
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

import { cardSvg1, cardSvg2, cardSvg3 } from "../../../../assets"; // Import SVG assets

// Define the challenges section with appropriate icons and descriptions
const challenges = [
  {
    name: "Skill Gap",
    description:
      "Rapid technological advancements have created a disparity between the skills available and those required by the industry.",
    icon: AcademicCapIcon,
    iconBackground: "bg-color-1",
    backgroundUrl: cardSvg1,
  },
  {
    name: "Talent Shortage",
    description:
      "Many companies face difficulties in finding qualified entry-level developers.",
    icon: RocketLaunchIcon,
    iconBackground: "bg-color-2",
    backgroundUrl: cardSvg2,
  },
  {
    name: "Economic Impact",
    description:
      "The underutilization of local talent leads to slower economic growth and less innovation.",
    icon: GlobeAltIcon,
    iconBackground: "bg-color-3",
    backgroundUrl: cardSvg3,
  },
];

// Define the solutions section with appropriate icons and descriptions
const solutions = [
  {
    name: "Specialized Training",
    description:
      "We provide comprehensive bootcamps focusing on the most in-demand tech skills, ensuring our graduates are equipped with the necessary knowledge to succeed.",
    icon: ClipboardDocumentListIcon,
    iconBackground: "bg-color-4",
    backgroundUrl: cardSvg1,
  },
  {
    name: "Career Coaching",
    description:
      "Our workshops enhance essential soft skills and job readiness, making our graduates well-rounded candidates.",
    icon: UserGroupIcon,
    iconBackground: "bg-color-5",
    backgroundUrl: cardSvg2,
  },
  {
    name: "Industry Partnerships",
    description:
      "We collaborate with leading tech companies to provide real-world project experience, ensuring our graduates are ready to meet industry demands from day one.",
    icon: HandThumbUpIcon,
    iconBackground: "bg-color-6",
    backgroundUrl: cardSvg3,
  },
];

// Define the outcomes section with appropriate icons and descriptions
const outcomes = [
  {
    name: "99% Placement Rate.",
    description:
      "Our graduates have a high success rate of being placed in leading tech companies.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Skill Enhancement.",
    description:
      "Graduates are equipped with cutting-edge skills, tailored to meet the current demands of the tech industry.",
    icon: LightBulbIcon,
  },
  {
    name: "Economic Growth.",
    description:
      "By supplying high-caliber tech talent, we contribute significantly to the digital economy and help drive innovation.",
    icon: ChartBarIcon,
  },
];

export {
  challenges,
  solutions,
  outcomes,
};
