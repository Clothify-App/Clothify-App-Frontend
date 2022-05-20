import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const ProductCard = ({ title, price, rating, image, id, category }) => {
  return (
    <div
      className="flex flex-col justify-between group relative mx-3 p-4 my-7 rounded-3xl "
      style={{
        boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 60%)",
      }}
    >
      <div className="w-3/4 m-auto min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt="Front of men's Basic Tee in black."
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <h3 className="text-center py-2 text-lg">{title}</h3>
      <span className="text-xs w-1/2 m-auto inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">
        {category}
      </span>
      <span className="flex justify-between items-center my-3">
        <h3 className="text-xl">&#8377;{price}/day</h3>
        <Rating />
      </span>
      <Link
        to={"/product/" + id}
        className="border-pink-500 flex items-center justify-center border-2 p-2 cursor-pointer text-pink-500"
      >
        <button className="text-lg">View</button>
      </Link>
    </div>
  );
};

export default ProductCard;
