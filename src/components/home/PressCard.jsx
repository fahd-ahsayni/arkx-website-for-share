import { alMonitor, forbes, leMatin } from "../../assets";

const pressContent = [
  {
    title: "Le matin",
    text: `We want to democratize access to coding, IT skillsand web development
    for Moroccans and people in the Middle East and NorthAfrica as well
    as the rest of Africa.`,
    img: leMatin,
    color: "text-green-500",
  },
  {
    title: "Al-Monitor",
    text: "3W Academy Maroc aims at addressing youth unemployment Morocco through accessible tech education",
    img: alMonitor,
    color: "text-sky-500",
  },
  {
    title: "Forbes",
    text: "Business is the practice of making one's living or making money by producing or buying and selling products. It is also Any activity or enterprise entered into for profit.",
    img: forbes,
    color: "text-violet-500",
  },
];

const PressCard = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pressContent.map(({ title, text, color, img }, key) => (
        <div
          key={key}
          className="w-[19rem] flex flex-col justify-between md:flex-1 max-lg:w-full px-6 bg-gradient-to-t from-neutral-900/40 to-neutral-950 border border-n-6/70 rounded-[2rem] lg:w-auto even:py-8 odd:py-8 md:h-[32rem] h-[28]"
        >
          <div className={color}>
            <h4 className="h3 mb-4">{title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-2">
              {key === 0 && (
                <span className="font-medium">
                  Debbarh's longer term goal:{" "}
                </span>
              )}{" "}
              “{text}”
            </p>
          </div>
          <div className="w-full mt-12 h-[12rem] bg-n-8 rounded-xl overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PressCard;
