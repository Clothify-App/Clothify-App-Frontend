import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
const PRODUCT_API = process.env.REACT_APP_PRODUCT_API;

const getProducts = async () => {
  return axios
    .get(PRODUCT_API)
    .then((products) => {
      return products;
    })
    .catch((err) => {
      return err;
    });
};

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const storeProducts = async () => {
      let prodts = await getProducts();
      setProductList(prodts.data);
    };
    storeProducts();
  }, []);

  let products = productList.map((product, index) => {
    // console.log(product);
    return (
      <ProductCard
        title={product.title}
        price={product.price}
        rating={product.rating}
        image={product.image}
        id={product.id}
        category={product.category}
      />
    );
  });
  return (
    <div className="flex w-full h-[90vh] mt-16 overflow-y-hidden">
      <Filters />
      <div className="w-5/6 grid grid-cols-4 relative overflow-y-scroll">
        {products}
      </div>
    </div>
  );
};

export default Products;
