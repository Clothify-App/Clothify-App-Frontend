import React, { useState, useEffect } from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import Product from "../components/Products/Product";
import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import Loader from "../components/Loader/Loader";
import axios from "axios";
import productsServices from "../Services/products.services";

export default function ProductPage() {
  const { loading, setLoading } = useProduct();

  let { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const storeProduct = async () => {
      setLoading(true);
      let prodt = await productsServices.getProduct(id);
      setProduct(prodt.data());
      setLoading(false);
    };
    storeProduct();
  }, []);

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
        <Product product={product} id={id} />
      )}
      <Footer />
    </div>
  );
}
