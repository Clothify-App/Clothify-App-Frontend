import React, { useState, useEffect, useDeferredValue } from "react";
import OrderServices from "../../Services/orders.services";
import ShowInvoice from "./ShowInvoice";
import Loader from "../Loader/Loader";
import { useAuth } from "../../Context/AuthContext";
import Invoice from "../Payments/Invoice";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function OrderHistory() {
  const [loader, setLoader] = useState(true);
  const [orderProducts, setOrderProducts] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    const getAllorderProducts = async () => {
      let allOrderProducts = await OrderServices.getMyOrders(currentUser.email);
      allOrderProducts = allOrderProducts.docs;
      setOrderProducts([]);
      allOrderProducts.map((product) => {
        setOrderProducts((prevstate) => {
          return [...prevstate, product.data()];
        });
      });
      setLoader(false);
      //   console.log(orderProducts);
    };
    getAllorderProducts();
  }, []);

  const renderOrder = (
    id,
    order_date,
    Total_items,
    payment_status,
    Total_Price
  ) => {
    if (Total_items) {
      Total_items = JSON.parse(Total_items).reduce(
        (total, item_count) => total + item_count,
        0
      );
    }
    const returnDate = (timestamp) => {
      let date = new Date(timestamp);
      let dt =
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        date.getFullYear();
      return dt;
    };
    return (
      <tr className="h-[50px] border-b-2">
        <td>{id}</td>
        <td>{returnDate(order_date)}</td>
        <td>{Total_items}</td>
        <td>{payment_status}</td>
        <td>{Total_Price}</td>
        <td className="text-center font-bold">
          <button className="bg-orange-400 p-2 rounded-md hover:shadow-2xl">
            <Link to={"/orderHistory/" + id}>Show Invoice</Link>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="flex-[0.8] overflow-y-scroll h-full mt-1 scrollbar-hide mb-8 flex flex-col">
      <div className="topTitle flex-[0.2] py-3 rounded-md border-2 bg-[#F5F5F5] flex justify-center flex-col px-5 sticky top-0 z-30 bg-[#F5F5F5]">
        <p className="font-semibold">Order History</p>
      </div>
      <div className="historyTable w-full relative h-full pb-10">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b-2 h-[70px] text-left">
              <th>Order Number</th>
              <th>Order Date</th>
              <th>Total Items</th>
              <th>Status</th>
              <th className="">
                <div className="flex h-full w-full text-center">
                  Total Price ({<FaRupeeSign />})
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {!loader ? (
              orderProducts.map((products) =>
                renderOrder(
                  products.id,
                  products.payment_date,
                  products.quantityDetails,
                  products.payment_status,
                  products.amount
                )
              )
            ) : (
              <div className="flex justify-center items-center h-full w-full m-5">
                <Loader size={50} />
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
