import {
  CloudArrowUpIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

// Features Section
const features = [
  {
    name: "Scalable",
    description:
      "The ability to train and integrate hundreds of interns simultaneously without compromising the quality of the experience or the intended results.",
    icon: CloudArrowUpIcon, // Icon for scalability
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
  {
    name: "Inclusive",
    description:
      "The ability to engage populations often distant from opportunities (unemployed graduates, people with disabilities, etc.).",
    icon: UsersIcon, // Icon for inclusivity
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
  {
    name: "Efficient",
    description:
      "The ability to deliver an experience that meets the highest global standards while adapting to local budgetary realities.",
    icon: ShieldCheckIcon, // Icon for efficiency
    iconBackground: "bg-gradient-to-br from-color-9 to-[#FF8000]",
  },
];

export { features };
