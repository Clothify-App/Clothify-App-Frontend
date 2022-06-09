import React, { useState, useEffect } from "react";
import { useProduct } from "../../Context/ProductContext";
const Filters = () => {
  const { filterOption, setFilterOption } = useProduct();
  const handleFilter = (event) => {
    setFilterOption((prevState) => {
      if (prevState.indexOf(event.target.value) !== -1) {
        const tempList = [...prevState];
        let index = tempList.indexOf(event.target.value);
        tempList.splice(index, 1);
        return tempList;
      } else {
        const tempList = [...prevState];
        tempList.push(event.target.value);
        return tempList;
      }
    });
  };

  useEffect(() => {
    console.log(filterOption);
  }, [filterOption]);

  return (
    <div className="w-2/12 border-r-4 h-full flex flex-col p-2 bg-white rounded-r-3xl  overflow-y-scroll my-auto  border-pink-500">
      <h3 className="text-2xl text-center m-2 border-b-2 border-pink-500">
        Filters
      </h3>
      <div className="categories mt-3">
        <h3 className="text-2xl pl-10">Categories</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              // checked="checked"
              name="casual wear"
              value="casual wear"
              onChange={handleFilter}
              id="casual wear"
            />
            <label htmlFor="casual wear" className="m-2">
              Casual
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="party wear"
              value="party wear"
              onChange={handleFilter}
              id="party wear"
            />
            <label htmlFor="party wear" className="m-2">
              Parties
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="wedding wear"
              id="wedding wear"
              value="wedding wear"
              onChange={handleFilter}
            />
            <label htmlFor="wedding wear" className="m-2">
              Weddings
            </label>
          </span>
        </ul>
      </div>
      <div className="Size mt-3">
        <h3 className="text-2xl pl-10">Size</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="s"
              id="s"
              value="s"
              onChange={handleFilter}
            />
            <label htmlFor="s" className="m-2">
              S
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="m"
              id="m"
              value="m"
              onChange={handleFilter}
            />
            <label htmlFor="m" className="m-2">
              M
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="l"
              id="l"
              value="l"
              onChange={handleFilter}
            />
            <label htmlFor="l" className="m-2">
              L
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="xl"
              id="xl"
              value="xl"
              onChange={handleFilter}
            />
            <label htmlFor="xl" className="m-2">
              XL
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="xxl"
              id="xxl"
              value="xxl"
              onChange={handleFilter}
            />
            <label htmlFor="xxl" className="m-2">
              XXL
            </label>
          </span>
        </ul>
      </div>
      <div className="Size mt-3">
        <h3 className="text-2xl pl-10">Colors</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="navy blue"
              id="navy blue"
              value="navy blue"
              onChange={handleFilter}
            />
            <label htmlFor="navy blue" className="flex mx-2 items-center gap-1">
              <span className="bg-blue-600 rounded-full w-4 h-4 block"></span>
              <h3> Navy Blue </h3>
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="pink"
              id="pink"
              value="pink"
              onChange={handleFilter}
            />
            <label htmlFor="pink" className="flex mx-2 items-center gap-1">
              <span className="bg-pink-500 rounded-full w-4 h-4 block"></span>
              <h3> Pink </h3>
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="black"
              id="black"
              value="black"
              onChange={handleFilter}
            />
            <label htmlFor="black" className="flex mx-2 items-center gap-1">
              <span className="bg-black rounded-full w-4 h-4 block"></span>
              <h3> Black </h3>
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="magenta"
              id="magenta"
              value="magenta"
              onChange={handleFilter}
            />
            <label htmlFor="magenta" className="flex mx-2 items-center gap-1">
              <span className="bg-red-900 rounded-full border-[1px] w-4 h-4 block"></span>
              <h3> Magenta </h3>
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="green"
              id="green"
              value="green"
              onChange={handleFilter}
            />
            <label htmlFor="green" className="flex mx-2 items-center gap-1">
              <span className="bg-green-500 rounded-full  w-4 h-4 block"></span>
              <h3> Green </h3>
            </label>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
