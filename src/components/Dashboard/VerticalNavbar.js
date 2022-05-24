import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";
import { useAuth } from "../../Context/AuthContext";

function VerticalNavbar({ setNavbarOption }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div className="w-1/5 m-5 h-[90%] ">
      <div className="verticalNavbar p-2 flex-[0.2] h-full bg-white rounded-2xl shadow-md">
        <div className="imageContainer w-full border-b-2 border-black border-solid">
          <img src={icon} alt="" className="object-contain m-auto" />
        </div>
        <div className="navbarOptions h-[100%]">
          <ul className="flex flex-col justify-start mt-10 h-[100%]">
            <li
              className="my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold"
              onClick={() => {
                setNavbarOption(1);
              }}
            >
              Profile
            </li>
            <li
              className="my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold"
              onClick={() => {
                setNavbarOption(2);
              }}
            >
              My Products
            </li>
            <li
              className="my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold"
              onClick={() => {
                setNavbarOption(4);
              }}
            >
              Add Product
            </li>
            <li
              className="my-2 text-center hover:bg-black hover:text-white hover:duration-300 cursor-pointer p-3 font-bold"
              onClick={() => {
                setNavbarOption(3);
              }}
            >
              Order History
            </li>
            <li
              onClick={async () => {
                await logout();
                navigate("/");
              }}
              className="my-2 text-center hover:bg-red-500 hover:text-white hover:duration-300 cursor-pointer p-3 font-bold"
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
