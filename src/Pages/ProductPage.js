import React, { useState, useEffect } from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import Product from "../components/Products/Product";
import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import Loader from "../components/Loader/Loader";
import axios from "axios";
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

export default function ProductPage() {
  const { loading, setLoading } = useProduct();

  let { id } = useParams();
  // console.log(id);

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const storeProducts = async () => {
      setLoading(true);
      let prodts = await getProducts();
      setProductList(prodts.data);
      setLoading(false);
    };
    storeProducts();
  }, []);

  let product = productList.map((product, index) => {
    if (product["id"] == id) {
      return <Product product={product} key={index} />;
    }
  });

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="h-[44rem]">
          <div className="absolute top-1/2 left-1/2">
            <Loader size={54} />
          </div>
        </div>
      ) : (
        product
      )}
      <Footer />
    </div>
  );
}
