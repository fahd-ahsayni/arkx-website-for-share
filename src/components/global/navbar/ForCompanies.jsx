import { Popover } from "@headlessui/react";
import { callsToAction, forCompaniesNavigation } from "./index";
import Select from "./Select";
import SelectLayout from "./SelectLayout";
import { Link } from "react-router-dom";

export default function ForCompanies() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Select open={open} text="For Companies" />
          <SelectLayout>
            <div className="relative grid gap-6 bg-neutral-950 px-5 py-6 sm:gap-8 sm:p-8">
              {forCompaniesNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gradient-to-br from-neutral-950 to-neutral-900/70"
                >
                  <item.icon
                    className="h-6 w-6 flex-shrink-0 text-[#ff4200]"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="body-2 text-white">{item.name}</p>
                    <p className="mt-1 body-2 text-n-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="space-y-6 bg-neutral-900 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              {callsToAction.map((item) => (
                <div key={item.name} className="flow-root">
                  <a
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 font-medium"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-n-2 body-1"
                      aria-hidden="true"
                    />
                    <span className="ml-3 body-2 text-n-2 hover:text-n-1">
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </SelectLayout>
        </>
      )}
    </Popover>
  );
}
