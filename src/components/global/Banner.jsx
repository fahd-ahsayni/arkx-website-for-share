import { GradientOne, GradientTwo } from "../design/Hero";

const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-neutral-950 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <GradientOne />
      <GradientTwo />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="body-2">
          We’re thrilled to announce that Ark-x will be participating in GITEX
          AFRICA!
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <strong className="font-semibold">Booth Number: 5D-40</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
        </p>
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  );
};

export default Banner;
