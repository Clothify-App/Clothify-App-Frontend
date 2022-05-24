import React from "react";
import Navbar from "../Home/Navbar";
import notFoundImg from "../../assets/Page_Not_Found.jpg";
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={notFoundImg} alt="" className="w-1/2 m-auto" />
        <Link
          to="/"
          className="m-auto w-3/12 block px-3 py-2 text-white bg-pink-500 my-5 text-center text-xl"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
