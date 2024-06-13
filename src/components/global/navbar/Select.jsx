import { PopoverButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Select = ({ text, open }) => {
  return (
    <PopoverButton
      className={classNames(
        open ? "text-white" : "text-n-2",
        "group inline-flex items-center body-2 focus:outline-none transition-colors"
      )}
    >
      <span>{text}</span>
      <ChevronDownIcon
        className={classNames(
          open ? "text-white" : "text-n-2",
          "ml-2 h-5 w-5 transition-colors"
        )}
        aria-hidden="true"
      />
    </PopoverButton>
  );
};

export default Select;
