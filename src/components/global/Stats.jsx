import { stats } from "../../constants";

const Stats = ({ index = null, justifyStart = false }) => (
  <section
    className={`${
      justifyStart ? "justify-start" : "justify-center"
    } flex md:items-end flex-row flex-wrap sm:mb-20 mb-6 md:space-x-10`}
  >
    {stats.map((stat, key) => (
      <div
        key={stat.id}
        className={`flex md:justify-start items-center flex-row ${
          key == 1 && "mx-6"
        } ${key == index && "hidden"}`}
      >
        <h4 className="h4 md:h3 md:font-semibold font-bold text-white">
          {stat.value}
        </h4>
        <p className="text-n-2 body-1 md:text-base text-xs text-start uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
