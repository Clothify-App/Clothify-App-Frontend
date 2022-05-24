import React, { useContext, useState, useEffect } from "react";
const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}
const ProductProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalRefundable, setTotalRefundable] = useState(0);
  const [CartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const incrementQuantity = (index) => {
    let newCartProducts = [...CartProducts];
    newCartProducts[index].quantityAvailable++;
    let newtotalRefundable =
      totalRefundable + newCartProducts[index].refundableAmount;
    let newtotalPrice = totalPrice + newCartProducts[index].rentPrice;
    setTotalPrice(newtotalPrice);
    setTotalRefundable(newtotalRefundable);
    setCartProducts(newCartProducts);
  };

  const decrementQuantity = (index) => {
    let newCartProducts = [...CartProducts];
    if (newCartProducts[index].quantityAvailable === 1) {
      removeItem(index);
    } else {
      newCartProducts[index].quantityAvailable--;
      let newtotalRefundable =
        totalRefundable - newCartProducts[index].refundableAmount;
      let newtotalPrice = totalPrice - newCartProducts[index].rentPrice;
      setTotalPrice(newtotalPrice);
      setTotalRefundable(newtotalRefundable);
      setCartProducts(newCartProducts);
    }
  };

  const removeItem = (index) => {
    let newCartProducts = [...CartProducts];
    let newtotalPrice =
      totalPrice -
      newCartProducts[index].rentPrice *
        newCartProducts[index].quantityAvailable;
    let newtotalRefundable =
      totalRefundable -
      newCartProducts[index].refundableAmount *
        newCartProducts[index].quantityAvailable;
    newCartProducts.splice(index, 1);
    setTotalRefundable(newtotalRefundable);
    setTotalPrice(newtotalPrice);
    setCartProducts(newCartProducts);
  };

  const addItem = (product, id) => {
    let newCartProducts = [...CartProducts];
    let newProduct = {
      id: id,
      category: product.category,
      title: product.title,
      rentPrice: parseInt(product.rentPrice),
      description: product.description,
      color: product.color,
      forWhom: product.forWhom,
      sizesAvailable: product.sizesAvailable,
      tags: product.tags,
      refundableAmount: parseInt(product.refundableAmount),
      quantityAvailable: 1,
      ownerName: product.ownerName,
      image: product.image,
      rating: 3,
    };
    console.log(newProduct);
    newCartProducts.push(newProduct);
    let newtotalPrice = totalPrice + newProduct.rentPrice;
    let newtotalRefundable = totalRefundable + newProduct.refundableAmount;
    setTotalPrice(newtotalPrice);
    setTotalRefundable(newtotalRefundable);
    setCartProducts(newCartProducts);
  };

  const value = {
    CartProducts,
    totalPrice,
    totalRefundable,
    removeItem,
    addItem,
    incrementQuantity,
    loading,
    setLoading,
    decrementQuantity,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
