import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductEntry = ({ product, quantity }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{product.title}</p>
            <button className="flex items-center text-pink-500">
              Owner Details <RiArrowDropDownLine />
            </button>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          &#8377; {product.rentPrice}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          &#8377; {product.refundableAmount}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        &#8377; {(product.rentPrice + product.refundableAmount) * quantity}
      </td>
    </tr>
  );
};

export default ProductEntry;
