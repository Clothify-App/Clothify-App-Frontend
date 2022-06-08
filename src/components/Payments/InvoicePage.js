import React, { forwardRef, useEffect, useRef, useState } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { BsPrinter } from "react-icons/bs";
import Invoice from "./Invoice";
import Loader from "../Loader/Loader";
import ordersServices from "../../Services/orders.services";
import { useParams } from "react-router-dom";
import productsServices from "../../Services/products.services";
import usersServices from "../../Services/users.services";
import { useProduct } from "../../Context/ProductContext";
export default function InvoicePage() {
  const [loader, setLoader] = useState(true);
  const { setCartProducts } = useProduct();
  const componentRef = useRef();
  const { id } = useParams();
  const [amount, setAmount] = useState();
  const [productsData, setProductsData] = useState([]);
  const [payment_date, setPayment_date] = useState();
  const [buyer, setBuyer] = useState();
  const [quantityDetails, setQuantityDetails] = useState([]);
  useEffect(() => {
    const getOrderData = async () => {
      setCartProducts([]);
      localStorage.removeItem("cartedProducts");
      const orderData = await ordersServices.getOrder(id);
      let data = orderData.data();
      let prodts = await productsServices.getProductById(
        JSON.parse(data.productsData)
      );
      let newProductData = [];
      prodts.docs.map((pd) => {
        newProductData.push(pd.data());
      });
      let user = await usersServices.getUserByEmail(data.email);
      console.log(user.docs[0].data(), newProductData);
      setProductsData(newProductData);
      setBuyer(user.docs[0].data());
      setAmount(data.amount);
      setPayment_date(data.payment_date);
      setQuantityDetails(JSON.parse(data.quantityDetails));
      setLoader(false);
    };
    getOrderData();
  }, [amount]);
  return (
    <div className="bg-gray-100 w-full ">
      <Navbar />
      <div className="flex flex-col items-center ">
        <ReactToPrint
          trigger={() => (
            <button className="flex items-center text-xl m-auto my-5 bg-white px-3 py-1 border-pink-400 border-2 rounded-xl">
              <span className="mx-2">Print</span>
              <BsPrinter />
            </button>
          )}
          content={() => componentRef.current}
        />
        {!loader ? (
          <Invoice
            ref={componentRef}
            buyer={buyer}
            productsData={productsData}
            quantityDetails={quantityDetails}
            payment_date={payment_date}
            amount={amount}
            id={id}
          />
        ) : (
          <Loader size={50} />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
