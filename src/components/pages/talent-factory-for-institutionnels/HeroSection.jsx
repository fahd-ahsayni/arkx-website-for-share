import herobg from "./assets/img03.webp";

const HeroSection = () => {
  return (
    <div className="relative pb-[1rem] pt-24">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover brightness-50 grayscale-[50%]"
          src={herobg}
          alt=""
        />
        <div
          className="absolute inset-0 bg-neutral-900/70 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto container py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="h1 text-white max-w-6xl capitalize">
          Boosting IT Jobs and Competitiveness in Morocco
        </h1>
        <h4 className="body-1 text-gray-200 max-w-xl mt-8">
          Improving Youth Employment And The Competitiveness Of The IT Sector In
          Morocco through the creation of a large-scale pool of 'job-ready' tech
          talents
        </h4>
        {/* <div className="mt-10">
          <SimpleButton text="Get Started" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
