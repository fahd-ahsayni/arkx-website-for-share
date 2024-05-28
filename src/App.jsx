import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Resources from "./pages/Resources";
import blogPages from "./components/pages/resources/blog-pages";
import TalentAgency from "./pages/TalentAgency";
import TalentFactoryForCorps from "./pages/TalentFactoryForCorps";
import TalentFactoryForInstitutionnels from "./pages/TalentFactoryForInstitutionnels";
import HireTalent from "./pages/forms/HireTalent";

const App = () => {
  return (
    <>
      <header className="w-full">
        <Banner />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/talent-agency" element={<TalentAgency />} />
        <Route path="/form/hire-talents" element={<HireTalent/>} />
        <Route
          path="/talent-factory-for-corps"
          element={<TalentFactoryForCorps />}
        />
        <Route
          path="/talent-factory-for-institutionnels"
          element={<TalentFactoryForInstitutionnels />}
        />
        {blogPages.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
