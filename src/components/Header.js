import React from "react";

import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="h-40 flex justify-center  text-white bg-header_image_mobile md:bg-header_image bg-cover">
      <div className="flex justify-between  pt-8  w-11/12 lg:w-4/5">
        <h1 className="text-4xl font-bold cursor-pointer">devjobs</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};
