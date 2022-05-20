import React, { useState } from "react";
import Card from "./Card";
import EmptyCart from "./EmptyCart";
import Summary from "./Summary";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";

export default function Cart() {
  const {
    CartProducts,
    totalPrice,
    totalRefundable,
    removeItem,
    incrementQuantity,
    decrementQuantity,
  } = useProduct();

  let cartedProducts =
    CartProducts.length > 0 ? (
      CartProducts.map((product, index) => {
        return (
          <Card
            index={index}
            product={product}
            removeItem={removeItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            key={index}
          />
        );
      })
    ) : (
      <EmptyCart />
    );

  return (
    <div className="bg-gray-100 h-[91vh]">
      <div className="container mx-auto w-[95%]">
        <div className="flex gap-3 ">
          {/* Cart Section Starts here */}
          <div className="w-3/4 bg-white px-10 py-5 mt-10 h-[35rem]">
            <div className="flex justify-between border-b pb-5">
              <h1 className="font-semibold text-2xl">Your Cart</h1>
              <h2 className="font-semibold text-2xl">
                Item Count: {CartProducts.length}
              </h2>
            </div>
            <div className="flex mt-5 mb-5 ">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Refundable Amount
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            <div className="h-[26rem] overflow-y-scroll">{cartedProducts}</div>
          </div>
          <Summary totalPrice={totalPrice} totalRefundable={totalRefundable} />
        </div>
        <Link
          to="/products"
          className="flex font-semibold text-pink-500 text-base mt-5"
        >
          <svg
            className="fill-current mr-2 text-pink-500 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
