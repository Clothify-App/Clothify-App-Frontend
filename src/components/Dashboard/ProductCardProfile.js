import React from "react";

// Currently We are fethcing from fake API so we need to render according to their attributes but soon we will change to our need

function ProductCardProfile({
  ownerName,
  title,
  category,
  imageUrl,
  price,
  description,
}) {
  return (
    <div className="bg-[#F5F5F5] rounded-md p-4 flex my-2">
      <div className="imageContent flex-[0.2] p-1 bg-white">
        <img
          src={imageUrl}
          alt="Product Image"
          className="h-[250px] w-[250px] object-contain"
        />
      </div>
      <div className="productDescription flex-[0.8] p-3">
        <div className="upperText flex justify-between items-center">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="font-bold text-3xl text-[#C52424] my-2">$ {price}</p>
        </div>
        <p className="mb-2">By {ownerName}</p>
        <p>
          <span className="font-bold mr-2">Category:</span>
          {category}
        </p>
        <p className="w-[80%] my-2">{description}</p>
        <div className="quantitySelection flex justify-start items-center">
          <label htmlFor="quantity" className="font-semibold mr-2">
            Quantity:
          </label>
          <select
            name="quantity"
            id="quantity"
            value="1"
            className="p-1 w-12 border-black border-1"
          >
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductCardProfile;
