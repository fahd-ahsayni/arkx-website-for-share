import { Link } from "react-router-dom";

const SimpleButton = ({ text, href, className }) => {
  const classes = `inline-flex body-2 rounded-md border border-transparent bg-gradient-to-br from-color-9 to-[#FF8000] bg-origin-border px-4 py-2 text-white uppercase ${className}`;
  const renderButton = () => (
    <button type="button" className={classes}>
      {text}
    </button>
  );
  const renderLink = () => (
    <Link to={href} className={classes}>
      {text}
    </Link>
  );
  return href ? renderButton() : renderLink();
};

export default SimpleButton;
