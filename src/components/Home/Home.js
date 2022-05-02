import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
<<<<<<< HEAD
import fade from "react-reveal/Fade";

||||||| 4137cbd
=======
import Login from "../auth/Login";
import Contact from "../Contact/Contact";
// import { useState } from "react";
import Footer from "./Footer/Footer";
>>>>>>> f5d4f20f1e91cfe2c82e26e96f4982ea9eb7c741
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
<<<<<<< HEAD
    <div className="overflow-x-hidden h-[200rem]">
      <Navbar />
      <Carousel />
      <fade>
        <Sections />
      </fade>
||||||| 4137cbd
    <div className="overflow-x-hidden h-[200rem]">
      <Navbar />
      <Carousel />
      <Sections />
=======
    <div className="overflow-x-hidden " id="home">
      <Navbar setlogin={setLoginOpen} />
      {loginOpen ? <Login setlogin={setLoginOpen} /> : console.log("close")}
      {/* <Carousel />
      <Sections />
      <Footer /> */}
      <Contact />
>>>>>>> f5d4f20f1e91cfe2c82e26e96f4982ea9eb7c741
    </div>
  );
};

export default Home;
