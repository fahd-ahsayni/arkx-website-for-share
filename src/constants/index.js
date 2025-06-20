// Importing all necessary icons and images from the assets directory
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  html,
  java,
  angular,
  mongodb,
  mySql,
  react,
  tailwindcss,
  javaScript,
  mnc,
  royaume,
  gouverment,
  cdg,
  people01,
  people02,
  people03,
  cardSvg1,
  cardSvg2,
  cardSvg3,
  leMatin,
  alMonitor,
  forbes,
  abdellazize,
  hamza,
  zaineb,
} from "../assets";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// Stats array containing various statistics about the project
export const stats = [
  {
    id: "stats-3",
    title: "Insertion rate",
    value: "89%+",
  },
  {
    id: "stats-2",
    title: "Initiated to coding",
    value: "1000+",
  },
  {
    id: "stats-1",
    title: "Alumnis",
    value: "600+",
  },
];

// Navigation array containing navigation links for the website
export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

// Array of Initiative Supported By Section
export const initiativeSupportedBy = [royaume, gouverment, cdg, mnc];

// Array of bootcamps offered
export const bootcamps = [
  {
    id: "0",
    title: "Full-Stack JavaScript",
    text: "Combining the power of JavaScript for both front-end and back-end development, this stack is ideal for creating dynamic and responsive web applications.",
  },
  {
    id: "1",
    title: "Full-Stack Java / Angular",
    text: "Leveraging the robustness of Java for server-side logic and the versatility of Angular for client-side development, this stack excels in creating scalable and maintainable enterprise applications.",
  },
];

// Array of technologies used with their respective icons and dimensions
export const technologies = [
  {
    id: "0",
    title: "HTML5",
    icon: html,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Angular",
    icon: angular,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Java",
    icon: java,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "javaScript",
    icon: javaScript,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "mySql",
    icon: mySql,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "react",
    icon: react,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "tailwindcss",
    icon: tailwindcss,
    width: 38,
    height: 32,
  },
];

// Array describing the talent journey with respective icons and images
export const talentJourney = [
  {
    id: "0",
    title: "Awareness",
    text: "Provide young people with immersive experiences and professional interactions to discover digital technology and their talents.",
    backgroundUrl: cardSvg1,
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Orientation",
    text: "Help young people define a clear career project in digital technology through personalized advice and aptitude tests.",
    backgroundUrl: cardSvg2,
    iconUrl: benefitIcon2,
  },
  {
    id: "2",
    title: "Training",
    text: "Enable young people to acquire the necessary skills to succeed in digital technology through tailored training programs.",
    backgroundUrl: cardSvg3,
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "Placement",
    text: "Facilitate young people's access to employment by creating effective bridges between training and the professional world.",
    backgroundUrl: cardSvg1,
    iconUrl: benefitIcon4,
  },
  {
    id: "4",
    title: "Support",
    text: "Support young people in developing their careers through mentoring programs and continuous training.",
    backgroundUrl: cardSvg2,
    iconUrl: benefitIcon1,
  },
  {
    id: "5",
    title: "Give Back",
    text: "Encourage young people to contribute to the development of their community by participating in volunteer and community projects.",
    backgroundUrl: cardSvg3,
    iconUrl: benefitIcon2,
  },
];

// Array of social media links with respective icons
export const socials = [
  {
    id: "0",
    title: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/arkx-education",
  },
  {
    id: "1",
    title: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/ARKxacademy",
  },
  {
    id: "2",
    title: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/arkx_official/",
  },
  {
    id: "3",
    title: "youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@ARKXEducation",
  },
];

