import React from "react";
function FinalProduct({
  title,
  category,
  description,
  imgURL,
  price,
  sizes,
  tag,
  deposit,
  color,
  forWhom,
  setToggle,
  handleSubmit,
}) {
  return (
    <div className="container h-full w-full">
      <div className="m-5 flex">
        <div className="imageContent flex-[0.5] ">
          <img
            src={imgURL}
            alt="product image"
            className="w-full h-1/2 object-contain"
          />
        </div>
        <div className="flex-[0.5] content px-10 pt-2 flex flex-col w-1/2 pr-5">
          <label htmlFor="" className="font-bold text-lg">
            Title:
          </label>
          <h2 className="ml-5">{title}</h2>
          <label htmlFor="" className="font-bold text-lg">
            Category:
          </label>
          <h6 className="my-1 ml-5">{category}</h6>
          <label htmlFor="" className="font-bold text-lg">
            Price:
          </label>
          <p className="font-bold text-4xl text-[#C52424] ml-5">$ {price}</p>
          <h3 className="font-semibold my-3">Color: {color}</h3>
          <label htmlFor="" className="font-bold text-lg">
            Description
          </label>
          <p className="text-sm ml-5">{description}</p>
          <label htmlFor="size" className="mt-3 font-bold text-lg">
            Available Sizes:
          </label>
          <div className="sizesData flex justify-evenly mr-3">
            {sizes.map((size) => (
              <p>{size}</p>
            ))}
          </div>
          <label htmlFor="tag" className="font-bold text-lg">
            Tag:
          </label>
          <div className="tag flex justify-evenly ml-5" id="tag">
            {tag.map((t) => (
              <p>{t}</p>
            ))}
          </div>
          <label htmlFor="deposits" className="font-bold text-lg">
            Deposits:
          </label>
          <p id="deposits" className="ml-5">
            {deposit}
          </p>
          <label htmlFor="color" className="font-bold text-lg">
            Color:
          </label>
          <p id="colore" className="ml-5">
            {color}
          </p>
          <label htmlFor="forWhom" className="font-bold text-lg">
            ForWhom:
          </label>
          <p id="forWhom" className="ml-5">
            {forWhom}
          </p>
        </div>
      </div>
      <div className="footer_Section absolute bottom-0 left-0 right-0 w-full">
        <div className="btns flex justify-between items-center">
          <button
            className="border-2 border-black px-5 rounded-md py-1 hover:shadow-lg"
            onClick={() => setToggle(2)}
          >
            Previous
          </button>
          <button
            className="border-2 border-black px-5 rounded-md py-1 hover:shadow-lg"
            onClick={() => handleSubmit()}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalProduct;
