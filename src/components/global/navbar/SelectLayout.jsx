import { Fragment } from "react";
import { PopoverPanel, Transition } from "@headlessui/react";

const SelectLayout = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <PopoverPanel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
        <div className="border border-neutral-800/80 rounded-lg shadow-lg overflow-hidden">
          {children}
        </div>
      </PopoverPanel>
    </Transition>
  );
};

export default SelectLayout;
