import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { BsPrinter } from "react-icons/bs";
import Invoice from "./Invoice";

export default function InvoicePage() {
  const componentRef = useRef();
  return (
    <div className="bg-gray-100 w-full">
      <Navbar />
      <div>
        <ReactToPrint
          trigger={() => (
            <button className="flex items-center text-xl m-auto my-5 bg-white px-3 py-1 border-pink-400 border-2 rounded-xl">
              <span className="mx-2">Print</span>
              <BsPrinter />
            </button>
          )}
          content={() => componentRef.current}
        />
        <Invoice ref={componentRef} />
      </div>
      <Footer></Footer>
    </div>
  );
}
