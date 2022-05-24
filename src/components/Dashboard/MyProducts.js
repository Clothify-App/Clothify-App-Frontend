import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductServices from "../../Services/products.services";
import ProductCardProfile from "./ProductCardProfile";
import { useAuth } from "../../Context/AuthContext";
function MyProducts() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getAddedProducts = async () => {
      let addedProducts = await ProductServices.getMyProducts(
        currentUser.email
      );
      addedProducts = addedProducts.docs;
      setProducts([]);
      addedProducts.map((product) => {
        setProducts((prevstate) => {
          return [...prevstate, product.data()];
        });
      });
    };
    getAddedProducts();
  }, []);

  // console.log("Hello");
  return (
    <div className="flex-[0.8] overflow-y-scroll h-screen px-1 scrollbar-hide">
      <div className="container border-2 p-2 flex justify-between items-center max-w-full bg-pink-600 sticky top-0 text-white ">
        <h1 className="font-bold text-2xl">My Products</h1>
      </div>
      {products.map((product) => (
        <>
          {/* {console.log(products)} */}
          <ProductCardProfile
            ownerName={product.ownerName}
            title={product.title}
            category={product.category}
            imageUrl={product.image}
            price={product.rentPrice}
            description={product.description}
          />
        </>
      ))}
    </div>
  );
}

export default MyProducts;
