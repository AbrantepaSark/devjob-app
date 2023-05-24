/* eslint-disable array-callback-return */
import React from "react";
import { useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { GetThemeValues } from "../components/ContextTheme";

import data from "../data.json";
import { Header } from "../components/Header";

export const SingleJob = () => {
  const { id } = useParams();
  const jobId = parseInt(id);

  const { darkTheme } = GetThemeValues();

  const jobData = data.find((item) => item.id === jobId);

  if (jobData) {
    return (
      <div
        className={`${
          darkTheme ? "bg-midnight " : "bg-gray-100 "
        } transition-all`}
      >
        <Header />

        {
          <div key={jobData.id}>
            <div
              className={`${
                darkTheme ? "bg-dark_blue" : "bg-white"
              } md:flex  items-center relative rounded-lg -top-6  w-11/12  lg:w-4/5 mx-auto transition-all`}
            >
              <div
                className="mx-auto md:static relative w-16 h-16 -top-7  md:rounded-none rounded-xl md:mx-0 md:w-40 md:h-32 flex justify-center items-center"
                style={{ backgroundColor: `${jobData.logoBackground}` }}
              >
                <ReactSVG src={jobData.logo} />
              </div>
              <div
                className={`${
                  darkTheme ? "bg-dark_blue" : ""
                } flex flex-col md:flex-row justify-between items-center  w-full px-5 pb-7 md:pb-0 transition-all`}
              >
                <div className="boder text-center md:text-left pb-5  ">
                  <h1
                    className={`${
                      darkTheme ? "text-white" : ""
                    } font-bold text-lg pb-2 transition-all`}
                  >
                    {jobData.company}
                  </h1>
                  <span className="text-gray-500">{jobData.website}</span>
                </div>

                <button
                  className={`${
                    darkTheme ? "bg-dark_gray " : " bg-primary"
                  } hover:bg-light_primary text-white md:mr-4   p-3 rounded-lg font-semibold transition-all`}
                >
                  Company Site
                </button>
              </div>
            </div>

            {/* Job details here */}
            <div
              className={`${
                darkTheme ? "bg-dark_blue" : "bg-white"
              } lg:w-4/5 w-11/12  rounded-lg mb-20 pb-10 px-6 mx-auto py-10 px86 md:px-12 md:py-12 transition-all`}
            >
              <div className="flex  text-gray-500 w-36 justify-between pb-3">
                <p>{jobData.postedAt}</p>
                <span className="font-black">.</span>
                <p>{jobData.contract}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between pb-10">
                <div className="pb-8 md:pb-0">
                  <h1
                    className={`${
                      darkTheme ? "text-white" : ""
                    } font-bold text-xl transition-all`}
                  >
                    {jobData.position}
                  </h1>
                  <span className="text-primary">{jobData.location}</span>
                </div>

                <button className="hover:bg-light_primary bg-primary p-3 rounded-lg font-semibold text-white ">
                  Apply Now
                </button>
              </div>

              <p className="text-gray-500">{jobData.description}</p>

              <h1
                className={`${
                  darkTheme ? "text-white" : ""
                } pt-6 pb-8 text-lg font-semibold transition-all`}
              >
                Requirements
              </h1>
              <p className="pb-8 text-gray-500">
                {jobData.requirements.content}
              </p>
              {jobData.requirements.items.map((point) => {
                return (
                  <ul className="py-2 text-gray-500 pl-3 list-disc marker:text-primary">
                    <li className=" ">{point}</li>
                  </ul>
                );
              })}

              <h1
                className={`${
                  darkTheme ? "text-white" : ""
                } pt-6 pb-8 text-lg font-semibold transition-all`}
              >
                What you will do
              </h1>
              <p className="pb-8 text-gray-500">{jobData.role.content}</p>
              {jobData.role.items.map((point) => {
                return (
                  <ul className="py-2 text-gray-500 pl-3 list-decimal marker:text-primary">
                    <li className=" ">{point}</li>
                  </ul>
                );
              })}
            </div>

            <div
              className={`${
                darkTheme ? " bg-dark_blue py-7" : " bg-white py-7"
              } transition-all`}
            >
              <div
                className={`flex  w-full md:w-5/6 lg:w-4/5 mx-auto justify-center md:justify-between `}
              >
                <div className="hidden md:block">
                  <h1
                    className={`${
                      darkTheme ? "text-white" : ""
                    } transition-all`}
                  >
                    {jobData.position}
                  </h1>
                  <p className="text-dark_gray">So Digital Inc.</p>
                </div>

                <button className="hover:bg-light_primary bg-primary p-3 rounded-lg font-semibold text-white w-11/12 md:w-32">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className={darkTheme ? "bg-midnight " : "bg-gray-100 h-screen"}>
        <Header />
        <p className=" text-center text-2xl mt-16">No job found</p>
      </div>
    );
  }
};
