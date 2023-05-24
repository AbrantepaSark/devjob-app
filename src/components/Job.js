import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { GetThemeValues } from "./ContextTheme";

export const Job = ({ data }) => {
  const { darkTheme } = GetThemeValues();
  return (
    <div
      className={`${
        darkTheme ? "bg-dark_blue" : "bg-white "
      } rounded-xl  relative  p-8  w-full transition-all`}
    >
      <div
        className=" absolute -top-6   flex justify-center md:w-16 md:h-16  items-center h-14 w-14 rounded-xl "
        style={{ backgroundColor: `${data.logoBackground}` }}
      >
        <ReactSVG src={data.logo} />
      </div>
      <div className="flex pt-6 text-gray-500 w-36 justify-between">
        <p>{data.postedAt}</p>
        <span className="font-black">.</span>
        <p>{data.contract}</p>
      </div>
      <Link to={`/jobdetails/${data.id}`}>
        <h1
          className={`${
            darkTheme ? "text-white" : ""
          } py-2 font-bold text-xl  cursor-pointer transition-all hover:text-gray-500`}
        >
          {data.position}
        </h1>
      </Link>
      <p className="pb-10 text-gray-500">{data.company}</p>

      <p className="text-primary font-semibold">{data.location}</p>
    </div>
  );
};
