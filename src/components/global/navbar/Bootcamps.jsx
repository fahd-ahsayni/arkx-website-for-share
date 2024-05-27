import { Popover } from "@headlessui/react";
import { resources } from "./index";
import Select from "./Select";
import SelectLayout from "./SelectLayout";

export default function Bootcamps() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Select text="Bootcamps" open={open} />
          <SelectLayout>
            <div className="relative grid gap-6 bg-neutral-950 px-5 py-6 sm:gap-8 sm:p-8">
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
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
                </a>
              ))}
            </div>
          </SelectLayout>
        </>
      )}
    </Popover>
  );
}
