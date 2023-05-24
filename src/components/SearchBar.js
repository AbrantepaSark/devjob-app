import React from "react";
import { GetThemeValues } from "./ContextTheme";

import { MdFilterAlt, MdSearch, MdLocationOn } from "react-icons/md";

export const SearchBar = () => {
  const { darkTheme } = GetThemeValues();
  return (
    <form>
      <div
        className={`relative flex justify-between  pr-5 h-16 mb-5  w-11/12 lg:w-4/5 xl:w-4/5 mx-auto -top-8 ${
          darkTheme ? "bg-dark_blue" : "bg-white"
        }  rounded-lg transition-all `}
      >
        <div className="flex items-center justify-center ">
          <div className=" inset-y-0 left-0 flex items-center pointer-events-none">
            <MdSearch className="h-6 w-6 text-primary hidden md:block md:ml-4" />
          </div>
          <input
            type="text"
            className={` h-10 text-dark_blue text-sm ${
              darkTheme ? "bg-dark_blue" : ""
            }  rounded-lg block w-48 p-4 transition-all`}
            placeholder="Filter by title..."
          />
        </div>
        <div className="flex justify-center items-center space-x-3 md:hidden">
          <MdFilterAlt className="text-dark_gray h-8 w-8" />
          <button
            type="button"
            className="text-white bg-primary focus:ring-4  font-medium rounded-lg text-md px-2 py-2"
          >
            <MdSearch className="text-white w-6 h-6" />
          </button>
        </div>

        <div className=" hidden md:flex  items-center justify-center space-x-1">
          <div className="h-full w-[1px]  bg-dark_gray"></div>
          <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdLocationOn className="h-6 w-6 text-primary" />
          </div>
          <input
            type="text"
            className={` h-10 text-dark_blue  text-sm ${
              darkTheme ? "bg-dark_blue" : ""
            }  rounded-lg block w-44 p-2.5 transition-all`}
            placeholder="Filter by location..."
          />
        </div>

        <div className="hidden md:flex  items-center">
          <div className="h-full w-[1px] mr-5 bg-dark_gray"></div>
          <input
            id="checkbox-1"
            type="checkbox"
            value=""
            className={`"w-5 h-5 rounded "`}
          />
          <label
            htmlFor="checkbox-1"
            className={`ml-3 mr-2 font-bold ${
              darkTheme ? "text-white" : "text-dark_blue"
            } text-sm transition-all`}
          >
            Full Time
          </label>
          <button
            type="Submit"
            className="text-white bg-primary   font-medium rounded-lg text-sm px-4 py-2 ml-3"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
