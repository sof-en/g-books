import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to={"/"} className=" text-[20px] ">
      <span className="text-[mediumslateblue]">G</span>
      <span className=" text-[#6b7280]">-Books</span>
    </Link>
  );
};
