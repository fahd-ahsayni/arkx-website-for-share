const FeatureCard = ({
  Icon,
  name,
  description,
  iconBackground,
  index,
  length,
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== length - 1 ? "mb-6" : "mb-0"
    } hover:bg-gradient-to-br from-neutral-950 to-neutral-900/50 ring-1 ring-n-2/20 hover:ring-n-2/30 transition-all duration-150 backdrop-blur-2xl`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
      {Icon && (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBackground}`}
        >
          <Icon className="h-6 w-6 text-n-8" aria-hidden="true" />
        </div>
      )}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="body-1 text-gray-200">
        {name}
      </h4>
      <p className="body-2 text-n-2">
        {description}
      </p>
    </div>
  </div>
);

export default FeatureCard;
