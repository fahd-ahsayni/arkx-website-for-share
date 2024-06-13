import PlusSvg from "../../assets/svg/PlusSvg";

const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const GradientOne = () => {
  return (
    <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(60%-30rem)]">
      <svg
        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff4200" />
            <stop offset={1} stopColor="#ffaa00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const GradientTwo = () => {
  return (
    <div className="absolute md:opacity-25 opacity-40 inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg
        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff4200" />
            <stop offset={1} stopColor="#ffaa00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const GradientThree = ({ className }) => {
  return (
    <div
      className={`aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr ${className} opacity-30`}
      style={{
        clipPath:
          "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
      }}
    />
  );
};

const GradientFour = ({ start, end }) => {
  return (
    <svg
      viewBox="0 0 926 676"
      aria-hidden="true"
      className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
    >
      <path
        fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
        fillOpacity=".4"
        d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
      />
      <defs>
        <linearGradient
          id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
          x1="926.392"
          x2="-109.635"
          y1=".176"
          y2="321.024"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={start} />
          <stop offset={1} stopColor={end} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { BottomLine, GradientOne, GradientTwo, GradientThree, GradientFour };
