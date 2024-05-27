import { Popover, PopoverButton, PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ResponsiveNavbar from "./navbar/ResponsiveNavbar";
import { logoWihte } from "../../assets";
import SimpleButton from "../elements/SimpleButton";
import { Link, useLocation } from "react-router-dom";
import ForTalents from "./navbar/ForTalents";
import ForCompanies from "./navbar/ForCompanies";
import WhyArkx from "./navbar/WhyArkx";

const Navbar = () => {
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
            <ForCompanies />
            <ForTalents />
            <Link
              to="/resources"
              className={`body-2 hover:text-white transition-colors ${
                path == "/resources" ? "text-white" : "text-n-2"
              }`}
            >
              Resources
            </Link>
          </PopoverGroup>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <SimpleButton text="Get Started" />
          </div>
        </div>
      </div>

      <ResponsiveNavbar />
    </Popover>
  );
};

export default Navbar;
