import { lines } from "../../assets";

const LeftLine = ({ className }) => {
  return (
    <div
      className={`hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] ${
        className ? className : "-translate-y-1/2"
      } pointer-events-none`}
    >
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

const RightLine = ({ className }) => {
  return (
    <div
      className={`hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 ${
        className ? className : "-translate-y-1/2"
      } pointer-events-none`}
    >
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export { LeftLine, RightLine };
