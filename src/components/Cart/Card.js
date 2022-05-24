import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Card({
  index,
  product,
  removeItem,
  incrementQuantity,
  decrementQuantity,
}) {
  // console.log(product);
  return (
    <>
      <AiOutlineClose
        onClick={() => removeItem(index)}
        className="float-right relative right-10 top-4 text-lg cursor-pointer hover:text-red-500"
      />
      <div className="flex items-center hover:bg-gray-100 px-6 py-5 my-2 shadow-md">
        <div className="flex w-2/6">
          {/* product */}
          <div className="w-16">
            <img className="h-24" src={product.image} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{product.title}</span>
            <span className="text-sm">Size: {product.size}</span>
            <span className="text-sm">Color: {product.color}</span>
            <span className="text-pink-500 text-xs">
              Owner: {product.ownerName}
            </span>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg
            className="fill-current text-gray-600 w-3 cursor-pointer"
            viewBox="0 0 448 512"
            onClick={() => decrementQuantity(index)}
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
          <h3 className="mx-2 border text-center w-8">
            {product.quantityAvailable}
          </h3>
          <svg
            className="fill-current text-gray-600 w-3 cursor-pointer"
            viewBox="0 0 448 512"
            onClick={() => incrementQuantity(index)}
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          &#8377;{product.rentPrice}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          &#8377;{product.refundableAmount}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          &#8377;
          {(
            (product.rentPrice + product.refundableAmount) *
            product.quantityAvailable
          ).toFixed(2)}
        </span>
      </div>
    </>
  );
}
