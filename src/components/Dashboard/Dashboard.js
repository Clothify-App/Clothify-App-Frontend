import React from "react";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import VerticalNavbar from "./VerticalNavbar";
import RenderedItem from "./RenderedItem";
const Dashboard = () => {
  const [navbarOption, setNavbarOption] = useState(1);
  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 flex w-full gap-3 h-[91vh] justify-between">
        <VerticalNavbar setNavbarOption={setNavbarOption} />
        <RenderedItem
          navbarOption={navbarOption}
          setNavbarOption={setNavbarOption}
        />
      </div>
    </>
  );
};

export default Dashboard;
