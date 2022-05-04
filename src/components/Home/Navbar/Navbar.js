import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import icon from "../../../assets/icon.png";
import { Link } from "react-router-dom";

const Navbar = ({ setlogin }) => {
  return (
    <div className="w-screen shadow-md h-16 px-5 flex bg-white  items-center justify-between fixed-top z-40 ">
      <Link to="/">
        <img src={icon} alt="icon" className="float-left cursor-pointer" />
      </Link>
      <div className="left flex w-1/4 justify-between px-10">
        {/* first hover effect */}
        <p className="relative group cursor-pointer">
          <Link to="/products" className="group-hover:text-pink-600">
            Products
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group cursor-pointer">
          <Link to="/contact" className="group-hover:text-pink-600">
            Contact Us
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group cursor-pointer">
          <Link to="/about" className="group-hover:text-pink-600">
            About
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"></span>
        </p>
      </div>

      <div className="middle w-1/3 justify-center duration-700 flex hover:w-1/2">
        <div className="search flex items-center rounded-3xl border-2 border-gray-200 w-3/4  justify-between hover:border-[#ff3895]">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search Here"
            style={{ boxShadow: "none" }}
            className="w-11/12 p-[0.1rem] pl-5 m-[0.3rem] outline-none border-none"
          />
          <span className="w-9 h-9 rounded-full bg-[#ff3895] flex items-center justify-center text-white m-1">
            <BiSearchAlt2 className="text-xl cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="right w-1/4 flex justify-end px-7 items-center">
        <p
          onClick={() => {
            setlogin(true);
          }}
          className="relative group cursor-pointer mx-5 border-2 border-pink-600 p-2 px-3 rounded-full hover:bg-pink-600"
        >
          <span className="group-hover:text-white">Sign Up / Sign In</span>
        </p>
        {/* <span className="w-10 h-10 border-2 group border-pink-400 flex justify-center items-center rounded-full hover:bg-pink-400 cursor-pointer ">
          <FiUser className="mx-2 text-2xl group-hover:text-white" />
        </span> */}
      </div>
    </div>
  );
};
export default Navbar;
