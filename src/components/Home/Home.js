import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import Login from "../auth/Login";
import Contact from "../Contact/Contact";
// import { useState } from "react";
import Footer from "./Footer/Footer";
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="overflow-x-hidden " id="home">
      <Navbar setlogin={setLoginOpen} />
      {loginOpen ? <Login setlogin={setLoginOpen} /> : console.log("close")}
      {/* <Carousel />
      <Sections />
      <Footer /> */}
      <Contact />
    </div>
  );
};

export default Home;
