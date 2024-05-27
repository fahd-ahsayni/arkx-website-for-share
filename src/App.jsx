import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Resources from "./pages/Resources";
import blogPages from "./components/pages/resources/blog-pages";
import TalentAgency from "./pages/TalentAgency";
import TalentFactory from "./pages/TalentFactory";

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
        <Route
          path="/talent-factory"
          element={<TalentFactory />}
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
