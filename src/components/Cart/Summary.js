import React from "react";

export default function Summary({ totalPrice, totalRefundable }) {
  return (
    <div id="summary" className="w-1/4 px-8 py-10 bg-white mt-10 h-[30rem]">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Total Rent Payable:
        </span>
        <span className="font-semibold text-sm">
          &#8377;{totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Total Refundable Amount:
        </span>
        <span className="font-semibold text-sm">
          &#8377;{totalRefundable.toFixed(2)}
        </span>
      </div>

      {/* <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
          <option>Standard shipping - $10.00</option>
        </select>
      </div> */}

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span className="text-xl">
            &#8377;{(totalPrice + totalRefundable).toFixed(2)}
          </span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}
