import { stats } from "../../constants"; 

const Stats = () => (
  <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) => (
      <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3" >
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