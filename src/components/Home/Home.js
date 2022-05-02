import React from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="overflow-x-hidden h-[200rem]">
      <Navbar />
      <Carousel />
      <fade>
        <Sections />
      </fade>
    </div>
  );
};

export default Home;
