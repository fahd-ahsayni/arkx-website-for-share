import img01 from "./assets/img01.webp";

const HeroSection = () => {
  return (
    <div className="relative pb-[1rem] pt-24">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover brightness-50"
          src={img01}
          alt=""
        />
        <div
          className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto container py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="h1 text-white max-w-4xl">
          Connecting Top Tech Talent with Innovative Companies
        </h1>
        <h4 className="body-1 text-gray-200 max-w-xl mt-8">
          Whether you're a startup or an enterprise, find the best freelancers
          vetted and upskilled to meet your needs.
        </h4>
        {/* <div className="mt-10">
          <SimpleButton text="Get Started" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
