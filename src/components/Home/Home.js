import React,{useState} from "react";
import Navbar from "./Navbar/Navbar";
import Login from "../auth/Login";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import { Zoom } from "react-reveal";

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="overflow-x-hidden h-[200rem]">
       <Navbar setlogin={setLoginOpen}/>
      {loginOpen ? <Login setlogin={setLoginOpen} /> : console.log("close")}
      {/* <Carousel /> */}
      <Sections />
    </div>
  );
};

export default Home;
