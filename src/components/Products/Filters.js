import React from "react";

const Filters = () => {
  return (
    <div className="w-1/6 h-full flex flex-col border-r-2 border-pink-500">
      <h3 className="text-2xl text-center mt-16 font-semibold">Filter By</h3>
      <div className="categories mt-5">
        <h3 className="text-2xl pl-10">Categories</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              // checked="checked"
              name="men"
              id="men"
            />
            <label htmlFor="men" className="m-2">
              Men
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="kids"
              id="kids"
            />
            <label htmlFor="kids" className="m-2">
              Kids
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="women"
              id="women"
            />
            <label htmlFor="women" className="m-2">
              Women
            </label>
          </span>
        </ul>
      </div>
      <div className="Size mt-5">
        <h3 className="text-2xl pl-10">Size</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="s"
              id="s"
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
            />
            <label htmlFor="xxl" className="m-2">
              XXL
            </label>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
