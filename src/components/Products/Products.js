import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Loader from "../Loader/Loader";
import { useProduct } from "../../Context/ProductContext";
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
  const { loading, setLoading } = useProduct();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storeProducts = async () => {
      setLoading(true);
      let prodts = await getProducts();
      setProductList(prodts.data);
      setLoading(false);
    };
    storeProducts();
  }, [setLoading]);

  let products = productList.map((product, index) => {
    // console.log(product);
    return (
      <ProductCard
        key={index}
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
    <div className="flex h-[90vh] overflow-hidden">
      <Filters />
      {loading ? (
        <div className="w-5/6">
          <div className="relative left-1/2 top-1/2">
            <Loader size={54} />
          </div>
        </div>
      ) : (
        <div className="w-5/6 grid grid-cols-4 relative overflow-y-scroll">
          {products}
        </div>
      )}
    </div>
  );
};

export default Products;
