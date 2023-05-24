import React from "react";
import { ReactSVG } from "react-svg";
import { GetThemeValues } from "./ContextTheme";

import sun from "../icon-sun.svg";
import moon from "../icon-moon.svg";

export const ThemeToggle = () => {
  const { darkTheme, themeHandler } = GetThemeValues();
  return (
    <div className="flex justify-between  w-24 items-center h-10">
      <ReactSVG src={sun} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onClick={themeHandler}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div
          className={`w-12 h-6 bg-white rounded-full peer peer-focus:ring-4     after:absolute after:top-0.5 ${
            darkTheme
              ? "peer-checked:after:translate-x-[1px] after:left-6 "
              : ""
          }  after:bg-primary after:left-[3px]   after:rounded-full after:h-5 after:w-5 after:transition-all  `}
        ></div>
      </label>
      <ReactSVG src={moon} />
    </div>
  );
};
