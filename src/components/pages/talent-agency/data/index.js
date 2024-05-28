import {
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  HandThumbUpIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";
import { cardSvg1, cardSvg2, cardSvg3 } from "../../../../assets";

const uniqueSellingProposition = [
  {
    name: "Rigorous Vetting Process",
    description: "We ensure only the best talent joins our pool.",
    icon: CheckCircleIcon,
  },
  {
    name: "Continuous Follow-Up",
    description:
      "We stay in touch with both freelancers and recruiters to ensure satisfaction.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Upskilling Opportunities",
    description:
      "We offer courses to help freelancers stay ahead in their careers.",
    icon: AcademicCapIcon,
  },
];

const howItWorks = [
  {
    id: "0",
    title: "Sign Up",
    text: "Join our platform and tell us what you need.",
    imageUrl: roadmap1,
  },
  {
    id: "1",
    title: "Match",
    text: "We match you with the best-vetted tech talent.",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Collaborate",
    text: "Work together seamlessly with continuous support.",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Grow",
    text: "Achieve your goals with the right team in place.",
    imageUrl: roadmap4,
  },
];

const challenges = [
  {
    name: "Skill Gap",
    description:
      "Rapid technological advancements have created a disparity between the skills available and those required by the industry.",
    icon: ClipboardDocumentListIcon,
    iconBackground: "bg-color-1",
  },
  {
    name: "Talent Shortage",
    description:
      "Many companies face difficulties in finding qualified entry-level developers.",
    icon: UserGroupIcon,
    iconBackground: "bg-color-2",
  },
  {
    name: "Economic Impact",
    description:
      "The underutilization of local talent leads to slower economic growth and less innovation.",
    icon: HandThumbUpIcon,
    iconBackground: "bg-color-3",
  },
];

const solutions = [
  {
    name: "Specialized Training",
    description:
      "We provide comprehensive bootcamps focusing on the most in-demand tech skills, ensuring our graduates are equipped with the necessary knowledge to succeed.",
    icon: ClipboardDocumentListIcon,
    iconBackground: "bg-color-4",
  },
  {
    name: "Career Coaching",
    description:
      "Our workshops enhance essential soft skills and job readiness, making our graduates well-rounded candidates.",
    icon: UserGroupIcon,
    iconBackground: "bg-color-5",
  },
  {
    name: "Industry Partnerships",
    description:
      "We collaborate with leading tech companies to provide real-world project experience, ensuring our graduates are ready to meet industry demands from day one.",
    icon: HandThumbUpIcon,
    iconBackground: "bg-color-6",
  },
];

const joinUs = [
  {
    name: "For Freelancers",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Access to top-tier projects",
      "Continuous upskilling opportunities",
      "Supportive community",
    ],
  },
  {
    name: "For Companies",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Access to vetted tech talent",
      "Seamless hiring process",
      "Ongoing support and follow-up",
    ],
  },
];

export { uniqueSellingProposition, howItWorks, challenges, solutions, joinUs };
