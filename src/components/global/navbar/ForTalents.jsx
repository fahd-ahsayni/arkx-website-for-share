import { Popover } from "@headlessui/react";
import { forTalentsNavigation } from "./index";
import Select from "./Select";
import SelectLayout from "./SelectLayout";
import { Link } from "react-router-dom";

export default function ForTalents() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Select text="For Talents" open={open} />
          <SelectLayout>
            <div className="relative grid gap-6 bg-neutral-950 px-5 py-6 sm:gap-8 sm:p-8">
              {forTalentsNavigation.map((item) => (
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
                    <p className="body-2">{item.name}</p>
                    <p className="mt-1 body-2 text-n-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </SelectLayout>
        </>
      )}
    </Popover>
  );
}
