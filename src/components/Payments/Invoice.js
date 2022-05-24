import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Invoice = React.forwardRef((props, ref) => {
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
      <div className="summary m-10 flex text-lg items-center justify-between">
        <div className="w-1/4">
          <h3 className="font-semibold">Billed To: </h3>
          <h3>Chetan Gamne</h3>
          <h3 className="font-semibold">Address:</h3>
          <p>Flat No.12, Rajivnagar, Nashik, Maharashtra</p>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold">Invoice No. </h3>
          <h3>#25452</h3>
          <h3 className="font-semibold">Date of Issue.</h3>
          <h3>01/03/2022</h3>
        </div>
        <div className="w-1/4">
          <h3>Invoice Total: </h3>
          <p className="text-3xl text-pink-500">&#8377; 3000</p>
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
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Boys Black & White Co-Ord Set
                          </p>
                          <button className="flex items-center text-pink-500">
                            Owner Details <RiArrowDropDownLine />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        &#8377; 200
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        &#8377; 200
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      &#8377; 400
                    </td>
                  </tr>
                </tbody>
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
            <h3>&#8377; 1000</h3>
          </span>
          <span className="flex gap-5 text-lg">
            <h3 className="w-44 text-pink-500">Refundable Amount: </h3>
            <h3>&#8377; 800</h3>
          </span>
          <hr className="h-[3px] my-5 bg-pink-500" />
          <span className="flex gap-5 text-lg">
            <h3 className="w-44 text-pink-500">Total Amount: </h3>
            <h3 className="text-2xl">&#8377; 800</h3>
          </span>
        </div>

        <div className="w-1/2 mx-5">
          {/* <hr className="h-[3px] my-5 bg-pink-500" /> */}
          <h3 className="text-xl border-b-2 border-b-pink-500 pb-3">
            Disclaimer:
          </h3>
          <p className="my-5">
            This Invoice is provided for user reference please save it for
            future reference. You can access it from your profile also anytime.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Invoice;
