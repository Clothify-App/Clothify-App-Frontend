import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import Modal from "./Modal";
import FinalProduct from "./FinalProduct";
import { useAuth } from "../../Context/AuthContext";
import ProductService from "../../Services/products.services";

function AddProduct({ setNavbarOption }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [forWhom, setForWhom] = useState("Male");
  const [sizes, setSizes] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [tag, setTag] = useState([]);
  const [deposit, setDeposit] = useState(0);
  const { currentUser } = useAuth();

  // This Function will play a role of pushing data to collection
  const handleSubmit = async (e) => {
    if (imgURL.length === 0) {
      window.alert(
        "You should need to provide a image. Select image and crop according to your need and press upload button then submit"
      );
      return;
    }

    let newProduct = {
      email: currentUser.email,
      category: category,
      title: title,
      rentPrice: price,
      description: description,
      color: color,
      forWhom: forWhom,
      sizesAvailable: sizes,
      tags: tag,
      refundableAmount: deposit,
      quantityAvailable: 1,
      ownerName: currentUser.displayName,
      image: imgURL,
      rating: 3,
    };

    console.log(newProduct);
    const ProductResponce = await ProductService.addProduct(newProduct);
    newProduct.uid = ProductResponce.id;
    let confirmProductResponce = await ProductService.updateProduct(
      ProductResponce.id,
      newProduct
    );
    console.log(confirmProductResponce);
    setNavbarOption(2);
  };

  const handleSize = (event) => {
    setSizes((prevState) => {
      if (prevState.indexOf(event.target.value) !== -1) {
        var index = prevState.indexOf(event.target.value);
        prevState.splice(index, 1);
        return prevState;
      } else {
        var state = [...prevState];
        state.push(event.target.value);
        return state;
      }
    });
  };
  function renderIem(param) {
    switch (param) {
      case 1:
        return (
          <ProductInfo
            title={setTitle}
            category={setCategory}
            description={setDescription}
            handleSize={handleSize}
            price={setPrice}
            tag={setTag}
            deposit={setDeposit}
            handleSubmit={handleSubmit}
            setToggle={setToggle}
            color={setColor}
            setForWhom={setForWhom}
            forWhom={forWhom}
          />
        );
        break;
      case 2:
        return (
          <Modal
            imgURL={imgURL}
            setimgURL={setimgURL}
            setToggle={setToggle}
            handleSubmit={handleSubmit}
          />
        );
        break;
      case 3:
        return (
          <FinalProduct
            title={title}
            category={category}
            description={description}
            imgURL={imgURL}
            price={price}
            sizes={sizes}
            tag={tag}
            deposit={deposit}
            color={color}
            forWhom={forWhom}
            setToggle={setToggle}
            handleSubmit={handleSubmit}
          />
        );
        break;
      default:
        return <h1>Hello Chetan</h1>;
    }
  }

  return (
    <div className="addProductContainer flex-[0.8] h-screen bg-white overflow-y-scroll overflow-x-hidden scrollbar-hide relative">
      <div className="grid place-items-center min-h-[60vh] my-[5rem]">
        <div className="innerContainer bg-white border-2 w-[90%] h-full flex flex-col p-2 flex-wrap">
          <div className="centerContainer h-full relative">
            {renderIem(toggle)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
