import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import i18n from "../i18n/locales/config";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

const ThemeLayout = () => {
  // const [width, setWindowWidth] = useState(0);
  // useEffect(() => {
  //   console.log(width);
  //   updateDimensions();
  //   window.addEventListener("resize", updateDimensions);
  //   return () => {
  //     window.removeEventListener("resize", updateDimensions);
  //   };
  // });
  // const updateDimensions = () => {
  //   const width = window.innerWidth;
  //   setWindowWidth(width);
  // };
  return (
    <div className="w-full flex flex-col gap-6">
      <Header />
      <div className="screen flex gap-5 w-95 mx-auto">
        <Sidenav />
        <Outlet />
      </div>
    </div>
  );
};

export default ThemeLayout;
