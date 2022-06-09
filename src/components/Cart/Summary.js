import axios from "axios";
import React, { useState } from "react";
import { useProduct } from "../../Context/ProductContext";
import { useAuth } from "../../Context/AuthContext";
import Loader from "../Loader/Loader";

export default function Summary({ totalPrice, totalRefundable, CartProducts }) {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const { userId, isLoggedIn, currentUser } = useAuth();
  const handlePayment = async () => {
    setPaymentLoading(true);
    try {
      const data = {
        checkoutData: CartProducts.map((product) => ({
          ...{ id: product.id, quantity: product.quantityAvailable },
        })),
        userEmail: currentUser.email,
      };
      await axios
        .post("http://localhost:80/checkout", data)
        .then((res) => res.data)
        .then((location) => {
          // console.log(location.url);
          window.location = location.url;
        });
    } catch (e) {
      console.log(e);
    }
    setPaymentLoading(false);
  };
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

        {!paymentLoading ? (
          <button
            disabled={
              isLoggedIn() ? (CartProducts.length > 0 ? false : true) : true
            }
            onClick={() => handlePayment()}
            className={
              isLoggedIn()
                ? CartProducts.length < 1
                  ? "bg-indigo-200 font-semibold  py-3 text-sm text-white uppercase w-full"
                  : "bg-indigo-500 font-semibold hover:shadow-md py-3 text-sm text-white uppercase w-full"
                : "bg-indigo-200 font-semibold  py-3 text-sm text-white uppercase w-full"
            }
          >
            <h3>Checkout</h3>
          </button>
        ) : (
          <button
            onClick={handlePayment}
            className="bg-indigo-500 font-semibold hover:shadow-md py-3 text-sm text-white uppercase w-full"
          >
            <span className="flex items-center justify-center gap-1">
              <Loader
                size={20}
                borderColor={"white"}
                borderTopColor={"transparent"}
              />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
