import { Link } from "react-router-dom";

const BlogCard = ({ image, title, subtitle, to }) => (
  <Link
    to={to}
    className="flex bg-gradient-to-br from-neutral-950 to-neutral-900/50 md:flex-row flex-col gap-4 border border-n-1/10 p-4 rounded-3xl"
  >
    <img
      src={image}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-2xl object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="h3 text-n-1">{title}</h4>
        <p className="body-2 text-n-2">{subtitle}</p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border border-n-2/30 bg-neutral-800/30">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[30%] h-[30%] object-contain"
        />
      </div>
    </div>
  </Link>
);

export default BlogCard;
