import React from "react";
import Navbar from "../components/Home/Navbar";
import Carousel from "../components/Home/Carousel";
import Section from "../components/Home/Sections";
import Footer from "../components/Home/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Section />
      <Footer />
    </div>
  );
}

export default HomePage;
