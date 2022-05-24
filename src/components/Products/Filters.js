import React from "react";

const Filters = () => {
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
              name="casual"
              id="casual"
            />
            <label htmlFor="casual" className="m-2">
              Casual
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="party"
              id="party"
            />
            <label htmlFor="party" className="m-2">
              Parties
            </label>
          </span>
          <span>
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="wedding"
              id="wedding"
            />
            <label htmlFor="wedding" className="m-2">
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
      <div className="Size mt-3">
        <h3 className="text-2xl pl-10">Size</h3>
        <ul className="flex flex-col pl-16 m-2 text-lg">
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="navy blue"
              id="navy blue"
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
              name="white"
              id="white"
            />
            <label htmlFor="white" className="flex mx-2 items-center gap-1">
              <span className="bg-white border-black rounded-full border-[1px] w-4 h-4 block"></span>
              <h3> White </h3>
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4"
              name="green"
              id="green"
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
