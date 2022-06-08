import React, { useContext, useState, useEffect } from "react";
const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}
const ProductProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [CartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartedProducts")) || []
  );
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalRefundable, setTotalRefundable] = useState(0);

  useEffect(() => {
    let newtotalPrice = totalPrice;
    let newtotalRefundable = totalRefundable;
    CartProducts.map((product) => {
      newtotalPrice += product.rentPrice;
      newtotalRefundable += product.refundableAmount;
    });
    setTotalPrice(newtotalPrice);
    setTotalRefundable(newtotalRefundable);
  }, []);

  // console.log(CartProducts);

  const filterableProduct = (product) => {
    if (filterOption.length == 0) {
      return true;
    }

    if (filterOption.includes(String(product.color).toLowerCase())) {
      return true;
    }

    for (let index = 0; index < product.tags.length; index++) {
      const tag = product.tags[index];
      if (filterOption.includes(String(tag).toLowerCase())) {
        return true;
      }
    }

    for (let index = 0; index < product.sizesAvailable.length; index++) {
      const size = product.sizesAvailable[index];
      if (filterOption.includes(String(size).toLowerCase())) {
        return true;
      }
    }

    return false;
  };

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
    localStorage.setItem("cartedProducts", JSON.stringify(newCartProducts));
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
    localStorage.setItem("cartedProducts", JSON.stringify(newCartProducts));
  };

  const value = {
    CartProducts,
    totalPrice,
    totalRefundable,
    search,
    setSearch,
    filterOption,
    setFilterOption,
    filterableProduct,
    setCartProducts,
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
