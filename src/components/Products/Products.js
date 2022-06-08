import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { useProduct } from "../../Context/ProductContext";
import ProductsServices from "../../Services/products.services";
import Loader from "../Loader/Loader";
const PRODUCT_API = process.env.REACT_APP_PRODUCT_API;

const Products = () => {
  const { loading, setLoading, search, setSearch, filterableProduct } =
    useProduct();
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

  const isProductRelatable = (product) => {
    if (String(product.forWhom).toLowerCase() === search.toLowerCase()) {
      // console.log("detecting sex", product);
      return true;
    }

    if (product.tags.includes(search)) {
      return true;
    }

    if (product.color.toLowerCase() === search.toLowerCase()) {
      // console.log("detecting color or title", product);
      return true;
    }

    if (product.description.includes(search.toLowerCase())) return true;
    return false;
  };

  const [productDisplay, setProductDisplay] = useState(0);
  let products = productList.map((product, index) => {
    let filterIt = filterableProduct(product);
    if (search === "") {
      if (filterIt) {
        return (
          <ProductCard
            key={index}
            setProductDisplay={setProductDisplay}
            product={product}
          />
        );
      }
    } else {
      const searchable = isProductRelatable(product);
      if (searchable) {
        if (filterIt) {
          return (
            <ProductCard
              key={index}
              setProductDisplay={setProductDisplay}
              product={product}
            />
          );
        }
      }
    }
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
        <div className="w-5/6 grid grid-cols-5 relative overflow-y-scroll">
          {products}
          {/* {console.log(products)} */}
        </div>
      )}
    </div>
  );
};

export default Products;
