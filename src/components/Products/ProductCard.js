import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="hover:scale-95 duration-300 hover:shadow-md flex bg-white flex-col justify-between group relative mx-3 p-4 my-5 rounded-3xl group-hover:shadow-lg">
      <div className="w-4/4 m-auto min-h-70 bg-gray-200 aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden group-hover:opacity-95 group-hover:shadow-lg lg:h-70 lg:aspect-none">
        <img
          src={product.image}
          alt="Front of men's Basic Tee in black."
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <h3 className="text-center py-2 text-lg">{product.title}</h3>
      <span className="text-xs w-1/2 m-auto inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">
        {product.category}
      </span>
      <span className="flex justify-between items-center m-1">
        <h3 className="text-xl">&#8377;{product.rentPrice}/day</h3>
        <Rating />
      </span>
      <Link
        to={"/product/" + product.id}
        className="border-pink-500 flex items-center justify-center border-2 p-2 cursor-pointer text-pink-500"
      >
        <button className="text-lg">View</button>
      </Link>
    </div>
  );
};

export default ProductCard;
