import { PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { importanteNavigationForNavMobile } from "./data"
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { logoWihte } from "../../../assets";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const ResponsiveNavbar = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        className="fixed w-screen h-screen bg-black/70 backdrop-blur-[2px] inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-neutral-900 rounded-lg bg-neutral-950 ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={logoWihte}
                  alt="Your Company"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="outline-none border-0 inline-flex items-center justify-center rounded-md bg-neutral-950 p-2 text-n-1 hover:bg-neutral-950 hover:text-white">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {importanteNavigationForNavMobile.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-m-3 flex items-center rounded-md p-3"
                  >
                    <item.icon
                      className="h-6 w-6 bg- flex-shrink-0 text-[#ff4200]"
                      aria-hidden="true"
                    />
                    <span className="ml-3 body-2 text-n-1">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link to="/" className="body-2 text-n-1 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="body-2 text-n-1 hover:text-white">
                About
              </Link>
              <Link
                to="/resources"
                className="body-2 text-n-1 hover:text-white"
              >
                Resources
              </Link>
            </div>
            <div>
              <Modal />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Transition>
  );
};

export default ResponsiveNavbar;
