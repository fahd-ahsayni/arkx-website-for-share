import { quotes } from "../../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex bg-gradient-to-t from-neutral-900/40 to-neutral-950 border border-n-6/70 justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="body-2 text-n-1 my-10">{content}</p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="body-2 text-white">{name}</h4>
        <p className="body-2 text-n-2">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
