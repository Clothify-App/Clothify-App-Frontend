import React, { useRef, useState, useEffect } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { BsPrinter } from "react-icons/bs";
import Loader from "../Loader/Loader";
import Invoice from "../Payments/Invoice";
import productsServices from "../../Services/products.services";
import usersServices from "../../Services/users.services";
import ordersServices from "../../Services/orders.services";
import { useProduct } from "../../Context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ShowInvoice() {
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
    <div>
      <div className="flex flex-col items-center ">
        <div className="flex flex-row justify-between items-center w-full px-5 sticky top-0 z-30 bg-[#F5F5F5]">
          <Link
            to={"/dashboard"}
            className="flex flex-row items-center hover:underline "
          >
            {<AiOutlineArrowLeft />}Back To Home
          </Link>
          <ReactToPrint
            trigger={() => (
              <button className="flex items-center text-xl m-auto my-5 bg-white px-3 py-1 border-pink-400 border-2 rounded-xl">
                <span className="mx-2">Print</span>
                <BsPrinter />
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
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
    </div>
  );
}

export default ShowInvoice;
