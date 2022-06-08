import React from "react";
import ProductEntry from "./ProductEntry";
const Invoice = React.forwardRef(
  ({ buyer, quantityDetails, payment_date, amount, productsData, id }, ref) => {
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

    const getTotalRefundable = () => {
      let totalRefundable = 0;
      productsData.map((product, index) => {
        totalRefundable += product.refundableAmount * quantityDetails[index];
      });
      return totalRefundable;
    };

    const getTotalAmount = () => {
      let totalAmount = 0;
      productsData.map((product, index) => {
        totalAmount += product.rentPrice * quantityDetails[index];
      });
      return totalAmount;
    };

    let productEntries = productsData.map((product, index) => {
      return (
        <ProductEntry
          key={index}
          product={product}
          quantity={quantityDetails[index]}
        />
      );
    });
    return (
      <div
        ref={ref}
        id="invoice"
        className="print:w-[90%] print:shadow-none w-1/2  mx-auto bg-white shadow-md"
      >
        <div className="h-32 flex  relative top-5 items-center justify-between bg-pink-500 text-white">
          <span>
            <h3 className="text-xl px-2">Clothify</h3>
            <h3 className="text-5xl px-2">Invoice</h3>
          </span>
          <h5 className="capitalize text-lg mx-5 ">
            An online platform to rent your clothes.
          </h5>
        </div>
        <div className="summary my-10 mx-8 flex text-lg items-center justify-between">
          <div className="w-1/4">
            <h3 className="font-semibold">Billed To: </h3>
            <h3>{buyer.fullName}</h3>
            <h3 className="font-semibold">Address:</h3>
            <p>{buyer.address}</p>
          </div>
          <div className="w-1/4">
            <h3 className="font-semibold">Invoice ID. </h3>
            <h3>#{String(id).substring(0, 6).toUpperCase()}</h3>
            <h3 className="font-semibold">Date of Issue.</h3>
            <h3>{returnDate(payment_date)}</h3>
          </div>
          <div className="w-1/4">
            <h3>Invoice Total: </h3>
            <p className="text-3xl text-pink-500">&#8377;{amount}</p>
          </div>
        </div>
        <hr className="bg-pink-500 h-1 w-4/5 m-auto" />

        {/*Table Started*/}

        <div className="container mx-auto px-2 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr className="text-white">
                      <th className="px-5 py-3 border-b-2 border-pink-500 bg-pink-500 text-left text-xs font-semibold  uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-3 py-3 border-b-2 border-pink-500 bg-pink-500 text-left text-xs font-semibold  uppercase tracking-wider">
                        Rent Price
                      </th>
                      <th className="px-3 py-3 border-b-2 border-pink-500 bg-pink-500 text-left text-xs font-semibold  uppercase tracking-wider">
                        Refundable Price
                      </th>
                      <th className="px-3 py-3 border-b-2 border-pink-500 bg-pink-500 text-left text-xs font-semibold  uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-3 py-3 border-b-2 border-pink-500 bg-pink-500 text-left text-xs font-semibold  uppercase tracking-wider">
                        Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>{productEntries}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/*Table Ended*/}
        <div className="pb-10">
          <div className="float-right mx-10 ">
            <span className="flex gap-5 text-lg">
              <h3 className="w-44 text-pink-500">Rentable Amount: </h3>
              <h3>&#8377; {getTotalRefundable()}</h3>
            </span>
            <span className="flex gap-5 text-lg">
              <h3 className="w-44 text-pink-500">Refundable Amount: </h3>
              <h3>&#8377; {getTotalAmount()}</h3>
            </span>
            <hr className="h-[3px] my-5 bg-pink-500" />
            <span className="flex gap-5 text-lg">
              <h3 className="w-44 text-pink-500">Total Amount: </h3>
              <h3 className="text-2xl">
                &#8377; {getTotalAmount() + getTotalRefundable()}
              </h3>
            </span>
          </div>

          <div className="w-1/2 mx-5">
            {/* <hr className="h-[3px] my-5 bg-pink-500" /> */}
            <h3 className="text-xl border-b-2 border-b-pink-500 pb-3">
              Disclaimer:
            </h3>
            <p className="my-5">
              This Invoice is provided for user reference please save it for
              future reference. You can access it from your profile also
              anytime.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default Invoice;