// Array of feedback testimonials
export const feedback = [
  {
    id: "feedback-2",
    content:
      "In a very competitive IT sector, you have to be innovative to have the right skills. The 'onboarding accelerator' program allowed us to Upskill and support our talents so that they are operational and productive as soon as they are integrated into client projects. And it is a real alternative to classic sourcing solutions for specialized profiles.",
    name: "Ghali Moussaoui",
    title: " IT Telecom Director of INTELCIA ITS",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "En tant que HR manager chez Presta Freedom, j'ai eu le plaisir de collaborer avec les lauréats de ARK-X Talent Factory, ce qui nous a permis de recruter des profils IT extrêmement bien formés, prêts à l'emploi et pleins d'énergies.",
    name: "Mouad EL OUADOUDI",
    title: "Manager RH Presta Freedom",
    img: people03,
  },
  {
    id: "feedback-1",
    content:
      "Les lauréats d'ARK-X Talent Factory se sont démarqués par leurs compétences et leur enthousiasme. Intégrés à notre équipe, ils dynamisent fortement nos projets informatiques et dev. ",
    name: "Jalila FARES",
    title: "Directrice Générale - ONE PRO COM",
    img: people01,
  },
];

// Array of leader profiles with names, roles, and image URLs
export const leaders = [
  {
    name: "Abdelaziz Belkoura",
    role: "Chief Technology Office",
    image: abdellazize,
  },
  {
    name: "Hamza Debbarh",
    role: "Chief Executive Office",
    image: hamza,
  },
  {
    name: "Zaineb Khizani",
    role: "Chief Learning Officer",
    image: zaineb,
  },
];

// Array of frequently asked questions (FAQs)
export const faqs = [
  [
    {
      question: "How does Ark-x help businesses find top tech talent?",
      answer:
        "Ark-x connects businesses with a curated pool of skilled tech professionals. Our platform ensures that you can effortlessly find and hire candidates who are ready to elevate your team. We handle the vetting, matching, and continuous support to make the hiring process seamless.",
    },
    {
      question: "What types of tech roles can I hire through Ark-x?",
      answer:
        "You can hire a wide range of tech professionals through Ark-x, including full-stack developers, data analysts, cybersecurity experts, software engineers, and more. Whether you're looking for entry-level or experienced professionals, we have the talent to meet your needs.",
    },
  ],
  [
    {
      question: "How does the vetting process work?",
      answer:
        "Our rigorous vetting process includes multiple stages of evaluation to ensure we only present top talent. This involves technical assessments, interviews, and real-world project evaluations to verify candidates' skills and readiness for the job market.",
    },
    {
      question: "Can Ark-x help with short-term freelance projects?",
      answer:
        "Yes, Ark-x provides access to a pool of vetted freelancers ready to take on short-term projects. We manage the selection process and ensure that the freelancers have the necessary skills to meet your project's requirements.",
    },
  ],
  [
    {
      question: "What support does Ark-x offer after hiring?",
      answer:
        "After hiring through Ark-x, we offer continuous follow-up and support to ensure satisfaction for both the business and the hired talent. This includes regular check-ins, performance reviews, and upskilling opportunities to keep the talent aligned with your company's needs.",
    },
    {
      question: "How can I get started with hiring through Ark-x?",
      answer:
        "Getting started is easy! Simply fill out our online form to tell us about your hiring needs. Our team will review your requirements and match you with the best candidates from our talent pool. You can then interview and select the talent that fits your team.",
    },
  ],
];

// Array of press content
export const pressContent = [
  {
    title: "Le matin",
    text: `We want to democratize access to coding, IT skillsand web development
    for Moroccans and people in the Middle East and NorthAfrica as well
    as the rest of Africa.`,
    img: leMatin,
    color: "text-green-500",
  },
  {
    title: "Al-Monitor",
    text: "3W Academy Maroc aims at addressing youth unemployment Morocco through accessible tech education",
    img: alMonitor,
    color: "text-sky-500",
  },
  {
    title: "Forbes",
    text: "Business is the practice of making one's living or making money by producing or buying and selling products. It is also Any activity or enterprise entered into for profit.",
    img: forbes,
    color: "text-violet-500",
  },
];
