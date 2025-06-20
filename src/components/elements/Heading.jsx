
const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${className} max-w-5xl mb-12 lg:mb-20`}
    >
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-1 mt-4 text-n-3 max-w-xl">{text}</p>}
    </div>
  );
};

export default Heading;