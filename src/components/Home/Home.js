import React from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
const Home = () => {
  return (
    <div className="overflow-x-hidden h-[200rem]">
      <Navbar />
      <Carousel />
      <Sections />
    </div>
  );
};

export default Home;
