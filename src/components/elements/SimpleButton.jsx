import React from "react";
import { Link } from "react-router-dom";

export default function SimpleButton({ text, href, className }) {
  const classes = `inline-flex items-center rounded border border-transparent px-4 py-2 shadow-sm focus:outline-none body-1 uppercase text-sm tracking-wide ${className} `;
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
}
