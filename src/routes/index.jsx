import About from "../pages/About";
import ForFreelance from "../pages/forms/ForFreelance";
import HireTalent from "../pages/forms/HireTalent";
import Home from "../pages/Home";
import Resources from "../pages/Resources";
import TalentAgency from "../pages/TalentAgency";
import TalentFactoryForCondidates from "../pages/TalentFactoryForCondidates";
import TalentFactoryForCorps from "../pages/TalentFactoryForCorps";
import TalentFactoryForInstitutionnels from "../pages/TalentFactoryForInstitutionnels";

export default [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/resources", element: <Resources /> },
  { path: "/talent-agency", element: <TalentAgency /> },
  { path: "/form/hire-talents", element: <HireTalent /> },
  { path: "/form/hire-freelancers", element: <ForFreelance /> },
  { path: "/talent-factory-for-corps", element: <TalentFactoryForCorps /> },
  {
    path: "/talent-factory-for-institutionnels",
    element: <TalentFactoryForInstitutionnels />,
  },
  {
    path: "/talent-factory-for-condidates",
    element: <TalentFactoryForCondidates />,
  },
];
