import React from "react";

import { GetThemeValues } from "../components/ContextTheme";

import { Header } from "../components/Header";
import { Jobs } from "../components/Jobs";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  const { darkTheme } = GetThemeValues();
  return (
    <div
      className={`${
        darkTheme ? "bg-midnight" : "bg-gray-100 "
      } pb-10 transition-all`}
    >
      <Header />
      <SearchBar />
      <Jobs />
    </div>
  );
};

export default Home;
