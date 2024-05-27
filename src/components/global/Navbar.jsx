import { Popover, PopoverButton, PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Services from "./navbar/Services";
import Bootcamps from "./navbar/Bootcamps";
import ResponsiveNavbar from "./navbar/ResponsiveNavbar";
import { logoWihte } from "../../assets";
import SimpleButton from "../elements/SimpleButton";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Popover className="relative border-b border-b-n-2/20 bg-black z-[50] w-full shadow-2xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10" src={logoWihte} alt="" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 text-n-1 hover:bg-neutral-950 hover:text-white outline-none border-0">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
            <Link
              to="/"
              className={`body-2 hover:text-white transition-colors ${
                path === "/" ? "text-white" : "text-n-2"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`body-2 hover:text-white transition-colors ${
                path == "/about" ? "text-white" : "text-n-2"
              }`}
            >
              About
            </Link>
            <Services />
            <Bootcamps />
            <Link
              to="#"
              className="body-2 text-n-2 hover:text-white transition-colors"
            >
              Events
            </Link>
            <Link
              to="/blog"
              className={`body-2 hover:text-white transition-colors ${
                path === "/blog" ? "text-white" : "text-n-2"
              }`}
            >
              Blog
            </Link>
          </PopoverGroup>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <SimpleButton
              text="Embark with us"
              className="bg-gradient-to-br from-color-9 to-[#ff8000] text-n-1"
            />
          </div>
        </div>
      </div>

      <ResponsiveNavbar />
    </Popover>
  );
}
