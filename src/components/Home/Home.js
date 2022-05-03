import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Login from "../auth/Login";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import Footer from "./Footer/Footer";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import { Slide } from "react-reveal";

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Navbar setlogin={setLoginOpen} />
      {loginOpen ? <Login setlogin={setLoginOpen} /> : console.log("close")}
      <Contact></Contact>
      {/* <Products /> */}
      {/* <Carousel />
      <Sections />
      <Footer /> */}
    </div>
  );
};

export default Home;
