import React from "react";

import { Job } from "./Job";

import data from "../data.json";

export const Jobs = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 md:gap-y-14 gap-y-14  w-11/12 lg:w-4/5 mx-auto  ">
      {data.map((job) => {
        return <Job key={job.id} data={job} />;
      })}
    </div>
  );
};
