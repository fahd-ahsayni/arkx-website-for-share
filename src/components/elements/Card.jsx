import { motion } from "framer-motion";

const Card = ({ background, Icon, iconImg, title, text, iconBackground }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.15,
      }}
      className="block cursor-pointer relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
    >
      <div className="absolute w-full h-full top-0 bottom-0">
        <img src={background} className="w-full h-full" alt="" />
      </div>
      <div className="relative z-2 flex flex-col md:min-h-[22rem] min-h-[15rem] p-[2.4rem] pointer-events-none">
        <div className="flex items-center mb-auto">
          {iconImg && <img src={iconImg} width={48} height={48} alt={title} />}
          {Icon && (
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBackground}`}>
              <Icon
                className="h-6 w-6 text-n-8"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
        <h5 className="h5 mt-6">{title}</h5>
        <p className="body-2 mt-5 text-n-3">{text}</p>
      </div>
    </motion.div>
  );
};

export default Card;
