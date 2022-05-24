import React from "react";
import { useProduct } from "../../Context/ProductContext";
import { AiFillStar } from "react-icons/ai";
function Product({ product, id }) {
  const { addItem, CartProducts } = useProduct();

  const handleAddToCart = () => {
    addItem(product, id);
  };
  return (
    <div className="relative top-16 mb-36 ">
      <div className="flex w-4/5">
        <div className="imageContent border-r-2 border-black justify-center items-center flex-[0.5]">
          <img
            src={product.image}
            alt=""
            className="w-full h-[30rem] object-contain"
          />
        </div>
        <div className="flex-[0.5] content px-10 pt-2 flex flex-col w-1/2 pr-5">
          <h2 className="font-bold text-2xl text-pink-500">
            {product.category}
          </h2>
          <h2 className="font-bold text-2xl">{product.title}</h2>
          {/* <span className="my-3">
            Product code: <span className="capitalize">{id}</span>
          </span> */}
          <h3 className="font-semibold my-3 text-pink-500">
            Owner Name: {product.ownerName}
          </h3>
          <p className="font-bold text-4xl text-[#C52424] my-3">
            Rent: &#8377; {product.rentPrice} / day
          </p>
          <p className="font-bold text-xl text-[#C52424] my-1">
            Security Deposit: &#8377; {product.refundableAmount}
          </p>
          <h5 className="text-gray-500">
            ( Will be return after succesfull return of the product. )
          </h5>
          <h3 className="font-semibold my-3">Colour: {product.color}</h3>
          <div className="startContent flex">
            <AiFillStar className="text-[#C52]" />
            <AiFillStar className="text-[#C52]" />
            <AiFillStar className="text-[#C52]" />
            <AiFillStar className="text-[#C52]" />
            <AiFillStar className="text-[#C52]" />
          </div>
          <p className="text-sm my-2">{product.description}</p>
          <label htmlFor="size" className="mt-3">
            Select Size:
          </label>
          <select name="size" id="size" className="flex border-2">
            <option value="large">L</option>
            <option value="small">S</option>
            <option value="medium">M</option>
          </select>
          {CartProducts.some((cartProduct) => cartProduct.id === id) ? (
            <button className="w-4/5 m-auto bg-pink-500 text-white my-10 p-2">
              Added to Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-4/5 m-auto bg-pink-500 text-white my-10 p-2"
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
