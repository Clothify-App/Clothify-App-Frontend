import React from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div className="overflow-x-hidden " id="home">
      <Navbar />
      <Carousel />
      <Sections />
      <Footer />
    </div>
  );
};

export default Home;
