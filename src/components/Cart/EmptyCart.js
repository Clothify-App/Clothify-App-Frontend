import React from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="h-[80%] flex flex-col ">
      <CgSmileMouthOpen className="text-8xl text-gray-500 m-auto mt-16" />
      <h3 className="text-center mt-5 text-3xl">
        Currently your cart is Empty
      </h3>
      <h3 className="text-center text-xl">Please Add Products.</h3>
      <Link
        to="/products"
        className="w-40 text-center m-auto py-2 px-3 bg-pink-500 text-white"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default EmptyCart;
