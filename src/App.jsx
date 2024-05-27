import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import Banner from "./components/global/Banner";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import blogPages from "./components/blog/blog-pages";

export default function App() {
  return (
    <>
      <header className="w-full">
        <Banner />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {blogPages.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
      <ButtonGradient />
    </>
  );
}
