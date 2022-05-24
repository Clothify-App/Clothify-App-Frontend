import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import ProductsServices from "../../Services/products.services";
import Loader from "../Loader/Loader";
import { useProduct } from "../../Context/ProductContext";
const PRODUCT_API = process.env.REACT_APP_PRODUCT_API;

const Products = () => {
  const { loading, setLoading } = useProduct();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storeProducts = async () => {
      setLoading(true);
      const prodts = await ProductsServices.getAllProducts();
      setProductList(
        prodts.docs.map((prodt) => ({ ...prodt.data(), id: prodt.id }))
      );
      setLoading(false);
    };
    storeProducts();
  }, [setLoading]);

  let products = productList.map((product, index) => {
    // console.log(product);
    return <ProductCard key={index} product={product} />;
  });
  return (
    <div className="flex h-[90vh] overflow-hidden bg-gray-100">
      <Filters />
      {loading ? (
        <div className="w-11/12">
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
