import React, { useContext, useState, useEffect } from "react";
const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}
const ProductProvider = ({ children }) => {
  const cartProdts = [
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      refundableAmount: 20,
      ownerName: "Prathamesh Moharkar",
      quantity: 1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      refundableAmount: 20,
      ownerName: "Prathamesh Moharkar",
      quantity: 1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      refundableAmount: 20,
      quantity: 1,
      ownerName: "Prathamesh Moharkar",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];

  let initialTotalPrice = 0;
  let initialTotalRefundable = 0;
  cartProdts.map((product) => {
    initialTotalPrice += product.price;
    initialTotalRefundable += product.refundableAmount;
  });
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
  const [totalRefundable, setTotalRefundable] = useState(
    initialTotalRefundable
  );
  const [CartProducts, setCartProducts] = useState(cartProdts);
  const [loading, setLoading] = useState(true);

  const incrementQuantity = (index) => {
    let newCartProducts = [...CartProducts];
    newCartProducts[index].quantity++;
    let newtotalRefundable =
      totalRefundable + newCartProducts[index].refundableAmount;
    let newtotalPrice = totalPrice + newCartProducts[index].price;
    setTotalPrice(newtotalPrice);
    setTotalRefundable(newtotalRefundable);
    setCartProducts(newCartProducts);
  };

  const decrementQuantity = (index) => {
    let newCartProducts = [...CartProducts];
    if (newCartProducts[index].quantity === 1) {
      removeItem(index);
    } else {
      newCartProducts[index].quantity--;
      let newtotalRefundable =
        totalRefundable - newCartProducts[index].refundableAmount;
      let newtotalPrice = totalPrice - newCartProducts[index].price;
      setTotalPrice(newtotalPrice);
      setTotalRefundable(newtotalRefundable);
      setCartProducts(newCartProducts);
    }
  };

  const removeItem = (index) => {
    let newCartProducts = [...CartProducts];
    let newtotalPrice =
      totalPrice -
      newCartProducts[index].price * newCartProducts[index].quantity;
    let newtotalRefundable =
      totalRefundable -
      newCartProducts[index].refundableAmount * newCartProducts[index].quantity;
    newCartProducts.splice(index, 1);
    setTotalRefundable(newtotalRefundable);
    setTotalPrice(newtotalPrice);
    setCartProducts(newCartProducts);
  };

  const addItem = (product) => {
    let newCartProducts = [...CartProducts];
    let newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      refundableAmount: 20,
      quantity: 1,
      ownerName: "Prathamesh Moharkar",
      image: product.image,
      rating: product.rating,
    };
    newCartProducts.push(newProduct);
    let newtotalPrice = totalPrice + newProduct.price;
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
