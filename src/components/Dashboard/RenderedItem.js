import React from "react";
import Profile from "./Profile";
import MyProducts from "./MyProducts";
import OrderHistory from "./OrderHistory";
import AddProduct from "./AddProduct";

const RenderedItem = ({ navbarOption, setNavbarOption }) => {
  function renderItem(param) {
    switch (param) {
      case 1:
        return <Profile />;
        break;
      case 2:
        return <MyProducts />;
        break;
      case 3:
        return <OrderHistory />;
        break;
      case 4:
        return <AddProduct setNavbarOption={setNavbarOption} />;
      default:
        return <h1>Hello Chetan</h1>;
    }
  }
  return <div className="w-3/4 m-5 h-[90%] ">{renderItem(navbarOption)}</div>;
};

export default RenderedItem;
