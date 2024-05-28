import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { logoWihte } from "../../assets";
import { Link } from "react-router-dom";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:inline-flex body-2 text-sm font-medium rounded-md border border-transparent bg-gradient-to-br from-color-9 to-[#FF8000] bg-origin-border px-4 py-2 text-white uppercase flex justify-center md:w-auto w-full"
        onClick={() => setOpen(true)}
      >
        Explore Now
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-950/50 backdrop-blur bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-2xl shadow-black transition-all sm:my-8 w-full sm:max-w-2xl sm:max-h-screen sm:p-6 border border-n-2/10 bg-neutral-950">
                  <div>
                    <div className="mx-auto flex h-auto w-24 items-center justify-center">
                      <img src={logoWihte} alt="" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <DialogTitle
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      ></DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Ready to take your tech journey to the next level?
                          Whether you're looking to hire top talent or explore
                          exciting career boost, Ark-x has you covered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="/form/hire-talents">
                    <div className="mt-5 sm:mt-6 bg-indigo-600 px-4 py-2 rounded-md bg-origin-border justify-center items-center">
                      <span className="inline-flex body-2 font-semibold border border-transparent text-white capitalize w-full items-center justify-center">
                        For institutionnels or businesses
                      </span>
                      <p className="text-sm text-center">
                        im ready to build my team
                      </p>
                    </div>
                  </a>
                  {/* <a href="">
                    <div className="mt-5 sm:mt-6 bg-indigo-600 px-4 py-2 rounded-md bg-origin-border justify-center items-center">
                      <span className="inline-flex body-2 font-semibold border border-transparent text-white capitalize w-full items-center justify-center">
                        join the JobInTech bootcamp
                      </span>
                      <p className="text-sm text-center">
                        im ready to build my team
                      </p>
                    </div>
                  </a> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
