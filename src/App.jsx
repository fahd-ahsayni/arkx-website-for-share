import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Resources from "./pages/Resources";
import blogPages from "./components/pages/resources/blog-pages";
import TalentsAgency from "./pages/TalentsAgency";
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
        <Route path="/talents-agency" element={<TalentsAgency />} />
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
