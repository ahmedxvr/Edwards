import React from "react";
import { Link } from "gatsby";

const LinkButton = ({ link, text, onClick }) => {
  return (
    <Link onClick={onClick} to={link} className="btn-red cursor-pointer">
      {text}
    </Link>
  );
};

export default LinkButton;
