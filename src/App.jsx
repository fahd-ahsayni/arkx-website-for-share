import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";
import blogPages from "./components/pages/resources/blog-pages";
import routes from "./routes";

const App = () => {
  return (
    <>
      <header className="w-full fixed left-0 top-0 z-[9999]">
        <Banner />
        <Navbar />
      </header>
      <main className="pt-32 sm:pt-32">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {blogPages.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <ButtonGradient />
    </>
  );
};

export default App;
