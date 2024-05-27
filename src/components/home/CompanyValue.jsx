import { Canvas } from "@react-three/fiber";
import Heading from "../elements/Heading";
import Section from "../global/Section";
import Experience from "../../experience/Experience";
import { Suspense } from "react";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Cities", value: "12" },
  { label: "Raised", value: "$25M" },
];

export default function CompanyValue() {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      className="py-24 sm:py-32"
    >
      <div className="w-1/2 h-full left-0 absolute -bottom-1/3 z-10 md:block hidden">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>
      <div className="mx-auto relative container px-6 lg:px-8 lg:mt-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Nous participons à l'effort national de reskilling"
            />
          </div>
          <div>
            <div className="text-base leading-7 lg:max-w-3xl">
              <div className="max-w-xl">
                <p className="mt-4 body-2 text-n-2">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8 body-2 text-n-2">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-n-1">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
