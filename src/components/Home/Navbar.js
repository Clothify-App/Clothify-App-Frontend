import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useProduct } from "../../Context/ProductContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { MdSpaceDashboard } from "react-icons/md";

const Navbar = () => {
  // let searchQuery = useRef("");
  const location = useLocation();
  const navigate = useNavigate();
  const { CartProducts, search, setSearch } = useProduct();
  const { currentUser } = useAuth();
  return (
    <>
      <div className="w-full  shadow-md h-16 px-5 flex bg-white  items-center justify-between sticky-top z-40 ">
        <Link to="/">
          {/* <img src={icon} alt="icon" className="float-left cursor-pointer" /> */}
          <h1
            className="text-4xl text-pink-500"
            style={{ fontFamily: ["Oleo Script Swash Caps", "cursive"] }}
          >
            Clothify
          </h1>
        </Link>
        <div className="left flex w-1/4 justify-between px-10">
          {/* first hover effect */}
          <p className="relative group cursor-pointer">
            <Link
              onClick={() => {
                setSearch("");
              }}
              to="/products"
              className={
                location.pathname === "/products"
                  ? "text-pink-600"
                  : "group-hover:text-pink-600"
              }
            >
              Products
            </Link>
            <span
              className={
                location.pathname === "/products"
                  ? "absolute -bottom-1 left-0  h-[2px] bg-pink-400 transition-all w-full"
                  : "absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"
              }
            ></span>
          </p>
          <p className="relative group cursor-pointer">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "text-pink-600"
                  : "group-hover:text-pink-600"
              }
            >
              Contact Us
            </Link>
            <span
              className={
                location.pathname === "/contact"
                  ? "absolute -bottom-1 left-0  h-[2px] bg-pink-400 transition-all w-full"
                  : "absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"
              }
            ></span>
          </p>
          <p className="relative group cursor-pointer">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-pink-600"
                  : "group-hover:text-pink-600"
              }
            >
              About
            </Link>
            <span
              className={
                location.pathname === "/about"
                  ? "absolute -bottom-1 left-0  h-[2px] bg-pink-400 transition-all w-full"
                  : "absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"
              }
            ></span>
          </p>

          {/* <p className="relative group cursor-pointer">
          <Link to="/dashboard" className="group-hover:text-pink-600">
            Dashboard
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"></span>
        </p> */}
        </div>

        <div className="middle w-1/3 hover:w-1/2  group justify-center duration-700 flex">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="search  flex items-center rounded-3xl border-2 border-gray-200 w-3/4  justify-between hover:border-[#ff3895]"
          >
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Search Here"
              style={{ boxShadow: "none" }}
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/products");
              }}
              className=" w-11/12  capitalize  p-[0.1rem] pl-5 m-[0.3rem] outline-none border-none"
            />

            <span className="w-9 h-9 rounded-full bg-[#ff3895] flex items-center justify-center text-white m-1">
              <BiSearchAlt2 className="text-xl cursor-pointer" />
            </span>
          </form>
        </div>

        {localStorage.getItem("userID") ? (
          <div className="right w-1/4 flex justify-end gap-5  items-center">
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard"
                  ? "relative flex items-center mx-5  group cursor-pointer text-pink-600"
                  : "relative flex items-center mx-5  group cursor-pointer text-pink-600"
              }
            >
              <MdSpaceDashboard className="group-hover:text-pink-600 text-xl mx-2" />
              <p className="group-hover:text-pink-600">Dashboard</p>
              <span
                className={
                  location.pathname === "/dashboard"
                    ? "absolute -bottom-1 left-0  h-[2px] bg-pink-400 transition-all w-full"
                    : "absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"
                }
              ></span>
            </Link>
          </div>
        ) : (
          <div className="right w-1/4 flex justify-end gap-5 mr-3 items-center">
            <p className="relative group cursor-pointer">
              <Link to="/login" className="group-hover:text-pink-600">
                Sign In
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-400 transition-all group-hover:w-full"></span>
            </p>
            <Link to="/register">
              <p className="relative group cursor-pointer border-2 border-pink-600 p-1 px-2  bg-pink-600">
                <span className="text-white px-2">Sign Up</span>
              </p>
            </Link>
          </div>
        )}

        <Link to="/cart" className="flex items-center p-1 hover:text-pink-500">
          <BsCart className="text-xl cursor-pointer" />
          {CartProducts.length > 0 ? (
            <h5 className="text-xl relative -top-3">{CartProducts.length}</h5>
          ) : (
            ""
          )}
        </Link>
      </div>
    </>
  );
};
export default Navbar;
